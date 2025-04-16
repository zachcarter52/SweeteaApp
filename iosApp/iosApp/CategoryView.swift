//
//  CategoryView.swift
//  iosApp
//
//  Created by Zach Carter on 4/14/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import SwiftUI

struct CategoriesView: View {
    @ObservedObject var viewModel: CategoryViewModel
    @ObservedObject var productViewModel: ProductViewModel
    let imageHeight: CGFloat

    var body: some View {
        VStack(alignment: .leading) {
            Text("Categories")
                .font(.title2)
                .fontWeight(.semibold)
                .padding(.bottom, 8)

            ForEach(viewModel.categories, id: \.id) { category in
                NavigationLink(destination: CategoryDetailView(
                    category: category,
                    allProducts: productViewModel.products,
                    imageHeight: imageHeight
                )) {
                    HStack {
                        if let imageUrl = category.images.data.first?.url,
                           let url = URL(string: imageUrl) {
                            AsyncImage(url: url) { image in
                                image
                                    .resizable()
                                    .scaledToFill()
                                    .frame(width: 60, height: 60)
                                    .cornerRadius(12)
                            } placeholder: {
                                RoundedRectangle(cornerRadius: 12)
                                    .fill(Color.gray.opacity(0.3))
                                    .frame(width: 60, height: 60)
                            }
                        }

                        Text(category.name)
                            .font(.headline)
                            .foregroundColor(.primary)

                        Spacer()
                        Image(systemName: "chevron.right")
                            .foregroundColor(.gray)
                    }
                    .padding(.vertical, 8)
                }
            }
        }
    }
}
