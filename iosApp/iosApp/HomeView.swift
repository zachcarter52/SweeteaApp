
//
//  HomeView.swift
//  iosApp
//
//  Created by Zach Carter on 3/7/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    Text("Hi, <user_name>")
                        .font(.title)
                        .fontWeight(.bold)
                        .foregroundColor(Color.black)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding()
                    Spacer()
                }
                
                Image("sweetealogo_homepage")
                    .resizable()
                    .scaledToFit()
        
                
                Text("Featured Menu Items")
                    .foregroundColor(Color.black)
                    .padding(.top, 5)
                    .padding(.bottom, 2)
                
                Image("featured_items")
                    .resizable()
                    .scaledToFit()
                    .padding(.horizontal)
                
                Spacer()
                
                NavigationLink(destination: StoreSelection()) {
                    Text("Order Now")
                        .font(.headline)
                                .padding()
                                .frame(maxWidth: 130)
                                .background(Color.customBlue)
                                .foregroundColor(.white)
                                .cornerRadius(100)
                        
                }
                .padding()
                   
                
            }
            .background(Color.white)
            .navigationTitle("Home")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}


struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}

