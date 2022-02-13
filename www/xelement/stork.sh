#!/user/bin/env bash

curl -O https://files.stork-search.net/releases/v1.4.0/stork-amazon-linux
chmod +x stork-amazon-linux
astro build --verbose
echo "starting stork build"
./stork-amazon-linux build --input dist/res/stork/stork.toml --output dist/res/stork/xelement.st --verbose
echo "stork build finished"