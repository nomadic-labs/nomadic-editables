"use strict";var e=require("react"),t=require("./index-28fe18a4.js");require("react-jss");var n=require("react-rte");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),a=r(n),c=t.makeStylesWithTheme((function(e){return{input:{fontSize:"inherit",fontFamily:"inherit",fontWeight:"inherit",color:e.colors.dark,backgroundColor:e.colors.inputBackground}}})),l=function(r){var l=r.content,i=r.onContentChange,u=r.placeholder,f=t._objectWithoutProperties(r,["content","onContentChange","placeholder"]),d=e.useState(null),s=t._slicedToArray(d,2),h=s[0],p=s[1],g=l.text,m=void 0===g?"":g,v=c();e.useEffect((function(){if(!h){var e=n.createValueFromString(m,"html");p(e)}}),[m,h]);return h?o.default.createElement("div",{className:v.input},o.default.createElement(a.default,Object.assign({value:h,onChange:function(e){p(e);var n=e.toString("html");i(t._objectSpread2(t._objectSpread2({},l),{},{text:n}))},placeholder:u},f))):o.default.createElement("div",null)};l.defaultProps={content:{text:""},onContentChange:function(e){return console.log("Implement a function to save content changes.",e)},placeholder:""},exports.default=l;
//# sourceMappingURL=RichTextEditor-470f7ce3.js.map