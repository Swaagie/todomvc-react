module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TodoLocal = void 0;\nvar LOCAL_STORAGE_KEY = 'todoapp_todos';\nvar TodoLocal = /** @class */ (function () {\n    function TodoLocal() {\n    }\n    TodoLocal.loadTodos = function () {\n        return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');\n    };\n    TodoLocal.storeTodos = function (todos) {\n        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));\n    };\n    return TodoLocal;\n}());\nexports.TodoLocal = TodoLocal;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257599,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
