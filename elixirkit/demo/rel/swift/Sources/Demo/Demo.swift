import Foundation
import ElixirKit

@main
struct Demo {
    public static func main() {
        // Capture ctrl+c
        signal(SIGINT) { signal in
            ElixirKit.API.stop()
            exit(signal)
        }

        NotificationCenter.default.addObserver(forName: ElixirKit.API.ready, object: nil, queue: .main) { n in
            ElixirKit.API.publish("log", "Hello from Swift!")

            ElixirKit.API.addObserver(queue: .main) { (name, data) in
                switch name {
                case "log":
                    print("[client] " + data)
                default:
                    fatalError("unknown event \(name)")
                }
            }
        }

        ElixirKit.API.start(name: "demo")
        ElixirKit.API.waitUntilExit()
    }
}
