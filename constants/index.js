export const RATING_CONTRACT_ADDRESS = "0x533b62c83b27ABE55D6aD3e378d401C9A7F5bA46";
export const abi = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_address",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "rating",
					"type": "uint256"
				}
			],
			"name": "setRating",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "usersRating",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];