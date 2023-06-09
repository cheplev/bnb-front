export const MAPPING_CONTRACT_ADDRESS = "0xb0dF882C9DBa86Ad6ee3444151cCb82f5A2a20c6";
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
					"name": "_pass",
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