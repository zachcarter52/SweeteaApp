//
//  ProductViewModel.swift
//  iosApp
//
//  Created by Zach Carter on 4/13/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import SwiftUI

@MainActor
class ProductViewModel: ObservableObject {
    @Published var products: [ProductData] = []
    let service = SquareService()

    func loadProducts() async {
        do {
            let result = try await service.getProducts()
            self.products = result.data
        } catch {
            print("Failed to load products: \(error)")
        }
    }

    // This should be changed to use the actual Featured Items 
    var featuredItems: [ProductData] {
        return products.prefix(4).map { $0 } 
    }
}
