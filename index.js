const express = require("express");
const app = express();
const ip = require("ip")
const { Client, Environment } = require("square/legacy")
const crypto = require("crypto");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const ipAddress = ip.address();
const defaultClient = new Client({
    environment: process.env.ENVIRONMENT === "PRODUCTION" ? Environment.Production : Environment.Sandbox,
    accessToken: process.env.ACCESS_TOKEN,
});

const { paymentsApi, ordersApi, locationsApi, customersApi } = defaultClient;

app.post('/charge', async (request, response) => {
    const requestBody = request.body;
    console.log(JSON.stringify(requestBody, null, '\t'))
    try {
        const locationId = process.env.LOCATION_ID;
        const createOrderRequest = getOrderRequest(locationId, requestBody);
        const createOrderResponse = await ordersApi.createOrder(createOrderRequest);

        const createPaymentRequest = {
            idempotencyKey: crypto.randomBytes(12).toString('hex'),
            sourceId: requestBody.nonce,
            amountMoney: {
                ...createOrderResponse.result.order.totalMoney,
            },
            orderId: createOrderResponse.result.order.id,
            locationId,
        };

        const createPaymentResponse = await paymentsApi.createPayment(createPaymentRequest);
        console.log(createPaymentResponse.result.payment);

        response.status(200).json(JSON.parse(JSON.stringify(createPaymentResponse.result.payment, bigIntReplacer)));
    } catch(e) {
        console.log("[Error] Status: ", e);
        console.log("Messages: ", JSON.stringify(e.errors, null, 2))
        sendErrorMessage(e.errors, response);
    }
});

function getOrderRequest(locationId, requestBody){
    requestBody.lineItems.forEach((item) => {
        item.basePriceMoney.amount = Math.round(item.basePriceMoney.amount * 100);
    })

    return {
        idempotencyKey: crypto.randomBytes(12).toString("hex"),
        order: {
            locationId: locationId,
            quantity: requestBody.quantity,
            lineItems: requestBody.lineItems
        }
    }
}


function sendErrorMessage(errors, response){
    switch (errors[0].code) {
        case "UNAUTHORIZED":
            response.status(401).send({
                errorMessage: "Server Not Authorized. Please check your server permission."
            });
            break;
        case "GENERIC_DECLINE":
            response.status(400).send({
                errorMessage: "Card declined. Please re-enter card information."
            });
            break;
        case "CVV_FAILURE":
            response.status(400).send({
                errorMessage: "Invalid CVV. Please re-enter card information."
            });
            break;
        case "ADDRESS_VERIFICATION_FAILURE":
            response.status(400).send({
                errorMessage: "Invalid Postal Code. Please re-enter card information."
            });
            break;
        case "EXPIRATION_FAILURE":
            response.status(400).send({
                errorMessage: "Invalid expiration date. Please re-enter card information."
            });
            break;
        case "INSUFFICIENT_FUNDS":
            response.status(400).send({
                errorMessage: "Insufficient funds; Please try re-entering card details."
            });
            break;
        case "CARD_NOT_SUPPORTED":
            response.status(400).send({
                errorMessage: "	The card is not supported either in the geographic region or by the MCC; Please try re-entering card details."
            });
            break;
        case "PAYMENT_LIMIT_EXCEEDED":
            response.status(400).send({
                errorMessage: "Processing limit for this merchant; Please try re-entering card details."
            });
            break;
        case "TEMPORARY_ERROR":
            response.status(500).send({
                errorMessage: "Unknown temporary error; please try again;"
            });
            break;
        default:
            response.status(400).send({
                errorMessage: "Payment error. Please contact support if issue persists."
            });
            break;
    }
}

function bigIntReplacer(key, value) {
    // If value is a BigInt, convert it to a string
    if (typeof value === 'bigint') {
        return value.toString();
    }
    return value;
}

// Listen for requests (a.k.a CONSTANTLY RUNNING THE SERVER)
const listener = app.listen(process.env.port, function(){
    console.log("Your app is listening on port: " + listener.address().port);
    console.log(`Network access via: ${ipAddress}:${listener.address().port}!`);
});
