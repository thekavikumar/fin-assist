(this["webpackJsonpfin-assist"]=this["webpackJsonpfin-assist"]||[]).push([[0],{339:function(e,c,t){},341:function(e,c,t){"use strict";t.r(c);var a,n=t(0),s=t.n(n),i=t(26),l=t.n(i),r=t(37),o=t(29),d=t(27),j=t(344),u=t(346),h=t(353),b=t(35),O=t.n(b),v=t(90),x=t(52),p=t(347),m=t(109),f=t(40),g={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85"},A=function(e){return{url:e,headers:g}},y=Object(m.a)({reducerPath:"cryptoApi",baseQuery:Object(f.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return A("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return A("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timeperiod;return A("coin/".concat(c,"/history?timeperiod=").concat(t))}}),getExchanges:e.query({query:function(){return A("/exchanges")}})}}}),w=y.useGetCryptosQuery,N=y.useGetCryptoDetailsQuery,C=y.useGetExchangesQuery,k=y.useGetCryptoHistoryQuery,S=t(41),D=t(349),H=t(345),P=t(343),Q=t(4),Y=function(){return Object(Q.jsx)("div",{className:"loader",children:Object(Q.jsx)(P.a,{})})},T=function(e){var c=e.simplified,t=w(c?10:100),a=t.data,s=t.isFetching,i=Object(n.useState)(),l=Object(S.a)(i,2),r=l[0],d=l[1],j=Object(n.useState)(""),u=Object(S.a)(j,2),h=u[0],b=u[1];return Object(n.useEffect)((function(){var e,c;d(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins);var t=null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.coins.filter((function(e){return e.name.toLowerCase().includes(h)}));d(t)}),[a,h]),s?Object(Q.jsx)(Y,{}):Object(Q.jsxs)(Q.Fragment,{children:[!c&&Object(Q.jsx)("div",{className:"search-crypto",children:Object(Q.jsx)(D.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return b(e.target.value.toLowerCase())}})}),Object(Q.jsx)(v.a,{gutter:[32,32],className:"crypto-card-container",children:null===r||void 0===r?void 0:r.map((function(e){return Object(Q.jsx)(x.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(Q.jsx)(o.b,{to:"/crypto/".concat(e.uuid),children:Object(Q.jsxs)(H.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(Q.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(Q.jsxs)("p",{children:["Price: ",O()(e.price)]}),Object(Q.jsxs)("p",{children:["Market Cap: ",O()(e.marketCap)]}),Object(Q.jsxs)("p",{children:["Daily Change: ",e.change,"%"]})]})},e.uuid)},e.uuid)}))})]})},M=t(348),E=t(350),Z=t(182),G=t.n(Z),B={"x-bingapis-sdk":"true","x-rapidapi-key":"f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85","x-rapidapi-host":"bing-news-search1.p.rapidapi.com"},F=Object(m.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(f.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:B}}})}}}),U=F.useGetCryptoNewsQuery,L="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",X=u.a.Text,I=u.a.Title,z=M.a.Option,J=function(e){var c,t,a=e.simplified,s=Object(n.useState)("Cryptocurrency"),i=Object(S.a)(s,2),l=i[0],r=i[1],o=w(100).data,d=U({newsCategory:l,count:a?6:12}).data;return(null===d||void 0===d?void 0:d.value)?Object(Q.jsxs)(v.a,{gutter:[24,24],children:[!a&&Object(Q.jsx)(x.a,{span:24,children:Object(Q.jsxs)(M.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return r(e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(Q.jsx)(z,{value:"Cryptocurency",children:"Cryptocurrency"}),null===o||void 0===o||null===(c=o.data)||void 0===c||null===(t=c.coins)||void 0===t?void 0:t.map((function(e){return Object(Q.jsx)(z,{value:e.name,children:e.name})}))]})}),d.value.map((function(e,c){var t,a,n,s,i,l;return Object(Q.jsx)(x.a,{xs:24,sm:12,lg:8,children:Object(Q.jsx)(H.a,{hoverable:!0,className:"news-card",children:Object(Q.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(Q.jsxs)("div",{className:"news-image-container",children:[Object(Q.jsx)(I,{className:"news-title",level:4,children:e.name}),Object(Q.jsx)("img",{src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||L,alt:""})]}),Object(Q.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(Q.jsxs)("div",{className:"provider-container",children:[Object(Q.jsxs)("div",{children:[Object(Q.jsx)(E.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||L,alt:""}),Object(Q.jsx)(X,{className:"provider-name",children:null===(l=e.provider[0])||void 0===l?void 0:l.name})]}),Object(Q.jsx)(X,{children:G()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]}):Object(Q.jsx)(Y,{})},W=u.a.Title,V=function(){var e,c=w(10),t=c.data,a=c.isFetching,n=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(Q.jsx)(Y,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:"hero-main",children:[Object(Q.jsxs)("div",{className:"hero",children:[Object(Q.jsx)(W,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(Q.jsxs)(v.a,{gutter:[32,32],children:[Object(Q.jsx)(x.a,{span:12,children:Object(Q.jsx)(p.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(Q.jsx)(x.a,{span:12,children:Object(Q.jsx)(p.a,{title:"Total Exchanges",value:O()(n.totalExchanges)})}),Object(Q.jsx)(x.a,{span:12,children:Object(Q.jsx)(p.a,{title:"Total Market Cap:",value:"$".concat(O()(n.totalMarketCap))})}),Object(Q.jsx)(x.a,{span:12,children:Object(Q.jsx)(p.a,{title:"Total 24h Volume",value:"$".concat(O()(n.total24hVolume))})}),Object(Q.jsx)(x.a,{span:12,children:Object(Q.jsx)(p.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(Q.jsx)(x.a,{span:12,children:Object(Q.jsx)(p.a,{title:"Total Markets",value:O()(n.totalMarkets)})})]})]}),Object(Q.jsxs)("div",{className:"buddy",children:[Object(Q.jsx)("h1",{children:"Hi there"}),Object(Q.jsx)("h1",{children:"This is Expense Buddy"})]})]}),Object(Q.jsxs)("div",{className:"home-heading-container",children:[Object(Q.jsx)(W,{level:2,className:"home-title",children:"Top 10 Cryptos In The World"}),Object(Q.jsx)(W,{level:3,className:"show-more",children:Object(Q.jsx)(o.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(Q.jsx)(T,{simplified:!0})]})},q=t(194),K=t(352),R=t(354),$=t(355),_=t(356),ee=t(357),ce=t(358),te=t(359),ae=function(){var e=Object(n.useState)(!0),c=Object(S.a)(e,2),t=c[0],a=c[1],i=Object(n.useState)(void 0),l=Object(S.a)(i,2),r=l[0],d=l[1],j=s.a.useState(!1),h=Object(S.a)(j,2),b=h[0],O=h[1];function v(){window.scrollY>100?O(!0):O(!1)}return s.a.useEffect((function(){return window.addEventListener("scroll",v),function(){return window.removeEventListener("scroll",v)}}),[]),Object(n.useEffect)((function(){var e=function(){return d(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(r<=800))}),[r]),Object(Q.jsxs)("div",{className:"nav-container ".concat(b&&"sticky"),children:[Object(Q.jsxs)("div",{className:"logo-container",children:[Object(Q.jsx)(E.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAXUUlEQVR4nO3da5RcVZnG8f97qqqr0t1JIDeICiSAgEJAGBQm9xaQgHhZKiAOOMhNVMArM4MM4gV0OWtcIxgQESIMLB3jiKNAEhXopBMiIogmMAokhghDSCadkKQ7XdVVdd75UImGTEIu7H32qVPvby2+6Mq7H1j9ZJ+uOudsMMYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMSYsCR3A7B5dzAjqhfGojCOWgxDGojoKkZGgI1EZiVAEGb7lT7QBHVv+eD/I4Jb/fQNKBdFekLWI9qLSi7KKSFeCriBffU4msi7Ev6fZM1bglNEHOvYjV5+A6NGgExA5GjgUGJZwlI0gz6LxUpClqCyhLb9EJvWtSTiHeRVW4IB0Njle13YE9WgSEk9GZTIwPnSuXViF8jiii4hzDzNm4FE5ksHQoVqVFThhurB4GHVmEHEayhT+epnbrPqAhShzEebJtMqzoQO1EiuwZzqbHGNKUxF9P8IMlENCZ/JsGcpcVO5herlHhDh0oCyzAnugSsT8IROJ4jOBM4GxoTMFshbRudSjf2d6+SErs3tWYId0wZADoH4ByAXAgaHzpIqwklhnoblZ0jXwQug4WWEFfo10Njn2bzsDlYuBGUAudKaUq6PMJdLbeGnwPjmLeuhAzcwKvJe0m06i0odAPwscFjpPk3oO9BYGB2+RU9gQOkwzsgLvIe1pH4vGVwAfBd03dJ5skPUot6C5G6Wr/6XQaZqJFXg3affQUUTVz4FeAQwJnSejBoE7iPPXWpF3jxV4F3QxI6iWrgD9NMnfDdWq+oHbyReutzu/Xp0VeCf0KdpYW7wC+GdgeOg8LepllK/QWfmWHE81dJg0sgLvgHaXTibSG4A3h85iAHgW1atl+uCPQgdJGyvwNnRB8Y3ATcApobOYHfo5MZdJV2VZ6CBpYQUGtJs8UfETwPU0/73JWTcA8i+MKn/VHqKwAqMLC8cQ524DPT50FrNHlqDxRTK9+pvQQUJq2QJrN3lypWtQ/TyQD53H7JUayPXE5euki1roMCG0ZIG1uzSOnN6FMjl0FuOCPEqsf9eKvxtHoQMkTXtK5xPpEitvlujbiHhc55fOC50kaS2zA+scirQXZyJcFDqL8Uj0LvKDH5WJDISOkoSWKLB2D3kDkf4Y9G2hs5hE/JZY3i9d5edCB/Et85fQ2lM6iSh+wsrbUo4j0kd1fqkrdBDfMl1gXVC6ANW5wKjQWUziRiP6C+0pXho6iE+ZLLAqogtKXwS9HSiEzmOCyaN8WxcUb1DN5s965n4H1jkU6SjNAv1Q6CwmRZT/pK3y4ax9uJWpAuvP6aBU/Al2L7PZEWE+UeXdMplNoaO4kpkC6y8ZTlvbHJCJobOYNJPfUCjPyMrRMZkosC5kX+LSPPuk2eym3xK3nSpdm9aGDvJaNX2BG6+6GXwImBA6i2kqS6m2dcnJm3pDB3ktmvqTOX2EYUTVuVh5zZ6bQGHwAV1IU7+YsGkLrI/RTqV4rz0GaF6DtxC33a/ddIYOsreassDaTYn+4r3A1NBZTLOTvyVX/InOoRg6yd5ougKrIkjbd4G3h85iMkI5mY7SnarN95lQ0xWYntJXETk3dAyTNXo2PaUvh06xp5rqbxxdULoQ9LbQObw64Zm9/7O/3s0TXpJYo1kJH5OplVtCx9hdTbMDa3fpZNCm+Q9rmpRyYzM9xdQUBdZFQw4k0u9j764y/hWQ+EfaXRoXOsjuSH2BtZsSdf0xMDp0FtMqZCSR3qOL038GVuoLTFScad/1mgCOpVa8IXSIXUl1gbWndD5wYegcpkUpF6f9RXmpLbAuLB2Maur/BjQZJ3qzdhcPDR1jZ1JZYO0mTxzfjR3nacLrJOIOnU0udJAdSWWBkdIXQP42dAxjtpjEmLarQ4fYkdQVWLsLxyP6+dA5jHkFkWt0QeHY0DG2l6oCN04JjL4D6bxcMS0tj0bf08fS9ZLEVBWYXNuVwHGhYxizQ8IxbC5+KnSMbaWmwLqg+EZUrgmdw5hXpXwpTZ9Kp6bAwE2Q/jtfTMsbQsSNoUNslYoCa0/be7BXwZrmcZouKJ4eOgSk4HFCfYo21haXAtl5Tu21PK6Xdll/nHD3LaO/cpScTiVkiPA7cG/xk2SpvFl30FUw8p2QHxE6SWiH0ln8eOgQQXdgfWDoSAqDy4HhIXM4l+Ud+C9i6FsCL3dD7zworwgdKISXiSoHyxTWhwoQdgcuVK8ka+VtGRF0vgXe8Gk4Zh686W4Y9S6I2kIHS9I+xKXPhgwQbAfWns7RaHU5MDRUBm9aYgfeicGXYNXtsOYHEA+GTpOEPvKFQ2RS35oQi4fbgbX6ebJY3lbXtj8cdDVMmAP7tMRbfzupVj8XavEgO7Auan8d9fpyoBRife9aeQfeXu9ceO5aqL0cOolPm6nmD5aT+1cnvXCYHbgeX0FWy2teaeRpcNSPYcghoZP41E6hflmIhRMvsP6cDuDipNc1ARUPgDf/EIZl+gnRj4c4oiX5HbhUvAi05b9EbDn5YXD4rTA0qyfA6ghyxfOTXjXRAutscgiXJ7mmSZGoCIffAh1Hhk7ih/KZpN/ckewOvH/bGSiZ/mXI7EKuEw67GfKZ/Pp/PGOSvUc62QKrXJLoeiad2sbCuIw+OSpclORyiRVYu4e8ATg1qfVMyo18d1a/Jz5dHxzy+qQWS24HjuoXYq/KMds64EpC383rQZ58PbEPsxK5kUOViJ7iCuDAJNYLzvWNHD4e4ZM85Doav5NGpcZlbfthje9rOyZA+xHu19yRZZ+G3vuTWSs5K5haOUQE9b1QMoeF9ZQmg7ZGeZuF1qC2ofEPwMBy2LDor/9/6UAYMQNGfwB8nvM15pwsFng8C4acCAO/8r1QQtcvelYy6xhnyn+GF2+FJafDc1+Eer+fdYa9tfGXRdZInMjPvPcCqxIB7/O9jvFEa7D6+/DUmTC4ysMC0nhBQPacveVn3yv/O3BPaTow1vs6xq+BZfDHC6De5372sBPdzwxvLAtKk3wvksAltNrumxUDy+H5f3U/t/PYxl1aWSP6ft9L+C+wMMP7GiY5a2ZD5Xm3M6NS4xPwrFH/P/teC6wLi4fZrZMZozVYe5/7ucWD3M8MTThcHyx6/fn3uwPHnOZ1vgljw8PuZ5YyWGCAnN+7D/0W2C6fs6nvCYjLbme27ed2Xlp47oC3Ams3eZTJvuabgLQK1bVuZ0btbuelx3Sfjxj624GlcCwk/4YCk5DqOrfzcpk9FmsoowsTfA33V+Ao8v4dmAmovsHtPMng10hb5SJvV6IefweWif5mm+AixztmfaPbeWkSi7fNzF+BVa3AWVYY6XZeLcMFFm2uAmt3x/5AYg81m6QJ5Ee5HZnlHRgO0Ic7x/gY7GcHjmpHe5lr0qFzAuQdH6pRXul2XtrUakf5GOvrEtrbp24mBYZPcz+zf6n7mWki6mVT81RgtQJnleRh9Hvdzqz3Nx6UyDL10wlPBRYrcFbt/+HGSQsubXoctO52ZupEzVRgDvU014TUeWzjPGDXen/qfmb6eOmE8wLrA0NHAsNczzWBDX1b42gU18/t1jbBul+6nZlKuq92s4/rqe5falcsjyPO3KtCW1d+WGPXHfNBEA+39Pb+1P2DEalVGAfV37mc6L7AKuOdzzTJaz8CRr238YFV3tNZdPU+eGGmn9lplJNxQOoLnNEHOzMo1wG5YY1zigqjoP1waH9T43veUgJ/D6/6LtQcPxSRau43Nx/vhd7fw8zW5vpF8WkwsAxWfS90imSpOH/o2f0vq6qO77EzmVPvh2evaKHffbdy3w33BRZxfJe7yRaF5Vc2duBWozjvhoePi20HNjuhdfjT1bD+gdBJwohw3g0fH2KNSObINNNU4kFY/llY9/PQScLxsAO7L7DYa3TMdsorYNk/QP/vQycJrcP1QB+fQrd5mGmaUgxrfgR//hrUN4cOkwbO3xtkBTbuaQ165zS+5938dOg0KSLOu2EFNm7VXoZnPwkbvR+N24TUdmCTcvl94E13Qt9SWD8P1v4MBleHTpUWzgtsTx0YPzonwAFXwlsegvHXZffkhcB8FHjQw0zTrKQAY86Co+fB/h+B1v6OseJ6oBXYJCPXAQddBUfMalxmtySxApsmN3wSHDnb/Wt5moI674YV2CSvNA7efDcUW+7V4c53YA+3UtLX2r/mePDrBE6vz7VDYb/GiQvFA2DocbBvFxS8vI8c2sbC4bfBU2c2HuxvDf2uB3p4Gkl7nc80/tU3N2553PQYrP0JrLgGnpgGT18Mfb/1s+aQQ+Dgr/uZnU6Oz2T1cgktzkOaQLQOLy+Apz4Iyz7XeAGdayNOgdHvdz83nZqgwLYDZ1Pvz+CpD0DlefezD/zHxmt9sk5x3g33BY5tB86s8gr473Nh8CW3c/P7wNhL3M5MI3HfDQ87MHbfXJYNroJnLm88sODSfuc0XmGbZaJrXI/0cQn9nPOZJl36fw+rZrmdmeuEke92OzN1dIXriVZgs3devKXx5JFLo97jdl7aSDMUOFd1HtKkUL0PVv/A7czOCZDf1+3MNClXnW9uzgssE1kHbHA916TQ2nscD4xg+ImOZ6aFrJdT3PfC1/GiLfjO0BZUXun+a6X2N7udlx7P+hjqp8AaZ/y4dfMXfU+4ndeewG2jIagu8THW1w5sBW4VmxzfZlnwdJBaeF464WkHFi9/25gU2uz43KZcVu/I8rOp+SlwLt/yLwBuGTXHn8tk9WH/KP+kl7E+hsrUvv8FXvAx26SM6wLnMnkuwJ+3dMI5jy+1k8X+ZpvUqDsusFbdzksFWeRrsr8Cqz7sbbZJEcc/QvGA23lp4LEL/gqci63ArSA31O28egbPDPbYBX8FrlV/D7TMu1Ja1pCD3c6rrXM7L7yNrKp6+QALPBZYuqgBC33NNykx9Di38yqZ++xzvpxF3ddwvyczKPO8zjfhjZjhdl7Zwxs/QvLcAb8FFuZ6nW/CGnYCtB/hdmY5Yw+z5cTrieZeCyzTKs8C9mBDFkm+8S4r11zfWx3WH2VK+U8+F/B/uJnaLpxJB3wOOo5yO7O2Hga8/rwnK4Gf/QQKLK4fGjWhve4SGHuB+7kbHwXU/dxQoujH3pfwvQDTyz3Ai97XMf5FJRj/lcbu68O6TF2svcCUAe+nnHsvsAgxive/iYxPEYx4B0y4F8ac7WeJej+sf8jP7BCE2SLEvpdxfzbSjkTRD9H48kTWMu7k94URp8LYj0BpvN+1eu+FOEt3YcU/TGKVZAo8ZeBXLCyuRDkokfXMnpF84ymgtjGN84pKb4R9JkHH0SA5/+trDV681f86SRGWM6X6mySWSqTAIsQ6X2ch8qUk1sucExw/NJ82a3+arTuwYp0lksyncf4/xNpKc7PA3y1lpknVNsIL3wydwqUa+fwdSS2WWIGla+AFsFsrzXZWXgeDmTqN536ZvDmxb12S24EBRL+b6Hom3Xrnwtr/Cp3CLeX2JJdLtsAvDd6HsDzRNU069T8JK64KncK1P7GmMifJBRMtsJxFnZgbk1zTpFB5BTx9CdQ3h07ilvINn48O7kiyOzBAZ+U2sEPAW1b/k/DUOVDN2jHSso5K5c6kV028wHI8m5HoO0mva1Jg/YPwh/Oy+NYNEGbKqfQnvWzyOzBAPfctIINvLzM7FFdg5fXwzMcbt0xmTz+5/E0hFg5SYOnqfwnh2yHWNgl7uQeefA+8dCeZetLoFWSmTOpbE2LlMDswQL3ta8CmYOsbvzb/EZ6+qPFPlp7x/f/6kPw3Qi0erMDStWktKjNDrW98UNiwGJ65FJa+p7H7Zp3Kv/k6dWF3SKiFAXQxI6gWlwPZOhAn6/cub29gWeOmjN6fQvnPodMkSNYTlw+WLl4OlSCZp5F2QiayTufzFYRglyBmD2mtcUm86bHGPxsfhWqQX//CU/1iyPJC4B0YQB+jQF9xKcLhobM4k+Ud+NEjM3p+0R77Ax2VY+R4gv7HCF5gAF1YPIOYe0PnSIXXUv5f7+bp9kmskXUxp0lXJfjDOeE+hd6GTKncB3h9f64xDt2fhvJCSgrcIB+D5O9kMWYPbabGJ0OH2Co1BZZp5RWgXwmdw5hd+IKcVEnNE3WpKTAA8eA3QB4PHcOYnfgdceWG0CG2laoCSxc1ovpHgVroLMZsp0Ycf2TLqZupkaoCA8iU6uMg14fOYcwr6Zekq/q70Cm2l7oCAxCXrwNdHDqGMVs8zOrBr4UOsSOpLHDjMiU6F9gYOotpeRuI5dyk37Sxu1JZYNjyqbTKZaFzmBan+jHpKj8XOsbOpLbAADK9fBeCvcnShHKzTB/8QegQrybVBQagvfIJ4OHQMUyr0Ufor3wmdIpdSX2BGzeLR+cALfrIiwlgNXHuTDmdSuggu5L6AgPItIHnQc6BsE9+mJZQReTsLSeJpF5TFBhAppUfArk0dA6TaYrIJTK1vCB0kN2ViscJ94T2lK5H9fOhc5gMEvmyTC1fGzrGnmi+AivCwrY7UTkvdBaTISr/wbTyh5I6FtSVprmE3koEpW/wYoQHQmcxmfELRpf/vtnKC024A2+lj9FOf3EuMDV0FtPM9FfEg++QLvpCJ9kbTVtgAH2EYVRKD4IeHzqLaUq/I6q8XaawPnSQvdV0l9DbkhPZSLUwA1gaOotpOkuptp3czOWFJt+Bt9KF7EvcNhfkhNBZTDOQx4kLM6RrU9MfkZiJAgNoN51ExZ8BXaGzmBQTFtFWeaecmI0n3Zr6Enpb0kUfHZUzgF+EzmJSq5t65bSslBcyVGDYcvbwqMq7UL07dBaTNjKbuHJ6s37avDOZuYTelipCT+la0Ka6q8Z4cyNTK59qxu95dyWTBd5Ke0rno3orUAidxQRRAy6TaZXvhA7iS6YLDKDzS12I/hAYHTqLSdRqRM5upgcT9kamfgfeEZle7qYWHQv6SOgsJinyODU5IevlhRYoMICcNPA/9A9OB24MncV4dyujyhPlpPLK0EGSkPlL6O3p/NJ5iM4EhoXOYpzagOrH0v4OK9darsAA+mDpIPJ6FzAldBbjgj5CTc5N05lFSWmJS+jtyUnllayudKF6LXaMSzOrIfoFVg9ObsXyQovuwNvSnraj0eg20LeGzmL2gPJ7NL5IuqqPhY4SUkvuwNuSqYNLiMsTgU9Btu7SyagB0H9iTeVvWr28YDvwK+iDxUMoMBNlRugsZofuB7m8cZa0ASvwDml36WREv4lwZOgsBoBniPisTKncFzpI2liBd0Ifo8Dm4mUoXwD2CZ2nNcl60C/RUbm58YJ/sz0r8C7oIoZSb/s4yFXA8NB5WkQfyE1E5a83+xszfLMC7yZ9YOhICtXLQT8DDA2dJ6P6gdup5r8qJ/evDh2mGViB95A+0LEfhfrlEF8KMjJ0nmzQXjS6mUJ+pkzqszOw9oAVeC/pHIp0lM4GvQo4InSeJrUCuIFy5TY5lf7QYZqRFfg10tnkGFM8HeFi4HQgFzpTytWAOSi3Ma1yvwhx6EDNzArskD445PXk6+eDXAiMD50nVYTlxDqLfP4Ombz5xdBxssIK7IkuajuSenQm6HnAwaHzBPICcA9x9COmDzycxVfahGYF9kyViAWlSYi+j8Yl9mGhM3mlPA3MQaN7mD6w2C6R/bICJ0wXlg6mrjOA0xCm0fxfSW0E5qPMQ2Se3eaYLCtwQDqbHKMLE8hFk0EmojoZOCB0rl14HmQh6GKieBGrqk/KWdRDh2pVVuCU0e6ho8hVj0H1KGACyDHAIaD7JptE1gPLQJcAS0GWEheWZOE4kiyxAjcJ7WYfKIxDZDyRHASMRXUUyEiEkSgjgSLocIgi0ALQueWP94FUIY5BNgAVhF6UXtBeRNYCq4h1JaorqFVXyClsCPXvaowxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4xpHv8H7qhry3k2+TIAAAAASUVORK5CYII=",size:"large"}),Object(Q.jsx)(u.a.Title,{level:2,className:"logo",children:Object(Q.jsx)(o.b,{to:"/",children:"Fin Assist"})}),Object(Q.jsx)(q.a,{className:"menu-control-container",onClick:function(){return a(!t)},children:Object(Q.jsx)(R.a,{})})]}),t&&Object(Q.jsxs)(K.a,{theme:"light",children:[Object(Q.jsx)(K.a.Item,{icon:Object(Q.jsx)($.a,{}),children:Object(Q.jsx)(o.b,{to:"/",children:"Home"})}),Object(Q.jsx)(K.a.Item,{icon:Object(Q.jsx)(_.a,{}),children:Object(Q.jsx)(o.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(Q.jsx)(K.a.Item,{icon:Object(Q.jsx)(ee.a,{}),children:Object(Q.jsx)(o.b,{to:"/cryptocurrencies",children:"Expense Buddy"})}),Object(Q.jsx)(K.a.Item,{icon:Object(Q.jsx)(ce.a,{}),children:Object(Q.jsx)(o.b,{to:"/exchanges",children:"Exchanges"})}),Object(Q.jsx)(K.a.Item,{icon:Object(Q.jsx)(te.a,{}),children:Object(Q.jsx)(o.b,{to:"/news",children:"News"})})]})]})},ne=t(351),se=(u.a.Text,ne.a.Panel,function(){var e,c=C(),t=c.data,a=c.isFetching;null===t||void 0===t||null===(e=t.data)||void 0===e||e.exchanges;return a?Object(Q.jsx)(Y,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(v.a,{children:[Object(Q.jsx)(x.a,{span:6,children:"Exchanges"}),Object(Q.jsx)(x.a,{span:6,children:"24h Trade Volume"}),Object(Q.jsx)(x.a,{span:6,children:"Markets"}),Object(Q.jsx)(x.a,{span:6,children:"Change"})]}),Object(Q.jsx)(v.a,{})]})}),ie=t(188),le=t(360),re=t(361),oe=t(362),de=t(363),je=t(124),ue=t(364),he=t(197),be=t(191),Oe=u.a.Title,ve=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],l=0;l<(null===t||void 0===t||null===(r=t.data)||void 0===r||null===(o=r.history)||void 0===o?void 0:o.length);l+=1){var r,o,d;s.push(null===t||void 0===t||null===(d=t.data)||void 0===d?void 0:d.history[l].price)}for(var j=0;j<(null===t||void 0===t||null===(u=t.data)||void 0===u||null===(h=u.history)||void 0===h?void 0:h.length);j+=1){var u,h,b;i.push(new Date(null===t||void 0===t||null===(b=t.data)||void 0===b?void 0:b.history[j].timestamp).toLocaleDateString())}var O={labels:i,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(v.a,{className:"chart-header",children:[Object(Q.jsxs)(Oe,{level:2,className:"chart-title",children:[n," Price Chart "]}),Object(Q.jsxs)(x.a,{className:"price-container",children:[Object(Q.jsxs)(Oe,{level:5,className:"price-change",children:["Change: ",null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(Q.jsxs)(Oe,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(Q.jsx)(be.a,{data:O,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},xe=u.a.Title,pe=u.a.Text,me=M.a.Option,fe=function(){var e,c,t,a,s,i,l,r,o,j,u,h=Object(d.f)().coinId,b=Object(n.useState)("7d"),p=Object(S.a)(b,2),m=p[0],f=p[1],g=N(h),A=g.data,y=g.isFetching,w=k({coinId:h,timeperiod:m}).data,C=null===A||void 0===A||null===(e=A.data)||void 0===e?void 0:e.coin;if(y)return Object(Q.jsx)(Y,{});var D=[{title:"Price to USD",value:"$ ".concat((null===C||void 0===C?void 0:C.price)&&O()(null===C||void 0===C?void 0:C.price)),icon:Object(Q.jsx)(le.a,{})},{title:"Rank",value:null===C||void 0===C?void 0:C.rank,icon:Object(Q.jsx)(re.a,{})},{title:"24h Volume",value:"$ ".concat((null===C||void 0===C?void 0:C.volume)&&O()(null===C||void 0===C?void 0:C.volume)),icon:Object(Q.jsx)(oe.a,{})},{title:"Market Cap",value:"$ ".concat((null===C||void 0===C?void 0:C.marketCap)&&O()(null===C||void 0===C?void 0:C.marketCap)),icon:Object(Q.jsx)(le.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat((null===C||void 0===C||null===(c=C.allTimeHigh)||void 0===c?void 0:c.price)&&O()(null===C||void 0===C||null===(t=C.allTimeHigh)||void 0===t?void 0:t.price)),icon:Object(Q.jsx)(de.a,{})}],H=[{title:"Number Of Markets",value:null===C||void 0===C?void 0:C.numberOfMarkets,icon:Object(Q.jsx)(_.a,{})},{title:"Number Of Exchanges",value:null===C||void 0===C?void 0:C.numberOfExchanges,icon:Object(Q.jsx)(ce.a,{})},{title:"Aprroved Supply",value:(null===C||void 0===C||null===(a=C.supply)||void 0===a?void 0:a.confirmed)?Object(Q.jsx)(je.a,{}):Object(Q.jsx)(ue.a,{}),icon:Object(Q.jsx)(he.a,{})},{title:"Total Supply",value:"$ ".concat((null===C||void 0===C||null===(s=C.supply)||void 0===s?void 0:s.total)&&O()(null===C||void 0===C||null===(i=C.supply)||void 0===i?void 0:i.total)),icon:Object(Q.jsx)(he.a,{})},{title:"Circulating Supply",value:"$ ".concat((null===C||void 0===C||null===(l=C.supply)||void 0===l?void 0:l.circulating)&&O()(null===C||void 0===C||null===(r=C.supply)||void 0===r?void 0:r.circulating)),icon:Object(Q.jsx)(he.a,{})}];return Object(Q.jsxs)(x.a,{className:"coin-detail-container",children:[Object(Q.jsxs)(x.a,{className:"coin-heading-container",children:[Object(Q.jsxs)(xe,{level:2,className:"coin-name",children:[null===A||void 0===A||null===(o=A.data)||void 0===o?void 0:o.coin.name," (",null===A||void 0===A||null===(j=A.data)||void 0===j?void 0:j.coin.symbol,") Price"]}),Object(Q.jsxs)("p",{children:[C.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(Q.jsx)(M.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return f(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(Q.jsx)(me,{children:e},e)}))}),Object(Q.jsx)(ve,{coinHistory:w,currentPrice:O()(null===C||void 0===C?void 0:C.price),coinName:null===C||void 0===C?void 0:C.name}),Object(Q.jsxs)(x.a,{className:"stats-container",children:[Object(Q.jsxs)(x.a,{className:"coin-value-statistics",children:[Object(Q.jsxs)(x.a,{className:"coin-value-statistics-heading",children:[Object(Q.jsxs)(xe,{level:3,className:"coin-details-heading",children:[C.name," Value Statistics"]}),Object(Q.jsxs)("p",{children:["An overview showing the statistics of ",C.name,", such as the base and quote currency, the rank, and trading volume."]})]}),D.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(Q.jsxs)(x.a,{className:"coin-stats",children:[Object(Q.jsxs)(x.a,{className:"coin-stats-name",children:[Object(Q.jsx)(pe,{children:c}),Object(Q.jsx)(pe,{children:t})]}),Object(Q.jsx)(pe,{className:"stats",children:a})]})}))]}),Object(Q.jsxs)(x.a,{className:"other-stats-info",children:[Object(Q.jsxs)(x.a,{className:"coin-value-statistics-heading",children:[Object(Q.jsx)(xe,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(Q.jsxs)("p",{children:["An overview showing the statistics of ",C.name,", such as the base and quote currency, the rank, and trading volume."]})]}),H.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(Q.jsxs)(x.a,{className:"coin-stats",children:[Object(Q.jsxs)(x.a,{className:"coin-stats-name",children:[Object(Q.jsx)(pe,{children:c}),Object(Q.jsx)(pe,{children:t})]}),Object(Q.jsx)(pe,{className:"stats",children:a})]})}))]})]}),Object(Q.jsxs)(x.a,{className:"coin-desc-link",children:[Object(Q.jsxs)(v.a,{className:"coin-desc",children:[Object(Q.jsxs)(xe,{level:3,className:"coin-details-heading",children:["What is ",C.name,"?"]}),Object(ie.a)(C.description)]}),Object(Q.jsxs)(x.a,{className:"coin-links",children:[Object(Q.jsxs)(xe,{level:3,className:"coin-details-heading",children:[C.name," Links"]}),null===(u=C.links)||void 0===u?void 0:u.map((function(e){return Object(Q.jsxs)(v.a,{className:"coin-link",children:[Object(Q.jsx)(xe,{level:5,className:"link-name",children:e.type}),Object(Q.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},ge=(t(339),function(){return Object(Q.jsxs)("div",{className:"app",children:[Object(Q.jsx)("div",{className:"navbar",children:Object(Q.jsx)(ae,{})}),Object(Q.jsxs)("div",{className:"main",children:[Object(Q.jsx)(j.a,{children:Object(Q.jsx)("div",{className:"routes",children:Object(Q.jsxs)(d.c,{children:[Object(Q.jsx)(d.a,{exact:!0,path:"/",children:Object(Q.jsx)(V,{})}),Object(Q.jsx)(d.a,{exact:!0,path:"/exchanges",children:Object(Q.jsx)(se,{})}),Object(Q.jsx)(d.a,{exact:!0,path:"/cryptocurrencies",children:Object(Q.jsx)(T,{})}),Object(Q.jsx)(d.a,{exact:!0,path:"/crypto/:coinId",children:Object(Q.jsx)(fe,{})}),Object(Q.jsx)(d.a,{exact:!0,path:"/news",children:Object(Q.jsx)(J,{})})]})})}),Object(Q.jsxs)("div",{className:"footer",children:[Object(Q.jsxs)(u.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Copyright \xa9 2021",Object(Q.jsx)(o.b,{to:"/",children:"Cryptoverse Inc."})," ",Object(Q.jsx)("br",{}),"All Rights Reserved."]}),Object(Q.jsxs)(h.b,{children:[Object(Q.jsx)(o.b,{to:"/",children:"Home"}),Object(Q.jsx)(o.b,{to:"/exchanges",children:"Exchanges"}),Object(Q.jsx)(o.b,{to:"/news",children:"News"})]})]})]})]})}),Ae=t(28),ye=t(11),we=Object(ye.a)({reducer:(a={},Object(Ae.a)(a,y.reducerPath,y.reducer),Object(Ae.a)(a,F.reducerPath,F.reducer),a)});t(340);l.a.render(Object(Q.jsx)(s.a.StrictMode,{children:Object(Q.jsx)(o.a,{children:Object(Q.jsx)(r.a,{store:we,children:Object(Q.jsx)(ge,{})})})}),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.2a385f97.chunk.js.map