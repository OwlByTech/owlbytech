#!/bin/sh

# TODO: Check if the script is running on docker container or outside.
echo "Installing bash..."
apk add bash

echo "Installing dependiencies"
yarn install


if [ $ENV = "prod" ]; then
  echo "------------ PRODUCTION MODE ------------"
  yarn build
  HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
else
  echo "------------ DEVELOPMENT MODE ------------"
  npm run dev -- --host
fi