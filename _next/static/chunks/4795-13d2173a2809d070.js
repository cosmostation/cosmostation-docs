(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4795],{4522:function(e,t,n){"use strict";n.d(t,{j:function(){return G}});var l=n(1527),a=n(959),s=n(3669),i=n(3143),o=n(2699),r=n(8350),c=n.n(r),u=n(5904),d=n.n(u);let p=c()(()=>n.e(4246).then(n.t.bind(n,4246,23)),{loadableGenerated:{webpack:()=>[4246]},ssr:!1}),h=e=>{let{value:t,onChange:n}=e,s=(0,a.useCallback)(e=>{n(e.updated_src)},[]),i=(0,a.useMemo)(()=>(0,l.jsx)(p,{src:t,name:!1,indentWidth:2,displayObjectSize:!1,style:{backgroundColor:"transparent"},onEdit:s}),[t]);return(0,l.jsx)("div",{className:d().container,children:i})},_=e=>{let{payload:t,onChangePayload:n}=e;return(0,l.jsx)(h,{value:t,onChange:n})};var x=n(5924),j=n(6374),v=n.n(j);let m=e=>{let t=(0,i.CEd)(["emptyColor"],e);return(0,l.jsx)("div",{children:(0,l.jsx)("button",{...t,className:(0,x.Z)(v().button,e.emptyColor&&v().emptyColor),children:e.children})})};var C=n(8003),b=n.n(C);let y=e=>{let{children:t,border:n}=e;return(0,l.jsx)("div",{className:(0,x.Z)(b().title,n&&b().border),children:t})};var f=n(88),g=n.n(f);let k=e=>{let{title:t,children:n,optional:a}=e;return(0,l.jsxs)("div",{className:g().contentValue,children:[(0,l.jsxs)("div",{className:g().title,children:[t,a&&(0,l.jsx)("span",{className:g().essential,children:"*"})]}),(0,l.jsx)("div",{className:g().value,children:n})]})};var V={src:"/_next/static/media/CautionInfoIcon.df7841bf.svg",height:16,width:16,blurWidth:0,blurHeight:0},w=n(3285),L=n.n(w);let N=e=>{let t=(0,i.CEd)(["label","optional","type"],e);return(0,l.jsx)("input",{...t,className:L().input})};var I=n(747),D=n.n(I);let S=e=>{let{bearerToken:t,useBearerAuthorization:n,bearerTokenInputChangeHandler:a}=e;return(0,l.jsx)("section",{className:D().container,children:n&&(0,l.jsx)(N,{placeholder:"Bear Token",onChange:a,value:t,disabled:!0})})};var E=n(8677),M=n.n(E);let R=e=>{let{parameters:t,inputParams:n,setInputParams:s,displayKey:o}=e,r=(0,a.useCallback)(e=>t=>{let l=t.target.value,a=(0,i.d9v)(n),o=a[e];a[e]={key:o.key,value:l,optional:o.optional},s(a)},[n]);return(0,l.jsx)("section",{className:M().container,children:t.map((e,t)=>{if(e!==o)return;let a=n[t];return(0,l.jsx)("div",{children:(0,l.jsx)(N,{label:e,value:(null==a?void 0:a.value)||"",onChange:r(t),optional:!1,placeholder:o})},e)})})},q=e=>{let{query:t,inputQuery:n,setInputQuery:s}=e;(0,a.useEffect)(()=>{let e=null==t?void 0:t.map(e=>({key:e.key,value:"",optional:e.optional||!0}));s(e)},[t]);let o=(0,a.useCallback)(e=>t=>{let l=t.target.value,a=(0,i.d9v)(n),o=a[e];a[e]={key:o.key,value:l,optional:o.optional},s(a)},[n]);return t?(0,l.jsx)("div",{children:null==t?void 0:t.map((e,t)=>{let a=n[t];return(0,l.jsx)(k,{title:e.key,optional:!e.optional,children:(0,l.jsx)(N,{label:e.key,value:(null==a?void 0:a.value)||"",onChange:o(t),optional:e.optional||!1,type:e.type,placeholder:e.placeholder})},"".concat(e.key,"-").concat(t))})}):null};n(771);var B=n(977),H=n(560),Q=n.n(H);let T={container:Q().container,basicChildStyle:Q().basicChildStyle,expander:Q().expander,label:Q().label,nullValue:Q().nullValue,undefinedValue:Q().undefinedValue,numberValue:Q().numberValue,stringValue:Q().stringValue,booleanValue:Q().booleanValue,otherValue:Q().otherValue,punctuation:Q().punctuation,pointer:Q().pointer},W=e=>{let t=(0,i.CEd)(["style"],e),n=(0,a.useMemo)(()=>(0,l.jsx)(B.gc,{...t,style:T}),[e.data]);return n};var P=n(1521),U=n.n(P);let A=e=>{let{result:t,responseTime:n}=e;if(!t)return null;let a=t.status,s=t.headers,i=t.config.headers,o=t.config.url,r=t.data,c=i.Authorization,u=i.Accept,d=s["content-type"],p=s["content-length"],h=a>=400;return(0,l.jsxs)("section",{className:U().container,children:[(0,l.jsx)(y,{children:"Request"}),(0,l.jsxs)("div",{className:U().sectionContent,children:[(0,l.jsx)(k,{title:"Request URL",children:decodeURIComponent(o)}),!!c&&(0,l.jsx)(k,{title:"Authorization",children:c}),(0,l.jsx)(k,{title:"Accept",children:u})]}),(0,l.jsx)(y,{border:!0,children:"Response"}),(0,l.jsxs)("div",{className:U().sectionContent,children:[(0,l.jsxs)(k,{title:"Status Code",children:[a,h&&(0,l.jsx)("span",{className:U().error,children:"(Error Occured)"})]}),(0,l.jsx)(k,{title:"Content Type",children:d}),(0,l.jsx)(k,{title:"Content Length",children:p}),!h&&n&&(0,l.jsxs)(k,{title:"Response Time",children:[n,"ms"]})]}),(0,l.jsx)(y,{border:!0,children:"Body Response"}),(0,l.jsx)(W,{data:r})]})};var F=n(7006),J=n.n(F),O=n(9787),Z=n.n(O),K=n(1376),z=n.n(K);let G=e=>{let{method:t,host:n,url:r,query:c,body:u,useBearerAuthorization:d,disabled:p}=e,[h,x]=(0,a.useState)("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2ODE0NDM3fQ.craahQR9WtJOOxspvNtiQmnNxD7l05tCBStgSW6cLstJcCFBU54_Kpp_n7aPfgIop2hjOobuZn85LVq4VxuLGA"),[j,v]=(0,a.useState)([]),[C,b]=(0,a.useState)([]),[f,g]=(0,a.useState)(u),[w,L]=(0,a.useState)(),[N,I]=(0,a.useState)(!1),[D,E]=(0,a.useState)(0),M=(0,a.useMemo)(()=>{let e=RegExp("(?<=:)(\\w+)","g"),t=r.match(e);return t},[r]),B=(0,a.useCallback)(()=>{let e=null==M?void 0:M.map(e=>({key:e,value:(()=>{if("network"===e)return"osmosis";if("validatorAddress"===e||"address"===e){let e=(0,o.includes)(r,"/:network/validators/")||(0,o.includes)(r,"/:network/apr/");return e?"osmovaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4ep88n0y4":"osmo1clpqr4nrk4khgkxj78fcwwh6dl3uw4epasmvnj"}})(),optional:!1}));v(e)},[M]),H=(0,a.useCallback)(()=>{let e=(null==c?void 0:c.map(e=>({key:e.key,value:"",optional:e.optional||!0})))||[];b(e)},[c]),Q=(0,a.useCallback)(()=>{g(u)},[u]);(0,a.useEffect)(B,[M]),(0,a.useEffect)(H,[c]);let T=(0,a.useMemo)(()=>{let e={};C.forEach(t=>{e[t.key]=t.value});let t=(0,i.hXT)((0,i.CyQ)(i.xbD))(e),n=Z().stringify(t,{addQueryPrefix:!0});return n},[C]),W=(0,a.useMemo)(()=>{let e=r.replace(/:(\w+)/g,(e,t)=>{let n=null==j?void 0:j.find(e=>e.key===t);return(0,i.kKJ)(n)?e:n.value?n.value:":".concat(n.key)});return"".concat(n).concat(e).concat(T)},[r,j,T]),P=(0,a.useCallback)(e=>{let t=e.target.value;x(t)},[]),U=(0,a.useMemo)(()=>{if(p)return!1;let e=null==j?void 0:j.filter(e=>!e.optional&&(!e.value||(0,i.xbD)(e.value))),t=C.filter(e=>!e.optional&&(!e.value||(0,i.xbD)(e.value)));return!(d&&(0,i.xbD)(h)||!(0,i.xbD)(e)||!(0,i.xbD)(t)||!(0,i.xbD)(u)&&(0,i.xbD)(f))},[p,d,h,j,C]),F=(0,a.useCallback)((0,o.throttle)(async()=>{try{if(!U)return!1;let e={method:t,url:W,headers:{}};"POST"===t&&(e.data=f),d&&(e.headers={...e.headers,Authorization:"Bearer ".concat(h)}),I(!0),E(0);let n=J()(),l=await (0,s.Z)(e),a=J()(),i=a.diff(n,"milliseconds");E(i),L(l)}catch(e){L(e.response)}finally{I(!1)}},1e3),[t,W,f,d,h,U]),O=(0,a.useCallback)((0,i.zGw)(B,H,Q),[B,H,Q]);return(0,l.jsxs)("div",{className:z().container,children:[(0,l.jsx)("h3",{children:"Try API"}),p&&(0,l.jsxs)("h5",{className:z().disabledDescription,children:[(0,l.jsx)("img",{className:z().cautionIcon,src:V.src}),"You are unable to try executing API from this page."]}),(0,l.jsxs)("div",{className:z().contentContainer,children:[(0,l.jsxs)("div",{className:z().sectionContent,children:[(0,l.jsxs)(y,{children:["Method : ",(0,l.jsx)("span",{className:z().method,children:t.toUpperCase()})]}),(0,l.jsx)(k,{title:"URL",children:r}),(0,l.jsx)(k,{title:"CallURL",children:decodeURIComponent(W)})]}),(0,l.jsxs)("div",{className:z().sectionContent,children:[(0,l.jsx)(y,{border:!0,children:"Header"}),(0,l.jsx)(k,{title:"Bear Token",optional:!0,children:(0,l.jsx)(S,{bearerToken:h,useBearerAuthorization:d,bearerTokenInputChangeHandler:P})})]}),!!M&&!(0,i.xbD)(M)&&(0,l.jsxs)("div",{className:z().sectionContent,children:[(0,l.jsx)(y,{children:"Parameters"}),M.map(e=>(0,l.jsx)(k,{title:e,optional:!0,children:(0,l.jsx)(R,{displayKey:e,parameters:M,inputParams:j,setInputParams:v})},e))]}),!!c&&!(0,i.xbD)(c)&&(0,l.jsxs)("div",{className:z().sectionContent,children:[(0,l.jsx)(y,{children:"Queries"}),(0,l.jsx)(q,{query:c,inputQuery:C,setInputQuery:b})]}),!!u&&(0,l.jsxs)("div",{className:z().sectionContent,children:[(0,l.jsx)(y,{children:"Body"}),(0,l.jsx)(_,{payload:f,onChangePayload:g})]}),(0,l.jsxs)("div",{className:z().buttonContainer,children:[(0,l.jsx)(m,{onClick:F,disabled:!U,children:"Execute"}),(0,l.jsx)(m,{onClick:O,emptyColor:!0,children:"Clear"})]}),N&&(0,l.jsx)("div",{className:z().loading,children:"Loading..."}),!N&&(0,l.jsx)(A,{result:w,responseTime:D})]})]})}},7687:function(e,t,n){"use strict";var l=n(1527);n(959);let a={logo:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("svg",{width:"24",height:"22",viewBox:"0 0 72 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M24.3551 53.1043L10.8159 29.6575C10.1275 28.4702 10.1275 27.0035 10.8159 25.8162L24.3551 2.36947C25.0436 1.18217 26.3107 0.443848 27.6876 0.443848H54.7661C56.143 0.443848 57.4101 1.17219 58.0985 2.36947L71.6378 25.8162L64.9829 29.6575L52.5511 8.13638H29.9125L18.5982 27.7419L31.03 49.263L24.3751 53.1043H24.3551Z",fill:"#9C6CFF"}),(0,l.jsx)("path",{d:"M44.1545 65.8455H17.076C15.6992 65.8455 14.432 65.1171 13.7436 63.9198L0.204346 40.4731L6.85923 36.6318L19.291 58.1529H41.9296L53.2439 38.5475L40.8121 17.0263L47.467 13.1851L61.0063 36.6318C61.6947 37.8191 61.6947 39.2858 61.0063 40.4731L47.467 63.9198C46.7786 65.1071 45.5115 65.8455 44.1346 65.8455H44.1545Z",fill:"#05D2DD"})]}),(0,l.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Cosmostation"})]}),project:{link:"https://github.com/cosmostation"},docsRepositoryBase:"https://github.com/cosmostation/cosmostation-wallet-docs",useNextSeoProps:()=>({titleTemplate:"%s – Cosmostation Docs"})};t.Z=a},6374:function(e){e.exports={button:"button_button__69dLF",emptyColor:"button_emptyColor__6gW_R"}},8003:function(e){e.exports={title:"cardListTitle_title__dlv25",border:"cardListTitle_border__aJKqo"}},88:function(e){e.exports={contentValue:"cardListValue_contentValue__fGL2q",title:"cardListValue_title__h1FKH",essential:"cardListValue_essential__MWW3B",value:"cardListValue_value__I60aW"}},3285:function(e){e.exports={input:"input_input__d8AE_"}},5904:function(e){e.exports={container:"json-editor_container__uyUqy"}},560:function(e){e.exports={container:"json-viewer_container__BsxEn",basicChildStyle:"json-viewer_basicChildStyle__H3Swv",expander:"json-viewer_expander__QamS9",label:"json-viewer_label__Y5M86",nullValue:"json-viewer_nullValue__9HBqN",undefinedValue:"json-viewer_undefinedValue__4ilKF",numberValue:"json-viewer_numberValue__uuMbW",stringValue:"json-viewer_stringValue__Wr5rx",booleanValue:"json-viewer_booleanValue__yVKyu",otherValue:"json-viewer_otherValue__4N_0R",punctuation:"json-viewer_punctuation__jFVqC",pointer:"json-viewer_pointer__G7V7Y"}},747:function(e){e.exports={container:"header-section_container__Q0Qh5"}},1376:function(e){e.exports={container:"try-api_container__73OpM",disabledDescription:"try-api_disabledDescription__QeGI_",cautionIcon:"try-api_cautionIcon__qnX2u",contentContainer:"try-api_contentContainer__aECgo",sectionContent:"try-api_sectionContent__KleQY",method:"try-api_method__WqEtL",buttonContainer:"try-api_buttonContainer__cUDJv",loading:"try-api_loading__ePkPZ"}},8677:function(){},1521:function(e){e.exports={container:"result-section_container__5VS_s",sectionContent:"result-section_sectionContent__eviVH",error:"result-section_error__1qUFL"}},7002:function(){}}]);