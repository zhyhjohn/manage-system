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
import_mockjs.default.Random.extend({
  phone: () => {
    const phonePrefixs = ["132", "135", "189"];
    return pick(phonePrefixs) + import_mockjs.default.mock(/\d{8}/);
  }
});
var userList = [];
for (let i = 0; i < 100; i++) {
  userList.push({
    id: import_mockjs.default.mock("@guid"),
    name: import_mockjs.default.mock("@cname"),
    gender: import_mockjs.default.pick["\u7537", "\u5973"],
    email: import_mockjs.default.mock("@county(true)"),
    tel: import_mockjs.default.mock("@phone"),
    address: import_mockjs.default.mock("@county(true)")
  });
}
var mock_default = [
  {
    url: "/userlist",
    method: "get",
    response: () => {
      return userList;
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcdGVzdFxcXFxXb3JrXFxcXG1hbmFnZW1lbnQtc3lzdGVtLWRlbW9cXFxcc3JjXFxcXG1vY2tcXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcdGVzdFxcXFxXb3JrXFxcXG1hbmFnZW1lbnQtc3lzdGVtLWRlbW9cXFxcc3JjXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3Rlc3QvV29yay9tYW5hZ2VtZW50LXN5c3RlbS1kZW1vL3NyYy9tb2NrL2luZGV4LmpzXCI7Ly8gXHU1RjE1XHU1MTY1OiBtb2NranMgXHU2QTIxXHU1NzU3O1xuaW1wb3J0IE1vY2sgZnJvbSAnbW9ja2pzJ1xuXG5Nb2NrLlJhbmRvbS5leHRlbmQoe1xuICBwaG9uZTogKCkgPT4ge1xuICAgIGNvbnN0IHBob25lUHJlZml4cyA9IFsnMTMyJywgJzEzNScsICcxODknXSAvLyBcdTgxRUFcdTVERjFcdTUxOTlcdTUyNERcdTdGMDBcdTU0QzhcbiAgICByZXR1cm4gcGljayhwaG9uZVByZWZpeHMpICsgTW9jay5tb2NrKC9cXGR7OH0vKSAvL051bWJlcigpXG4gIH1cbn0pXG5cbi8vIFx1NTE4NVx1NUI1OFx1NkEyMVx1NjJERlx1NjU3MFx1NjM2RVxuY29uc3QgdXNlckxpc3QgPSBbXVxuLy8gXHU1RkFBXHU3M0FGIDEwIFx1NkIyMSxwdXNoIDEwIFx1NEUyQVx1NUJGOVx1OEM2MTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgdXNlckxpc3QucHVzaCh7XG4gICAgaWQ6IE1vY2subW9jaygnQGd1aWQnKSxcbiAgICBuYW1lOiBNb2NrLm1vY2soJ0BjbmFtZScpLFxuICAgIGdlbmRlcjogTW9jay5waWNrWygnXHU3NTM3JywgJ1x1NTk3MycpXSxcbiAgICBlbWFpbDogTW9jay5tb2NrKCdAY291bnR5KHRydWUpJyksXG4gICAgdGVsOiBNb2NrLm1vY2soJ0BwaG9uZScpLFxuICAgIGFkZHJlc3M6IE1vY2subW9jaygnQGNvdW50eSh0cnVlKScpXG4gIH0pXG59XG5cbi8vIFx1NEUwQlx1OTc2Mlx1NjYyRlx1NUJGQ1x1NTFGQVx1NEUwMFx1NEUyQVx1NjU3MFx1N0VDNDtcbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogJy91c2VybGlzdCcsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHVzZXJMaXN0XG4gICAgfVxuICB9XG5dXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBaUI7QUFFakIsY0FBQUEsUUFBSyxPQUFPLE9BQU87QUFBQSxFQUNqQixPQUFPLE1BQU07QUFDWCxVQUFNLGVBQWUsQ0FBQyxPQUFPLE9BQU8sS0FBSztBQUN6QyxXQUFPLEtBQUssWUFBWSxJQUFJLGNBQUFBLFFBQUssS0FBSyxPQUFPO0FBQUEsRUFDL0M7QUFDRixDQUFDO0FBR0QsSUFBTSxXQUFXLENBQUM7QUFFbEIsU0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsV0FBUyxLQUFLO0FBQUEsSUFDWixJQUFJLGNBQUFBLFFBQUssS0FBSyxPQUFPO0FBQUEsSUFDckIsTUFBTSxjQUFBQSxRQUFLLEtBQUssUUFBUTtBQUFBLElBQ3hCLFFBQVEsY0FBQUEsUUFBSyxLQUFNLFVBQUssUUFBSTtBQUFBLElBQzVCLE9BQU8sY0FBQUEsUUFBSyxLQUFLLGVBQWU7QUFBQSxJQUNoQyxLQUFLLGNBQUFBLFFBQUssS0FBSyxRQUFRO0FBQUEsSUFDdkIsU0FBUyxjQUFBQSxRQUFLLEtBQUssZUFBZTtBQUFBLEVBQ3BDLENBQUM7QUFDSDtBQUdBLElBQU8sZUFBUTtBQUFBLEVBQ2I7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJNb2NrIl0KfQo=
