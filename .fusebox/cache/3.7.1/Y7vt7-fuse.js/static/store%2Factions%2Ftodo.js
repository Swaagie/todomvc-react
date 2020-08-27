module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.onClearCompleted = exports.onCompleteAll = exports.onUpdate = exports.onRemove = exports.onCreate = exports.onLoad = void 0;\nvar action_type_1 = require(\"../../constants/action-type\");\nexports.onLoad = function (todos) { return ({ type: action_type_1.ACTION_TYPES.load, todos: todos }); };\nexports.onCreate = function (name) { return ({ type: action_type_1.ACTION_TYPES.create, name: name }); };\nexports.onRemove = function (id) { return ({ type: action_type_1.ACTION_TYPES.remove, id: id }); };\nexports.onUpdate = function (values) { return ({ type: action_type_1.ACTION_TYPES.update, values: values }); };\nexports.onCompleteAll = function () { return ({ type: action_type_1.ACTION_TYPES.completeAll }); };\nexports.onClearCompleted = function () { return ({ type: action_type_1.ACTION_TYPES.clearCompleted }); };\n",
dependencies: ["../../constants/action-type"],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257599,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
