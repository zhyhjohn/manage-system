var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mock/index.js
var mock_exports = {};
__export(mock_exports, {
  default: () => mock_default
});
module.exports = __toCommonJS(mock_exports);
var import_mockjs = __toESM(require("mockjs"));
var userList = [];
for (let i = 0; i < 100; i++) {
  userList.push({
    id: import_mockjs.default.mock("@increment()"),
    name: import_mockjs.default.mock("@cname"),
    gender: import_mockjs.default.mock('@cword("\u7537\u5973")'),
    email: import_mockjs.default.mock("@county(true)"),
    tel: import_mockjs.default.mock(/^1[3-9]\d{9}$/),
    address: import_mockjs.default.mock("@county(true)")
  });
}
var mock_default = [
  {
    url: "/api/users",
    method: "get",
    response: () => {
      return userList;
    }
  }
];
import_mockjs.default.mock("/api/users", "get", () => {
  return {
    code: 200,
    msg: "\u67E5\u8BE2\u7528\u6237\u5217\u8868\u6210\u529F!",
    data: userList
  };
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcdGVzdFxcXFxXb3JrXFxcXG1hbmFnZW1lbnQtc3lzdGVtLWRlbW9cXFxcc3JjXFxcXG1vY2tcXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcdGVzdFxcXFxXb3JrXFxcXG1hbmFnZW1lbnQtc3lzdGVtLWRlbW9cXFxcc3JjXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3Rlc3QvV29yay9tYW5hZ2VtZW50LXN5c3RlbS1kZW1vL3NyYy9tb2NrL2luZGV4LmpzXCI7Ly8gXHU1RjE1XHU1MTY1OiBtb2NranMgXHU2QTIxXHU1NzU3O1xuaW1wb3J0IE1vY2sgZnJvbSAnbW9ja2pzJ1xuXG4vLyBcdTUxODVcdTVCNThcdTZBMjFcdTYyREZcdTY1NzBcdTYzNkVcbmNvbnN0IHVzZXJMaXN0ID0gW11cbi8vIFx1NUZBQVx1NzNBRiAxMCBcdTZCMjEscHVzaCAxMCBcdTRFMkFcdTVCRjlcdThDNjE7XG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIHVzZXJMaXN0LnB1c2goe1xuICAgIGlkOiBNb2NrLm1vY2soJ0BpbmNyZW1lbnQoKScpLFxuICAgIG5hbWU6IE1vY2subW9jaygnQGNuYW1lJyksXG4gICAgZ2VuZGVyOiBNb2NrLm1vY2soJ0Bjd29yZChcIlx1NzUzN1x1NTk3M1wiKScpLFxuICAgIGVtYWlsOiBNb2NrLm1vY2soJ0Bjb3VudHkodHJ1ZSknKSxcbiAgICB0ZWw6IE1vY2subW9jaygvXjFbMy05XVxcZHs5fSQvKSxcbiAgICBhZGRyZXNzOiBNb2NrLm1vY2soJ0Bjb3VudHkodHJ1ZSknKVxuICB9KVxufVxuXG4vLyAvLyBcdTRFMEJcdTk3NjJcdTY2MkZcdTVCRkNcdTUxRkFcdTRFMDBcdTRFMkFcdTY1NzBcdTdFQzQ7XG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICB1cmw6ICcvYXBpL3VzZXJzJyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4gdXNlckxpc3RcbiAgICB9XG4gIH1cbl1cblxuTW9jay5tb2NrKCcvYXBpL3VzZXJzJywgJ2dldCcsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiAyMDAsXG4gICAgbXNnOiAnXHU2N0U1XHU4QkUyXHU3NTI4XHU2MjM3XHU1MjE3XHU4ODY4XHU2MjEwXHU1MjlGIScsXG4gICAgZGF0YTogdXNlckxpc3RcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUFpQjtBQUdqQixJQUFNLFdBQVcsQ0FBQztBQUVsQixTQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixXQUFTLEtBQUs7QUFBQSxJQUNaLElBQUksY0FBQUEsUUFBSyxLQUFLLGNBQWM7QUFBQSxJQUM1QixNQUFNLGNBQUFBLFFBQUssS0FBSyxRQUFRO0FBQUEsSUFDeEIsUUFBUSxjQUFBQSxRQUFLLEtBQUssd0JBQWM7QUFBQSxJQUNoQyxPQUFPLGNBQUFBLFFBQUssS0FBSyxlQUFlO0FBQUEsSUFDaEMsS0FBSyxjQUFBQSxRQUFLLEtBQUssZUFBZTtBQUFBLElBQzlCLFNBQVMsY0FBQUEsUUFBSyxLQUFLLGVBQWU7QUFBQSxFQUNwQyxDQUFDO0FBQ0g7QUFHQSxJQUFPLGVBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixVQUFVLE1BQU07QUFDZCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLGNBQUFBLFFBQUssS0FBSyxjQUFjLE9BQU8sTUFBTTtBQUNuQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIk1vY2siXQp9Cg==
