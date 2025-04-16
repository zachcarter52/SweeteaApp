import SwiftUI
import Amplify

struct ContentView: View {
    @EnvironmentObject var sessionManager: SessionManager
    let user: AuthUser
    @StateObject private var productViewModel = ProductViewModel()  // Product view model
    @StateObject private var categoryViewModel = CategoryViewModel()

    var body: some View {
        TabView {
            HomeView(user: user)
                .tabItem {
                    Label("Home", systemImage: "house")
                }

            MenuPage(productViewModel: ProductViewModel(), categoryViewModel: CategoryViewModel())
                .tabItem {
                    Label("Menu", systemImage: "cart")
                }

            Rewards()
                .tabItem {
                    Label("Rewards", systemImage: "star")
                }

            Account(user: user)
                .tabItem {
                    Label("Account", systemImage: "person")
                }
        }
        .onAppear {
            // Load products when ContentView appears
            Task {
                await productViewModel.loadProducts()
            }
        }
        .tint(Color.customBlue)
    }
}

extension Color {
    static let customBlue = Color(red: 0x97 / 255, green: 0xD0 / 255, blue: 0xF1 / 255)
}
