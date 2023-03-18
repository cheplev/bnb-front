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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"../node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // walletConnected keep track of whether the user's wallet is connected or not\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not\n    const [joinedWhitelist, setJoinedWhitelist] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // loading is set to true when we are waiting for a transaction to get mined\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // numberOfWhitelisted tracks the number of addresses's whitelisted\n    const [numberOfWhitelisted, setNumberOfWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    /**\n   * Returns a Provider or Signer object representing the Ethereum RPC with or without the\n   * signing capabilities of metamask attached\n   *\n   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.\n   *\n   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account\n   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to\n   * request signatures from the user using Signer functions.\n   *\n   * @param {*} needSigner - True if you need the signer, default false otherwise\n   */ const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        // Connect to Metamask\n        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object\n        const provider = await web3ModalRef.current.connect();\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n        // If user is not connected to the Goerli network, let them know and throw an error\n        const { chainId  } = await web3Provider.getNetwork();\n        if (chainId !== 5) {\n            window.alert(\"Change the network to Goerli\");\n            throw new Error(\"Change network to Goerli\");\n        }\n        if (needSigner) {\n            const signer1 = web3Provider.getSigner();\n            return signer1;\n        }\n        return web3Provider;\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            console.log(await getProviderOrSigner());\n            setWalletConnected(true);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    const checkRating = async ()=>{\n        try {\n            const ratingContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(_constants__WEBPACK_IMPORTED_MODULE_4__.RATING_CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_4__.abi, signer);\n            const _numberOfWhitelisted = await ratingContract.getRating();\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /*\n    renderButton: Returns a button based on the state of the dapp\n  */ const renderButton = ()=>{\n        console.log(walletConnected);\n        if (walletConnected) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"address\",\n                name: \"address\",\n                placeholder: \"Address\"\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                children: \"Connect your wallet\"\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rating Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                            children: \"Ratting app\"\n                        }, void 0, false, {\n                            fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, this),\n                        renderButton()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer)\n            }, void 0, false, {\n                fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chep/bnb/rating-test/pages/index.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7uclVKuSzBGAwQLVqOFHeVDGQdQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NBQ0MsOERBQUNROzRCQUFHWixXQUFXbEQsc0VBQVk7c0NBQUU7Ozs7Ozt3QkFDNUIwQzs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDcUI7Z0JBQU9iLFdBQVdsRCx1RUFBYTs7Ozs7Ozs7Ozs7O0FBSXRDLENBQUM7R0F2SHVCUztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgcHJvdmlkZXJzLCBDb250cmFjdCB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUkFUSU5HX0NPTlRSQUNUX0FERFJFU1MsIGFiaSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gd2FsbGV0Q29ubmVjdGVkIGtlZXAgdHJhY2sgb2Ygd2hldGhlciB0aGUgdXNlcidzIHdhbGxldCBpcyBjb25uZWN0ZWQgb3Igbm90XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGpvaW5lZFdoaXRlbGlzdCBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBjdXJyZW50IG1ldGFtYXNrIGFkZHJlc3MgaGFzIGpvaW5lZCB0aGUgV2hpdGVsaXN0IG9yIG5vdFxuICBjb25zdCBbam9pbmVkV2hpdGVsaXN0LCBzZXRKb2luZWRXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBsb2FkaW5nIGlzIHNldCB0byB0cnVlIHdoZW4gd2UgYXJlIHdhaXRpbmcgZm9yIGEgdHJhbnNhY3Rpb24gdG8gZ2V0IG1pbmVkXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gbnVtYmVyT2ZXaGl0ZWxpc3RlZCB0cmFja3MgdGhlIG51bWJlciBvZiBhZGRyZXNzZXMncyB3aGl0ZWxpc3RlZFxuICBjb25zdCBbbnVtYmVyT2ZXaGl0ZWxpc3RlZCwgc2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBXZWIzIE1vZGFsICh1c2VkIGZvciBjb25uZWN0aW5nIHRvIE1ldGFtYXNrKSB3aGljaCBwZXJzaXN0cyBhcyBsb25nIGFzIHRoZSBwYWdlIGlzIG9wZW5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm92aWRlciBvciBTaWduZXIgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgRXRoZXJldW0gUlBDIHdpdGggb3Igd2l0aG91dCB0aGVcbiAgICogc2lnbmluZyBjYXBhYmlsaXRpZXMgb2YgbWV0YW1hc2sgYXR0YWNoZWRcbiAgICpcbiAgICogQSBgUHJvdmlkZXJgIGlzIG5lZWRlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBibG9ja2NoYWluIC0gcmVhZGluZyB0cmFuc2FjdGlvbnMsIHJlYWRpbmcgYmFsYW5jZXMsIHJlYWRpbmcgc3RhdGUsIGV0Yy5cbiAgICpcbiAgICogQSBgU2lnbmVyYCBpcyBhIHNwZWNpYWwgdHlwZSBvZiBQcm92aWRlciB1c2VkIGluIGNhc2UgYSBgd3JpdGVgIHRyYW5zYWN0aW9uIG5lZWRzIHRvIGJlIG1hZGUgdG8gdGhlIGJsb2NrY2hhaW4sIHdoaWNoIGludm9sdmVzIHRoZSBjb25uZWN0ZWQgYWNjb3VudFxuICAgKiBuZWVkaW5nIHRvIG1ha2UgYSBkaWdpdGFsIHNpZ25hdHVyZSB0byBhdXRob3JpemUgdGhlIHRyYW5zYWN0aW9uIGJlaW5nIHNlbnQuIE1ldGFtYXNrIGV4cG9zZXMgYSBTaWduZXIgQVBJIHRvIGFsbG93IHlvdXIgd2Vic2l0ZSB0b1xuICAgKiByZXF1ZXN0IHNpZ25hdHVyZXMgZnJvbSB0aGUgdXNlciB1c2luZyBTaWduZXIgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IG5lZWRTaWduZXIgLSBUcnVlIGlmIHlvdSBuZWVkIHRoZSBzaWduZXIsIGRlZmF1bHQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIC8vIENvbm5lY3QgdG8gTWV0YW1hc2tcbiAgICAvLyBTaW5jZSB3ZSBzdG9yZSBgd2ViM01vZGFsYCBhcyBhIHJlZmVyZW5jZSwgd2UgbmVlZCB0byBhY2Nlc3MgdGhlIGBjdXJyZW50YCB2YWx1ZSB0byBnZXQgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdFxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgIC8vIElmIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgR29lcmxpIG5ldHdvcmssIGxldCB0aGVtIGtub3cgYW5kIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgIGlmIChjaGFpbklkICE9PSA1KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKSlcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tSYXRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmF0aW5nQ29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgICAgICAgUkFUSU5HX0NPTlRSQUNUX0FERFJFU1MsXG4gICAgICAgICAgYWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIGNvbnN0IF9udW1iZXJPZldoaXRlbGlzdGVkID0gYXdhaXQgcmF0aW5nQ29udHJhY3QuZ2V0UmF0aW5nKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gICAgcmVuZGVyQnV0dG9uOiBSZXR1cm5zIGEgYnV0dG9uIGJhc2VkIG9uIHRoZSBzdGF0ZSBvZiB0aGUgZGFwcFxuICAqL1xuICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2FsbGV0Q29ubmVjdGVkKVxuICAgIGlmICh3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIvPixcbiAgICAgICAgLy8gPGJ1dHRvbiBvbkNsaWNrPXtjaGVja1JhdGluZ30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgLy8gICBDaGVjayByYXRpbmdcbiAgICAgICAgLy8gPC9idXR0b24+XG4gICAgICApO1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBDb25uZWN0IHlvdXIgd2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPixcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwiZ29lcmxpXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29ubmVjdFdhbGxldCgpO1xuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmF0aW5nIERhcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2hpdGVsaXN0LURhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+UmF0dGluZyBhcHA8L2gxPlxuICAgICAgICAgIHtyZW5kZXJCdXR0b24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJXZWIzTW9kYWwiLCJwcm92aWRlcnMiLCJDb250cmFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUkFUSU5HX0NPTlRSQUNUX0FERFJFU1MiLCJhYmkiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwiam9pbmVkV2hpdGVsaXN0Iiwic2V0Sm9pbmVkV2hpdGVsaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJudW1iZXJPZldoaXRlbGlzdGVkIiwic2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsIndlYjNNb2RhbFJlZiIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIndlYjNQcm92aWRlciIsIldlYjNQcm92aWRlciIsImNoYWluSWQiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbm5lY3RXYWxsZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJjaGVja1JhdGluZyIsInJhdGluZ0NvbnRyYWN0IiwiX251bWJlck9mV2hpdGVsaXN0ZWQiLCJnZXRSYXRpbmciLCJyZW5kZXJCdXR0b24iLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});