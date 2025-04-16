//
//  Category.swift
//  iosApp
//
//  Created by Zach Carter on 4/14/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation

struct CategoryData: Codable {
    let id: String
    let siteCategoryId: String
    let name: String
    let rootParentCategoryId: Int
    let seoPageDescription: String
    let seoPageTitle: String
    let siteLink: String
    let permalink: String
    let published: Bool
    let parent: String
    let isCustomTimes: Bool
    let depth: Int
    let updatedDate: String
    let hideFromParent: Bool
    let pageLayout: String
    let showSubCategories: Bool
    let productCount: ProductCountData
    let images: DataContainer<[CategoryImage]>
    let availability: AvailabilityData

    enum CodingKeys: String, CodingKey {
        case id
        case siteCategoryId = "site_category_id"
        case name
        case rootParentCategoryId = "root_parent_category_id"
        case seoPageDescription = "seo_page_description"
        case seoPageTitle = "seo_page_title"
        case siteLink = "site_link"
        case permalink
        case published
        case parent
        case isCustomTimes = "is_custom_times"
        case depth
        case updatedDate = "updated_date"
        case hideFromParent = "hide_from_parent"
        case pageLayout = "page_layout"
        case showSubCategories = "show_sub_categories"
        case productCount = "product_count"
        case images
        case availability
    }
}

struct ProductCountData: Codable {
    let total: Int
    let visible: Int
}

struct DataContainer<T: Codable>: Codable {
    let data: T
}

struct CategoryImage: Codable {
    let id: String
    let path: String
    let width: Int
    let height: Int
    let url: String
    let absoluteUrl: String
    let urls: [String: String]

    enum CodingKeys: String, CodingKey {
        case id, path, width, height, url
        case absoluteUrl = "absolute_url"
        case urls
    }
}


struct AvailabilityData: Codable {
    let delivery: Availability
    let pickup: Availability
    let dineIn: Availability
    let shipping: Bool

    enum CodingKeys: String, CodingKey {
        case delivery, pickup
        case dineIn = "dine_in"
        case shipping
    }
}

struct Availability: Codable {
    let hours: [Int]
    let rootHours: [Int]
    let shouldDisplayNow: Bool
    let isCustomTimes: Bool

    enum CodingKeys: String, CodingKey {
        case hours
        case rootHours = "root_hours"
        case shouldDisplayNow = "should_display_now"
        case isCustomTimes = "is_custom_times"
    }
}
