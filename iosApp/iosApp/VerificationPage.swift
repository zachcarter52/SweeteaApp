import SwiftUI
import Amplify

struct VerificationPage: View {
    @EnvironmentObject var sessionManager: SessionManager
    
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
                sessionManager.confirmSignUp(username: email, code: code)
            }) {
                Text("Verify")
                    .bold()
                    .padding()
                    .background(Color.customBlue)
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
}

//struct VerificationPage_Previews: PreviewProvider {
//    static var previews: some View {
//        VerificationPage(email: "test@example.com")
//    }
//}
