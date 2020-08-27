module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = require(\"react\");\nvar react_dom_1 = require(\"react-dom\");\nrequire(\"todomvc-app-css/index.css\");\nvar react_redux_1 = require(\"react-redux\");\nvar index_1 = require(\"./store/index\");\nvar app_1 = require(\"./components/app/app\");\nreact_dom_1.render(react_1.default.createElement(react_redux_1.Provider, { store: index_1.createStore() },\n    react_1.default.createElement(app_1.AppContainer, null)), document.querySelector('app-root'));\n",
dependencies: ["react","react-dom","todomvc-app-css/index.css","react-redux","./store/index","./components/app/app"],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257599,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
