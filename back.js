const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'rI7MzjMSkgalJx8Me3HsfkwVuqXLH4VnNFKGgXmT', // This is your Application ID
  'mVaYJbkTiKvdpjgaFHrkBl4F7p3xd6HFTDIphygm', // This is your Javascript key
  'sX9nWZBlpgaanR8t7x76AtgnKqwiTJWumvSfg5Mf' // This is your Master key (never use it in the frontend)
);

