import t,{useState as n,useEffect as e}from"react";import{m as o,_ as r,a,b as c}from"./index-36b8a226.js";import"react-jss";import i,{createValueFromString as l}from"react-rte";var u=o((function(t){return{input:{fontSize:"inherit",fontFamily:"inherit",fontWeight:"inherit",color:t.colors.dark,backgroundColor:t.colors.inputBackground}}})),m=function(o){var m=o.content,s=o.onContentChange,f=o.placeholder,h=r(o,["content","onContentChange","placeholder"]),p=n(null),d=a(p,2),g=d[0],v=d[1],C=m.text,x=void 0===C?"":C,b=u();e((function(){if(!g){var t=l(x,"html");v(t)}}),[x,g]);return g?t.createElement("div",{className:b.input},t.createElement(i,Object.assign({value:g,onChange:function(t){v(t);var n=t.toString("html");s(c(c({},m),{},{text:n}))},placeholder:f},h))):t.createElement("div",null)};m.defaultProps={content:{text:""},onContentChange:function(t){return console.log("Implement a function to save content changes.",t)},placeholder:""};export default m;
//# sourceMappingURL=RichTextEditor-b6ecc43a.js.map