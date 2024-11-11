import{D as i,c as h}from"./Digit-BF9Ol87v.js";import"./Segment-CrIekdsK.js";import"./index-CEThVCg_.js";const g={title:"Example/Digit",component:i,argTypes:{color:{control:"color"},height:{control:"number"},char:{control:"select",options:["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","-"]}}},r={args:{color:"red",height:250,char:"0",skew:!1}},e={args:{color:"red",height:250,char:"_",skew:!1,charMap:{_:[0,0,0,1,0,0,0],...h}}};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    color: "red",
    height: 250,
    char: "0",
    skew: false
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var t,c,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: "red",
    height: 250,
    char: "_",
    skew: false,
    charMap: {
      "_": [0, 0, 0, 1, 0, 0, 0],
      ...CharToDigit
    }
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const d=["Default","WithCharMap"];export{r as Default,e as WithCharMap,d as __namedExportsOrder,g as default};
