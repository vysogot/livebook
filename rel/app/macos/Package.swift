// swift-tools-version: 5.7

import PackageDescription

let package = Package(
    name: "Livebook",
    platforms: [
        .macOS(.v13)
    ],
    dependencies: [
        .package(name: "ElixirKit", path: "../../../elixirkit/elixirkit_swift")
    ],
    targets: [
        .executableTarget(
            name: "Livebook",
            dependencies: ["ElixirKit"]
        )
    ]
)
