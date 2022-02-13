#!/user/bin/env bash

curl -O https://files.stork-search.net/releases/v1.4.0/stork-amazon-linux
chmod +x stork-amazon-linux
astro build --verbose
./stork-amazon-linux build --input dist/stork/stork.toml --output dist/stork/xelement.st