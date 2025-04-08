"use strict";
exports.__esModule = true;
exports.BookingsApi = void 0;
var tslib_1 = require("tslib");
var bulkRetrieveBookingsRequest_1 = require("../models/bulkRetrieveBookingsRequest");
var bulkRetrieveBookingsResponse_1 = require("../models/bulkRetrieveBookingsResponse");
var bulkRetrieveTeamMemberBookingProfilesRequest_1 = require("../models/bulkRetrieveTeamMemberBookingProfilesRequest");
var bulkRetrieveTeamMemberBookingProfilesResponse_1 = require("../models/bulkRetrieveTeamMemberBookingProfilesResponse");
var cancelBookingRequest_1 = require("../models/cancelBookingRequest");
var cancelBookingResponse_1 = require("../models/cancelBookingResponse");
var createBookingRequest_1 = require("../models/createBookingRequest");
var createBookingResponse_1 = require("../models/createBookingResponse");
var listBookingsResponse_1 = require("../models/listBookingsResponse");
var listLocationBookingProfilesResponse_1 = require("../models/listLocationBookingProfilesResponse");
var listTeamMemberBookingProfilesResponse_1 = require("../models/listTeamMemberBookingProfilesResponse");
var retrieveBookingResponse_1 = require("../models/retrieveBookingResponse");
var retrieveBusinessBookingProfileResponse_1 = require("../models/retrieveBusinessBookingProfileResponse");
var retrieveLocationBookingProfileResponse_1 = require("../models/retrieveLocationBookingProfileResponse");
var retrieveTeamMemberBookingProfileResponse_1 = require("../models/retrieveTeamMemberBookingProfileResponse");
var searchAvailabilityRequest_1 = require("../models/searchAvailabilityRequest");
var searchAvailabilityResponse_1 = require("../models/searchAvailabilityResponse");
var updateBookingRequest_1 = require("../models/updateBookingRequest");
var updateBookingResponse_1 = require("../models/updateBookingResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var BookingsApi = /** @class */ (function (_super) {
    tslib_1.__extends(BookingsApi, _super);
    function BookingsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieve a collection of bookings.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param limit          The maximum number of results per page to return in a paged response.
     * @param cursor         The pagination cursor from the preceding response to return the next page of the
     *                                 results. Do not set this when retrieving the first page of the results.
     * @param customerId     The [customer](entity:Customer) for whom to retrieve bookings. If this is not set,
     *                                 bookings for all customers are retrieved.
     * @param teamMemberId   The team member for whom to retrieve bookings. If this is not set, bookings of
     *                                 all members are retrieved.
     * @param locationId     The location for which to retrieve bookings. If this is not set, all locations'
     *                                 bookings are retrieved.
     * @param startAtMin     The RFC 3339 timestamp specifying the earliest of the start time. If this is not
     *                                 set, the current time is used.
     * @param startAtMax     The RFC 3339 timestamp specifying the latest of the start time. If this is not
     *                                 set, the time of 31 days after `start_at_min` is used.
     * @return Response from the API call
     */
    BookingsApi.prototype.listBookings = function (limit, cursor, customerId, teamMemberId, locationId, startAtMin, startAtMax, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/bookings');
                mapped = req.prepareArgs({
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    customerId: [customerId, (0, schema_1.optional)((0, schema_1.string)())],
                    teamMemberId: [teamMemberId, (0, schema_1.optional)((0, schema_1.string)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    startAtMin: [startAtMin, (0, schema_1.optional)((0, schema_1.string)())],
                    startAtMax: [startAtMax, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('customer_id', mapped.customerId);
                req.query('team_member_id', mapped.teamMemberId);
                req.query('location_id', mapped.locationId);
                req.query('start_at_min', mapped.startAtMin);
                req.query('start_at_max', mapped.startAtMax);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listBookingsResponse_1.listBookingsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a booking.
     *
     * The required input must include the following:
     * - `Booking.location_id`
     * - `Booking.start_at`
     * - `Booking.AppointmentSegment.team_member_id`
     * - `Booking.AppointmentSegment.service_variation_id`
     * - `Booking.AppointmentSegment.service_variation_version`
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    BookingsApi.prototype.createBooking = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings');
                mapped = req.prepareArgs({
                    body: [body, createBookingRequest_1.createBookingRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createBookingResponse_1.createBookingResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for availabilities for booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    BookingsApi.prototype.searchAvailability = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings/availability/search');
                mapped = req.prepareArgs({
                    body: [body, searchAvailabilityRequest_1.searchAvailabilityRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchAvailabilityResponse_1.searchAvailabilityResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Bulk-Retrieves a list of bookings by booking IDs.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    BookingsApi.prototype.bulkRetrieveBookings = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings/bulk-retrieve');
                mapped = req.prepareArgs({
                    body: [body, bulkRetrieveBookingsRequest_1.bulkRetrieveBookingsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkRetrieveBookingsResponse_1.bulkRetrieveBookingsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a seller's booking profile.
     *
     * @return Response from the API call
     */
    BookingsApi.prototype.retrieveBusinessBookingProfile = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/bookings/business-booking-profile');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveBusinessBookingProfileResponse_1.retrieveBusinessBookingProfileResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists location booking profiles of a seller.
     *
     * @param limit  The maximum number of results to return in a paged response.
     * @param cursor The pagination cursor from the preceding response to return the next page of the results.
     *                         Do not set this when retrieving the first page of the results.
     * @return Response from the API call
     */
    BookingsApi.prototype.listLocationBookingProfiles = function (limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/bookings/location-booking-profiles');
                mapped = req.prepareArgs({
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listLocationBookingProfilesResponse_1.listLocationBookingProfilesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a seller's location booking profile.
     *
     * @param locationId  The ID of the location to retrieve the booking profile.
     * @return Response from the API call
     */
    BookingsApi.prototype.retrieveLocationBookingProfile = function (locationId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ locationId: [locationId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/bookings/location-booking-profiles/", ""], ["/v2/bookings/location-booking-profiles/", ""])), mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLocationBookingProfileResponse_1.retrieveLocationBookingProfileResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists booking profiles for team members.
     *
     * @param bookableOnly  Indicates whether to include only bookable team members in the returned result
     *                                 (`true`) or not (`false`).
     * @param limit         The maximum number of results to return in a paged response.
     * @param cursor        The pagination cursor from the preceding response to return the next page of the
     *                                 results. Do not set this when retrieving the first page of the results.
     * @param locationId    Indicates whether to include only team members enabled at the given location in
     *                                 the returned result.
     * @return Response from the API call
     */
    BookingsApi.prototype.listTeamMemberBookingProfiles = function (bookableOnly, limit, cursor, locationId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/bookings/team-member-booking-profiles');
                mapped = req.prepareArgs({
                    bookableOnly: [bookableOnly, (0, schema_1.optional)((0, schema_1.boolean)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('bookable_only', mapped.bookableOnly);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('location_id', mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listTeamMemberBookingProfilesResponse_1.listTeamMemberBookingProfilesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves one or more team members' booking profiles.
     *
     * @param body         An object containing the fields to
     *                                                                            POST for the request.  See the
     *                                                                            corresponding object definition for
     *                                                                            field details.
     * @return Response from the API call
     */
    BookingsApi.prototype.bulkRetrieveTeamMemberBookingProfiles = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings/team-member-booking-profiles/bulk-retrieve');
                mapped = req.prepareArgs({
                    body: [body, bulkRetrieveTeamMemberBookingProfilesRequest_1.bulkRetrieveTeamMemberBookingProfilesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkRetrieveTeamMemberBookingProfilesResponse_1.bulkRetrieveTeamMemberBookingProfilesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a team member's booking profile.
     *
     * @param teamMemberId   The ID of the team member to retrieve.
     * @return Response from the API call
     */
    BookingsApi.prototype.retrieveTeamMemberBookingProfile = function (teamMemberId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ teamMemberId: [teamMemberId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/bookings/team-member-booking-profiles/", ""], ["/v2/bookings/team-member-booking-profiles/", ""])), mapped.teamMemberId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveTeamMemberBookingProfileResponse_1.retrieveTeamMemberBookingProfileResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param bookingId  The ID of the [Booking](entity:Booking) object representing the to-be-retrieved
     *                             booking.
     * @return Response from the API call
     */
    BookingsApi.prototype.retrieveBooking = function (bookingId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ bookingId: [bookingId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/bookings/", ""], ["/v2/bookings/", ""])), mapped.bookingId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveBookingResponse_1.retrieveBookingResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId    The ID of the [Booking](entity:Booking) object representing
     *                                                    the to-be-updated booking.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    BookingsApi.prototype.updateBooking = function (bookingId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    bookingId: [bookingId, (0, schema_1.string)()],
                    body: [body, updateBookingRequest_1.updateBookingRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/bookings/", ""], ["/v2/bookings/", ""])), mapped.bookingId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateBookingResponse_1.updateBookingResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels an existing booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId    The ID of the [Booking](entity:Booking) object representing
     *                                                    the to-be-cancelled booking.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    BookingsApi.prototype.cancelBooking = function (bookingId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    bookingId: [bookingId, (0, schema_1.string)()],
                    body: [body, cancelBookingRequest_1.cancelBookingRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/bookings/", "/cancel"], ["/v2/bookings/", "/cancel"])), mapped.bookingId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelBookingResponse_1.cancelBookingResponseSchema, requestOptions)];
            });
        });
    };
    return BookingsApi;
}(baseApi_1.BaseApi));
exports.BookingsApi = BookingsApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=bookingsApi.js.map