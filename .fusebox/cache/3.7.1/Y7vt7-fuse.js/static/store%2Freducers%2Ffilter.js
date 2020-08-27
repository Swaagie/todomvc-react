module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.filterReducer = void 0;\nvar action_type_1 = require(\"../../constants/action-type\");\nvar filter_1 = require(\"../../constants/filter\");\nexports.filterReducer = function (state, action) {\n    if (state === void 0) { state = filter_1.FILTERS.all; }\n    switch (action.type) {\n        case action_type_1.ACTION_TYPES.selectFilter:\n            return action.filter;\n        default:\n            return state;\n    }\n};\n",
dependencies: ["../../constants/action-type","../../constants/filter"],
sourceMap: {},
headerContent: undefined,
mtime: 1598426257600,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
