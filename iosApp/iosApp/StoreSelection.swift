import SwiftUI
import MapKit

struct StoreSelection: View {
    let stores: [Store] = sampleStores
    @StateObject private var placeSearch = NearbyPlacesSearch()
    @State private var mapRegion = MKCoordinateRegion(
        center: CLLocationCoordinate2D(latitude: 38.744751, longitude: -121.205444),
        span: MKCoordinateSpan(latitudeDelta: 0.65, longitudeDelta: 0.65) // Zoom level
    )
    
    func openMaps(for place: MKMapItem) {
        let launchOptions = [
            MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeDriving
        ]
        place.openInMaps(launchOptions: launchOptions)
    }

    var body: some View {
        VStack {
            // Map View with user's location
            Map(coordinateRegion: $mapRegion, showsUserLocation: true, annotationItems: stores) { store in
                MapAnnotation(coordinate: store.coordinate) {
                    VStack {
                        Image("iosApp")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 30, height: 30)
                            .clipShape(Circle())
                    }
                }
            }
            .onAppear {
                // quering the sweetea locations, only 2 stores are recognized in AppleMaps
                placeSearch.searchNearbyPlaces(query: "Sweetea")
            }

            if placeSearch.isLoading {
                Text("Searching...")
            }

            // Display the list of nearby places with calculated distances
            List(placeSearch.nearbyPlaces, id: \.0.self) { (place, distance) in
                VStack(alignment: .leading) {
                    Text(place.name ?? "Unknown Place")
                        .font(.headline)
                        .contentShape(Rectangle())
                        .onTapGesture {
                            openMaps(for: place)
                        }
                    
                    if let distance = distance {
                        Text("Distance: \(String(format: "%.1f", distance)) miles")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    } else {
                        Text("Distance: Calculating...")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                }
            }
        }
    }
}

#Preview {
    StoreSelection()
}
