//
//  SquareApiResponse.swift
//  iosApp
//
//  Created by Zach Carter on 4/14/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation

struct SquareApiResponse<T: Codable>: Codable {
    let data: [T]
    let pagination: PaginationData?
}

struct PaginationData: Codable {
    let nextPage: String?
    let previousPage: String?
    
    enum CodingKeys: String, CodingKey {
        case nextPage = "next_page"
        case previousPage = "previous_page"
    }
}
