//
//  Location.swift
//  iosApp
//
//  Created by Zach Carter on 4/14/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation

struct LocationData: Codable {
    let id: String
    let nickname: String
    let pickupHours: WeeklyHours
    let orderPrepTime: Int
    let schedulePickupEnabled: Bool
    let pickupInstructions: String
    let squareBusinessHours: String
    let pickupOrderSubtotalMinimum: Int
    let serviceFee: Float
    let serviceFeeFormatted: String
    let pickupEnabled: Bool
    let address: DataContainer<LocationAddressData>

    enum CodingKeys: String, CodingKey {
        case id
        case nickname
        case pickupHours = "pickup_hours"
        case orderPrepTime = "order_prep_time"
        case schedulePickupEnabled = "schedule_pickup_enabled"
        case pickupInstructions = "pickup_instructions"
        case squareBusinessHours = "square_business_hours"
        case pickupOrderSubtotalMinimum = "pickup_order_subtotal_minimum"
        case serviceFee = "service_fee"
        case serviceFeeFormatted = "service_fee_formatted"
        case pickupEnabled = "pickup_enabled"
        case address
    }
}

struct WeeklyHours: Codable {
    let SUN: [OpenClose]
    let MON: [OpenClose]
    let TUE: [OpenClose]
    let WED: [OpenClose]
    let THU: [OpenClose]
    let FRI: [OpenClose]
    let SAT: [OpenClose]
}


struct OpenClose: Codable {
    let open: String
    let close: String
}

struct LocationAddressData: Codable {
    let id: String
    let deleted: Bool
    let storeAddressId: Int
    let isShippable: Bool
    let isPrimary: Bool
    let isValid: Bool
    let businessName: String
    let street: String
    let street2: String
    let city: String
    let phone: String
    let email: String
    let latitude: Float
    let longitude: Float

    enum CodingKeys: String, CodingKey {
        case id
        case deleted
        case storeAddressId = "store_address_id"
        case isShippable = "is_shippable"
        case isPrimary = "is_primary"
        case isValid = "is_valid"
        case businessName = "business_name"
        case street
        case street2
        case city
        case phone
        case email
        case latitude
        case longitude
    }
}
