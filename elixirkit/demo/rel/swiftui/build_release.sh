#!/bin/sh
set -euo pipefail

(cd ../.. && mix release --overwrite)
