#!/bin/sh
set -euo pipefail

configuration="Debug"
scheme="Demo (macOS)"
destination="generic/platform=macOS"

mkdir -p tmp
xcodebuild -configuration "$configuration" -scheme "$scheme" -destination "$destination" -showBuildSettings -json > tmp/build.json
app_dir=`cat tmp/build.json | jq --raw-output '.[0].buildSettings.CODESIGNING_FOLDER_PATH'`

open -W --stdout=`tty` --stderr=`tty` $app_dir
