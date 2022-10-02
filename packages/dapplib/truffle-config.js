require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan reward stereo proof install clip surge trigger'; 
let testAccounts = [
"0xac2d0c79627649d11880ee7ab43f73c7f6def743de7ef4806032e332ec5a32ec",
"0xb01a0689865573264a044db64c9e941bf29255dced0b36014cf9d4c9bd7fd24d",
"0x6679086a232e62c2662f514763d8b15f6eac5723088ae7c8971a04cfdbbfe738",
"0x4d0b2b81bfef4e8f173bf4a07027d3c8144cb15f5c38771f00888af3ba9d2fd4",
"0x90426c5374d2d84396791932188c8754e7fdf9ed8e68d012b8ed5ff62e9084bd",
"0x84765f76b8a1ef092de01612fde10ea829cbf3925b28385fb72a521647b3c346",
"0x0cbfc566b674091acc9b34d995e7dd03fa3d44d6431b87cb7eadbbbe82554994",
"0x4e34b39d5cedfea9397b24df98c911055d32bef4609fd9767e83a18d456c46fe",
"0xbbfe25d49462745669f90665ae2a050b6bd06826a286902dde6fccd1cedc51a0",
"0xc4f2c8c972bbbed555db77cf8884c217047182a3c5a4d9abd07eb15124f15d2b"
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


