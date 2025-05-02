//
//  CategoryDetailView.swift
//  iosApp
//
//  Created by Zach Carter on 4/15/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import SwiftUI

struct CategoryDetailView: View {
    let category: CategoryData
    let allProducts: [ProductData]
    let imageHeight: CGFloat

    var filteredProducts: [ProductData] {
        allProducts.filter { product in
            product.categories.data.contains(where: { basicCategory in
                basicCategory.siteCategoryId == category.siteCategoryId
            })
        }
    }

    var body: some View {
        ZStack {
            Color.white.ignoresSafeArea()

            ScrollView {
                VStack(alignment: .leading, spacing: 0) {

                    // Category Header
                    VStack(alignment: .leading, spacing: 8) {
                        Text(category.name)
                            .font(.headline)
                            .fontWeight(.bold)
                            .foregroundColor(.black)
                            .padding(.vertical, 12)
                            .padding(.horizontal, 16)
                            .cornerRadius(10)
                            .shadow(radius: 5)

                        if filteredProducts.isEmpty {
                            Text("No products available in this category.")
                                .foregroundColor(.gray)
                                .padding()
                        }
                    }
                    .padding()

                    // Product List with Dividers
                    ForEach(filteredProducts.indices, id: \.self) { index in
                        ProductItemView(product: filteredProducts[index], imageHeight: imageHeight)
                            .padding(.horizontal)

                        if index != filteredProducts.count - 1 {
                            Divider()
                                .padding(.leading, imageHeight + 16)
                        }
                    }
                }
                .padding(.top, 16)
            }
        }
        .navigationTitle(category.name)
        .navigationBarTitleDisplayMode(.inline)
    }
}


struct ProductItemView: View {
    let product: ProductData
    let imageHeight: CGFloat

    var body: some View {
        NavigationLink(destination: ProductDetailView(product: product)) {
            HStack(alignment: .top, spacing: 16) {
                // Image section
                AsyncImage(url: URL(string: product.thumbnail.data.url)) { image in
                    image
                        .resizable()
                        .scaledToFill()
                        .frame(width: imageHeight, height: imageHeight)
                        .cornerRadius(10)
                } placeholder: {
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color.gray.opacity(0.3))
                        .frame(width: imageHeight, height: imageHeight)
                }

                // Product info section
                VStack(alignment: .leading, spacing: 8) {
                    Text(product.name)
                        .font(.headline)
                        .foregroundColor(.black)
                        .lineLimit(2)
                        .multilineTextAlignment(.leading)

                    Text(product.price.lowFormatted)
                        .font(.subheadline)
                        .foregroundColor(.customBlue)
                }

                Spacer()
            }
            .padding(.vertical, 12)
        }
        .buttonStyle(PlainButtonStyle()) 
    }
}
