#!/bin/sh
set -euo pipefail

# this script is executed by Xcode.

if ! which elixir; then
  if [ -d /opt/homebrew/opt/asdf ]; then
    . /opt/homebrew/opt/asdf/libexec/asdf.sh
  fi
fi

app_dir=$BUILT_PRODUCTS_DIR/$FULL_PRODUCT_NAME
resources_dir=$app_dir/Contents/Resources
(cd ../.. && mix release --overwrite --path=$resources_dir/rel)
