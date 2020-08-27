module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createStore = exports.withStateAndDispatch = void 0;\nvar tslib_1 = require(\"tslib\");\nvar redux_1 = require(\"redux\");\nvar react_redux_1 = require(\"react-redux\");\nvar filter_1 = require(\"../constants/filter\");\nvar todo_1 = require(\"./reducers/todo\");\nvar filter_2 = require(\"./reducers/filter\");\nvar todoActionCreators = require(\"./actions/todo\");\nvar filterActionCreators = require(\"./actions/filter\");\nvar todo_2 = require(\"./selectors/todo\");\nvar reducers = redux_1.combineReducers({\n    todos: todo_1.todosReducer,\n    filter: filter_2.filterReducer\n});\nvar actionCreators = tslib_1.__assign(tslib_1.__assign({}, todoActionCreators), filterActionCreators);\nvar mapStateToProps = function (state) { return ({\n    todos: state.todos,\n    filter: state.filter,\n    itemsLeft: todo_2.selectNotCompleted(state.todos).length,\n    completedCount: todo_2.selectCompleted(state.todos).length,\n    visibleTodos: todo_2.selectVisible(state.todos, state.filter),\n    areAllCompleted: state.todos.length && state.todos.every(function (todo) { return todo.completed; })\n}); };\nvar mapDispatchToProps = function (dispatch) { return redux_1.bindActionCreators(actionCreators, dispatch); };\nexports.withStateAndDispatch = function (Component) { return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Component); };\nvar storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();\nvar defaultState = { todos: [], filter: filter_1.FILTERS.all };\nexports.createStore = function (state) {\n    if (state === void 0) { state = defaultState; }\n    return redux_1.createStore(reducers, state, storeEnhancer);\n};\n",
dependencies: ["redux","react-redux","../constants/filter","./reducers/todo","./reducers/filter","./actions/todo","./actions/filter","./selectors/todo"],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257599,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
