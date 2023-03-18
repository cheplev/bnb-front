"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // walletConnected keep track of whether the user's wallet is connected or not\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not\n    const [joinedWhitelist, setJoinedWhitelist] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // loading is set to true when we are waiting for a transaction to get mined\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // numberOfWhitelisted tracks the number of addresses's whitelisted\n    const [numberOfWhitelisted, setNumberOfWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    /**\n   * Returns a Provider or Signer object representing the Ethereum RPC with or without the\n   * signing capabilities of metamask attached\n   *\n   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.\n   *\n   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account\n   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to\n   * request signatures from the user using Signer functions.\n   *\n   * @param {*} needSigner - True if you need the signer, default false otherwise\n   */ const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        // Connect to Metamask\n        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object\n        const provider = await web3ModalRef.current.connect();\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n        // If user is not connected to the Goerli network, let them know and throw an error\n        const { chainId  } = await web3Provider.getNetwork();\n        if (chainId !== 5) {\n            window.alert(\"Change the network to Goerli\");\n            throw new Error(\"Change network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.getSigner();\n            return signer;\n        }\n        return web3Provider;\n    };\n    /**\n   * addAddressToWhitelist: Adds the current connected address to the whitelist\n   */ const addAddressToWhitelist = async ()=>{\n        try {\n            // We need a Signer here since this is a 'write' transaction.\n            const signer = await getProviderOrSigner(true);\n            // Create a new instance of the Contract with a Signer, which allows\n            // update methods\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants__WEBPACK_IMPORTED_MODULE_4__.WHITELIST_CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            // call the addAddressToWhitelist from the contract\n            const tx = await whitelistContract.addAddressToWhitelist();\n            setLoading(true);\n            // wait for the transaction to get mined\n            await tx.wait();\n            setLoading(false);\n            // get the updated number of addresses in the whitelist\n            await getNumberOfWhitelisted();\n            setJoinedWhitelist(true);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /**\n   * getNumberOfWhitelisted:  gets the number of whitelisted addresses\n   */ const getNumberOfWhitelisted = async ()=>{\n        try {\n            // Get the provider from web3Modal, which in our case is MetaMask\n            // No need for the Signer here, as we are only reading state from the blockchain\n            const provider = await getProviderOrSigner();\n            // We connect to the Contract using a Provider, so we will only\n            // have read-only access to the Contract\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants__WEBPACK_IMPORTED_MODULE_4__.WHITELIST_CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_4__.abi, provider);\n            // call the numAddressesWhitelisted from the contract\n            const _numberOfWhitelisted = await whitelistContract.numAddressesWhitelisted();\n            setNumberOfWhitelisted(_numberOfWhitelisted);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /**\n   * checkIfAddressInWhitelist: Checks if the address is in whitelist\n   */ const checkIfAddressInWhitelist = async ()=>{\n        try {\n            // We will need the signer later to get the user's address\n            // Even though it is a read transaction, since Signers are just special kinds of Providers,\n            // We can use it in it's place\n            const signer = await getProviderOrSigner(true);\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants__WEBPACK_IMPORTED_MODULE_4__.WHITELIST_CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            // Get the address associated to the signer which is connected to  MetaMask\n            const address = await signer.getAddress();\n            // call the whitelistedAddresses from the contract\n            const _joinedWhitelist = await whitelistContract.whitelistedAddresses(address);\n            setJoinedWhitelist(_joinedWhitelist);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /*\n    connectWallet: Connects the MetaMask wallet\n  */ const connectWallet = async ()=>{\n        try {\n            // Get the provider from web3Modal, which in our case is MetaMask\n            // When used for the first time, it prompts the user to connect their wallet\n            await getProviderOrSigner();\n            setWalletConnected(true);\n            checkIfAddressInWhitelist();\n            getNumberOfWhitelisted();\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /*\n    renderButton: Returns a button based on the state of the dapp\n  */ const renderButton = ()=>{\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                    children: \"Thanks for joining the Whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                    lineNumber: 154,\n                    columnNumber: 11\n                }, this);\n            } else if (loading) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                    lineNumber: 159,\n                    columnNumber: 16\n                }, this);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: addAddressToWhitelist,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Join the Whitelist\"\n                }, void 0, false, {\n                    fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                    lineNumber: 162,\n                    columnNumber: 11\n                }, this);\n            }\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                children: \"Connect your wallet\"\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet\n        if (!walletConnected) {\n            // Assign the Web3Modal class to the reference object by setting it's `current` value\n            // The `current` value is persisted throughout as long as this page is open\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                        lineNumber: 193,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                        lineNumber: 194,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                        lineNumber: 195,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                            children: \"Ratting app\"\n                        }, void 0, false, {\n                            fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                            lineNumber: 199,\n                            columnNumber: 11\n                        }, this),\n                        renderButton()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                    lineNumber: 198,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 197,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 204,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n        lineNumber: 191,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7uclVKuSzBGAwQLVqOFHeVDGQdQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0M7OzBCQUNDLDhEQUFDbkQsa0RBQUlBOztrQ0FDSCw4REFBQzJEO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ2Q7Z0JBQUlDLFdBQVduRCxxRUFBVzswQkFDekIsNEVBQUNrRDs7c0NBQ0MsOERBQUNnQjs0QkFBR2YsV0FBV25ELHNFQUFZO3NDQUFFOzs7Ozs7d0JBQzVCaUQ7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ2tCO2dCQUFPaEIsV0FBV25ELHVFQUFhOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFLeEMsQ0FBQztHQXpNdUJTO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBwcm92aWRlcnMsIENvbnRyYWN0IH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUywgYWJpIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyB3YWxsZXRDb25uZWN0ZWQga2VlcCB0cmFjayBvZiB3aGV0aGVyIHRoZSB1c2VyJ3Mgd2FsbGV0IGlzIGNvbm5lY3RlZCBvciBub3RcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gam9pbmVkV2hpdGVsaXN0IGtlZXBzIHRyYWNrIG9mIHdoZXRoZXIgdGhlIGN1cnJlbnQgbWV0YW1hc2sgYWRkcmVzcyBoYXMgam9pbmVkIHRoZSBXaGl0ZWxpc3Qgb3Igbm90XG4gIGNvbnN0IFtqb2luZWRXaGl0ZWxpc3QsIHNldEpvaW5lZFdoaXRlbGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGxvYWRpbmcgaXMgc2V0IHRvIHRydWUgd2hlbiB3ZSBhcmUgd2FpdGluZyBmb3IgYSB0cmFuc2FjdGlvbiB0byBnZXQgbWluZWRcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBudW1iZXJPZldoaXRlbGlzdGVkIHRyYWNrcyB0aGUgbnVtYmVyIG9mIGFkZHJlc3NlcydzIHdoaXRlbGlzdGVkXG4gIGNvbnN0IFtudW1iZXJPZldoaXRlbGlzdGVkLCBzZXROdW1iZXJPZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApO1xuICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIFdlYjMgTW9kYWwgKHVzZWQgZm9yIGNvbm5lY3RpbmcgdG8gTWV0YW1hc2spIHdoaWNoIHBlcnNpc3RzIGFzIGxvbmcgYXMgdGhlIHBhZ2UgaXMgb3BlblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFByb3ZpZGVyIG9yIFNpZ25lciBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBFdGhlcmV1bSBSUEMgd2l0aCBvciB3aXRob3V0IHRoZVxuICAgKiBzaWduaW5nIGNhcGFiaWxpdGllcyBvZiBtZXRhbWFzayBhdHRhY2hlZFxuICAgKlxuICAgKiBBIGBQcm92aWRlcmAgaXMgbmVlZGVkIHRvIGludGVyYWN0IHdpdGggdGhlIGJsb2NrY2hhaW4gLSByZWFkaW5nIHRyYW5zYWN0aW9ucywgcmVhZGluZyBiYWxhbmNlcywgcmVhZGluZyBzdGF0ZSwgZXRjLlxuICAgKlxuICAgKiBBIGBTaWduZXJgIGlzIGEgc3BlY2lhbCB0eXBlIG9mIFByb3ZpZGVyIHVzZWQgaW4gY2FzZSBhIGB3cml0ZWAgdHJhbnNhY3Rpb24gbmVlZHMgdG8gYmUgbWFkZSB0byB0aGUgYmxvY2tjaGFpbiwgd2hpY2ggaW52b2x2ZXMgdGhlIGNvbm5lY3RlZCBhY2NvdW50XG4gICAqIG5lZWRpbmcgdG8gbWFrZSBhIGRpZ2l0YWwgc2lnbmF0dXJlIHRvIGF1dGhvcml6ZSB0aGUgdHJhbnNhY3Rpb24gYmVpbmcgc2VudC4gTWV0YW1hc2sgZXhwb3NlcyBhIFNpZ25lciBBUEkgdG8gYWxsb3cgeW91ciB3ZWJzaXRlIHRvXG4gICAqIHJlcXVlc3Qgc2lnbmF0dXJlcyBmcm9tIHRoZSB1c2VyIHVzaW5nIFNpZ25lciBmdW5jdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gbmVlZFNpZ25lciAtIFRydWUgaWYgeW91IG5lZWQgdGhlIHNpZ25lciwgZGVmYXVsdCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgLy8gQ29ubmVjdCB0byBNZXRhbWFza1xuICAgIC8vIFNpbmNlIHdlIHN0b3JlIGB3ZWIzTW9kYWxgIGFzIGEgcmVmZXJlbmNlLCB3ZSBuZWVkIHRvIGFjY2VzcyB0aGUgYGN1cnJlbnRgIHZhbHVlIHRvIGdldCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgLy8gSWYgdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSBHb2VybGkgbmV0d29yaywgbGV0IHRoZW0ga25vdyBhbmQgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDUpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIkNoYW5nZSB0aGUgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgbmV0d29yayB0byBHb2VybGlcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIHJldHVybiBzaWduZXI7XG4gICAgfVxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIGFkZEFkZHJlc3NUb1doaXRlbGlzdDogQWRkcyB0aGUgY3VycmVudCBjb25uZWN0ZWQgYWRkcmVzcyB0byB0aGUgd2hpdGVsaXN0XG4gICAqL1xuICBjb25zdCBhZGRBZGRyZXNzVG9XaGl0ZWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIG5lZWQgYSBTaWduZXIgaGVyZSBzaW5jZSB0aGlzIGlzIGEgJ3dyaXRlJyB0cmFuc2FjdGlvbi5cbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIENvbnRyYWN0IHdpdGggYSBTaWduZXIsIHdoaWNoIGFsbG93c1xuICAgICAgLy8gdXBkYXRlIG1ldGhvZHNcbiAgICAgIGNvbnN0IHdoaXRlbGlzdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICAgICBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYWJpLFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG4gICAgICAvLyBjYWxsIHRoZSBhZGRBZGRyZXNzVG9XaGl0ZWxpc3QgZnJvbSB0aGUgY29udHJhY3RcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgd2hpdGVsaXN0Q29udHJhY3QuYWRkQWRkcmVzc1RvV2hpdGVsaXN0KCk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgLy8gd2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGdldCBtaW5lZFxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyBnZXQgdGhlIHVwZGF0ZWQgbnVtYmVyIG9mIGFkZHJlc3NlcyBpbiB0aGUgd2hpdGVsaXN0XG4gICAgICBhd2FpdCBnZXROdW1iZXJPZldoaXRlbGlzdGVkKCk7XG4gICAgICBzZXRKb2luZWRXaGl0ZWxpc3QodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBnZXROdW1iZXJPZldoaXRlbGlzdGVkOiAgZ2V0cyB0aGUgbnVtYmVyIG9mIHdoaXRlbGlzdGVkIGFkZHJlc3Nlc1xuICAgKi9cbiAgY29uc3QgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gR2V0IHRoZSBwcm92aWRlciBmcm9tIHdlYjNNb2RhbCwgd2hpY2ggaW4gb3VyIGNhc2UgaXMgTWV0YU1hc2tcbiAgICAgIC8vIE5vIG5lZWQgZm9yIHRoZSBTaWduZXIgaGVyZSwgYXMgd2UgYXJlIG9ubHkgcmVhZGluZyBzdGF0ZSBmcm9tIHRoZSBibG9ja2NoYWluXG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIC8vIFdlIGNvbm5lY3QgdG8gdGhlIENvbnRyYWN0IHVzaW5nIGEgUHJvdmlkZXIsIHNvIHdlIHdpbGwgb25seVxuICAgICAgLy8gaGF2ZSByZWFkLW9ubHkgYWNjZXNzIHRvIHRoZSBDb250cmFjdFxuICAgICAgY29uc3Qgd2hpdGVsaXN0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgICAgIFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmksXG4gICAgICAgIHByb3ZpZGVyXG4gICAgICApO1xuICAgICAgLy8gY2FsbCB0aGUgbnVtQWRkcmVzc2VzV2hpdGVsaXN0ZWQgZnJvbSB0aGUgY29udHJhY3RcbiAgICAgIGNvbnN0IF9udW1iZXJPZldoaXRlbGlzdGVkID1cbiAgICAgICAgYXdhaXQgd2hpdGVsaXN0Q29udHJhY3QubnVtQWRkcmVzc2VzV2hpdGVsaXN0ZWQoKTtcbiAgICAgIHNldE51bWJlck9mV2hpdGVsaXN0ZWQoX251bWJlck9mV2hpdGVsaXN0ZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogY2hlY2tJZkFkZHJlc3NJbldoaXRlbGlzdDogQ2hlY2tzIGlmIHRoZSBhZGRyZXNzIGlzIGluIHdoaXRlbGlzdFxuICAgKi9cbiAgY29uc3QgY2hlY2tJZkFkZHJlc3NJbldoaXRlbGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gV2Ugd2lsbCBuZWVkIHRoZSBzaWduZXIgbGF0ZXIgdG8gZ2V0IHRoZSB1c2VyJ3MgYWRkcmVzc1xuICAgICAgLy8gRXZlbiB0aG91Z2ggaXQgaXMgYSByZWFkIHRyYW5zYWN0aW9uLCBzaW5jZSBTaWduZXJzIGFyZSBqdXN0IHNwZWNpYWwga2luZHMgb2YgUHJvdmlkZXJzLFxuICAgICAgLy8gV2UgY2FuIHVzZSBpdCBpbiBpdCdzIHBsYWNlXG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3Qgd2hpdGVsaXN0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgICAgIFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcbiAgICAgIC8vIEdldCB0aGUgYWRkcmVzcyBhc3NvY2lhdGVkIHRvIHRoZSBzaWduZXIgd2hpY2ggaXMgY29ubmVjdGVkIHRvICBNZXRhTWFza1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG4gICAgICAvLyBjYWxsIHRoZSB3aGl0ZWxpc3RlZEFkZHJlc3NlcyBmcm9tIHRoZSBjb250cmFjdFxuICAgICAgY29uc3QgX2pvaW5lZFdoaXRlbGlzdCA9IGF3YWl0IHdoaXRlbGlzdENvbnRyYWN0LndoaXRlbGlzdGVkQWRkcmVzc2VzKFxuICAgICAgICBhZGRyZXNzXG4gICAgICApO1xuICAgICAgc2V0Sm9pbmVkV2hpdGVsaXN0KF9qb2luZWRXaGl0ZWxpc3QpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgIGNvbm5lY3RXYWxsZXQ6IENvbm5lY3RzIHRoZSBNZXRhTWFzayB3YWxsZXRcbiAgKi9cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gR2V0IHRoZSBwcm92aWRlciBmcm9tIHdlYjNNb2RhbCwgd2hpY2ggaW4gb3VyIGNhc2UgaXMgTWV0YU1hc2tcbiAgICAgIC8vIFdoZW4gdXNlZCBmb3IgdGhlIGZpcnN0IHRpbWUsIGl0IHByb21wdHMgdGhlIHVzZXIgdG8gY29ubmVjdCB0aGVpciB3YWxsZXRcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcblxuICAgICAgY2hlY2tJZkFkZHJlc3NJbldoaXRlbGlzdCgpO1xuICAgICAgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgIHJlbmRlckJ1dHRvbjogUmV0dXJucyBhIGJ1dHRvbiBiYXNlZCBvbiB0aGUgc3RhdGUgb2YgdGhlIGRhcHBcbiAgKi9cbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICh3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIGlmIChqb2luZWRXaGl0ZWxpc3QpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIFRoYW5rcyBmb3Igam9pbmluZyB0aGUgV2hpdGVsaXN0IVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TG9hZGluZy4uLjwvYnV0dG9uPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRBZGRyZXNzVG9XaGl0ZWxpc3R9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICBKb2luIHRoZSBXaGl0ZWxpc3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgIENvbm5lY3QgeW91ciB3YWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIHdhbGxldCBpcyBub3QgY29ubmVjdGVkLCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgV2ViM01vZGFsIGFuZCBjb25uZWN0IHRoZSBNZXRhTWFzayB3YWxsZXRcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgLy8gQXNzaWduIHRoZSBXZWIzTW9kYWwgY2xhc3MgdG8gdGhlIHJlZmVyZW5jZSBvYmplY3QgYnkgc2V0dGluZyBpdCdzIGBjdXJyZW50YCB2YWx1ZVxuICAgICAgLy8gVGhlIGBjdXJyZW50YCB2YWx1ZSBpcyBwZXJzaXN0ZWQgdGhyb3VnaG91dCBhcyBsb25nIGFzIHRoaXMgcGFnZSBpcyBvcGVuXG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImdvZXJsaVwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldoaXRlbGlzdCBEYXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdC1EYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlJhdHRpbmcgYXBwPC9oMT5cbiAgICAgICAgICB7cmVuZGVyQnV0dG9uKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIldlYjNNb2RhbCIsInByb3ZpZGVycyIsIkNvbnRyYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJqb2luZWRXaGl0ZWxpc3QiLCJzZXRKb2luZWRXaGl0ZWxpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm51bWJlck9mV2hpdGVsaXN0ZWQiLCJzZXROdW1iZXJPZldoaXRlbGlzdGVkIiwid2ViM01vZGFsUmVmIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5lZWRTaWduZXIiLCJwcm92aWRlciIsImN1cnJlbnQiLCJjb25uZWN0Iiwid2ViM1Byb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsImdldE5ldHdvcmsiLCJ3aW5kb3ciLCJhbGVydCIsIkVycm9yIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiYWRkQWRkcmVzc1RvV2hpdGVsaXN0Iiwid2hpdGVsaXN0Q29udHJhY3QiLCJ0eCIsIndhaXQiLCJnZXROdW1iZXJPZldoaXRlbGlzdGVkIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiX251bWJlck9mV2hpdGVsaXN0ZWQiLCJudW1BZGRyZXNzZXNXaGl0ZWxpc3RlZCIsImNoZWNrSWZBZGRyZXNzSW5XaGl0ZWxpc3QiLCJhZGRyZXNzIiwiZ2V0QWRkcmVzcyIsIl9qb2luZWRXaGl0ZWxpc3QiLCJ3aGl0ZWxpc3RlZEFkZHJlc3NlcyIsImNvbm5lY3RXYWxsZXQiLCJyZW5kZXJCdXR0b24iLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});