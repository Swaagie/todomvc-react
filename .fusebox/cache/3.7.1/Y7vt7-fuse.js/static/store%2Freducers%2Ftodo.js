module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.todosReducer = void 0;\nvar tslib_1 = require(\"tslib\");\nvar uuid_1 = require(\"uuid\");\nvar action_type_1 = require(\"../../constants/action-type\");\nvar todo_1 = require(\"../selectors/todo\");\nvar areAllCompleted = function (state) { return state.length && todo_1.selectCompleted(state).length === state.length; };\nexports.todosReducer = function (state, action) {\n    if (state === void 0) { state = []; }\n    switch (action.type) {\n        case action_type_1.ACTION_TYPES.load:\n            return tslib_1.__spreadArrays(action.todos);\n        case action_type_1.ACTION_TYPES.create:\n            return tslib_1.__spreadArrays(state, [{ id: uuid_1.v4(), name: action.name, completed: false }]);\n        case action_type_1.ACTION_TYPES.update:\n            return state.map(function (todo) { return (todo.id === action.values.id ? tslib_1.__assign(tslib_1.__assign({}, todo), action.values) : todo); });\n        case action_type_1.ACTION_TYPES.remove:\n            return state.filter(function (todo) { return todo.id !== action.id; });\n        case action_type_1.ACTION_TYPES.completeAll:\n            return state.map(function (todo) { return (tslib_1.__assign(tslib_1.__assign({}, todo), { completed: !areAllCompleted(state) })); });\n        case action_type_1.ACTION_TYPES.clearCompleted:\n            return todo_1.selectNotCompleted(state);\n        default:\n            return state;\n    }\n};\n",
dependencies: ["uuid","../../constants/action-type","../selectors/todo"],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257600,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
