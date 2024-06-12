(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9863],{5495:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(47842),i=n(52322),o=(n(2784),n(72779)),c=n.n(o),a=n(72063),s=(n(70865),n(82066)),u=n(20646),l="#prfrtkn:front:e8926cf9955dd7c16c7ff0def02229d544c58a26:b98730eb29983e3bf9eebf648a4c2d8614d991b6\n\n      query BlogArticles {\n  blogArticles {\n    ...BlogArticle\n  }\n}\n      fragment BlogArticle on BlogArticle {\n  date\n  imgLarge\n  imgSmall\n  title\n  url\n}",d=function(e,t){return(0,s.useQuery)(void 0===e?["BlogArticles"]:["BlogArticles",e],(0,u.yh)(l,e),t)};d.getKey=function(e){return void 0===e?["BlogArticles"]:["BlogArticles",e]};d.fetcher=function(e,t){return(0,u.yh)(l,e,t)};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return d(void 0,{select:function(e){var t;return(null===(t=e.blogArticles)||void 0===t?void 0:t.slice(0,3))||[]},enabled:e})},m=n(67594),_=n(16447),p=n.n(_),v=function(e){var t,n=e.article,o=e.version,s=e.className,u=n.url,l=n.imgLarge,d=n.imgSmall,f=n.title;return(0,i.jsxs)(a.rU,{to:u,className:c()(s,(t={},(0,r.Z)(t,p().articleDesktop,"mobile"!==o),(0,r.Z)(t,p().articleMobile,"mobile"===o),t)),children:[(0,i.jsx)(a.Ee,{lazy:!0,src:"mobile"===o?d:l,className:"mobile"===o?p().articleImageMobile:p().articleImageDesktop,height:"100%",width:"100%",fit:"cover",alt:"articleImg"}),(0,i.jsx)(m.R,{children:(0,i.jsx)(a.xv,{dangerouslySetInnerHTML:{__html:f},className:c()((0,r.Z)({},p().text,"mobile"!==o)),size:"mobile"===o?"m":"l"})})]})},h=n(17779),g=n.n(h),x=function(){var e=f().data;return e?(0,i.jsx)("div",{className:g().articlesList,children:e.map((function(e){return(0,i.jsx)(v,{version:"mobile",article:e,className:g().articleItem},e.url)}))}):null},j=function(){var e=f().data;return e?(0,i.jsx)(a.rj.Row,{children:e.map((function(e){return(0,i.jsx)(a.rj.Col,{span:4,children:(0,i.jsx)(v,{version:"desktop",article:e})},e.url)}))}):null},b=n(3901),A=n.n(b),k=function(e){var t,n=e.version,o=e.className;return f().data?(0,i.jsxs)("div",{className:o||void 0,children:[(0,i.jsxs)(a.Dx,{level:3,size:"mobile"===n?"xl":"3xl",className:c()((t={},(0,r.Z)(t,A().titleDesktop,"mobile"!==n),(0,r.Z)(t,A().titleMobile,"mobile"===n),t)),children:["\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"," ",(0,i.jsx)(a.rU,{to:"/media/?utm_source=profi&utm_medium=profi-main-block&utm_campaign=text-link",target:"_blank",underlined:!0,children:"\u0432\xa0\u0431\u043b\u043e\u0433\u0435"})]}),"mobile"===n?(0,i.jsx)(x,{}):(0,i.jsx)(j,{})]}):null}},54214:function(e,t,n){"use strict";var r=n(52322),i=(n(2784),n(72779)),o=n.n(i),c=n(72063),a=n(63518),s=n.n(a);t.Z=function(e){var t=e.children,n=e.className,i=e.id;return(0,r.jsx)(c.rj.Container,{className:o()(s().level,n),id:i,children:t})}},45079:function(e,t,n){"use strict";var r=n(52322),i=(n(2784),n(49254)),o=n(70974);t.Z=function(e){var t=e.uId,n=e.reviewCount;return t!==i.COUNTRY_RU?null:(0,r.jsxs)("div",{itemScope:!0,itemType:"https://schema.org/Organization",children:[(0,r.jsx)("meta",{itemProp:"name",content:"\u041f\u0440\u043e\u0444\u0438 \u2014 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432"}),(0,r.jsx)("link",{itemProp:"url",href:"https://profi.ru/"}),(0,r.jsx)("link",{itemProp:"logo",href:"https://profi.ru/static/img/logo_red.svg"}),(0,r.jsx)("meta",{itemProp:"description",content:"\u041f\u0440\u043e\u0444\u0438 \u2014 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432: \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043f\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0443, \u0440\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440\u044b, \u0442\u0440\u0435\u043d\u0435\u0440\u044b, \u0430\u0440\u0442\u0438\u0441\u0442\u044b \u0438 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u044b, \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a\u0440\u0430\u0441\u043e\u0442\u044b \u0438 \u043f\u0440. \u2014 \u0431\u043e\u043b\u0435\u0435 ".concat(o.HX," \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432. \u0426\u0435\u043d\u044b \u0438 \u043e\u0442\u0437\u044b\u0432\u044b \u043d\u0430 \u041f\u0440\u043e\u0444\u0438. \u2705\ufe0f\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0432\u0430\u0448\u0438\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c, \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434, \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u043a. \u2705\u0412\u0441\u0435 \u0440\u0430\u0439\u043e\u043d\u044b \u2705\ufe0f\u041d\u0430 \u0440\u044b\u043d\u043a\u0435 \u0441 2005 \u0433\u043e\u0434\u0430. \u2705\ufe0f\u0411\u043e\u043b\u0435\u0435 ").concat(o.gj," \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432")}),(0,r.jsxs)("div",{itemProp:"address",itemScope:!0,itemType:"https://schema.org/PostalAddress",children:[(0,r.jsx)("meta",{itemProp:"addressLocality",content:"\u041c\u043e\u0441\u043a\u0432\u0430, \u0420\u043e\u0441\u0441\u0438\u044f"}),(0,r.jsx)("meta",{itemProp:"postalCode",content:"125252"}),(0,r.jsx)("meta",{itemProp:"streetAddress",content:"\u0443\u043b. \u0410\u0432\u0438\u0430\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0430 \u041c\u0438\u043a\u043e\u044f\u043d\u0430, \u0434. 12"})]}),(0,r.jsx)("meta",{itemProp:"telephone",content:"8 (800) 333-85-93"}),(0,r.jsx)("meta",{itemProp:"telephone",content:"+7 (495) 540-46-03"}),(0,r.jsxs)("div",{itemProp:"aggregateRating",itemScope:!0,itemType:"https://schema.org/AggregateRating",children:[(0,r.jsx)("meta",{itemProp:"ratingValue",content:"4.8"}),n&&(0,r.jsx)("meta",{itemProp:"reviewCount",content:"".concat(n)})]}),(0,r.jsx)("link",{itemProp:"sameAs",href:"https://vk.com/profiru"}),(0,r.jsx)("link",{itemProp:"sameAs",href:"https://ok.ru/profiru"})]})}},95837:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(47842),i=n(52322),o=n(2784),c=n(72779),a=n.n(c),s=n(40766),u=n(50930),l=n(76635),d=n(70974),f=n(29154),m=n.n(f),_=function(e){var t=e.rubricatorData,n=e.version,c=e.serviceName,f=(0,o.useMemo)((function(){return function(e){return e?e.reduce((function(e,t){var n,r,i;if(!(null===t||void 0===t||null===(n=t.title)||void 0===n?void 0:n.pxf)||(0,l.isEmpty)(t.title.pxf))return e;var o=t.title.pxf,c=null===o||void 0===o||null===(r=o.filters)||void 0===r||null===(i=r.searchFilter)||void 0===i?void 0:i.meta;return(0,l.isArray)(c)&&c.length?(0,u.Z)(e).concat([c[0]]):e}),[]):null}(t)}),[t]);if(!f||!(f.length<=7))return null;var _,p=function(e,t){return e&&e.length%3===0||"mobile"===t}(t,n),v=function(e){return Object.keys(d.ZF).filter((function(t){return!e.includes(t)})).map((function(e){return d.ZF[e]})).join(", ")}(f);return(0,i.jsxs)("div",{className:a()((_={},(0,r.Z)(_,m().catalog_d_working,"mobile"!==n),(0,r.Z)(_,m().catalog_m_working,"mobile"===n),(0,r.Z)(_,m().catalog_m_col,"mobile"===n&&!p),(0,r.Z)(_,m()["catalog_d_working-inline"],p&&"desktop"===n),_)),children:[(0,i.jsx)(s.m2,{color:"primary",className:"catalog__rubricator-new-icon"}),(0,i.jsx)("b",{children:"\u041c\u044b\xa0\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u0430\u0434 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435\u043c \u043d\u043e\u0432\u044b\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439"}),(0,i.jsxs)("p",{className:"catalog__paragraph",children:["\u0412\u044b\xa0\u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0430\xa0",c," ",v," ","\u0438\xa0\u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432."]})]})}},48849:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(52322),i=n(2784),o=n(72063),c=n(25237),a=n.n(c),s=n(60407),u=n.n(s),l=n(377),d=function(e){var t=e.rubricatorSection,n=e.projectId,r=e.pserviceId;return function(){l.SJ.registerEvent("page_main_rubricator_clicked",{rubricator_section:t,seamless_z_id:n,seamless_start_pservice_id:r},{force:!0})}},f=a()(n.e(9001).then(n.bind(n,99001)),{loadableGenerated:{webpack:function(){return[99001]}}}),m=a()(n.e(2632).then(n.bind(n,72632)),{loadableGenerated:{webpack:function(){return[72632]}}}),_=function(e){var t=e.rubricatorData,n=e.version,c="mobile"===n&&t&&t.length>5,a=(0,i.useState)(!c),s=a[0],l=a[1],_=(0,i.useMemo)((function(){return t?t.filter((function(e){return!!e.title&&!!e.links})):null}),[t]);if(!_)return null;var p=s?_:_.slice(0,5);return(0,r.jsxs)(r.Fragment,{children:[p.map((function(e){var t=e.title,i=e.links;return"mobile"===n?(0,r.jsx)(m,{title:t,links:i,getOnClickHandler:d},null===t||void 0===t?void 0:t.text):(0,r.jsx)(f,{title:t,links:i,getOnClickHandler:d},null===t||void 0===t?void 0:t.text)})),!s&&(0,r.jsx)("div",{className:u().more,children:(0,r.jsx)(o.zx,{size:"l",onClick:function(){return l(!0)},design:"transparent","data-shmid":"more",children:"\u0415\u0449\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"})})]})}},74671:function(e,t,n){"use strict";n.d(t,{U:function(){return c},h:function(){return o}});var r=n(13255),i=n(70974),o=function(e){return"".concat((0,r.CE)(e)).concat(i.Xz).concat((0,r.Ho)(e,"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432"))},c=function(e,t){return e&&t?"".concat((0,r.CE)(e)," ").concat((0,r.Ho)(e,"\u043e\u0442\u0437\u044b\u0432","\u043e\u0442\u0437\u044b\u0432\u0430","\u043e\u0442\u0437\u044b\u0432\u043e\u0432")," \u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0437\u0430").concat(i.Xz,"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 12").concat(i.Xz,"\u043c\u0435\u0441\u044f\u0446\u0435\u0432. \u0418\u0437").concat(i.Xz,"\u043d\u0438\u0445 ").concat((0,r.CE)(t)," ").concat(i.Ss," \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435."):null}},23827:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});var r="site.index"},35502:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var r=n(2784),i=n(27555),o=n(13950),c=n(377);function a(e){var t=e.version,n=(0,o.U)(),a=n.isTurboApp,s=n.yandexTurboAppClientID,u=(0,r.useMemo)((function(){return c.SJ.child()}),[]),l=(0,r.useCallback)((function(){u.registerEvent("page_main_shown"),c.wT.registerEvent("pageReady",{pagetype:"home",platform:t}),c.u1.registerAdvCakeEvent({pageType:1})}),[t,u]);return(0,i.D)({isYandexTurboApp:a,yandexTurboAppClientID:s}).then((function(e){u.setContext({user_has_yandex_ID:!!(null===e||void 0===e?void 0:e.psuid)}),u.ready()})),{onPageMainShown:l}}},10236:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(2784);function i(e){(0,r.useEffect)((function(){return e&&e()}),[])}},13950:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(5632),i=n(13255),o=n(17996),c=n(5630);function a(){var e=(0,r.useRouter)().query;return{isTurboApp:!!(0,i.J8)()&&(0,o.C)(window.navigator.userAgent,e),yandexTurboAppClientID:c.h}}},9813:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=(0,n(2784).createContext)(null)},64084:function(e,t,n){"use strict";var r=n(66383),i=n(52322),o=n(2784),c=n(72779),a=n.n(c),s=n(28316),u=n(74930),l=n.n(u),d=n(73648),f=n(51244),m=n(9813),_=n(39864),p=n.n(_);t.Z=function(e){var t=e.children,n=e.timeoutBetweenActionAndPoping,c=e.timeoutBetweenEnteredAndAction,u=e.kickIn,_=e.onFinished,v=e.className,h=function(){return o.Children.toArray(t).map((function(e){return{child:e,key:l()("leaveOrder")}}))},g=(0,r.Z)(o.useState(h()),2),x=g[0],j=g[1],b=(0,r.Z)(o.useState(!1),2),A=b[0],k=b[1],N=o.useRef([]),y=o.useRef(),I=o.useRef(),w=o.useRef(!1),S=o.useRef(!1),C=x.length>1?{classNames:{exit:p().popTopLayerExit,exitActive:p().popTopLayerExitActive},timeout:1e3}:{classNames:{exit:p().fadeOut,exitActive:p().fadeOutActive},timeout:500},Z=function(){I.current=setTimeout((function(){var e,t;null===(t=(e=N.current)[0])||void 0===t||t.call(e),y.current=setTimeout((function(){s.unstable_batchedUpdates((function(){j((function(e){return e.slice(1)})),N.current=N.current.slice(1),k(!0)}))}),n)}),c)},E=o.useCallback((function(){I.current&&clearTimeout(I.current),y.current&&clearTimeout(y.current),j(h()),N.current=[],S.current=!0,k(!1)}),[]);o.useEffect((function(){u?(w.current=!0,S.current=!1,Z()):w.current&&E()}),[u,E]);var T=function(){S.current||(k(!1),N.current.length?Z():_())};return(0,i.jsx)(d.Z,{in:x.length===o.Children.count(t),classNames:{enter:p().fadeIn,enterActive:p().fadeInActive},timeout:800,children:(0,i.jsx)(m.Y.Provider,{value:function(e){N.current.push(e)},children:(0,i.jsx)(f.Z,{className:v,children:x.map((function(e,t){var n=e.child,r=e.key;return(0,i.jsx)(d.Z,{classNames:C.classNames,onExited:T,timeout:C.timeout,"data-shmid":"poped-element",children:(0,i.jsx)("div",{className:a()(p().layer,p()["layer-".concat(t+(A?2:1))]),children:n})},r)}))})})})}},93505:function(e,t,n){"use strict";var r=n(52322),i=(n(2784),n(72779)),o=n.n(i),c=n(40766),a=n(43856),s=n.n(a);t.Z=function(e){var t=e.backgroundColor,n=e.step;return(0,r.jsx)("div",{className:o()(s().avatar,s()[n]),style:{backgroundColor:t},children:(0,r.jsx)(c.m2,{color:"white"})})}},63335:function(e,t,n){"use strict";var r=n(52322),i=n(2784),o=n(39846),c=n(82220),a=n.n(c),s=n(67594),u=i.forwardRef((function(e,t){var n=e.title,i=e.description,c=e.className,u=e.backgroundColor,l=e.children;return(0,r.jsxs)("div",{className:c,ref:t,children:[(0,r.jsx)("div",{className:a().frame,style:{backgroundColor:u},children:l}),(0,r.jsxs)(s.R,{children:[(0,r.jsx)(o.xv,{size:"l",className:a().title,bold:!0,children:n}),(0,r.jsx)(o.xv,{size:"l",color:"muted",className:a().description,children:i})]})]})}));t.Z=u},40796:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(52322),i=n(2784),o=n(64084),c=n(39846),a=n(9813),s=n(21975),u=n.n(s),l=function(e){var t=e.choices,n=e.header,o=e.choiceForSelecting,s=(0,i.useState)(),l=s[0],d=s[1],f=(0,i.useContext)(a.Y);return(0,i.useEffect)((function(){f&&f((function(){return d(o)}))}),[]),(0,r.jsxs)("div",{className:u().card,children:[(0,r.jsx)(c.xv,{size:"l",className:u().header,children:n}),t.map((function(e){return(0,r.jsx)(c.Y8,{name:e,checked:e===l,size:"m",className:u().choice,onChange:function(){},children:e},e)}))]})},d=n(657),f=n.n(d),m=["\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e","\u0423\xa0\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430","\u0423\xa0\u043c\u0435\u043d\u044f"],_=["\u0423\u0442\u0440\u043e\u043c","\u0414\u043d\u0435\u043c","\u0412\u0435\u0447\u0435\u0440\u043e\u043c"],p=function(e){var t=e.kickIn,n=e.onStepFinished;return(0,r.jsxs)(o.Z,{timeoutBetweenActionAndPoping:1e3,timeoutBetweenEnteredAndAction:700,kickIn:t,onFinished:n,className:f().root,children:[(0,r.jsx)(l,{choices:m,choiceForSelecting:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e",header:(0,r.jsxs)(r.Fragment,{children:["\u0413\u0434\u0435 \u0432\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u043e ",(0,r.jsx)("br",{}),"\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c\u0441\u044f"]})}),(0,r.jsx)(l,{choices:_,choiceForSelecting:"\u0412\u0435\u0447\u0435\u0440\u043e\u043c",header:(0,r.jsxs)(r.Fragment,{children:["\u041a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u043e ",(0,r.jsx)("br",{}),"\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c\u0441\u044f"]})})]})}},46796:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(52322),i=n(2784),o=n(50930),c=n(56974),a=n.n(c),s=n(31092),u=n.n(s),l={getInitial:function(e){return[a()(e)]},update:function(e,t){return[t[t.length-e.length-1]].concat((0,o.Z)(e))}},d={getInitial:function(e){return[u()(e)]},update:function(e,t){return(0,o.Z)(e).concat([t[e.length]])}},f=n(51244),m=n(73648),_=n(34291),p=n.n(_),v=n(4032),h=function(e){var t=e.children,n=e.className,o=e.transition,c=e.isOn,a=e.transformOrigin,s=void 0===a?"top left":a,u=(0,i.useRef)(null),l=(0,i.useRef)(null),d=(0,i.useRef)(!0),f=(0,i.useRef)(!1);return(0,v.Gw)((function(){if(u.current&&!f.current){var e=u.current.getBoundingClientRect();if(!d.current&&l.current&&c){var t=l.current,n=(i=e,{top:(r=t).top-i.top,left:r.left-i.left,width:r.width/i.width,height:r.height/i.height});(function(e){return 0===e.left&&0===e.top&&1===e.width&&1===e.height})(n)||(u.current&&function(e,t){t.style.transform="translate(".concat(e.left,"px, ").concat(e.top,"px)"),t.style.transition="transform 0s"}(n,u.current),f.current=!0,requestAnimationFrame((function(){u.current&&function(e,t,n){e.style.transform="",e.style.transition=t,e.style.transformOrigin=n}(u.current,o,s)})))}l.current=e}var r,i;d.current=!1})),(0,i.useEffect)((function(){var e=function(){f.current=!1};return window.addEventListener("transitionend",e),function(){return window.removeEventListener("transitionend",e)}}),[]),(0,r.jsx)("div",{ref:u,className:n,children:t})},g=n(46056),x=n.n(g),j=function(e,t){var n=0;return function(){++n===e&&t()}},b=function(e){var t=e.items,n=e.onAllItemsEntered,o=e.runItemsEntering,c=e.getItemKey,a=e.children,s=e.className,u=e.classNameItem,_=e.extractionStrategyType,v=e.timeBetweenItemsAppearence,g=void 0===v?300:v,b=(0,i.useState)(!1),A=b[0],k=b[1],N=function(e){var t=e.fullItems,n=e.timeout,r=void 0===n?1e3:n,o=e.extractionStrategyType,c=void 0===o?"to-top":o,a=e.isSplittingActive,s=void 0===a||a,u="to-top"===c?l:d,f=(0,i.useState)([]),m=f[0],_=f[1],p=(0,i.useRef)(null),v=function(){m.length<t.length&&_((function(e){return u.update(e,t)}))};return(0,i.useEffect)((function(){0!==m.length&&t.length!==m.length&&s&&(p.current=setTimeout((function(){v()}),r))}),[m.length]),(0,i.useEffect)((function(){s?v():p.current&&clearTimeout(p.current)}),[s]),{items:m,reset:function(){return _([])}}}({fullItems:t,extractionStrategyType:_,isSplittingActive:A}),y=N.items,I=N.reset,w=o?y:t,S=function(){setTimeout((function(){return k(!0)}),g)},C=(0,i.useMemo)((function(){return j(w.length,S)}),[o]),Z=(0,i.useMemo)((function(){return j(t.length,n)}),[o]);(0,i.useEffect)((function(){o||(I(),k(!1))}),[o]);return(0,r.jsx)(f.Z,{className:s,children:w.map((function(e,t){return(0,r.jsx)(m.Z,{classNames:x(),timeout:{exit:700,enter:1e3},onExited:C,onEntered:o?Z:p(),children:(0,r.jsx)(h,{className:u,transition:"transform 400ms ease",isOn:(n=t,("to-top"===_?0!==n:n!==w.length-1)&&o),children:a(e)})},c(e));var n}))})}},2913:function(e,t,n){"use strict";var r=n(52322),i=(n(2784),n(39846)),o=n(37001),c=n.n(o),a=n(28923),s=n(46796),u=n(93505),l=n(88128),d=a.x[a.y.VASILIY],f=["\u0412\u0441\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 2000 \u0440\u0443\u0431\u043b\u0435\u0439","\u041a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u043e?"];t.Z=function(e){var t=e.kickIn,n=e.onStepFinished;return(0,r.jsxs)("div",{className:c().root,children:[(0,r.jsxs)("div",{className:c().header,children:[(0,r.jsx)(u.Z,{step:"suitable",backgroundColor:a.x[a.y.VASILIY].avatarBackground}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.xv,{size:"m",children:d.profiName}),(0,r.jsx)(l.Z,{rank:d.rating,reviewsCount:d.feedbackCount,size:"s",color:"muted",iconColor:"disabled"})]})]}),(0,r.jsx)("div",{className:c().messages,children:(0,r.jsx)(s.Z,{items:f,getItemKey:function(e){return e},runItemsEntering:t,onAllItemsEntered:n,extractionStrategyType:"to-down",classNameItem:c().message,children:function(e){return(0,r.jsx)(i.xv,{color:"muted",children:e},e)}})})]})}},75377:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(70865),i=n(52322),o=(n(2784),n(64213)),c=n.n(o),a=n(40766),s=n(39846),u=n(72779),l=n.n(u),d=n(2123),f=n.n(d),m=n(93505),_=function(e){var t=e.profiName,n=e.rating,r=e.message,o=e.avatarBackground,c=e.className;return(0,i.jsxs)("div",{className:l()(f().notification,c),children:[(0,i.jsx)(m.Z,{step:"write-to-you",backgroundColor:o}),(0,i.jsx)("div",{className:f().info,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(s.xv,{className:f()["profi-name"],as:"span",size:"m",bold:!0,children:t}),(0,i.jsx)("span",{className:f()["star-icon"],children:(0,i.jsx)(a.in,{})}),(0,i.jsx)(s.xv,{color:"muted",as:"span",size:"m",bold:!0,className:f().rating,children:n}),(0,i.jsx)(s.xv,{size:"s",color:"muted",className:f().message,children:r})]})})]},t)},p=n(28923),v=n(46796),h=[(0,r.Z)({message:"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c! \u0413\u043e\u0442\u043e\u0432\u0430 \u043f\u043e\u043c\u043e\u0447\u044c"},p.x[p.y.IRINA]),(0,r.Z)({message:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0416\u0438\u0432\u0443 \u043d\u0435\u0434\u0430\u043b\u0435\u043a\u043e"},p.x[p.y.VASILIY]),(0,r.Z)({message:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041a\u043e\u0433\u0434\u0430 \u043d\u0443\u0436\u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0430"},p.x[p.y.NAIL])],g=function(e){var t=e.kickIn,n=e.onStepFinished;return(0,i.jsx)("div",{className:c().root,children:(0,i.jsx)(v.Z,{items:h,onAllItemsEntered:n,getItemKey:function(e){return e.profiName},runItemsEntering:t,extractionStrategyType:"to-top",className:c().wrapper,classNameItem:c()["notification-item"],children:function(e){return(0,i.jsx)(_,(0,r.Z)({className:c()["notification-item"]},e))}})})}},28923:function(e,t,n){"use strict";n.d(t,{x:function(){return c},y:function(){return o}});var r,i=n(47842),o={VASILIY:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439",IRINA:"\u0418\u0440\u0438\u043d\u0430",NAIL:"\u041d\u0430\u0438\u043b\u044c"},c=(r={},(0,i.Z)(r,o.VASILIY,{rating:"4,8",profiName:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439",feedbackCount:57,avatarBackground:"#FFA216"}),(0,i.Z)(r,o.IRINA,{profiName:"\u0418\u0440\u0438\u043d\u0430",rating:"5,0",avatarBackground:"#A849EB"}),(0,i.Z)(r,o.NAIL,{profiName:"\u041d\u0430\u0438\u043b\u044c",rating:"4,9",avatarBackground:"#EC7586"}),r)},23495:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(2784),i=n(66383);var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t;return function(){return++n%e}},c=function(e){var t=e.stepsLength,n=e.onOutOfScreen,c=(0,r.useState)(-1),a=c[0],s=c[1],u=(0,r.useRef)(o(t)),l=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1],c=(0,r.useRef)(null),a=e||c;return(0,r.useEffect)((function(){if("IntersectionObserver"in window){var e=new IntersectionObserver((function(e){var t=(0,i.Z)(e,1)[0];o(t.intersectionRatio>0)}));return a.current&&e.observe(a.current),function(){e.disconnect()}}o(!0)}),[a]),{isOnScreen:n,ref:a}}(),d=l.isOnScreen,f=l.ref,m=(0,r.useCallback)((function(){s(u.current())}),[]),_=(0,r.useCallback)((function(){return o(t,a)()}),[a]);return(0,r.useEffect)((function(){d?m():(u.current=o(t),s(-1),n&&n())}),[d]),{ref:f,activeStep:a,handleChangeStep:m,getNextStep:_}}},67594:function(e,t,n){"use strict";n.d(t,{R:function(){return s},W:function(){return a}});var r=n(52322),i=(n(2784),n(33749)),o=n.n(i),c=function(e){return function(t){return(0,r.jsx)("div",{className:e,children:t.children})}},a=c(o().block),s=c(o().text)},70974:function(e,t,n){"use strict";n.d(t,{C:function(){return s},HX:function(){return o},Id:function(){return u},Ss:function(){return i},Xz:function(){return r},ZF:function(){return l},eo:function(){return c},gj:function(){return a}});var r="\xa0",i="\u2014",o="1".concat(r,"800").concat(r,"000"),c="900",a="9".concat(r,"000").concat(r,"000"),s=("1".concat(r,"000").concat(r,"000"),"17".concat(r,"\u0442\u044b\u0441\u044f\u0447"),"70".concat(r,"\u0442\u044b\u0441\u044f\u0447"),"60+".concat(r,"\u0442\u044b\u0441.").concat(r,"\u043e\u0446\u0435\u043d\u043e\u043a")),u="4.8",l={artist:"\u0430\u0440\u0442\u0438\u0441\u0442\u043e\u0432",autoinstructor:"\u0430\u0432\u0442\u043e\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u043e\u0432",krasota:"\u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u043a\u0440\u0430\u0441\u043e\u0442\u044b",remont:"\u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u043f\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0443",repetitor:"\u0440\u0435\u043f\u0435\u0442\u0438\u0442\u043e\u0440\u043e\u0432",sport:"\u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432"}},27555:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(98788),i=n(50853);function o(e){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)((function(e){var t,n,r,o,c;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:if(t=e.isYandexTurboApp,n=e.yandexTurboAppClientID,!t||!n)return[2,null];if(!(o=window).yandex)throw new Error("Turboapp auth: window.yandex is not defined");return[4,o.yandex.app.auth.getCurrentUserId(n).catch((function(){}))];case 1:return[2,{psuid:null===(c=i.sent())||void 0===c||null===(r=c.payload)||void 0===r?void 0:r.psuid,jwtToken:null===c||void 0===c?void 0:c.jwtToken}]}}))}))).apply(this,arguments)}},39864:function(e){e.exports={layer:"AnimationOrchestration_layer__Fom5g","layer-1":"AnimationOrchestration_layer-1__una_e",popTopLayerExit:"AnimationOrchestration_popTopLayerExit__Lhu7_",popTopLayerExitActive:"AnimationOrchestration_popTopLayerExitActive__vq5Y7",fadeOut:"AnimationOrchestration_fadeOut__h56vH",fadeOutActive:"AnimationOrchestration_fadeOutActive__9KFhW","layer-2":"AnimationOrchestration_layer-2__IJZuJ","layer-3":"AnimationOrchestration_layer-3__oIy3n",fadeIn:"AnimationOrchestration_fadeIn__oNljI",fadeInActive:"AnimationOrchestration_fadeInActive__n5Qa3"}},657:function(e){e.exports={root:"LeaveOrder_root__bPdoe"}},46056:function(e){e.exports={enter:"SequentialAppearance_enter__fC5S_",enterActive:"SequentialAppearance_enterActive__sWWoJ",exit:"SequentialAppearance_exit__k5hUI",exitActive:"SequentialAppearance_exitActive__ltTO8"}},37001:function(e){e.exports={root:"Suitable_root__jzMiN",header:"Suitable_header__5_vOQ",messages:"Suitable_messages__RzL28",message:"Suitable_message__J8iRd"}},64213:function(e){e.exports={root:"WriteYou_root__AlwEx","notification-item":"WriteYou_notification-item__07kYg",wrapper:"WriteYou_wrapper__h74NW"}},2123:function(e){e.exports={notification:"Notification_notification__xrxFS",info:"Notification_info__FIALr","profi-name":"Notification_profi-name__ezBj_",rating:"Notification_rating___Oj_v",message:"Notification_message__0kFk2","star-icon":"Notification_star-icon__zU1_x"}},3901:function(e){e.exports={titleDesktop:"Blog_titleDesktop__G_th3",titleMobile:"Blog_titleMobile__mEX6z"}},16447:function(e){e.exports={articleMobile:"BlogArticle_articleMobile__Q2MIa",articleImageMobile:"BlogArticle_articleImageMobile___uW9Y",articleDesktop:"BlogArticle_articleDesktop__jrHp0",articleImageDesktop:"BlogArticle_articleImageDesktop__SccVa",text:"BlogArticle_text__NpVD9"}},17779:function(e){e.exports={articlesList:"mobile_articlesList__kMhv7",articleItem:"mobile_articleItem__UiBTG"}},63518:function(e){e.exports={level:"Level_level__inqZm"}},60407:function(e){e.exports={more:"Rubricator_more__2OJ9K"}},29154:function(e){e.exports={catalog_d_working:"WeWorking_catalog_d_working__vAmhQ","catalog_d_working-inline":"WeWorking_catalog_d_working-inline__W9Gt7",catalog_m_working:"WeWorking_catalog_m_working__Djjck",catalog_m_col:"WeWorking_catalog_m_col__yq1Mt"}},43856:function(e){e.exports={avatar:"Avatar_avatar__9TF_x",suitable:"Avatar_suitable__F5t4V","write-to-you":"Avatar_write-to-you__BajAA"}},82220:function(e){e.exports={frame:"Item_frame___360C",title:"Item_title__Lev22",description:"Item_description__QcMPd"}},21975:function(e){e.exports={card:"Card_card__grptA",header:"Card_header__OfXDp",choice:"Card_choice__dW9_q"}},33749:function(e){e.exports={block:"Shift_block__jqrk1",text:"Shift_text__jN6Lp"}}}]);