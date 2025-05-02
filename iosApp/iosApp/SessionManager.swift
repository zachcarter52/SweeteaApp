import Amplify

enum AuthState {
    case signUp
    case login
    case confirmCode(username: String)
    case session(user: AuthUser)
}

final class SessionManager: ObservableObject {
    @Published var authState: AuthState = .login
    @Published var displayName: String? = nil

    func getCurrentAuthUser() {
        if let user = Amplify.Auth.getCurrentUser() {
            authState = .session(user: user)
            
            fetchUsername { [weak self] name in
                DispatchQueue.main.async {
                    self?.displayName = name
                }
            }
        } else {
            authState = .login
        }
    }

    

    // Show the sign-up state
    func showSignUp() {
        authState = .signUp
    }

    // Show the login state
    func showLogin() {
        authState = .login
    }

    // Sign up method
    func signUp(username: String, email: String, password: String) {
        let attributes = [
            AuthUserAttribute(.email, value: email),
            AuthUserAttribute(.preferredUsername, value: username) // Used for display name
        ]
        let options = AuthSignUpRequest.Options(userAttributes: attributes)

        _ = Amplify.Auth.signUp(username: email, password: password, options: options) { [weak self] result in
            switch result {
            case .failure(let error):
                print("Sign up error", error)
            case .success(let signUpResult):
                print("Sign up result:", signUpResult)
                switch signUpResult.nextStep {
                case .done:
                    print("Finished sign-up")
                case .confirmUser(let details, _):
                    print(details ?? "No details")
                    
                    DispatchQueue.main.async {
                        self?.authState = .confirmCode(username: email)
                    }
                }
            }
        }
    }


    // Confirm the user with the code
    func confirmSignUp(username: String, code: String) {
        _ = Amplify.Auth.confirmSignUp(for: username, confirmationCode: code) { [weak self] result in
            switch result {
            case .success(let confirmResult):
                print(confirmResult)
                if confirmResult.isSignupComplete {
                    DispatchQueue.main.async {
                        self?.showLogin()
                    }
                }
            case .failure(let error):
                print("Failed to confirm code", error)
            }
        }
    }

    // Log in method
    func login(username: String, password: String) {
        _ = Amplify.Auth.signIn(username: username, password: password) { [weak self] result in
            switch result {
            case .success(let signInResult):
                print("Sign-in success:", signInResult)
                if signInResult.isSignedIn {
                    DispatchQueue.main.async {
                        self?.getCurrentAuthUser()
                    }
                }
            case .failure(let error):
                print("Login error", error)
            }
        }
    }
    // Sign out method
    func signOut() {
        _ = Amplify.Auth.signOut {
            [weak self] result in
            switch result {
            case .success:
                DispatchQueue.main.async {
                    self?.getCurrentAuthUser()
                }
            case .failure(let error):
                print("Sign out error", error)
            }
        }
    }
    func fetchUsername(completion: @escaping (String?) -> Void) {
        Amplify.Auth.fetchUserAttributes { result in
            switch result {
            case .success(let attributes):
                if let username = attributes.first(where: { $0.key.rawValue == "preferred_username" })?.value {
                    completion(username)
                } else {
                    completion(nil)
                }
            case .failure(let error):
                print("Failed to fetch attributes: \(error)")
                completion(nil)
            }
        }
    }

    
}
