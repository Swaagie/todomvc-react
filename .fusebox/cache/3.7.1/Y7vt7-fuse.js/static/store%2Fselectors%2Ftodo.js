module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.selectVisible = exports.selectNotCompleted = exports.selectCompleted = void 0;\nvar tslib_1 = require(\"tslib\");\nvar filter_1 = require(\"../../constants/filter\");\nfunction selectCompleted(todos) {\n    return todos.filter(function (todo) { return todo.completed; });\n}\nexports.selectCompleted = selectCompleted;\nfunction selectNotCompleted(todos) {\n    return todos.filter(function (todo) { return !todo.completed; });\n}\nexports.selectNotCompleted = selectNotCompleted;\nfunction selectVisible(todos, filter) {\n    switch (filter) {\n        case filter_1.FILTERS.all:\n            return tslib_1.__spreadArrays(todos);\n        case filter_1.FILTERS.completed:\n            return selectCompleted(todos);\n        case filter_1.FILTERS.active:\n            return selectNotCompleted(todos);\n        default:\n            return tslib_1.__spreadArrays(todos);\n    }\n}\nexports.selectVisible = selectVisible;\n",
dependencies: ["../../constants/filter"],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257600,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
