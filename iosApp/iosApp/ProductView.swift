//
//  ProductView.swift
//  iosApp
//
//  Created by Zach Carter on 4/14/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import SwiftUI

struct ProductView: View {
    let product: ProductData
    let imageHeight: CGFloat

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            if let imageUrl = product.images.data.first?.url,
               let url = URL(string: imageUrl + "?height=\(Int(imageHeight))") {
                AsyncImage(url: url) { image in
                    image
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(height: imageHeight)
                        .clipped()
                        .cornerRadius(12)
                } placeholder: {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.gray.opacity(0.3))
                        .frame(height: imageHeight)
                        .overlay(ProgressView())
                }
            }

            Text(product.name)
                .font(.headline)
                .foregroundColor(.black)

        }
    }
}
