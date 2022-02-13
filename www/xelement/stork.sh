#!/user/bin/env bash

curl -O https://files.stork-search.net/releases/v1.4.0/stork-amazon-linux
chmod +x stork-amazon-linux
astro build --verbose
echo "starting stork build"
echo "$(<public/res/stork/stork.toml)"
echo "added xelement.st file"
touch /xelement.st
chmod 777 /xelement.st
./stork-amazon-linux build --input public/res/stork/stork.toml --output - > /xelement.st
ls -l
echo "stork build finished"