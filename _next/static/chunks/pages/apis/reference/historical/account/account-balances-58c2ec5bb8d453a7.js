(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3591],{7950:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/reference/historical/account/account-balances",function(){return n(3738)}])},3738:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var a=n(5893),r=n(2673),t=n(2643),l=n(4482);let o=[{depth:2,value:"[GET] /v1/:network/accounts/:address/balances",id:"get-v1networkaccountsaddressbalances"},{depth:3,value:"Request",id:"request"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",h2:"h2",strong:"strong",p:"p",h3:"h3",pre:"pre",code:"code",span:"span"},(0,t.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:"Account Balance History"}),"\n",(0,a.jsxs)(s.h2,{id:"get-v1networkaccountsaddressbalances",children:[(0,a.jsx)(s.strong,{children:"[GET]"})," /v1/:network/accounts/:address/balances"]}),"\n",(0,a.jsx)(s.p,{children:"Get balance history of an account"}),"\n",(0,a.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Headers",children:(0,a.jsx)(s.code,{"data-language":"yaml","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Authorization"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Bearer {access_token}"})]})})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Parameters",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# The name of network"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"network"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"cosmos"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# The address of account"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, required)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"address"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"cosmos1clpqr4nrk4khgkxj78fcwwh6dl3uw4ep4tgu9q"})]})]})}),"\n",(0,a.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"Queries",children:(0,a.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Request per page"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (number, optional, default: 20)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"take"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Value of `pagination.searchAfter` from previous request for pagination"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (string, optional)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"searchAfter"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MTY4OTc1NTU4NjAwMA=="})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Search start datetime"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (datetime, optional, default: 30 days ago)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"fromDateTime"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 2023-07-20"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Search end datetime"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# (datetime, optional, default: CURRENT_TIMESTAMP)"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"toDateTime"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 2023-07-21 23:59:59"})]})]})}),"\n",(0,a.jsx)(l.j,{method:"GET",host:"https://apis.mintscan.io",url:"/v1/:network/accounts/:address/balances",query:[{key:"take",type:"number",optional:!0,placeholder:"20"},{key:"searchAfter",type:"string",optional:!0,placeholder:"MTY4OTc1NTU4NjAwMA=="},{key:"fromDateTime",type:"datetime",optional:!0,placeholder:"YYYY-MM-DD OR YYYY-MM-DD HH:mm:ii"},{key:"toDateTime",type:"datetime",optional:!0,placeholder:"YYYY-MM-DD OR YYYY-MM-DD HH:mm:ii"}],useBearerAuthorization:!0})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/apis/reference/historical/account/account-balances.mdx",route:"/apis/reference/historical/account/account-balances",timestamp:1695829013e3,title:"Account Balance History",headings:o},pageNextRoute:"/apis/reference/historical/account/account-balances"})}},function(e){e.O(0,[2673,9659,3632,834,9774,2888,179],function(){return e(e.s=7950)}),_N_E=e.O()}]);