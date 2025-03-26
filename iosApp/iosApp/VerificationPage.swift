import SwiftUI
import Amplify

struct VerificationPage: View {
    
    var email: String
    @State private var code: String = ""
    @State private var errorMessage: String? = nil
    @State private var shouldNavigate: Bool = false
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Enter the verification code sent to: \n\(email)")
                .multilineTextAlignment(.center)
                .padding()
            
            TextField("Verification Code", text: $code)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            if let errorMessage = errorMessage {
                Text(errorMessage)
                    .foregroundColor(.red)
            }
            
            Button(action: {
                verifyCode()
            }) {
                Text("Verify")
                    .bold()
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            
            Spacer()
        }
        .padding()
        .navigationBarTitle("Verification", displayMode: .inline)
        .onChange(of: shouldNavigate, perform: { value in
            if value {
                presentationMode.wrappedValue.dismiss()
            }
        })
    }
    
    private func verifyCode() {
        Amplify.Auth.confirmSignUp(for: email, confirmationCode: code) { result in
            switch result {
            case .success(let signUpResult):
                if signUpResult.isSignupComplete {
                    print("Verification successful, user confirmed.")
                    shouldNavigate = true
                } else {
                    errorMessage = "Verification failed. Please try again."
                }
            case .failure(let error):
                print("Error during sign-up verification: \(error.localizedDescription)")
                errorMessage = "Verification failed: \(error.localizedDescription)"
            }
        }
    }
}

struct VerificationPage_Previews: PreviewProvider {
    static var previews: some View {
        VerificationPage(email: "test@example.com")
    }
}
