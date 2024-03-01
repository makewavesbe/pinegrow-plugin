var loadInlineAsStylesheetAndGetRules_map=new WeakMap,loadInlineAsStylesheetAndGetRules_cleanTimer=null,loadInlineAsStylesheetAndGetRules=function(t,n){var r,o=[],e=(loadInlineAsStylesheetAndGetRules_cleanTimer&&clearTimeout(loadInlineAsStylesheetAndGetRules_cleanTimer),loadInlineAsStylesheetAndGetRules_cleanTimer=setTimeout(function(){loadInlineAsStylesheetAndGetRules_map=new WeakMap,loadInlineAsStylesheetAndGetRules_cleanTimer=null},5e3),t.getAttribute("style")),i=loadInlineAsStylesheetAndGetRules_map.get(t);i&&!i.isDestroyed&&i._styleText===e?(o.push(i.getRootNode().nodes[0]),n(o,i)):((r=PgCSSStylesheet()).elementStyle=!0,r.element=t,r.index="style",r._styleText=e,r.load(null,function(){var e=r.getRootNode().nodes[0];e.inline="source",e.inline_for_pgel=t,o.push(e),loadInlineAsStylesheetAndGetRules_map.set(t,r),n(o,r)}))},PgChromeDevTools=function(){var s,t,n,a=this,r=!isApp(),l=[],d=-1,e=require("postcss"),c=(e.postcss,e.postcssSafeParser,this.setChromeIframes=function(e){l=e},this.setChromeTabId=function(e){d=e},this.runDummyGetMatchedCSSRules=function(e,t){var n=d;chrome.debugger.sendCommand({tabId:n},"DOM.querySelector",{nodeId:e.contentDocument.nodeId,selector:`body`},function(e){e?chrome.debugger.sendCommand({tabId:n},"CSS.getMatchedStylesForNode",e,function(e){t(e)}):t()})},this.getMatchedCSSRuleForChromeNode=function(e,g,h){var t;0<o?(i.push(function(){a.getMatchedCSSRuleForChromeNode(e,g,h)}),console.log("getMatchedCSSRuleForChromeNode: will wait for CSS enable")):(t=d,chrome.debugger.sendCommand({tabId:t},"DOM.querySelector",{nodeId:e.contentDocument.nodeId,selector:`[data-pg-id="${g.pgId}"]`},function(e){chrome.debugger.sendCommand({tabId:t},"CSS.getMatchedStylesForNode",e,function(e){if(e){function o(e,t,n,r){r=r||i,(n=n||s)[e.text]||(n[e.text]=e,t?r.unshift(e):r.push(e))}for(var i=[],s={},t=e.matchedCSSRules,n=0;n<t.length;n++){var r;(d=t[n].rule).styleSheetId&&m[d.styleSheetId]&&(r=pinegrow.getOriginalUrl(m[d.styleSheetId]),d.selectorList.csurl=r),o(d.selectorList,!1,!1,!1)}for(var a=e.pseudoElements,n=0;n<a.length;n++)for(var l=(t=a[n].matches).length-1;0<=l;l--){var d=t[l].rule;o(d.selectorList,!0)}var c=[],u=g.get$DOMElement();e.inherited&&u&&e.inherited.forEach(function(e){u=u.parent();var t,n,r=getElementPgNode(u);r&&(t=[],n={},e.matchedCSSRules.forEach(function(e){o(e.rule.selectorList,!1,n,t)}),c.push({pgel:r,selectors:t}))});loadInlineAsStylesheetAndGetRules(g,function(e){h&&h(i,c,e)})}else h&&h([],[],[])})}))},this.getChromeTabId=function(t){r?t&&t("1"):chrome.tabs.getCurrent(function(e){chrome.debugger.attach({tabId:e.id},"1.2"),t&&t(e.id)})},this.detach=function(t){chrome.tabs.getCurrent(function(e){chrome.debugger.detach({tabId:e.id},t)})},{}),m={},o=(this.setCookies=function(e){chrome.debugger.sendCommand({tabId:d},"Storage.setCookies",{cookies:e},function(e,t,n){console.log("Storage.setCookies done",e,t,n)})},this.setStylesheetContent=function(n,r,e){var o,i=pgIsDev(),s=(n=pinegrow.getProxyUrl(n),e?this.getFrameIdForPageView(e):null);return!!c[n]&&(o=!1,c[n].forEach(function(e){var t;s&&s!==e.frameId||(t=e.sid,i&&console.log("setStylesheetContent: Set text of "+t+" - "+n),o=!0,chrome.debugger.sendCommand({tabId:d},"CSS.setStyleSheetText",{styleSheetId:t,text:r},function(e,t,n){}))}),o)},r||(s=function(e,t){for(var n=0;n<c[e].length;n++)if(c[e][n].sid===t)return n;return-1},chrome.debugger.onEvent.addListener(function(e,t,n){var r,o,i;"CSS.styleSheetAdded"===t&&n.header.sourceURL?(c[n.header.sourceURL]||(c[n.header.sourceURL]=[]),(i=s(n.header.sourceURL,n.header.styleSheetId))<0&&c[n.header.sourceURL].push({sid:n.header.styleSheetId,frameId:n.header.frameId}),m[n.header.styleSheetId]=n.header.sourceURL,pgIsDev()&&console.log("CSS.styleSheetAdded: Stylesheet "+n.header.sourceURL)):"CSS.styleSheetRemoved"===t&&((r=pgIsDev())&&console.log("CSS.styleSheetRemoved: Stylesheet "+n.styleSheetId),o=m[n.styleSheetId]||null)&&(c[o]&&0<=(i=s(o,n.styleSheetId))&&(c[o].splice(i,1),r)&&console.log("CSS.styleSheetRemoved: Removed from the map!"),delete m[n.styleSheetId])})),0),i=[],u=(this.withDisabledCSS=function(e,t){e(),t&&t()},this.getChromeIframes=function(e,i){chrome.debugger.sendCommand({tabId:e},"DOM.getFlattenedDocument",function(e){for(var t=[],n=e.nodes,r=0;r<n.length;r++){var o=n[r];1==o.nodeType&&-1<o.attributes.indexOf("content-iframe")&&t.push(o)}i&&i(t)})},this.getSelectedChromeIframe=function(e){return e?this.getChromeIframeFor$Iframe(e.$iframe):null},this.getFrameIdForPageView=function(e){var t=this.getChromeIframeFor$Iframe(e.get$Iframe());return t&&t.frameId||null},this.getChromeIframeFor$Iframe=function(e){for(var t=l,n=0;n<t.length;n++){var r=t[n],o=e.attr("data-pv-id"),i=r.attributes.indexOf("data-pv-id");if(0<=i&&r.attributes[i+1]==o)return r}return null},this.updateIframes=function(t){pgf.edit_css&&isApp()&&this.getChromeIframes(d,function(e){a.setChromeIframes(e),t&&t()})},this.unregisterServiceWorkers=function(){isApp()},this.forcePseudoStates=function(e,r,o){var i=new CrsaProfile;isApp()?this.withPgelNodeIds(e,function(t){i.show("Got NodeIds");var n=0;t.forEach(function(e){chrome.debugger.sendCommand({tabId:d},"CSS.forcePseudoState",{nodeId:e,forcedPseudoClasses:r},function(){++n===t.length&&o&&(i.show("Pseudos set"),o())})})}):o&&o()},this.withPgelNodeIds=function(n,r){var e=n.getPage(),o=n.get$DOMElements(e),i=[];0===o.length?r&&r(i):o.forEach(function(e){var t=e.pgPageView.get$Iframe(),t=a.getChromeIframeFor$Iframe(t);chrome.debugger.sendCommand({tabId:d},"DOM.querySelector",{nodeId:t.contentDocument.nodeId,selector:`[data-pg-id="${n.pgId}"]`},function(e){var t;i.push(e),i.length===o.length&&r&&(t=[],i.forEach(function(e){null!==e&&t.push(e.nodeId)}),r(t))})})},pgf.edit_css&&this.getChromeTabId(function(e){a.setChromeTabId(e),r||(chrome.debugger.sendCommand({tabId:e},"DOM.enable"),chrome.debugger.sendCommand({tabId:e},"CSS.enable"))}),this.getCSSPropsInfo=function(){return u},this.getCSSPropsInfoSection=function(e){return u[e]},{dimension:{name:"Dimension",icon:"icon-Pin16",props:["width","min-width","max-width","height","min-height","max-height"],re:/_(width|height|min\-width|max\-width|min\-height|max\-height)_/i},margin_padding:{name:"Margin &amp; Padding",icon:"icon-Pin16",props:["margin","margin-top","margin-right","margin-bottom","margin-left","padding","padding-top","padding-right","padding-bottom","padding-left"],re:/_margin|_padding/i},position:{name:"Position",icon:"icon-Pin17",props:["position","top","right","bottom","left","z-index"],re:/_(top|right|bottom|left|position|z\-index)_/i},display:{name:"Display",icon:"icon-Pin17",props:["display","visibility","vertical-align","overflow","float","clear","opacity","object-fit","object-position","mask-image","zoom"],re:/display|vertical\-align|overflow|float|clear|opacity|object\-fit|object\-position|mask\-image|visibility|zoom|aspect\-ratio/i},border:{name:"Border &amp; Outline",icon:"icon-Pin20",props:["border","border-top","border-right","border-bottom","border-left","border-radius","outline","outline-offset"],re:/border|outline/i},text:{name:"Text",icon:"icon-Pin18",props:["font","font-family","font-size","font-style","font-weight","line-height","color","letter-spacing","text-align","text-decoration","text-indent","text-transform","white-space","word-break","direction"],re:/font|line-height|_color_|letter-spacing|text-decoration|text-align|text-transform|white-space|word-break|_direction_|text-indent|_text-|_word-/i},background:{name:"Background",icon:"icon-Pin21",props:["background","background-color","background-image","background-origin","background-position","background-repeat","background-size"],re:/background/i},flex_container:{name:"Flex container",icon:"icon-Pin22",props:["flex-direction","flex-flow","flex-wrap","justify-content","align-items","align-content"],re:/flex\-direction|flex\-wrap|flex\-flow|justify\-content|align\-items|align\-content|_gap_|row-gap|column-gap/i},flex_child:{name:"Flex child",icon:"icon-Pin22",props:["flex","flex-grow","flex-shrink","flex-basis","order","align-self"],re:/_(order|flex\-grow|flex\-shrink|flex\-basis|flex|align\-self)_/i},visual:{name:"Visual effects",icon:"icon-Pin23",props:["box-shadow","text-shadow","transform","perspective","transition","transition-property","transition-duration","transition-delay"],re:/box\-shadow|text\-shadow|transform|perspective|transition|animation/i},list:{name:"List",icon:"icon-Pin25",props:["list-style","list-style-type","list-style-position","list-style-image"],re:/list/i},grid_container:{name:"Grid container",icon:"icon-grid",props:["grid","grid-template","grid-template-columns","grid-template-rows","grid-template-areas","grid-gap","grid-column-gap","grid-row-gap","grid-auto-columns","grid-auto-rows","grid-auto-flow"],re:/_(grid|grid\-template|grid\-template\-areas|grid\-template\-rows|grid\-template\-columns|_gap_|row-gap|column-gap|grid\-auto\-rows|grid\-auto\-columns|grid\-auto\-flow)_/i},grid_item:{name:"Grid item",icon:"icon-grid",props:["grid-area","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","align-self"],re:/_(grid\-area|grid\-row|grid\-column|grid\-row\-start|grid\-row\-end|grid\-column\-start|grid\-column\-end|align\-self)_/i},columns:{name:"Columns",icon:"icon-Pin18",props:["columns","column-count","column-gap","column-rule","column-span","column-width","break-before","break-inside","break-after"],re:/_(column)|(_(columns|column\-gap|column\-rule|column\-fill|break\-before|break\-inside|break\-after)_)/i},pointer:{name:"Cursor &amp; Interactivity",icon:"icon-grid",props:[],re:/pointer-events|_scroll-|cursor|caret-color|user-select/i}}),g=null,h=null,p={},f={};if(!r){e=pgGetAppFilePath("/lib/crsa/pgeditor/resources/css_info.json");try{function S(e){for(var t=[],n=e.split(/[\|\?]/),r=0;r<n.length;r++)n[r]=n[r].replace(/[\[\]\#\&]/g,"").trim(),!n[r].length||0<=n[r].indexOf("(")||(0<=n[r].indexOf("<")?"named-color"!==(e=n[r].replace(/[\<\>\#\?]/g,"").trim())&&f[e]&&S(f[e].syntax).forEach(function(e){t.indexOf(e)<0&&t.push(e)}):t.indexOf(n[r])<0&&97<=n[r].charCodeAt(0)&&t.push(n[r]));return t.sort(),t}var b=require("fs").readFileSync(e,{encoding:"utf8"}),e=(t=JSON.parse(b),g=[],$.each(t.properties,function(e,t){e.length&&!e.startsWith("-")&&g.push({key:e,name:e})}),n=t.properties,$.each(t.sections,function(e,t){u[e].props=t.list,u[e].sub=t.tree}),pgGetAppFilePath("/lib/crsa/pgeditor/resources/css_desc.json")),b=require("fs").readFileSync(e,{encoding:"utf8"}),e=(css_desc=JSON.parse(b),$.each(css_desc,function(e,t){n[e]&&(t.desc&&(n[e].desc=t.desc),t.examples)&&(n[e].examples=t.examples)}),n["overflow"].values=n["overflow-x"].values,pgGetAppFilePath("/lib/crsa/pgeditor/resources/mdn.syntaxes.json")),b=require("fs").readFileSync(e,{encoding:"utf8"}),e=(f=JSON.parse(b),pgGetAppFilePath("/lib/crsa/pgeditor/resources/mdn.css.props.json")),b=require("fs").readFileSync(e,{encoding:"utf8"}),y=JSON.parse(b);h=[],p={},$.each(y,function(e,t){var n=S(t.syntax),n={key:e,prop:e,values:n.length?n:null,mdn_url:t.mdn_url,inherited:t.inherited,group:t.groups[0]};h.push(n),p[e]=n})}catch(e){console.error(e),t=null}}this.getCSSPropertiesOptions=function(){return h},this.getCSSPropertyValues=function(e){return p[e]&&p[e].values||null},this.getCSSPropertyValuesRegEx=function(e){if(p[e]){if(!p[e].values)return null;if(p[e].values_regex)return p[e].values_regex;for(var t="",n=0;n<p[e].values.length;n++)t.length&&(t+="|"),t+=pgParserEscapeRegExp(p[e].values[n]);var t="(^|\\s)("+t+")(?=\\s|$)",r=new RegExp(t,"ig");return p[e].values_regex=r}return null},this.getCSSPropertyInfo=function(e){var t=n[e]||{};return t.desc_html=`<div class="pg-css-prop-desc"><div>${t.desc}</div><p class="pg-css-prop-desc-more"><a href="#" class="external">Learn more on MDN</a></p></div>`,t};var I=function(e,t){if(!t.startsWith(e))return 0;var n=e.split("-"),r=t.split("-");if(n[0]!==r[0])return 0;for(var o=1;n.length>o&&r.length>o&&n[o]===r[o];)o++;return n.length-o-(r.length-o)};this.getCSSPropertiesForSection=function(e,t){return e=u[e].props,n=t,r=[],o="dummybubi",e.forEach(function(e){n&&!e.startsWith(n+"-")||0===I(o,e)&&(r.push(e),o=e)}),r;var n,r,o}};