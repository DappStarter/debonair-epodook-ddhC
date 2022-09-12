require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain puppy hunt casino swift story'; 
let testAccounts = [
"0xfe5730539e86a07e7ed2227f5ee7132b79c985bba565d1513c467b4c7ddd9704",
"0xba43506be48b811c082ea355cf5d469d84a40d5baff67610d3870a880e2837f8",
"0x1796ccbe5961f13c4974e41d2f0eb84bf7d19133f5b4b79afd6c27f0d2aa53ab",
"0x8a0d06e12f667a20dce70b141c7aa578df911650c0a12cf972b41bcb17d0895a",
"0xd4624ca1c290119f78d0ad2f17dcf0d1800a29b39a5b685a62f0b5b459636790",
"0x21c90c93d9ad284a44a02ecf6520d35d1fdbb62d3aea335def58c6771c54b692",
"0x69fd08c9f97c6231713133f4bd47d73727e566673bbcdf04620b6ae5189b8eed",
"0x93ec577e0bc423090278767e101c5afb001a03ebb2c9d505ebffe3bb79c67900",
"0x2fc7a0285c06016072ccedd5c5af159d36d43df47379c5b1d7ead6b33225b372",
"0xa6ea5a1dddb3c9fbd327cbccab93452b9b5ef1ab6e81a847e8bbd3574c299c65"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


