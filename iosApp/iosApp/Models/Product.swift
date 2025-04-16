// Product.swift
// iosApp
//
// Created by Zach Carter on 4/14/25.
// Copyright © 2025 orgName. All rights reserved.
//

import Foundation

struct ProductData: Codable {
    let id: String
    let siteProductId: String
    let visibility: String
    let name: String
    let shortDescription: String?
    let productType: String
    let taxable: Bool?
    let siteLink: String
    let inventory: InventoryData
    let price: PriceData
    let perOrderMax: Int?
    let badges: BadgeData
    let thumbnail: DataWrapper<ImageData>
    let images: DataWrapper<[ImageData]>
    let modifiers: DataWrapper<[ModifierData]>
    let categories: DataWrapper<[BasicCategoryData]>

    enum CodingKeys: String, CodingKey {
        case id
        case siteProductId = "site_product_id"
        case visibility
        case name
        case shortDescription = "short_description"
        case productType = "product_type"
        case taxable
        case siteLink = "site_link"
        case inventory
        case price
        case perOrderMax = "per_order_max"
        case badges
        case thumbnail
        case images
        case modifiers
        case categories
    }
}

struct InventoryData: Codable {
    let total: Int
    let lowest: Int?
    let enabled: Bool
    let allVariationsSoldOut: Bool
    let someVariationsSoldOut: Bool
    let allInventoryTotal: Int

    enum CodingKeys: String, CodingKey {
        case total
        case lowest
        case enabled
        case allVariationsSoldOut = "all_variations_sold_out"
        case someVariationsSoldOut = "some_variations_sold_out"
        case allInventoryTotal = "all_inventory_total"
    }
}

struct PriceData: Codable {
    let high: Float
    let highWithModifiers: Float
    let highFormatted: String
    let highSubunits: Int
    let low: Float
    let lowWithModifiers: Float
    let lowWithSubscriptions: Float
    let lowFormatted: String
    let lowSubunits: Int
    let regularHigh: Float
    let regularHighWithModifiers: Float
    let regularHighFormatted: String
    let regularHighSubunits: Int
    let regularLow: Float
    let regularLowWithModifiers: Float
    let regularLowFormatted: String
    let regularLowSubunits: Int

    enum CodingKeys: String, CodingKey {
        case high
        case highWithModifiers = "high_with_modifiers"
        case highFormatted = "high_formatted"
        case highSubunits = "high_subunits"
        case low
        case lowWithModifiers = "low_with_modifiers"
        case lowWithSubscriptions = "low_with_subscriptions"
        case lowFormatted = "low_formatted"
        case lowSubunits = "low_subunits"
        case regularHigh = "regular_high"
        case regularHighWithModifiers = "regular_high_with_modifiers"
        case regularHighFormatted = "regular_high_formatted"
        case regularHighSubunits = "regular_high_subunits"
        case regularLow = "regular_low"
        case regularLowWithModifiers = "regular_low_with_modifiers"
        case regularLowFormatted = "regular_low_formatted"
        case regularLowSubunits = "regular_low_subunits"
    }
}

struct BadgeData: Codable {
    let lowStock: Bool
    let outOfStock: Bool
    let onSale: Bool

    enum CodingKeys: String, CodingKey {
        case lowStock = "low_stock"
        case outOfStock = "out_of_stock"
        case onSale = "on_sale"
    }
}

struct ImageData: Codable {
    let id: String
    let ownerId: String
    let siteId: String
    let siteProductImageId: String
    let url: String
    let absoluteUrl: String
    let urls: [String: String]
    let width: Int
    let height: Int
    let format: String
    let createdAt: String
    let updatedAt: String
    let absoluteUrls: [String: String]

    enum CodingKeys: String, CodingKey {
        case id
        case ownerId = "owner_id"
        case siteId = "site_id"
        case siteProductImageId = "site_product_image_id"
        case url
        case absoluteUrl = "absolute_url"
        case urls
        case width
        case height
        case format
        case createdAt = "created_at"
        case updatedAt = "updated_at"
        case absoluteUrls = "absolute_urls"
    }
}

struct ModifierData: Codable {
    let id: String
    let siteProductId: String
    let name: String
    let minSelected: Int
    let maxSelected: Int
    let type: String
    let displayOrder: Int
    let visibleOnInvoice: Int
    let choices: [ChoiceData]

    enum CodingKeys: String, CodingKey {
        case id
        case siteProductId = "site_product_id"
        case name
        case minSelected = "min_selected"
        case maxSelected = "max_selected"
        case type
        case displayOrder = "display_order"
        case visibleOnInvoice = "visible_on_invoice"
        case choices
    }
}

struct ChoiceData: Codable {
    let id: String
    let name: String
    let price: Float
    let displayOrder: Int
    let soldOut: Bool

    enum CodingKeys: String, CodingKey {
        case id
        case name
        case price
        case displayOrder = "display_order"
        case soldOut = "sold_out"
    }
}

struct BasicCategoryData: Codable {
    let siteCategoryId: String
    let name: String

    enum CodingKeys: String, CodingKey {
        case siteCategoryId = "site_category_id"
        case name
    }
}

struct DataWrapper<T: Codable>: Codable {
    let data: T
}
