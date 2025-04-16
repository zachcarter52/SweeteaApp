//
//  CategoryViewModel.swift
//  iosApp
//
//  Created by Zach Carter on 4/14/25.
//  Copyright © 2025 orgName. All rights reserved.
//
import SwiftUI
@MainActor
class CategoryViewModel: ObservableObject {
    @Published var categories: [CategoryData] = []
    let service = SquareService()

    func loadCategories() async {
        do {
            let result = try await service.getCategories()
            self.categories = result.data
        } catch {
            print("Failed to load categories: \(error)")
        }
    }
}
