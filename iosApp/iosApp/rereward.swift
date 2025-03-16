import SwiftUI


struct RewardsPage: View {
    @State private var rewards = 0  // take from server, placeholder
    @State private var dialPos: Double = 0


    var body: some View {
    VStack {
    // Header
    Text("Rewards Program") .font(.largeTitle) .padding()

    Text("\(rewards) Stars").font(.title) .bold() .padding()

    ZStack {
        Circle().stroke(lineWidth: 25).foregroundColor(.blue)
        .frame(width: 200, height: 200)

        //outside
        Circle().fill(Color.blue)
        .frame(width:50, height:50)
        .offset(x: 0, y: -75)
        .rotationEffect(.degrees(dialPos))

        .gesture(
            TapGesture()
                .onEnded {
                    incrementReward()
                    incrementDial()
                }
        )
    }
    Spacer()
    }
    .padding()
    }

    func incrementReward() {
    rewards += 1
    }

    func incrementDial() {
    dialPos += 4.8 // 360 / 75 stars
    if dialPos >= 360 {
        dialPos = 0
    }
    }

}