#!/bin/sh
set -euo pipefail

export MIX_TARGET=app
export MIX_ENV=prod
export ELIXIRKIT_APP_NAME=Livebook
export ELIXIRKIT_PROJECT_DIR=$PWD/../../..
export ELIXIRKIT_RELEASE_NAME=app

. ../../../elixirkit/elixirkit_swift/Scripts/build_macos_app.sh

/Applications/Xcode.app/Contents/Developer/usr/bin/appintentsmetadataprocessor \
  --toolchain-dir /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain \
  --sdk-root `xcrun --show-sdk-path` \
  --target-triple `uname -m`-apple-macos \
  --output .build/Livebook.app/Contents/Resources \
  --module-name Livebook \
  --source-files Sources/Livebook/Livebook.swift \
  --binary-file .build/Livebook.app/Contents/MacOS/Livebook
