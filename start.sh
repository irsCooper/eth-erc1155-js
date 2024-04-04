
set -eu

cd ./backend

npm install

npx hardhat clean

gnome-terminal -- npx hardhat node

sleep 5;

npx hardhat compile

sleep 3;

npx hardhat run --network localhost scripts/deploy.js

sleep 3;

cd ../frontend

npm install

npm start