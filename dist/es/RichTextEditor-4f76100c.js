import t,{useState as e,useEffect as n}from"react";import{m as o,_ as r,a,b as c}from"./index-77d7cea1.js";import"react-jss";import l,{createValueFromString as i}from"react-rte";var u=o((function(t){return{input:{fontSize:"inherit",fontFamily:"inherit",fontWeight:"inherit",color:t.colors.dark,backgroundColor:t.colors.inputBackground}}})),s=function(o){var s=o.content,m=o.onContentChange,f=o.placeholder,h=r(o,["content","onContentChange","placeholder"]),d=e(null),p=a(d,2),g=p[0],v=p[1],C=s.text,x=void 0===C?"":C,b=u();n((function(){if(!g){var t=i(x,"html");v(t)}}),[x,g]);return console.log({text:x}),g?t.createElement("div",{className:b.input},t.createElement(l,Object.assign({},h,{value:g,onChange:function(t){v(t);var e=t.toString("html");m(c(c({},s),{},{text:e}))},placeholder:f}))):t.createElement("div",null)};s.defaultProps={content:{text:""},onContentChange:function(t){return console.log("Implement a function to save content changes.",t)},placeholder:""};export default s;
//# sourceMappingURL=RichTextEditor-4f76100c.js.map
