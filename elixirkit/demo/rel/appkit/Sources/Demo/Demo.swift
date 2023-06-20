import AppKit
import ElixirKit

@main
public struct Demo {
    public static func main() {
        let app = NSApplication.shared
        let delegate = AppDelegate()
        app.delegate = delegate
        app.run()
    }
}

class AppDelegate: NSObject, NSApplicationDelegate {
    private var window: NSWindow!
    private var button: NSButton!

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        button = NSButton(title: "Press me!", target: self, action: #selector(pressMe))
        button.isEnabled = false

        NotificationCenter.default.addObserver(forName: ElixirKit.API.ready, object: nil, queue: .current) { n in
            self.button.isEnabled = true
            ElixirKit.API.publish("log", "Hello from AppKit!")

        }

        ElixirKit.API.addObserver(queue: .current) { (name, data) in
            switch name {
            case "log":
                print("[client] " + data)
            default:
                fatalError("unknown event \(name)")
            }
        }

        ElixirKit.API.start(
            name: "demo",
            terminationHandler: { _ in
            print("terminating...")
                NSApp.terminate(nil)
            }
        )

        let menuItemOne = NSMenuItem()
        menuItemOne.submenu = NSMenu(title: "Demo")
        menuItemOne.submenu?.items = [
            NSMenuItem(title: "Quit Demo", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
        ]
        let menu = NSMenu()
        menu.items = [menuItemOne]
        NSApp.mainMenu = menu

        window = NSWindow(contentRect: NSMakeRect(0, -1000, 200, 200),
                          styleMask: [.titled, .closable],
                          backing: .buffered,
                          defer: true)
        window.orderFrontRegardless()
        window.title = "Demo"
        window.contentView!.subviews.append(button)

        NSApp.setActivationPolicy(.regular)
        NSApp.activate(ignoringOtherApps: true)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ app: NSApplication) -> Bool {
        return true
    }

    func applicationWillTerminate(_ aNotification: Notification) {
            print("applicationWillTerminate")
        /* ElixirKit.API.stop() */
    }

    @objc
    func pressMe() {
        print("[client] button pressed!")
        ElixirKit.API.publish("log", "button pressed!")
    }
}
