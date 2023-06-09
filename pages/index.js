import Head from "next/head";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import { MAPPING_CONTRACT_ADDRESS, abi } from "../constants";
import Web3Utils from 'web3-utils';
// const { ethers, providers, Contract } = require("ethers");
const ethers =  require("ethers");


export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  const [addressInChain, setAddressInChain] = useState(false);
  const [passportInChain, setPassportInChain] = useState(false);
  // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not
  const [userRating, setUserRating] = useState(0);
  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 97) {
      window.alert("Change the network to BSC");
      throw new Error("Change network to BSC");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const sendPassport = async (event) => {
    try {
      event.preventDefault()
      const pass = event.target.pass.value;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      const signer = await getProviderOrSigner(true);
      const mappingContract = new Contract(MAPPING_CONTRACT_ADDRESS, abi, signer);

      const tx = await mappingContract.saveHashPair(pass);
      await tx.wait();

      const _passportInChain = await getPassByAddress(accounts[0]);
      const _addressInChain = await getAddressByPass(pass);
      if (_passportInChain == Web3Utils.soliditySha3({t: 'string', v: pass})) {
          setPassportInChain(true);
      }
      if (_addressInChain == accounts[0]) {
          setPassportInChain(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAddressByPass = async (pass) => {
    try {       
      const signer = await getProviderOrSigner(true);
      
      const mappingContract = new Contract(MAPPING_CONTRACT_ADDRESS, abi, signer);

      const tx = await mappingContract.getAddressByPass(pass);
      console.log(tx);

      return tx

    } catch (err) {
      console.error(err);
    }
  };

  const getPassByAddress = async (address) => {
    try {       
      const signer = await getProviderOrSigner(true);
      
      const mappingContract = new Contract(MAPPING_CONTRACT_ADDRESS, abi, signer);

      const tx = await mappingContract.getPassByAddress(address);
      // await tx.wait();
      console.log(tx);

      return tx

    } catch (err) {
      console.error(err);
    }
  };

  const renderSend = () => {
    if (walletConnected) {
      if (addressInChain || passportInChain) {
        return (
            ''
        ) 
      } else {
        return (
          <form onSubmit={sendPassport} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="pass" className="block text-gray-700 text-sm font-bold mb-2">Pass number:</label>
              <input type="text" id="pass" name="first" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add address</button>
          </form>
        );
      }
    } else {
      return (
        <button onClick={connectWallet} className={`${styles.button} bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4`}>
          Connect your wallet
        </button>
      );
    }
  };

  const renderGetLoan = () => {
    if (walletConnected && (passportInChain || addressInChain)) {
      return (
      <form onSubmit={sendPassport} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md my-4">
        <div className="mb-4 text-blue-600 font-bold">Max amount for you is 10000 BUSD</div>
        <div className="mb-4">
          <label htmlFor="ammount" className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
          <input type="number" id="ammount" name="ammount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 text-blue-600 font-bold">Max period for you is 12 months</div>
        <div className="mb-4">
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get a loan</button>
      </form>
      );
    } else {
      return (
        <div className="bg-red-200 border-l-4 border-red-500 text-red-700 p-4 rounded-md my-4">
          Can&apos;t find your address or passport in chain
        </div>
      )
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    } else {
      const check = async () => {
        const signer = await getProviderOrSigner(true);
        const mappingContract = new Contract(MAPPING_CONTRACT_ADDRESS, abi, signer);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const _passportInChain = await mappingContract.getPassByAddress(accounts[0]);

        console.log('passport in chPasresain ', parseInt(_passportInChain, 16) !== 0);
        if (parseInt(_passportInChain, 16) !== 0) {
            setPassportInChain(true)
        }
      }
      check()
    }

  }, [walletConnected]);

  return (
    <div className={styles.container}>
      <Head>
        <title>RepChain</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={`${styles.title} text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>RepChain</h1>
          <p className="text-white text-opacity-80 font-semibold text-lg sm:text-xl md:text-2xl mt-4">
            Empowering Trust through Decentralized Reputation
          </p>
          {renderSend()}
          {renderGetLoan()}
        </div>
      </div>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}