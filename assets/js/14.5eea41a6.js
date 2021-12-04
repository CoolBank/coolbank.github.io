(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{428:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"注入对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注入对象"}},[t._v("#")]),t._v(" 注入对象")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("阅读我们建议所有 web3 网站开发人员阅读"),a("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[t._v("基本用法")]),t._v("部分。")])]),t._v(" "),a("p",[t._v("Coinhub App 会将全局的 "),a("code",[t._v("window.ethereum")]),t._v(" 变量注入用户访问的网站中。")]),t._v(" "),a("p",[t._v("该 API 允许网站请求用户的以太坊帐户，从用户连接的区块链中读取数据，并建议用户签署消息和交易。"),a("code",[t._v("ethereum")]),t._v(" 对象的存在指示以太坊用户。我们建议在任何平台或浏览器上使用 "),a("code",[t._v("typeof window !== 'undefined' && window.ethereum")]),t._v(" 来检测是否存在 Coinhub App。")]),t._v(" "),a("p",[t._v("以太坊 JavaScript 注入的对象 API 内容由 "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1193",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1193"),a("OutboundLink")],1),t._v(" 指定。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化 APP")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请链接钱包'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("为了使任何 Dapp Web 应用程序和网站正常工作，您必须：")]),t._v(" "),a("ul",[a("li",[t._v("检测 ethereum 对象是否注入（"),a("code",[t._v("window.ethereum")]),t._v("）")]),t._v(" "),a("li",[t._v("检测用户连接到哪个以太坊网络")]),t._v(" "),a("li",[t._v("获取用户连接的以太坊账户")])]),t._v(" "),a("p",[t._v("此页面顶部的代码段足以检测对象是否正确注入。")]),t._v(" "),a("p",[t._v("创建完整功能的 web3 应用程序所需的全部是提供者 API。")]),t._v(" "),a("p",[t._v("就是说，许多开发人员使用第三方模块，例如 "),a("a",{attrs:{href:"https://www.npmjs.com/package/ethers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ethers"),a("OutboundLink")],1),t._v(" ，而不是直接使用注入对象。如果您需要比此 API 提供的抽象更高的抽象，我们建议您使用第三方库。")]),t._v(" "),a("h2",{attrs:{id:"链-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链-id"}},[t._v("#")]),t._v(" 链 ID")]),t._v(" "),a("p",[t._v("这些是默认情况下 Coinhub App 支持的 EVM 链的 ID，有关更多信息，请查阅 "),a("a",{attrs:{href:"https://chainid.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("chainid.network"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("十六进制")]),t._v(" "),a("th",[t._v("十进制")]),t._v(" "),a("th",[t._v("网络")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0x1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Ethereum 以太坊主网")])]),t._v(" "),a("tr",[a("td",[t._v("0x38")]),t._v(" "),a("td",[t._v("56")]),t._v(" "),a("td",[t._v("BSC 币安智能链主网")])]),t._v(" "),a("tr",[a("td",[t._v("0x80")]),t._v(" "),a("td",[t._v("128")]),t._v(" "),a("td",[t._v("HECO 火币生态链主网")])]),t._v(" "),a("tr",[a("td",[t._v("0x41")]),t._v(" "),a("td",[t._v("65")]),t._v(" "),a("td",[t._v("OEC 欧易交易链主网")])]),t._v(" "),a("tr",[a("td",[t._v("0x89")]),t._v(" "),a("td",[t._v("137")]),t._v(" "),a("td",[t._v("Polygon 主网")])]),t._v(" "),a("tr",[a("td",[t._v("0xfa")]),t._v(" "),a("td",[t._v("250")]),t._v(" "),a("td",[t._v("Fantom 主网")])]),t._v(" "),a("tr",[a("td",[t._v("0x64")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("xDai 主网")])]),t._v(" "),a("tr",[a("td",[t._v("0x3")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Ropsten 测试网")])]),t._v(" "),a("tr",[a("td",[t._v("0x2a")]),t._v(" "),a("td",[t._v("42")]),t._v(" "),a("td",[t._v("kovan 测试网")])]),t._v(" "),a("tr",[a("td",[t._v("0x4")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("Rinkeby 测试网")])])])]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h3",{attrs:{id:"ethereum-isconnected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-isconnected"}},[t._v("#")]),t._v(" ethereum.isConnected()")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("请注意，此方法与用户帐户无关。")]),t._v(" "),a("p",[t._v("关于一个 web3 网站是否可以访问该用户的帐户，您可能经常遇到「已连接」一词。但是，在注入对象界面中，「已连接」和「已断开连接」是指注入对象是否可以向当前链发出 RPC 请求。")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isConnected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果注入对象已连接到当前链，则返回"),a("code",[t._v("true")]),t._v("，否则返回"),a("code",[t._v("false")]),t._v(" 。")]),t._v(" "),a("p",[t._v("如果未连接注入对象，则必须重新加载页面才能重新建立连接。有关更多信息，请参见"),a("a",{attrs:{href:"#%E8%BF%9E%E6%8E%A5"}},[a("code",[t._v("连接")])]),t._v("和"),a("a",{attrs:{href:"#%E6%96%AD%E5%BC%80%E8%BF%9E%E6%8E%A5"}},[a("code",[t._v("断开连接")])]),t._v("事件。")]),t._v(" "),a("h3",{attrs:{id:"ethereum-request-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-request-args"}},[t._v("#")]),t._v(" ethereum.request(args)")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestArguments")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestArguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("request")]),t._v(" 通过 Coinhub App 将 RPC 请求提交给以太坊链。它返回一个 Promise，解析为 RPC 方法调用的结果。")]),t._v(" "),a("p",[t._v("参数和返回值将因 RPC 方法而异。实际上，如果一个方法具有 "),a("code",[t._v("params")]),t._v(" 参数，则它们几乎总是类型为"),a("code",[t._v("Array<any>")]),t._v("。")]),t._v(" "),a("p",[t._v("如果请求由于任何原因而失败，则 Promise 将拒绝并返回 "),a("a",{attrs:{href:"#%E9%94%99%E8%AF%AF"}},[t._v("以太坊 RPC 错误")]),t._v("。")]),t._v(" "),a("p",[t._v("除了许多可能不支持的方法外，Coinhub App 还支持大多数标准化的以太坊 RPC 方法。其他钱包支持。有关详细信息，请参见 "),a("RouterLink",{attrs:{to:"/zh/rpc-api.html"}},[t._v("RPC API")]),t._v(" 。")],1),t._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xb60e8dd61c5d32be8058bb8eb970870f07233155'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xd46e8dd67c5d32be8058bb8eb970870f07244567'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x76c0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30400")]),t._v("\n    gasPrice"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x9184e72a000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10000000000000")]),t._v("\n    value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x9184e72a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2441406250")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nethereum\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_sendTransaction'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RPC 返回的结果会作为 result")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当方法成功时，会返回一个十六进制的字符串作为交易哈希")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果交易失败，则 Promise 会 reject 并返回一个错误")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("p",[t._v("Coinhub App 注入对象实现了"),a("a",{attrs:{href:"https://nodejs.org/api/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js "),a("code",[t._v("EventEmitter")]),a("OutboundLink")],1),t._v(" API。本节详细介绍了通过该 API 发出的事件。在其他地方有无数的"),a("code",[t._v("EventEmitter")]),t._v("指南，但是您可以监听这样的事件：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accountsChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("accounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当有账户变化时，则会触发这个回调函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "accounts" 永远是一个数组，但是有可能是空的')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chainChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chainId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理当有了一条新的选中的链时，会触发这里的回调函数")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[t._v("#")]),t._v(" 连接")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConnectInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chainId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ConnectInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当 Coinhub App 注入对象首次能够将 RPC 请求提交到链时，它将发出此事件。我们建议使用 connect 事件处理程序和"),a("a",{attrs:{href:"#ethereum-isconnected"}},[a("code",[t._v("ethereum.isConnected()")]),t._v("方法")]),t._v("，以确定何时 / 是否连接了注入 API。")]),t._v(" "),a("h3",{attrs:{id:"断开连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断开连接"}},[t._v("#")]),t._v(" 断开连接")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disconnect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProviderRpcError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果 Coinhub App 注入对象无法将 RPC 请求提交到任何链，它将发出此事件。通常，这只会由于网络连接问题或某些无法预料的错误而发生。")]),t._v(" "),a("p",[t._v("一旦发出 “disconnect”，在重新建立与链的连接之前，API 将不接受任何新请求，这需要重新加载页面。您还可以使用"),a("a",{attrs:{href:"#ethereum-isconnected"}},[a("code",[t._v("ethereum.isConnected()")]),t._v("方法")]),t._v("来确定注入对象是否断开连接。")]),t._v(" "),a("h3",{attrs:{id:"accountschanged-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accountschanged-事件"}},[t._v("#")]),t._v(" accountsChanged 事件")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accountsChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accounts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("每当 "),a("code",[t._v("eth_accounts")]),t._v(" RPC 方法的返回值更改时，Coinhub App 都会发出此事件。 "),a("code",[t._v("eth_accounts")]),t._v(" 返回一个为空或包含单个帐户地址的数组。返回的地址（如果有）是允许调用者访问的最近使用的帐户的地址。调用者通过其 URL "),a("em",[t._v("origin")]),t._v(" 进行标识，这意味着所有具有相同来源的站点都共享相同的权限。")]),t._v(" "),a("p",[t._v("这意味着，每当用户的公开帐户地址发生更改时，就会发出 “accountsChanged” 事件。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("我们计划允许 "),a("code",[t._v("eth_accounts")]),t._v(" 数组在不久的将来能够包含多个地址。")])]),t._v(" "),a("h3",{attrs:{id:"chainchanged-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chainchanged-事件"}},[t._v("#")]),t._v(" chainChanged 事件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("有关 Coinhub App 的默认链及其链 ID，请参见"),a("a",{attrs:{href:"#%E9%93%BE%5C%20ID"}},[t._v("链 ID")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chainChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chainId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当前连接的链发生更改时，Coinhub App 将发出此事件。")]),t._v(" "),a("p",[t._v("所有 RPC 请求都将提交到当前连接的链。因此，通过监听此事件来跟踪当前链的 ID 是至关重要的。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chainChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_chainId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"message-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-事件"}},[t._v("#")]),t._v(" message 事件")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProviderMessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProviderMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当 Coinhub App 收到一些应通知消费者的消息时，它将发出此事件。消息的类型由 "),a("code",[t._v("type")]),t._v(" 字符串标识。")]),t._v(" "),a("p",[t._v("RPC 订阅更新是 "),a("code",[t._v("message")]),t._v(" 事件的常见用例。例如，如果您使用 "),a("code",[t._v("eth_subscribe")]),t._v(" 创建订阅，则每个订阅更新将作为带有 "),a("code",[t._v("eth_subscription")]),t._v(" 类型的 message 事件发出。")]),t._v(" "),a("h2",{attrs:{id:"错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误"}},[t._v("#")]),t._v(" 错误")]),t._v(" "),a("p",[t._v("Coinhub App 引发或返回的所有错误均遵循以下界面：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProviderRpcError")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"#ethereum-request-args"}},[a("code",[t._v("ethereum.request(args)")]),t._v("方法")]),t._v("急切地抛出错误。您通常可以使用错误的 code 属性来确定请求失败的原因。常用代码及其含义包括：")]),t._v(" "),a("p",[t._v("有关错误的完整列表，请参阅 "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1193#provider-errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1193"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1474%EF%BC%83error-codes",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1474"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);