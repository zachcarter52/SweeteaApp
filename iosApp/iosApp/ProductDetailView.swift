//
//  ProductDetailView.swift
//  iosApp
//
//  Created by Zach Carter on 4/15/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import SwiftUI

struct ProductDetailView: View {
    let product: ProductData
    @State private var expandedModifiers: Set<String> = []
    @State private var selectedChoices: [String: Set<String>] = [:] 

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                
                // Product image
                if let imageUrl = product.images.data.first?.url,
                   let url = URL(string: imageUrl) {
                    AsyncImage(url: url) { image in
                        image
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .cornerRadius(16)
                            .frame(maxWidth: .infinity)
                    } placeholder: {
                        RoundedRectangle(cornerRadius: 16)
                            
                            .frame(height: 200)
                            .overlay(ProgressView())
                    }
                }

                // Product name
                Text(product.name)
                    .font(.title)
                    .bold()
                    .padding(.top)

                // Price
                Text(product.price.lowFormatted)
                    .font(.title3)
                    .foregroundColor(.customBlue)

                Divider()

                // Modifiers section
                if !product.modifiers.data.isEmpty {
                    Text("Customization Options")
                        .font(.headline)

                    ForEach(product.modifiers.data, id: \.id) { modifier in
                        DisclosureGroup(
                            isExpanded: Binding(
                                get: { expandedModifiers.contains(modifier.id) },
                                set: { isExpanded in
                                    if isExpanded {
                                        expandedModifiers.insert(modifier.id)
                                    } else {
                                        expandedModifiers.remove(modifier.id)
                                    }
                                }
                            ),
                            content: {
                                VStack(alignment: .leading, spacing: 8) {
                                    ForEach(modifier.choices, id: \.id) { choice in
                                        Toggle(isOn: Binding(
                                            get: {
                                                selectedChoices[modifier.id, default: []].contains(choice.id)
                                            },
                                            set: { isSelected in
                                                if isSelected {
                                                    selectedChoices[modifier.id, default: []].insert(choice.id)
                                                } else {
                                                    selectedChoices[modifier.id, default: []].remove(choice.id)
                                                }
                                            }
                                        )) {
                                            HStack {
                                                Text(choice.name)
                                                Spacer()
                                                Text(String(format: "$%.2f", choice.price))
                                                    .foregroundColor(.gray)
                                            }
                                        }
                                        .toggleStyle(CheckboxToggleStyle())
                                    }
                                }
                                .padding(.top, 4)
                            },
                            label: {
                                Text(modifier.name)
                                    .font(.subheadline)
                                    .fontWeight(.medium)
                            }
                        )
                        .padding(.vertical, 4)
                    }
                }

                Spacer()
            }
            .padding()
        }
        .navigationTitle("Customize")
        .navigationBarTitleDisplayMode(.inline)
    }
}
struct CheckboxToggleStyle: ToggleStyle {
    func makeBody(configuration: Configuration) -> some View {
        Button(action: { configuration.isOn.toggle() }) {
            HStack {
                Image(systemName: configuration.isOn ? "checkmark.square.fill" : "square")
                    .foregroundColor(configuration.isOn ? .accentColor : .gray)
                configuration.label
            }
        }
        .buttonStyle(PlainButtonStyle())
    }
}
