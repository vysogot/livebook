import SwiftUI
import ElixirKit

@main
struct DemoApp: App {
    init() {
        ElixirKit.API.start(
            name: "demo",
            readyHandler: {
//                ElixirKit.API.publish("log", "Hello from SwiftUI!")
            }
        )
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
