#!/user/bin/env bash


curl -O https://files.stork-search.net/releases/v1.4.0/stork-amazon-linux
chmod +x stork-amazon-linux
./stork-amazon-linux build --input public/stork/stork.toml --output public/stork/xelement.st