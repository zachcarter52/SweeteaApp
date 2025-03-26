import SwiftUI
//import ComposeApp
import Amplify
import AmplifyPlugins

@main
struct iOSApp: App {
    init() {
        configureAmplify()
    }
    var body: some Scene {
        
        WindowGroup {
            ContentView()
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
