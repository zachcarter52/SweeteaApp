//
//  SquareRequest.swift
//  iosApp
//
//  Created by Zach Carter on 4/12/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation


class SquareService {
    private let baseURL = "https://cdn5.editmysite.com/app/store/api/v28/editor/users/(PrivateConstant.SQUARE_USER_ID)/sites/(PrivateConstant.568173742194551081)/"
    
    // Fetch Categories
    func getCategories() async throws -> SquareApiResponse<CategoryData> {
        let url = URL(string: baseURL + "categories?per_page=50&include=images")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode(SquareApiResponse<CategoryData>.self, from: data)
    }
    
    // Fetch Products
    func getProducts() async throws -> SquareApiResponse<ProductData> {
        let url = URL(string: baseURL + "products?page=1&per_page=200&include=images,options,modifiers,categories,discounts,media_files")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode(SquareApiResponse<ProductData>.self, from: data)
    }
    
    // Fetch Locations
    func getLocations() async throws -> SquareApiResponse<LocationData> {
        let url = URL(string: baseURL + "store-locations/")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode(SquareApiResponse<LocationData>.self, from: data)
    }
}


