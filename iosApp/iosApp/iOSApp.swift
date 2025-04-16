import SwiftUI
import Amplify
import AmplifyPlugins
import AWSPluginsCore
import Foundation

@main
struct iOSApp: App {
    @State private var isSignedIn = UserDefaults.standard.bool(forKey: "isSignedIn")
    @ObservedObject var sessionManager = SessionManager()

    init() {
        configureAmplify()
        sessionManager.getCurrentAuthUser()
    }

    var body: some Scene {
        WindowGroup {
            switch sessionManager.authState {
            case .signUp:
                SignUpView().environmentObject(sessionManager)
            case .login:
                LoginView().environmentObject(sessionManager)
            case .confirmCode(let email):
                VerificationPage(email: email).environmentObject(sessionManager)
            case .session(let user):
                ContentView(user: user).environmentObject(sessionManager)
            }
        }
    }

    private func configureAmplify() {
        do {
            try Amplify.add(plugin: AWSCognitoAuthPlugin())
            try Amplify.configure()
            print("Amplify configured successfully")
        } catch {
            print("Failed to initialize Amplify: \(error)")
        }
    }
    

}
