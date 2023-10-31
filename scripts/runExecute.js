'use strict';
require('dotenv').config();
const { executeEVMExample, executeAptosExample, checkEnv, getExamplePath, getWallet, getEVMChains } = require('./libs');

const exampleName = process.argv[2];
const env = process.argv[3];
const args = process.argv.slice(4);

console.log('Starting execute..');

// Check the environment. If it is not valid, exit.
checkEnv(env);

console.log('Environment checked:', env);

// Get the example object.
const example = require(getExamplePath(exampleName));

console.log('Example loaded:', exampleName);

// Get the wallet.
const wallet = getWallet();

console.log('Wallet retrieved:', wallet.address);

// This will execute an example script. The example script must have an `execute` function.
if (exampleName.split('/')[0] === 'evm') {

    console.log('Executing EVM example...');

    // Get the chains for the environment.
    let selectedChains = [];

    if (args.length >= 2) {
        selectedChains = [args[0], args[1]];
    }

    const chains = getEVMChains(env, selectedChains);

    executeEVMExample(env, chains, args, wallet, example);
    console.log('EVM example executed successfully.');
} else if (exampleName.split('/')[0] === 'aptos') {
    const chains = getEVMChains(env);
    executeAptosExample(chains, args, wallet, example);
}
