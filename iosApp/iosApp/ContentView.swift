import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView{
            HomeView()
                .tabItem {
                    Label("Home", systemImage: "house")
                }
            Menu()
                .tabItem {
                    Label("Menu", systemImage: "cart")
                }
            Rewards()
                .tabItem {
                    Label("Rewards", systemImage: "star")
                }
            Account()
                .tabItem {
                    Label("Account", systemImage: "person")
                }
               
        }
        .tint(Color.customBlue)
    }
    
}
struct Content_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
extension Color {
    static let customBlue = Color(red: 0x97 / 255, green: 0xD0 / 255, blue: 0xF1 / 255)
}
