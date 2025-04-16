import SwiftUI
import Amplify

struct SignUpView: View {
    @EnvironmentObject var sessionManager: SessionManager

    @State var displayName: String = ""
    @State var email: String = ""
    @State var password: String = ""
    @State var showPassword: Bool = false
    @State var signUpError: String? = nil
    @State var isSignUpSuccess: Bool = false
    @State private var isVerification: Bool = false

    var isSignUpButtonDisabled: Bool {
        [displayName, email, password].contains(where: \.isEmpty)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 15) {
            Image("sweetealogo_homepage")
                .resizable()
                .scaledToFit()

            HStack {
                Text("Sign Up")
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundColor(Color.black)
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: .infinity, alignment: .center)
                    .padding()
                Spacer()
            }

            // Display Name
            TextField("Display Name", text: $displayName, prompt: Text("Display Name").foregroundColor(.black))
                .foregroundColor(.black)
                .padding(10)
                .background(Color.gray.opacity(0.1))
                .overlay {
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(.black, lineWidth: 1)
                }
                .padding(.horizontal)

            // Email
            TextField("Email", text: $email, prompt: Text("Email").foregroundColor(.black))
                .foregroundColor(.black)
                .padding(10)
                .background(Color.gray.opacity(0.1))
                .overlay {
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(.black, lineWidth: 1)
                }
                .padding(.horizontal)

            // Password
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

            // Sign Up Button
            Button {
                sessionManager.signUp(username: displayName, email: email, password: password)
            } label: {
                Text("Sign Up")
                    .font(.headline)
                    .bold()
                    .foregroundColor(.white)
                    .padding()
                    .frame(maxWidth: 130, alignment: .center)
                    .background(Color.customBlue)
                    .cornerRadius(100)
            }
            .disabled(isSignUpButtonDisabled)
            .padding(.top, 10)
            .frame(maxWidth: .infinity, alignment: .center)

            if let errorMessage = signUpError {
                Text(errorMessage)
                    .foregroundColor(.red)
            }

            HStack {
                Button(action: sessionManager.showLogin) {
                    Text("Already have an account? Log in")
                        .foregroundColor(Color.customBlue)
                        .padding(.top, 10)
                }
            }
            .frame(maxWidth: .infinity, alignment: .center)

            Spacer()
        }
        .frame(maxHeight: .infinity)
        .background(Color.white)

        // NavigationLink to VerificationPage (Hidden)
        if isSignUpSuccess {
            NavigationLink(
                destination: VerificationPage(email: email),
                isActive: $isVerification
            ) {
                EmptyView()
            }
        }
    }
}
