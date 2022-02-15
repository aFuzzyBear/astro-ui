#!/user/bin/env bash

# curl -O https://files.stork-search.net/releases/v1.4.0/stork-amazon-linux
chmod +x ./stork/stork-amazon-linux
echo "starting toml build"
# npm run storky
echo "added toml to public"
echo "starting stork build"
# echo "$(<public/res/stork/stork.toml)"
echo "added xelement.st file"
./stork/stork-amazon-linux build --input public/stork.toml --output - > public/xelement.st
# ./stork-amazon-linux build --input public/dummy.toml --output - > ./dummy.st
echo "stork build finished"
# echo "starting astro build"
# npm run astro build --verbose
# echo "finish astro build"