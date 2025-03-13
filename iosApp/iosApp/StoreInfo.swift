
//
//  StoreInfo.swift
//  iosApp
//
//  Created by Zach Carter on 3/7/25.
//  Copyright © 2025 orgName. All rights reserved.
//
import MapKit

// Store struct to hold store name and coordinates
struct Store: Identifiable {
    var id = UUID()
    var address: String
    var coordinate: CLLocationCoordinate2D
}

// Sample data for stores (array of stores)
let sampleStores: [Store] = [
    Store(address: "8505 Madison Ave, Fair Oaks CA", coordinate: CLLocationCoordinate2D(latitude: 38.664687, longitude: -121.243687)),
    Store(address: "4010 Foothills Blvd, Roseville CA", coordinate: CLLocationCoordinate2D(latitude: 38.753687, longitude: -121.311063)),
    Store(address: "1850 Grass Valley Highway, Auburn CA", coordinate: CLLocationCoordinate2D(latitude: 38.92994, longitude: -121.08726)),
    
]

