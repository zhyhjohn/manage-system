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
    email: import_mockjs.default.mock("@email"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcdGVzdFxcXFxXb3JrXFxcXG1hbmFnZW1lbnQtc3lzdGVtLWRlbW9cXFxcc3JjXFxcXG1vY2tcXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcdGVzdFxcXFxXb3JrXFxcXG1hbmFnZW1lbnQtc3lzdGVtLWRlbW9cXFxcc3JjXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3Rlc3QvV29yay9tYW5hZ2VtZW50LXN5c3RlbS1kZW1vL3NyYy9tb2NrL2luZGV4LmpzXCI7Ly8gXHU1RjE1XHU1MTY1OiBtb2NranMgXHU2QTIxXHU1NzU3O1xuaW1wb3J0IE1vY2sgZnJvbSAnbW9ja2pzJ1xuXG4vLyBcdTUxODVcdTVCNThcdTZBMjFcdTYyREZcdTY1NzBcdTYzNkVcbmNvbnN0IHVzZXJMaXN0ID0gW11cbi8vIFx1NUZBQVx1NzNBRiAxMCBcdTZCMjEscHVzaCAxMCBcdTRFMkFcdTVCRjlcdThDNjE7XG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIHVzZXJMaXN0LnB1c2goe1xuICAgIGlkOiBNb2NrLm1vY2soJ0BpbmNyZW1lbnQoKScpLFxuICAgIG5hbWU6IE1vY2subW9jaygnQGNuYW1lJyksXG4gICAgZ2VuZGVyOiBNb2NrLm1vY2soJ0Bjd29yZChcIlx1NzUzN1x1NTk3M1wiKScpLFxuICAgIGVtYWlsOiBNb2NrLm1vY2soJ0BlbWFpbCcpLFxuICAgIHRlbDogTW9jay5tb2NrKC9eMVszLTldXFxkezl9JC8pLFxuICAgIGFkZHJlc3M6IE1vY2subW9jaygnQGNvdW50eSh0cnVlKScpXG4gIH0pXG59XG5cbi8vIC8vIFx1NEUwQlx1OTc2Mlx1NjYyRlx1NUJGQ1x1NTFGQVx1NEUwMFx1NEUyQVx1NjU3MFx1N0VDNDtcbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogJy9hcGkvdXNlcnMnLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiB1c2VyTGlzdFxuICAgIH1cbiAgfVxuXVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esb0JBQWlCO0FBR2pCLElBQU0sV0FBVyxDQUFDO0FBRWxCLFNBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVCLFdBQVMsS0FBSztBQUFBLElBQ1osSUFBSSxjQUFBQSxRQUFLLEtBQUssY0FBYztBQUFBLElBQzVCLE1BQU0sY0FBQUEsUUFBSyxLQUFLLFFBQVE7QUFBQSxJQUN4QixRQUFRLGNBQUFBLFFBQUssS0FBSyx3QkFBYztBQUFBLElBQ2hDLE9BQU8sY0FBQUEsUUFBSyxLQUFLLFFBQVE7QUFBQSxJQUN6QixLQUFLLGNBQUFBLFFBQUssS0FBSyxlQUFlO0FBQUEsSUFDOUIsU0FBUyxjQUFBQSxRQUFLLEtBQUssZUFBZTtBQUFBLEVBQ3BDLENBQUM7QUFDSDtBQUdBLElBQU8sZUFBUTtBQUFBLEVBQ2I7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJNb2NrIl0KfQo=
