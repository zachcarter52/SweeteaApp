import SwiftUI
import Amplify

struct Account: View {
    @EnvironmentObject var sessionManager: SessionManager
    
    let user: AuthUser
    
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    Text("Hi, \(sessionManager.displayName ?? user.username)")
                        .font(.title)
                        .fontWeight(.bold)
                        .foregroundColor(.black)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .padding()
                }
                
                Image("sweetealogo_homepage")
                    .resizable()
                    .scaledToFit()
                    .frame(height: 150)

                Grid {
                    GridRow {
                        AccountGridItem(title: "Payments", icon: "creditcard")
                        AccountGridItem(title: "My Orders", icon: "heart")
                    }
                    GridRow {
                        Button(action: {
                            if let url = URL(string: "https://sweeteaus.square.site/") {
                                UIApplication.shared.open(url)
                            }
                        }) {
                            AccountGridItem(title: "Website", icon: "globe")
                        }
                        Button(action: {
                            openInstagram()
                        }) {
                            AccountGridItem(title: "Instagram", icon: "camera")
                        }
                    }
                }
                .padding()
                Spacer()
                Button(action: {
                    sessionManager.signOut()
                }) {
                    Text("Logout")
                        .font(.headline)
                        .padding()
                        .frame(maxWidth: 130)
                        .background(Color.customBlue)
                        .foregroundColor(.white)
                        .cornerRadius(100)
                }
                .padding(.top, -125)
                
            }
            .background(Color.white)
            .navigationBarTitleDisplayMode(.inline)
            
        }
    }




    private func openInstagram() {
        let instagramUsername = "sweeteaus"
        if let url = URL(string: "instagram://user?username=\(instagramUsername)") {
            if UIApplication.shared.canOpenURL(url) {
                UIApplication.shared.open(url)
            } else {
                if let webUrl = URL(string: "https://instagram.com/\(instagramUsername)") {
                    UIApplication.shared.open(webUrl)
                }
            }
        }
    }
}

// Helper View for Grid Items
struct AccountGridItem: View {
    var title: String
    var icon: String

    var body: some View {
        VStack {
            Image(systemName: icon)
                .resizable()
                .scaledToFit()
                .frame(width: 40, height: 40)
                .foregroundColor(.customBlue)
            Text(title)
                .font(.headline)
                .foregroundColor(.black)
        }
        .frame(maxWidth: .infinity, minHeight: 150)
        .background(Color.gray.opacity(0.1))
        .cornerRadius(10)
    }
}
