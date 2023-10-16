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

// mock/index.js
var mock_exports = {};
__export(mock_exports, {
  default: () => mock_default
});
module.exports = __toCommonJS(mock_exports);
var import_mockjs = __toESM(require("mockjs"));
var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push({
    id: import_mockjs.default.mock("@guid"),
    name: import_mockjs.default.mock("@cname"),
    place: import_mockjs.default.mock("@county(true)")
  });
}
var mock_default = [
  // 简单模拟一个接口:若是 '/list' 请求,那么就会返回一个 arr;
  {
    // 发现不需要什么参数,get 方法,地址是 /list;
    url: "/list",
    // 表示:请求的地址;
    method: "get",
    // 表示:请求的方式;
    response: () => {
      return arr;
    }
  },
  {
    url: "/del",
    method: "delete",
    response: ({ query }) => {
      const index = arr.findIndex((item) => item.id === query.id);
      arr.splice(index, 1);
      return { sucess: true };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFx0ZXN0XFxcXFdvcmtcXFxcbWFuYWdlbWVudC1zeXN0ZW0tZGVtb1xcXFxtb2NrXFxcXGluZGV4LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHRlc3RcXFxcV29ya1xcXFxtYW5hZ2VtZW50LXN5c3RlbS1kZW1vXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L3Rlc3QvV29yay9tYW5hZ2VtZW50LXN5c3RlbS1kZW1vL21vY2svaW5kZXguanNcIjsvLyBcdTVGMTVcdTUxNjU6IG1vY2tqcyBcdTZBMjFcdTU3NTc7XG5pbXBvcnQgTW9jayBmcm9tICdtb2NranMnXG5cbi8vIFx1NTE4NVx1NUI1OFx1NkEyMVx1NjJERlx1NjU3MFx1NjM2RVxuY29uc3QgYXJyID0gW11cbi8vIFx1NUZBQVx1NzNBRiAxMCBcdTZCMjEscHVzaCAxMCBcdTRFMkFcdTVCRjlcdThDNjE7XG5mb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgYXJyLnB1c2goe1xuICAgIGlkOiBNb2NrLm1vY2soJ0BndWlkJyksXG4gICAgbmFtZTogTW9jay5tb2NrKCdAY25hbWUnKSxcbiAgICBwbGFjZTogTW9jay5tb2NrKCdAY291bnR5KHRydWUpJylcbiAgfSlcbn1cblxuLy8gXHU0RTBCXHU5NzYyXHU2NjJGXHU1QkZDXHU1MUZBXHU0RTAwXHU0RTJBXHU2NTcwXHU3RUM0O1xuZXhwb3J0IGRlZmF1bHQgW1xuICAvLyBcdTdCODBcdTUzNTVcdTZBMjFcdTYyREZcdTRFMDBcdTRFMkFcdTYzQTVcdTUzRTM6XHU4MkU1XHU2NjJGICcvbGlzdCcgXHU4QkY3XHU2QzQyLFx1OTBBM1x1NEU0OFx1NUMzMVx1NEYxQVx1OEZENFx1NTZERVx1NEUwMFx1NEUyQSBhcnI7XG4gIHtcbiAgICAvLyBcdTUzRDFcdTczQjBcdTRFMERcdTk3MDBcdTg5ODFcdTRFQzBcdTRFNDhcdTUzQzJcdTY1NzAsZ2V0IFx1NjVCOVx1NkNENSxcdTU3MzBcdTU3NDBcdTY2MkYgL2xpc3Q7XG4gICAgdXJsOiAnL2xpc3QnLCAvLyBcdTg4NjhcdTc5M0E6XHU4QkY3XHU2QzQyXHU3Njg0XHU1NzMwXHU1NzQwO1xuICAgIG1ldGhvZDogJ2dldCcsIC8vIFx1ODg2OFx1NzkzQTpcdThCRjdcdTZDNDJcdTc2ODRcdTY1QjlcdTVGMEY7XG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiBhcnJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICB1cmw6ICcvZGVsJyxcbiAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgIHJlc3BvbnNlOiAoeyBxdWVyeSB9KSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHF1ZXJ5LmlkKVxuICAgICAgYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHJldHVybiB7IHN1Y2VzczogdHJ1ZSB9XG4gICAgfVxuICB9XG5dXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBaUI7QUFHakIsSUFBTSxNQUFNLENBQUM7QUFFYixTQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixNQUFJLEtBQUs7QUFBQSxJQUNQLElBQUksY0FBQUEsUUFBSyxLQUFLLE9BQU87QUFBQSxJQUNyQixNQUFNLGNBQUFBLFFBQUssS0FBSyxRQUFRO0FBQUEsSUFDeEIsT0FBTyxjQUFBQSxRQUFLLEtBQUssZUFBZTtBQUFBLEVBQ2xDLENBQUM7QUFDSDtBQUdBLElBQU8sZUFBUTtBQUFBO0FBQUEsRUFFYjtBQUFBO0FBQUEsSUFFRSxLQUFLO0FBQUE7QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxDQUFDLEVBQUUsTUFBTSxNQUFNO0FBQ3ZCLFlBQU0sUUFBUSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEtBQUssT0FBTyxNQUFNLEVBQUU7QUFDMUQsVUFBSSxPQUFPLE9BQU8sQ0FBQztBQUNuQixhQUFPLEVBQUUsUUFBUSxLQUFLO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbIk1vY2siXQp9Cg==
