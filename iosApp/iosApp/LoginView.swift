import SwiftUI
import Amplify

struct LoginView: View {
    
    @State var email: String = ""
    @State var password: String = ""
    @State var showPassword: Bool = false
    @State var signInError: String? = nil
    @State var isSignInSuccess: Bool = false
    
    var isSignInButtonDisabled: Bool {
        [email, password].contains(where: \.isEmpty)
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 15) {
            Image("sweetealogo_homepage")
                .resizable()
                .scaledToFit()
            
            HStack {
                Text("Login")
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundColor(Color.black)
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: .infinity, alignment: .center)
                    .padding()
                Spacer()
            }
            
            TextField("Email", text: $email, prompt: Text("Email").foregroundColor(.black))
                .foregroundColor(.black)
                .padding(10)
                .background(Color.gray.opacity(0.1))
                .overlay {
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(.black, lineWidth: 1)
                }
                .padding(.horizontal)
            
            HStack {
                Group {
                    if showPassword {
                        TextField("Password", text: $password, prompt: Text("Password").foregroundColor(.black))
                            .foregroundColor(.black)
                    } else {
                        SecureField("Password", text: $password, prompt: Text("Password").foregroundColor(.black))
                            .foregroundColor(.black)
                    }
                }
                .padding(10)
                .background(Color.gray.opacity(0.1))
                .overlay {
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(.black, lineWidth: 1)
                }
                
                Button {
                    showPassword.toggle()
                } label: {
                    Image(systemName: showPassword ? "eye.slash" : "eye")
                        .foregroundColor(.black)
                }
            }
            .padding(.horizontal)
            
            // Sign In Button
            Button {
                signIn(email: email, password: password)
            } label: {
                Text("Sign In")
                    .font(.headline)
                    .bold()
                    .foregroundColor(.white)
                    .padding() // Adds spacing inside the button
                    .frame(maxWidth: 130, alignment: .center)
                    .background(Color.customBlue)
                    .cornerRadius(100)
            }
            .disabled(isSignInButtonDisabled)
            .padding(.top, 10)
            .frame(maxWidth: .infinity, alignment: .center)
            
            if let errorMessage = signInError {
                Text(errorMessage)
                    .foregroundColor(.red)
            }

            // Don't have an account text (Centered)
            HStack {
                NavigationLink(destination: SignUpView()) {
                    Text("Don't have an account? Sign up")
                        .foregroundColor(Color.customBlue)
                        .padding(.top, 10)
                }
            }
            .frame(maxWidth: .infinity, alignment: .center)
            
            Spacer()
        }
        .frame(maxHeight: .infinity) // Ensures the VStack fills the screen height
        .background(Color.white)
    }

    private func signIn(email: String, password: String) {
        // Call Amplify Auth sign-in
        Amplify.Auth.signIn(username: email, password: password) { result in
            switch result {
            case .success(let signInResult):
                print("Sign-in success: \(signInResult)")
                DispatchQueue.main.async {
                    isSignInSuccess = true
                    signInError = nil
                    
                }
            case .failure(let error):
                print("Error during sign-in: \(error)")
                DispatchQueue.main.async {
                    signInError = error.localizedDescription
                    isSignInSuccess = false
                }
            }
        }
    }
}


