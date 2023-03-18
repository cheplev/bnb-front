export const MAPPING_CONTRACT_ADDRESS = "0x07f86644a7826804bB7dE9B0622eb40DA70952eB";
export const abi = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "addrToPass",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_pass",
					"type": "string"
				}
			],
			"name": "getAddressByPass",
			"outputs": [
				{
					"internalType": "address",
					"name": "_address",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_address",
					"type": "address"
				}
			],
			"name": "getPassByAddress",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "pass",
					"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"name": "passToAddr",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_pass",
					"type": "string"
				}
			],
			"name": "saveHashPair",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	];