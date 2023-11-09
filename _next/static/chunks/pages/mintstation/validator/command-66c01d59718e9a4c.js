(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6940],{7833:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mintstation/validator/command",function(){return r(8575)}])},8575:function(s,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return l}});var n=r(1527),i=r(7178),o=r(2783);let l=[{depth:2,value:"Upgrade to a validator",id:"upgrade-to-a-validator"},{depth:2,value:"Unjail",id:"unjail"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",span:"span"},(0,o.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Useful command for Validators"}),"\n",(0,n.jsx)(e.h2,{id:"upgrade-to-a-validator",children:"Upgrade to a validator"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Do not attempt to upgrade your node to a validator until the node is fully in sync as per the previous step."})}),"\n",(0,n.jsxs)(e.p,{children:["To upgrade the node to a validator, you will need to submit a ",(0,n.jsx)(e.code,{children:"create-validator"})," transaction:"]}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"tx"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"staking"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"create-validator"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--amount"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1000000"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"umint"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--commission-max-change-rate"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0.1"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--commission-max-rate"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0.20"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--commission-rate"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0.1"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--min-self-delegation"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--details"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"validators write bios too"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--pubkey="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"$("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"tendermint"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"show-validator"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:")"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--moniker"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$MONIKER_NAME"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--chain-id"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" $CHAIN_ID \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--gas-prices"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.025"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"umint"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"key-nam"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})]})}),"\n",(0,n.jsx)(e.p,{children:"The above transaction is just an example. There are many more flags that can be set to customise your validator, such as your validator website, or keybase.io id, etc. To see a full list:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mintstationd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"tx"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"staking"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"create-validator"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--help"})]})})}),"\n",(0,n.jsx)(e.h2,{id:"unjail",children:"Unjail"}),"\n",(0,n.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"stationd"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"tx"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"slashing"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"unjail"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"accoun"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"t"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--keyring-backend"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"test"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--chain-id"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"mintstation-1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--fees"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"umint"})]})})})]})}e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/mintstation/validator/command.mdx",route:"/mintstation/validator/command",timestamp:1698218973e3,title:"Useful command for Validators",headings:l},pageNextRoute:"/mintstation/validator/command"})}},function(s){s.O(0,[7178,9774,2888,179],function(){return s(s.s=7833)}),_N_E=s.O()}]);