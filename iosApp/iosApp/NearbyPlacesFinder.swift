
import Foundation
import MapKit
import CoreLocation

class NearbyPlacesSearch: NSObject, CLLocationManagerDelegate, ObservableObject {
    @Published var nearbyPlaces: [(MKMapItem, Double?)] = []
    @Published var isLoading: Bool = false
    
    private let locationManager = CLLocationManager()
    var userLocation: CLLocationCoordinate2D?
    
    override init() {
        super.init()
        locationManager.delegate = self
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
    }

    func searchNearbyPlaces(query: String) {
        guard let userLocation = userLocation else {
            print("User location not available")
            return
        }

        isLoading = true

        let request = MKLocalSearch.Request()
        request.naturalLanguageQuery = query
        request.region = MKCoordinateRegion(center: userLocation, latitudinalMeters: 140000, longitudinalMeters: 140000)

        let search = MKLocalSearch(request: request)
        search.start { [weak self] response, error in
            DispatchQueue.main.async {
                self?.isLoading = false
                if let places = response?.mapItems {
                    self?.calculateRoadDistances(from: userLocation, to: places)
                } else {
                    self?.nearbyPlaces = []
                }
            }
        }
    }

    private func calculateRoadDistances(from userLocation: CLLocationCoordinate2D, to destinations: [MKMapItem]) {
        let userLoc = CLLocation(latitude: userLocation.latitude, longitude: userLocation.longitude)
        
        var results: [(MKMapItem, Double?)] = []
        
        for place in destinations {
            let request = MKDirections.Request()
            request.source = MKMapItem(placemark: MKPlacemark(coordinate: userLocation))
            request.destination = place
            request.transportType = .automobile // You can change this for walking or transit
            let directions = MKDirections(request: request)
            
            directions.calculate { (response, error) in
                DispatchQueue.main.async {
                    if let route = response?.routes.first {
                        let roadDistance = route.distance / 1609.34  // Convert meters to miles
                        results.append((place, roadDistance))
                    } else {
                        results.append((place, nil))
                    }

                    self.nearbyPlaces = results.sorted { ($0.1 ?? Double.greatestFiniteMagnitude) < ($1.1 ?? Double.greatestFiniteMagnitude) }
                }
            }
        }
    }

    // CLLocationManagerDelegate
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if let location = locations.first {
            userLocation = location.coordinate
        }
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print("Failed to get location: \(error.localizedDescription)")
    }
}
