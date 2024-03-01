var PgInsight=function(){var g=this,d=null,_=null;let r;function o(){d={classes_map:{},classes_list:[],classes_changed:!1,classes_id:0,css_vars_map:{},css_vars_list:[],css_vars_id:0,css_vars_changed:!1,ids_map:{},ids_list:[],ids_changed:!1,attribute_values:{},tags_attribute_values:{},keywords_map:{},keywords_list:[],keywords_changed:!1,contents:{},meta:{},path_map:{},path_list:[],path_changed:!1,path_id:0},_={},a.forEach(function(e){e(g)})}function f(e){var s=pinegrow.stylesheets.getStylesheetForHTMLElement(e.ownerNode);k(e,e.href?crsaGetNameFromUrl(e.href.toString()):"inline",s?"c"+s.getUniqueId():null),pinegrow.dispatchEventDelayed("on_insight_css_reindexed",null,s)}function e(e){var t=new Intl.Collator;e.sort(function(e,s){return t.compare(e.key,s.key)})}function u(){P(),i.forEach(function(e){e(g)})}function n(e){for(var s=Object.keys(e).sort(),t=[],n=0;n<s.length;n++)t.push({key:s[n],name:s[n]});return t}var p=["title"],a=[],m=[],i=[],v=(this.addHandler=function(e,s,t){e&&a.push(e),s&&m.push(s),t&&i.push(t)},this.ext={},o(),["img","iframe","style","script"]),y=function(e,s,t){var n;null===e||0===e.length||e.startsWith("pg-main-cs-")||"pg-empty-placeholder"===e||(e in d.classes_map?(d.classes_map[e].count++,n=d.classes_map[e]):(d.classes_id++,n={key:e,name:e,count:1,sources:[],sourceids:[],id:d.classes_id},d.classes_map[e]=n,d.classes_list.push(n),d.classes_changed=!0),s&&n.sources.indexOf(s)<0&&n.sources.push(s),t&&n.sourceids.indexOf(t)<0&&n.sourceids.push(t))},h=function(e,s,t){var n;null!==e&&0!==e.length&&0!==(e=e.replace("--","")).length&&(e in d.css_vars_map?(d.css_vars_map[e].count++,n=d.css_vars_map[e]):(d.css_vars_id++,n={key:e,name:e,count:1,sources:[],sourceids:[],id:d.css_vars_id},d.css_vars_map[e]=n,d.css_vars_list.push(n),d.css_vars_changed=!0),s&&n.sources.indexOf(s)<0&&n.sources.push(s),t)&&n.sourceids.indexOf(t)<0&&n.sourceids.push(t)},w=function(e){var s;null!==e&&0!==e.length&&(e in d.ids_map?d.ids_map[e].count++:(d.ids_map[e]=s={key:e,name:e,count:1},d.ids_list.push(s),d.ids_changed=!0))},k=function(s,t,n){try{if(s.cssRules)for(var a=0;a<s.cssRules.length;a++){if(1==s.cssRules[a].type){var e=s.cssRules[a].selectorText,i=e.match(/\.([a-zA-Z][a-zA-Z0-9\-\_]*)/g),r=e.match(/\#([a-z0-9\-\_]*)/g);if(i)for(let e=0;e<i.length;e++){var c=i[e].substr(1,i[e].length-1);c.startsWith("pg-node-id")||c.startsWith("pg-main-")||c.startsWith("pg-file-")||y(c,t,n)}if(r)for(let e=0;e<r.length;e++){var l=r[e].substr(1,r[e].length-1);w(l,t)}if(s.cssRules[a].style)for(let e=0;e<s.cssRules[a].style.length;e++){var o=s.cssRules[a].style.item(e);o.startsWith("--")&&h(o,t,n)}}k(s.cssRules[a],t,n)}s.styleSheet&&k(s.styleSheet,t,n)}catch(e){}},b=function(o,e,s,t,n){void 0===s&&(s=!0),void 0===t&&(t=!0),void 0===n&&(n=!0);var u=[];if(m.forEach(function(e){var s=e(g,o);s&&u.push(s)}),s){var a=(e=pgf.kids?null:e)||o.sourceNode,h="p"+o.uid;if(a===o.sourceNode){var i=h;if(i)for(var r=0;r<d.classes_list.length;r++){var c=d.classes_list[r],l=c.sourceids.indexOf(i);0<=l&&(c.sourceids.splice(l,1),0===c.sourceids.length&&(delete d.classes_map[c.key],d.classes_list.splice(r,1),r--),d.classes_changed=!0)}}a.walkSelfAndChildren(function(s){if(s.isElement){for(var e=s.getClasses(),t=0;t<e.length;t++)y(e[t],null,h);var n=s.getAttr("id"),a=(n&&w(n),s.getAttrList()),i=null;0<=v.indexOf(s.tagName)&&(s.tagName in d.tags_attribute_values||(d.tags_attribute_values[s.tagName]={}),i=d.tags_attribute_values[s.tagName]);for(t=0;t<a.length;t++){var r=a[t].value;r&&(r.startsWith("http")&&(r=pinegrow.getOriginalUrl(r)),a[t].name in d.attribute_values||(d.attribute_values[a[t].name]={}),d.attribute_values[a[t].name][r]=!0,i)&&(a[t].name in i||(i[a[t].name]={}),i[a[t].name][r]=!0)}if("meta"==s.tagName){var n=s.getAttr("name"),c=(s.getAttr("content")||"").trim();if("keywords"===n)for(e=c.split(","),t=0;t<e.length;t++){var l=e[t].trim();!l.length||l in d.keywords_map||(d.keywords_map[l]=!0,d.keywords_list.push({key:l,name:l}),d.keywords_changed=!0)}else c.length&&(n in d.meta||(d.meta[n]={}),d.meta[n][c]=!0)}0<=p.indexOf(s.tagName)&&(s.tagName in d.contents||(d.contents[s.tagName]={}),d.contents[s.tagName][s.html()]=!0),u.forEach(function(e){e(g,o,s)})}return!0})}t&&o.openedInEditor&&(a=o.get$Html())&&a.find('style, link[rel="stylesheet"]').each(function(e,s){if("crsa-inline-styles"!=s.getAttribute("id")){if(s.href){if(_[s.href.toString()])return!0;_[s.href.toString()]=!0}s.sheet&&f(s.sheet)}})},P=(this.inspectPageOrPgel=b,this.sortOptionsList=e,function(){d.classes_changed&&(e(d.classes_list),d.classes_changed=!1,d.classes_list.forEach(function(e){var s;e.sources.length&&(s=e.sources[0],1<e.sources.length&&(s+=" + "+(e.sources.length-1)+" more"),e.html="<span>"+e.name+"</span><small>"+s+"</small>")})),d.ids_changed&&(e(d.ids_list),d.ids_changed=!1),d.path_changed&&(d.path_changed=!1)}),N=(this.rebuild=function(e){switch(e){case"id":d.ids_changed=!0;break;case"class":d.classes_changed=!0;break;case"path":d.path_changed=!0;break;default:d.ids_changed=!0,d.classes_changed=!0,d.path_changed=!0}P()},null),c=($("body").one("pinegrow-ready",function(e,s){function a(t,n,a,i,r){c&&clearTimeout(c),c=setTimeout(function(){var e=new CrsaProfile,s=(new Date).getTime();_={};try{b(t,n,a,i,r)}catch(e){}u(),e.show("PgInsight.rescanChangedPage");e=(new Date).getTime()-s;6e4<(l=(l=50*e)<1e3?1e3:l)&&(l=6e4),c=null},l)}var t=new PgFramework("pg.insight.events","PG Insight"),c=(s.addFramework(t),t.default=!0,t.show_in_manager=!1,t.on_project_scan_begin=function(e,s,t){N=new CrsaProfile,o(),N.pause()},t.on_project_scan_page=function(e,s,t,n){N.resume(),b(t),N.pause()},t.on_project_scan_end=function(e,s,t){N.show("PgInsight.on_project_scan_end begin"),N.resume(),u(),N.show("PgInsight.on_project_scan_end end")},null),l=1e3;t.on_page_changed=function(e,s,t){var n=null;(n=t?t.event_type||null:n)&&"change"==n?a(e,null,!0,!1,!1):document.activeElement&&document.activeElement.classList.contains("crsa-input")||a(e,s,!0,!1)},t.on_page_loaded=t.on_plugin_activated=function(e){a(e,null,!0,!0,!0)};let n=e=>{let s=[".git","_pgbackup","_pginfo","dockerfile",".gitignore"];Array.from(e).forEach(e=>{s.includes(e.name)||e.isFile||n(e.children)})};t.on_project_loaded=(e,s)=>{r=s,n(r.root.children)};var i=new WeakMap;s.addEventHandler("on_css_applied_to_pages",function(e,s,t,n){var a;!t.length||n&&isApp()||(a=t[0])&&(i.has(a)&&clearTimeout(i.get(a)),i.set(a,setTimeout(function(){(a=!a.ownerNode&&a._pg_get_sheet?a._pg_get_sheet():a)&&a.ownerNode&&(f(a),P()),i.delete(a)},pgf.kids?1e3:5e3)))})}),this.find=function(s){var t,e,n,a=[];return t=function(e){a=a.concat(e.find(s))},e=pinegrow.getCurrentProject(),(n=pinegrow.getSelectedPage())&&(e&&e.isPageInProject(n)?e.forEachOpenPage(function(e){t(e.sourceNode)}):t(n.sourceNode)),a},this.getClasses=function(){return d.classes_list},this.getClassesForPage=function(e){var t=[],n=(e.stylesheets.stylesheets.forEach(function(e){e.sourceStylesheet&&(e=e.sourceStylesheet),t.push("c"+e.getUniqueId())}),t.push("p"+e.uid),[]);return d.classes_list.forEach(function(e){for(var s=0;s<e.sourceids.length;s++)if(0<=t.indexOf(e.sourceids[s])){n.push(e);break}}),n},function(e,s){try{for(var t=0;t<e.length;t++){var n=e[t];if(n.style)for(let e=0;e<n.style.length;e++){var a=n.style.item(e);a.startsWith("--")&&(s[a]={key:a,value:n.style.getPropertyValue(a).trim()})}else n.styleSheet&&c(n.styleSheet.cssRules,s);n.cssRules&&c(n.cssRules,s)}}catch(e){}});this.getCSSVarsForPage=function(e){for(var s=new CrsaProfile,t=e.getDocument(),n={},a=0;a<t.styleSheets.length;a++){var i=t.styleSheets[a];if("crsa-inline-styles"!==i.ownerNode.getAttribute("id"))try{c(i.cssRules,n)}catch(e){}}return console.log(n),s.show("get css vars"),Object.values(n)},this.getValuesForAttribute=function(e,s){var t=null,t=s?d.tags_attribute_values[s]||{}:d.attribute_values;return n(t[e]||{})},this.getContentsForTag=function(e){return n(d.contents[e]||{})},this.getMetaValuesForName=function(e){return n(d.meta[e]||{})},this.getIds=function(){return d.ids_list},this.getKeywords=function(){return d.keywords_changed&&(e(d.keywords_list),d.keywords_changed=!1),d.keywords_list}};