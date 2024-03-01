$(function(){var B,O,n;pgf.class_styles&&(B=function(e){return pgMakeSlug(e)},window.PgPropStylesControl=function(){this.$element=$('<div class="pg-dm-style-control"></div>');function d(e){e.closest(".pg-dm-style-pill").removeClass("editing"),e.text("Inline"),e.removeAttr("contentEditable")}function a(e,t){return e?e.display_name+` <i class="icon icon-right"></i>`:t?`<i class="icon icon-279"></i>`:null}var i=$('<div class="pg-dm-style-control-pills"></div>').appendTo(this.$element),e=(i.on("click",".style",function(e){e.preventDefault();var t=$(this).attr("data-id");pinegrow.classStyles.setCurrentStyleByKey(t,!0)}),i.on("contextmenu",".style",function(e){e.preventDefault();var t=$(this),n=t.attr("data-id"),n=pinegrow.classStyles.findStyleByKey(n);return pinegrow.classStyles.showStyleContextMenu(n,t,e),!1}),i.on("click",".direct",function(e){e.preventDefault(),$(this).hasClass("editing")||pinegrow.classStyles.setCurrentStyleByKey(null,!0)}),i.on("click",".remove",function(e){e.preventDefault();var t=$(this).closest(".style").attr("data-id");return pinegrow.classStyles.removeStyleFromPgel(pinegrow.classStyles.findStyleByKey(t)),!1}),i.on("click",".create-new,.aaapg-dm-style-control-new",function(e){var a,i,t,o,r,c,n,s;if(e.preventDefault(),pinegrow.getCurrentProject())return a=$(this).closest(".pg-dm-style-pill"),"true"!=(i=a.find("span")).attr("contentEditable")&&(a.addClass("editing"),i.text(""),i.attr("contentEditable","true"),i.get(0).focus(),t=a.find("button"),o=null,r=pinegrow.selectedElements.getLastSelected(),c=pinegrow.classStyles.findParentScopes(r),n=a.find("stylescope"),addTooltip(n,"Select scope"),c.forEach(function(e){e.usedAsScope&&!o&&(o=e)}),n.on("click",function(e){e.preventDefault();var t=c.map(function(e){return{label:e.display_name,action:function(){o=e},check:o===e}});return t.splice(0,0,{label:"Select style scope",type:"header"},{label:"Global style",action:function(){o=null},check:null===o},{type:"divider"}),new CrsaContextMenu(t,n).showForElement(n),!1}),s=function(){var e,t=i.text().trim(),n=B(t),s=(closeAllTooltips(100),pinegrow.classStyles.getStylesForPgel(r)),l=s.length?s[s.length-1]:null,s=pinegrow.classStyles.validateNameForANewStyle(t,null,l);s?(pinegrow.showQuickError(s),i.get(0).focus()):(e=function(){a.removeClass("editing"),c.forEach(function(e){e.usedAsScope=e===o}),pinegrow.classStyles.createStyle(t,l,null,o)},pinegrow.classStyles.findDeletedStyleByKey(n)?pinegrow.showAlert(`<p>A style with the same key <code>${n}</code> was recently deleted but the whole project was not updated yet. The project needs to be updated first.</p>`,"The project needs to be updated","Cancel","Update project &amp; Create",function(){d(i)},function(){pinegrow.classStyles.updateProject(function(){e()})}):e())},i.on("keydown",function(e){switch(e.key){case"Enter":e.preventDefault(),s();break;case"Escape":return e.preventDefault(),d(i),!1}}),t.on("click",function(e){return s(),!1})),!1;pinegrow.showQuickError("Styles require a project. Please open the page as a project first.")}),i.on("click",".add-style",function(e){e.preventDefault();var t=$(this),s=function(){r(this.data.key)},n=pinegrow.selectedElements.getLastSelected(),l=pinegrow.classStyles.getStylesForPgel(n),a=[],i=function(e){var t;return e.children.length?(t=[],e.children.forEach(function(e){o(t,e)}),t):null},o=function(e,t,n){e.push({label:n?t.display_name:t.name,data:t,action:s,check:0<=l.indexOf(t),submenu:i(t)})},n=(a.push({type:"header",label:"Options"}),a.push({label:"Keep inline classes",action:function(){var e=!("1"===pinegrow.getSetting("class-styles-keep-inline","0"));pinegrow.setSetting("class-styles-keep-inline",e?"1":"0"),pinegrow.showMode("Keep inline classes that are not a part of the assigned style",e)},check:"1"===pinegrow.getSetting("class-styles-keep-inline","0"),helptext:`When assigning the class style, keep existing inline classes that are not a part of the assigned style`}),a.push({type:"divider"}),pinegrow.classStyles.getRecentlyUsed()),n=(n.length&&(a.push({type:"header",label:"Recently used"}),n.forEach(function(e){o(a,e,!0)}),a.push({type:"divider"})),a.push({type:"divider"}),a.push({label:"Show style manager",action:function(){pinegrow.showUIPanel("classstyles",!1,!1,!0)}}),pinegrow.classStyles.getStyles());return n.length&&(a.push({type:"header",label:"All styles"}),n.forEach(function(e){null===e.parent&&o(a,e)})),new CrsaContextMenu(a,t).showForElement(t),!1}),this.show=function(e){this.showControl(),i.get(0).innerHTML="";var t="",n=pinegrow.classStyles.getCurrentStyle(),s=pinegrow.classStyles.getStylesForPgel(e),l=!0;s.forEach(function(e){t+=`<div class="pg-dm-style-pill style ${n===e?"active":""} ${e.scopeParent?"with-scope":""}" data-id="${e.key}">`,e.scopeParent&&(t+=`<stylescope>${a(e.scopeParent)}</stylescope>`),t+=e.name+`<i class="remove icon icon-close"></i></div>`,l=!1}),t+=`<div class="pg-dm-style-pill direct pg-dm-style-control-new ${null===n?"active":""}">`,l&&(t+=`<stylescope style="display:none;"></stylescope>`),t=t+`<span>Inline</span><i class="icon icon-Editable create-new"></i><button style="" class="pg-button">Ok</button></div>`+'<div class="add-style"><i class="icon icon-down"></i></div>',i.get(0).innerHTML=t,addTooltip(i.find(".create-new"),`Create a new ${s.length?"substyle":"style"}.`),addTooltip(i.find(".remove"),`Remove the style from the selected element.`),addTooltip(i.find(".direct button"),`Click or ${pgShowKbd("Enter")} to create, ${pgShowKbd("Esc")} to cancel.`)},!0),r=(this.showControl=function(){e||(pg$Show(this.$element),e=!0)},this.hideControl=function(){e&&(pg$Hide(this.$element),e=!1)},function(e){var t=pinegrow.classStyles.findStyleByKey(e);t?pinegrow.classStyles.assignStyle(t,null,"1"===pinegrow.getSetting("class-styles-keep-inline","0")):pinegrow.showQuickError(`Style <b>${e}</b> does not exist.`)})},O=function(e){e.sort(function(e,t){return e.scopeParent&&!t.scopeParent?1:!e.scopeParent&&t.scopeParent?-1:e.name.localeCompare(t.name)})},window.PgClassStyle=function(e){this.children=[],this.parent=null,this.scopeParent=null,this.level=0,this.expanded=!1,this.locked=!1,this.count=0,this.deleted=!1,e instanceof pgParserNode?(this.db_node=e,this.updateFromNode()):(this.name=this.display_name=e,this.key=B(this.name),this.classes=[],this.db_node=null)},PgClassStyle.prototype.updateFromNode=function(){this.key=this.db_node.getAttr("key"),this.name=this.display_name=this.db_node.getAttr("name"),this.classes=(this.db_node.getAttr("class")||"").split(/\s+/).filter(function(e){return 0<e.length}),this.expanded=this.db_node.hasAttribute("expanded"),this.locked=this.db_node.hasAttribute("locked"),this.count=parseInt(this.db_node.getAttribute("count")||"0")},PgClassStyle.prototype.updateToNode=function(e){this.db_node||(this.db_node=e.createNode("classstyle",{},!1)),this.db_node.setAttr("key",this.key),this.db_node.setAttr("name",this.name),this.db_node.setAttr("class",this.classes.join(" ")),this.expanded?this.db_node.setAttribute("expanded",null):this.db_node.removeAttribute("expanded"),this.locked?this.db_node.setAttribute("locked",null):this.db_node.removeAttribute("locked"),this.db_node.setAttribute("count",this.count)},PgClassStyle.prototype.destroy=function(){this.db_node=null},PgClassStyle.prototype.setParent=function(e,t){(this.parent=e)&&(e.children.push(this),t)&&O(e.children)},PgClassStyle.prototype.setScopeParent=function(e,t){(this.scopeParent=e)&&(e.children.push(this),t)&&O(e.children)},PgClassStyle.prototype.updateKeyAndDisplayName=function(){this.key=B(this.name),this.display_name=this.name,this.parent?(this.display_name=this.parent.display_name+" - "+this.name,this.key=this.parent.key+"."+this.key):this.scopeParent&&(this.display_name=this.scopeParent.display_name+" &gt; "+this.name,this.key=this.scopeParent.key+":"+this.key)},PgClassStyle.prototype.remove=function(e){var t;this.parent&&0<=(t=this.parent.children.indexOf(this))&&(this.parent.children.splice(t,1),this.parent=null),this.db_node.remove(),this.deleted=!0},PgClassStyle.prototype.getClasses=function(){return this.classes},PgClassStyle.prototype.hasClass=function(e){return 0<=this.classes.indexOf(e)},PgClassStyle.prototype.addClass=function(e){this.classes.indexOf(e)<0&&this.classes.push(e),this.db_node&&this.db_node.setAttribute("class",this.classes.join(" "))},PgClassStyle.prototype.removeClass=function(e){var t=this.classes.indexOf(e);0<=t&&this.classes.splice(t,1),this.db_node&&this.db_node.setAttribute("class",this.classes.join(" "))},PgClassStyle.prototype.setExpanded=function(e){this.expanded=e,this.db_node.withoutEvents(function(){e?this.setAttribute("expanded",null):this.removeAttribute("expanded")})},PgClassStyle.prototype.setLocked=function(e){this.locked=e,this.db_node.withoutEvents(function(){e?this.setAttribute("locked",null):this.removeAttribute("locked")})},PgClassStyle.prototype.setUsageCount=function(e){var t=this;this.count=e,this.db_node.withoutEvents(function(){this.setAttribute("count",t.count)})},n=function(){function d(e){for(var t=[],n={},s=w(e.key),l=0;l<s.length;l++){var a=s[l],a=C(a);a&&a.getClasses().forEach(function(e){m(t,e,n,f)})}return t}function l(e,t,n){n=n||_,!t&&n?(v(e),r=e):v(e),n&&S([n],!0),h.is_changed=!0}function a(e,t,n){var s,l=p.getStylesForPgel(e),a=(l.indexOf(t)<0&&l.push(t),l=[t],[]);n&&(s=t.getClasses(),(e.hasAttribute(y)?D(e):e.getClasses()).forEach(function(e){s.indexOf(e)<0&&a.push(e)})),a.length&&e.setAttribute(g,a.join(" ")),e.setAttribute(y,l.map(function(e){return e.key}).join(" ")),t.count++,v(e)}function c(n,e,s){var l=!1,a=new RegExp(`^${escapeRegExp(e)}(.|$)`),i=e.split(".");return n.sourceNode.walk(function(e){var t;return e.isElement&&(t=e.getAttribute(y))&&(t=t.trim()).match(a)&&((t=t.split(".")).splice(i.length-1,t.length-i.length+1),0===t.length?e.removeAttribute(y):e.setAttribute(y,t.join(".")),s||e.removeAttribute("class"),v(e,n),l=!0),!0}),l}function u(){0===pinegrow.getAllPages().length&&isApp()&&h&&h.save()}function s(){var s,e;h&&(s=new WeakMap,b.forEach(function(e){e.destroy()}),b=[],k={},(e=h.findOne("> classstyles"))&&e.find("classstyle").forEach(function(e){var t,n=new PgClassStyle(e);b.push(n),k[n.key]=n,s.set(e,n),"classstyle"===e.parent.tagName&&(t=s.get(e.parent),n.key.startsWith(t.key+":")?n.setScopeParent(t):n.setParent(t),n.level=t.level+1,n.updateKeyAndDisplayName())}),j(!0),p.setCurrentStyleByKey(_?_.key:null),pinegrow.dispatchEvent("on_class_styles_updated_from_db"),s=null)}var p=this,h=null,y="data-pg-class-style",g="data-pg-class-style-inline",n=new PgDelayedTasks,f={},m=(this.addClassToPropMap=function(e){$.each(e,function(e,t){f[e]=t})},function(e,t,n,s){var l=s[t]||null,a=(l&&(n[l]&&n[l]!==t&&0<=(a=e.indexOf(n[l]))&&e.splice(a,1),n[l]=t),e.indexOf(t));a<0&&e.push(t)}),w=function(e){for(var t=e.split("."),n=[],s=null,l=0;l<t.length;l++)s=(0===l?"":s+".")+t[l],n.push(s);return n},v=function(e,t,n){var s=e.getAttr(y);if(!s)return d=!1,e.hasAttribute(y)&&(e.removeAttribute(y),d=!0),e.hasAttr(g)&&((c=e.getAttr(g))?e.setAttr("class",c):e.removeAttribute("class"),e.removeAttribute(g),d=!0),d;for(var l=[],a={},i=w(s.trim()),o=0;o<i.length;o++){var r=i[o],r=C(r);r&&(r.getClasses().forEach(function(e){m(l,e,a,f)}),n)&&r.count++}(c=e.getAttr(g))&&c.split(/\s+/).forEach(function(e){e.length&&m(l,e,a,f)});var c,d=e.getAttr("class")||"",s=l.join(" ");return d!==s&&(s?e.setAttr("class",s):e.removeAttr("class"),!0)},i=this.applyStylesOnPage=function(t,n,s,l){var a=!1;return t.sourceNode.walk(function(e){return e.isElement&&e!==s&&(e.hasAttr(g)||e.hasAttr(y))&&(!n||0<=p.getStylesForPgel(e).indexOf(n))&&(a=v(e,t,l)||a),!0}),a},o=(this.resetUsageCounts=function(){b.forEach(function(e){e.count=0})},this.rememberUsageCounts=function(){b.forEach(function(e){e.setUsageCount(e.count)})},[]),S=function(e,t){e.forEach(function(e){o.indexOf(e)<0&&o.push(e)}),t?n.run("classStylesTriggerChanged",function(){pinegrow.dispatchEvent("on_class_styles_changed",null,o),o=[]},100):(n.cancel("classStylesTriggerChanged"),pinegrow.dispatchEvent("on_class_styles_changed",null,o),o=[])},_=null,r=null,b=[],k={},C=function(e){return e&&k[e]||null},E=(this.getStyles=function(){return b},this.findStyleByKey=function(e){return C(e)},this.findStyleByName=function(e,t){e=e.toLowerCase();for(var n=0;n<b.length;n++)if(b[n].name.toLowerCase()===e&&(!t||b[n].parent===t))return b[n];return null},this.findDeletedStyleByKey=function(e){var t=h.getDBNode("classstyles");return t?t.findOne(`deleted[key="${e}"]`):null},!1),P=(this.setLastLocked=function(e){0},this.setLastExpanded=function(e){E=e},this.validateNameForANewStyle=function(e,t,n){var s,l;return e?e.match(/^[a-z0-9\s_]+$/i)?this.findStyleByName(e,n)?`Style ${e} already exists!`:(s=B(e),n&&(s=n.key+"."+s),!(l=this.findStyleByKey(s))||t&&l===t?null:`Style with the id ${s} already exists!`):`Style name can only contain letters, numbers, _ and spaces.`:"Style name can not be empty."},this.findParentScopes=function(e){for(var t=[],n=e.parent;null!==n;){var s=p.getStylesForPgel(n);s.length&&t.push(s[0]),n=n.parent}return t},this.getStyleScope=function(e){var t=e.key.split(":");return 1<t.length?this.findStyleByKey(t[0]):null},this.createStyle=function(a,i,o,r){pinegrow.requireProjectDB(function(e){var t=pinegrow.selectedElements.getLastSelected(),n=p.getStylesForPgel(t).length?(t.getAttr(g)||"").split(/\s+/).filter(function(e){return 0<e.length}):t.getClasses().slice(0),s=new PgClassStyle(a),n=(s.classes=n,i&&s.setParent(i,!0),r&&s.setScopeParent(r),s.updateKeyAndDisplayName(),b.push(s),k[s.key]=s,e.getDBNode("classstyles")),l=e.createNode("classstyle",{name:s.name,key:s.key,class:s.classes.join(" ")},!1);s.db_node=l,s.setExpanded(E),i?(i.db_node.append(l),s.level=i.level+1):r?(r.db_node.append(l),s.level=r.level+1):n.append(l),e.changed(new PgCollection(n),{source:"class_styles"}),j(!0),S([s]),t.removeAttr(g),p.assignStyle(s,"Create style "),o&&o(s)})},[]),A=4,x=(this.getRecentlyUsed=function(){var n=[];return P.forEach(function(e){var t=C(e);t&&n.push(t)}),n},this.assignStyle=function(t,e,n){var s=P.indexOf(t.key),l=(0<=s&&P.splice(s,1),A<=P.length&&P.pop(),P.unshift(t.key),pinegrow.getCollection());l.getLength()&&pinegrow.makeChanges(l,(e||"Assign style ")+t.display_name,function(){l.forEachElement(function(e){a(e,t,n)})}),pinegrow.classStyles.setCurrentStyle(t,!0)},this.removeStyleFromPgel=function(r,c){var e=pinegrow.getCollection(),d=null;pinegrow.makeChanges(e,"Remove style "+r.display_name,function(){e.forEachElement(function(e,t,n){var s,l,a,i,o=p.getStylesForPgel(e);e=e,s=r,a=c,0<=(i=(l=o).indexOf(s))&&l.splice(i,l.length-i),l.length?e.setAttribute(y,l[l.length-1].key):e.removeAttribute(y),a?e.removeAttribute(g):e.removeAttribute("class"),0<s.count&&s.count--,v(e),t===n-1&&(d=o.length?o[o.length-1]:null)})}),r===_?p.setCurrentStyleByKey(d,!0):p.setCurrentStyleByKey(_,!0)},this.addStyleToMatchingElements=function(t,e){var n=new PgCollection,s=d(t),l={};return s.forEach(function(e){l[e]=!0}),0===s.length?(pinegrow.showQuickError("The style does not have any properties."),null):(e.sourceNode.walk(function(e){return e.isElement&&function(e){var t=e.getClasses();if(t.length!==s.length)return!1;for(var n=0;n<t.length;n++)if(!l[t[n]])return!1;return!0}(e)&&n.add(e),!0}),0===n.getLength()?(pinegrow.showQuickError("No elements with the same properties as the style were found."),null):(pinegrow.makeChanges(n,`Add ${t.display_name} to matched`,function(){n.forEachElement(function(e){a(e,t)})}),pinegrow.showQuickMessage(`Style ${t.display_name} was added to ${n.getLength()} element${1<n.getLength()?"s":""} on the page.`),n))},this.deleteStyle=function(t,a){var i=new PgCollection(t.db_node),o=[],r=[];pinegrow.requireProjectDB(function(l){pinegrow.makeChanges(t.db_node.getPage(),"Delete style "+t.display_name,function(){var n=l.getDBNode("classstyles"),s=function(e){var t=l.createNode("deleted",{key:e.key},!1);a&&t.setAttribute("leave-classes"),n.append(t),i.add(t),i.add(e.db_node),r.push(e),e.children.forEach(s),o.push(e)};s(t),l.changed(i,{source:"class_styles"}),pinegrow.getAllPages().forEach(function(e){T(e)&&c(e,t.key,a)}),r.forEach(function(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),e.remove()}),j(!1)}),S(o),u(),pinegrow.showQuickMessage(`Style <b>${t.display_name}</b> was deleted. Use Undo to restore. Update the whole project to apply to all pages.`)}),pinegrow.selectedElements.reselect()},this.duplicateStyle=function(n,a,i,o,e){var r,c=[];return pinegrow.makeChanges(n.db_node,`Duplicate style `+n.display_name,function(){var s=new PgCollection,e=h.getDBNode("classstyles"),t=(r=new PgClassStyle(a),"as_substyle"===o?(r.setParent(n.parent),r.classes=n.classes.slice(0)):(r.setParent(null),r.classes=d(n)),r.updateKeyAndDisplayName(),r.updateToNode(h),(r.parent?r.parent.db_node:e).append(r.db_node),s.add(r.db_node.parent),s.add(r.db_node),b.push(r),c.push(r),r),l=function(e,t){var n=new PgClassStyle(e.name);n.classes=e.classes.slice(0),n.setParent(t),n.updateKeyAndDisplayName(),n.updateToNode(h),e.children.forEach(function(e){l(e,n)}),t.db_node.append(n.db_node),s.add(n.db_node),b.push(n),c.push(n)};"with_substyles"===i&&n.children.forEach(function(e){l(e,t)}),h.changed(s,{source:"class_styles"}),j(!0),u()}),S(c),e&&e(r),r},this.renameStyle=function(i,o,r){var c=new PgCollection(i.db_node);pinegrow.requireProjectDB(function(e,t){var n=i.key,s=(i.name=i.display_name=o,[]),l=function(e){e.updateKeyAndDisplayName(),e.db_node.setAttr("key",e.key),e.db_node.setAttr("name",e.name),s.push(e),e.children.forEach(l)},a=(l(i),j(!0),new RegExp(`^${escapeRegExp(n)}(.|$)`,"i"));i.count=0,t.forEachEditableFile(function(e,t,n){pinegrow.undoManager.getActiveHistory().ignore(function(){n.skip_refresh=!0,e.sourceNode.walk(function(e){var t;return e.isElement&&(t=e.getAttr(y))&&t.match(a)&&(t=t.replace(a,i.key+`$1`),e.setAttribute(y,t),n.changed=!0,n.save=!0,i.count++),!0})}),t(e,n)},function(){p.rememberUsageCounts(),pinegrow.undoManager.getActiveHistory().changeDone(`Rename style to `+i.display_name,null,"class_styles",{},"Project (no undo)"),e.changed(c,{source:"class_styles"}),isApp()&&e.save(),pinegrow.selectedElements.reselect(),S(s),r&&r()},"Renaming style...")})},this.setCurrentStyle=function(e,t,n){_=e,t&&pinegrow.getCollection().forEachElement(function(e){e._rememberCurrentClassStyle=_||"direct"});var s={source:n||"none"};pinegrow.dispatchEvent("on_current_class_style_changed",pinegrow.getSelectedPage(),_,s)},this.setCurrentStyleByKey=function(e,t,n){this.setCurrentStyle(C(e),t,n)},this.getCurrentStyle=function(){return _},this.getStylesForPgel=function(e){var n=[],t=e.getAttr(y);return t&&w(t).forEach(function(e){var t=C(e);t&&n.push(t)}),n},this.getInlineClassesForPgel=function(e){return(e.getAttr(g)||"").split(/\s+/).filter(function(e){return 0<e.length})},this.ensureStyleWithClassIsSelected=function(e,t){var n=e.getPage();if(T(n)){var s=pinegrow.classStyles.getStylesForPgel(e);if(s.length){var l=null;if(!(0<=pinegrow.classStyles.getInlineClassesForPgel(e).indexOf(t)))for(var a=s.length-1;0<=a;a--)if(0<=s[a].getClasses().indexOf(t)){l=s[a];break}l!==pinegrow.classStyles.getCurrentStyle()&&pinegrow.classStyles.setCurrentStyle(l,!0,"click_on_class")}}},this.isStyleOnPgel=function(e,t){return 0<=this.getStylesForPgel(e).indexOf(t)},this.updateUsageCounts=function(n){pinegrow.requireProjectDB(function(e,t){p.resetUsageCounts(),t.forEachEditableFile(function(e,t,n){e.sourceNode.walk(function(e){return e.isElement&&p.getStylesForPgel(e).forEach(function(e){e.count++}),!0}),t(e,n)},function(){p.rememberUsageCounts(),n&&n()},"Updating usage counts...")})},this.updateProject=function(n){pinegrow.requireProjectDB(function(e,t){p.resetUsageCounts();var l=e.getDBNode("classstyles").find("deleted");t.forEachEditableFile(function(n,e,s){l.forEach(function(e){var t=e.getAttribute("key");t&&(s.changed=c(n,t,e.hasAttribute("leave-classes"))||s.changed)}),s.changed=p.applyStylesOnPage(n,null,null,!0)||s.changed,s.changed&&(s.save=!0),e(n,s)},function(){p.rememberUsageCounts(),l.forEach(function(e){e.remove()}),isApp()&&t.db.save(),n&&n()},"Updating styles...")})},this.getCurrentStyleForPgel=function(e){var t;return e&&(!e._rememberCurrentClassStyle||"direct"!==e._rememberCurrentClassStyle)&&(t=p.getStylesForPgel(e)).length?e._rememberCurrentClassStyle&&0<=t.indexOf(e._rememberCurrentClassStyle)?e._rememberCurrentClassStyle:t[0]:null}),D=(this.addClassToStyle=function(e,t,n,s){t?(s&&t.removeClass(s),t.addClass(n),l(e,null,t)):(s&&L(e,s),F(e,n),v(e))},this.removeClassFromStyle=function(e,t,n,s){t?(t.removeClass(n),l(e,null,t)):(L(e,n),v(e))},function(e){return(e.getAttr(g)||"").split(/\s+/).filter(function(e){return 0<e.length})}),N=function(e,t){t.length?e.setAttr(g,t.join(" ")):e.removeAttribute(g)},F=function(e,t){var n=D(e);n.indexOf(t)<0&&n.push(t),N(e,n)},L=function(e,t){var n=D(e),s=n.indexOf(t);0<=s&&n.splice(s,1),N(e,n)},T=(this.hasClass=function(e,t){return!("string"!=typeof t||!t.length)&&(_?_.hasClass(t):e.getAttr(y)?0<=(" "+(e.getAttribute(g)||"")+" ").indexOf(" "+t+" "):e.hasClass(t))},this.addClass=function(e,t,n){"string"==typeof t&&t.length&&(_?(_.addClass(t),l(e)):e.getAttr(y)?(F(e,t),l(e,!0)):e.addClass(t,n))},this.removeClass=function(e,t,n){"string"==typeof t&&t.length&&(_?(_.removeClass(t),l(e)):e.getAttr(y)?(L(e,t),l(e,!0)):e.removeClass(t,n))},this.canRemoveClass=function(e,t){return!0},this.getClasses=function(e){var t;return _?_.getClasses():null!==(t=e.getAttr(g))?t.split(/\s+/).filter(function(e){return 0<e.length}):e.getClasses()},function(e){return e&&e.classSetter===p}),j=function(t){function n(e){t&&e.children.length&&O(e.children),e.children.forEach(function(e){s.push(e),n(e)})}var s=[],l=[];k={},b.forEach(function(e){null===e.parent&&null===e.scopeParent&&l.push(e),k[e.key]=e}),t&&O(l),l.forEach(function(e){null===e.parent&&null===e.scopeParent&&(s.push(e),n(e))}),b=s};this.expandStyle=function(e,t){e.setExpanded(t),h.is_changed=!0,u()},this.lockStyle=function(e,t){e.setLocked(t),h.is_changed=!0,u()},this.expandAll=function(t){this.getStyles().forEach(function(e){e.setExpanded(t)}),this.setLastExpanded(t),h.is_changed=!0,u()},this.lockAll=function(t){this.getStyles().forEach(function(e){e.setLocked(t)}),this.setLastLocked(t),h.is_changed=!0,u()},this.showStyleContextMenu=function(s,e,t){function n(e){pinegrow.classStyles.deleteStyle(s,e)}var l=pinegrow.selectedElements.getLastSelected(),a=[],l=(l&&(pinegrow.classStyles.isStyleOnPgel(l,s)?(a.push({type:"header",label:"Remove style"}),a.push({label:"Remove from selected element",action:function(){pinegrow.classStyles.removeStyleFromPgel(s)}}),a.push({label:"Remove &amp; leave classes "+pinegrow.selectedElements.getName(),action:function(){pinegrow.classStyles.removeStyleFromPgel(s,!0)}})):(a.push({type:"header",label:"Add style"}),a.push({label:"Add to selected element",action:function(){pinegrow.classStyles.assignStyle(s)}}),a.push({label:"Add to selected element &amp; keep inline",action:function(){pinegrow.classStyles.assignStyle(s,null,!0)}}))),a.push({label:"Add style to all matching elements",action:function(){var e=pinegrow.getSelectedPage();e?pinegrow.classStyles.addStyleToMatchingElements(s,e):pinegrow.showQuickError("Please open a page first.")}}),a.push({type:"divider"}),a.push({label:"Duplicate style...",action:function(){var t=0===s.children.length?"without_substyles":null,n=null===s.parent?"as_top":null,e={};t||(e.mode_with={name:"Duplicate",type:"select",value:"with_substyles",show_empty:!1,options:[{key:"with_substyles",name:"with sub-styles"},{key:"without_substyles",name:`without sub-styles`}]}),n||(e.mode_as={name:"Duplicate as",type:"select",value:"as_substyle",show_empty:!1,options:[{key:"as_substyle",name:`Sub-style of `+s.parent.display_name},{key:"as_top",name:"Top level style"}]}),e.old_name={name:"Current name",type:"displayhtmlwithlabel",html:s.name},e.name={name:"New name",validate:function(e,t,n){return pinegrow.classStyles.validateNameForANewStyle(n)}},pinegrow.showQuickDialog(`Duplicate style `+s.display_name,"Style information",`<p>Enter the new name for the new style:</p>`,e,"Cancel","Duplicate",null,function(e){t=e.mode_with||t,n=e.mode_as||n,pinegrow.classStyles.duplicateStyle(s,e.name,t,n,function(){})})}}),a.push({label:"Rename style...",action:function(){pinegrow.showQuickDialog(`Rename style `+s.display_name,"Style information",`<p>Enter the new name for the style and click on Rename &amp; Update.</p><p>Please note that all changed files in the project will be saved. This operation can not be undone.</p>`,{old_name:{name:"Current name",type:"displayhtmlwithlabel",html:s.name},name:{name:"New name",validate:function(e,t,n){return pinegrow.classStyles.validateNameForANewStyle(n,s)}}},"Cancel","Rename &amp; Update project",null,function(e){pinegrow.classStyles.renameStyle(s,e.name,function(){})})}}),a.push({type:"divider"}),a.push({type:"header",label:"Delete style from the project"}),a.push({label:"Delete style",action:function(){n(!1)}}),a.push({label:"Delete style &amp; keep classes on elements",action:function(){n(!0)}}),new CrsaContextMenu(a,e));t?l.showAt(t.pageX,t.pageY):l.showForElement(e)},pinegrow.addEventHandler("on_can_make_change",function(e,t,n,s){return e&&e.getCurrentFrameworkHandlerReturnValue("on_can_make_change")?e.getCurrentFrameworkHandlerReturnValue("on_can_make_change"):T(e)&&_&&("add_class"===n||"remove_class"===n)&&_.locked?new PgEditException(`<p>The selected style <b>${_.name}</b> is locked.</p><p>Unlock it in the Class Styles panel or edit the classes directly in the Properties panel.</p>`,"This style is locked"):void 0}),pinegrow.addEventHandler("on_element_selected",function(e,t,n){var s;T(e)&&(s=_=x(t),p.setCurrentStyle(s,!0,"element_selected"))}),pinegrow.addEventHandler("on_before_changes_done",function(e,t,n){var s,l;r&&(s=null,l=r,pinegrow.getAllPages().forEach(function(e){T(e)&&i(e,s,l)})),r=!1}),pinegrow.addEventHandler("on_project_loaded",function(e,t){t.requireDB(function(e){h=e,s()},!1)}),pinegrow.addEventHandler("on_project_closed",function(e,t){b=[],j(),pinegrow.dispatchEvent("on_class_styles_updated_from_db")}),pinegrow.addEventHandler("on_projectdb_changed",function(e,t,n){n&&"undo"===n.source&&s()}),pinegrow.addEventHandler("on_page_parsed_in_proxy",function(e){0<p.getStyles().length&&i(e)})},window.PgClassStylesView=function(){function e(e){pinegrow.classStyles.expandAll(e),n.show(),S()}function t(e){pinegrow.classStyles.lockAll(e),n.show()}var n=this,s=(this.$element=$('<div class="pg-dm-style-list"></div>'),$('<div class="pg-dm-style-list-header"></div>').appendTo(this.$element),new PgSearchBox({toolbar_on:!0,placeholder:"search",placeholder_active:"search by style name"})),l=null,a=(s.onSearch=function(e){l=e?new RegExp(escapeRegExp(e),"i"):null,n.show()},this.toolbar=s.getToolbar()),i=(a.addSection("settings"),new PgButtonToolbarItem("icon-down","Lock, expand styles, update project..."));a.addItem("settings",i),i.onClick=function(){return new CrsaContextMenu([{type:"header",label:"Expand / collapse styles"},{label:"Expand all",action:function(){e(!0)}},{label:"Collapse all",action:function(){e(!1)}},{type:"divider"},{type:"header",label:"Lock / unlock styles"},{label:"Lock all",action:function(){t(!0)}},{label:"Unlock all",action:function(){t(!1)}},{type:"divider"},{type:"header",label:"Update"},{label:"Update usage counts",action:function(){pinegrow.classStyles.updateUsageCounts(function(){n.show()})}},{label:"Update whole project & save changes",action:function(){pinegrow.classStyles.updateProject(function(){n.show()})}}],this.$element).showForElement(this.$element),!1},s.$element.appendTo(this.$element);function o(e,t){var a=!1;t&&1===t.length?h.whenVisible(function(){var s=pinegrow.classStyles.getCurrentStyle(),l=null,e=pinegrow.selectedElements.getLastSelected();e&&(l=pinegrow.classStyles.getStylesForPgel(e)),t.forEach(function(e){var t,n=w(e);n&&(e.deleted?n.parentNode&&n.parentNode.removeChild(n):(t=f(e,s===e,!!l&&0<=l.indexOf(e)),n.outerHTML=t,a=!0))}),a||n.show()},"updateSingleClassStyle"):n.show()}function r(e,t){h.whenVisible(function(){v(),_(),S(t)},"setActiveStyle",1)}function c(e){e&&(y=e.getShowNameClassesFilter(),g.run("updateAfterFrameworksChanged",function(){n.show()},500))}function d(e){h.whenVisible(function(){v(),_()},"updateUsed")}(new PgSearchBoxSpacer).$element.appendTo(this.$element);var u=new PgPanelNotice,p=(u.$element.appendTo(this.$element),$('<div class="pg-dm-style-list-items"></div>').appendTo(this.$element)),h=this.view=new PgUIView(this.$element,"classstyles"),y=(h.tabIcon="icon-classes",new WeakMap,null),g=new PgDelayedTasks,f=(p.on("click",".name",function(e){e.preventDefault();var t=$(this).closest(".pg-dm-style-list-item").attr("data-key"),t=pinegrow.classStyles.findStyleByKey(t),n=pinegrow.selectedElements.getLastSelected();n?0<=pinegrow.classStyles.getStylesForPgel(n).indexOf(t)?(pinegrow.classStyles.removeStyleFromPgel(t),pinegrow.showQuickMessage(`Style <b>${t.display_name}</b> was removed from selected elements.`)):(pinegrow.classStyles.assignStyle(t),pinegrow.showQuickMessage(`Style <b>${t.display_name}</b> was added to selected elements.`)):pinegrow.showQuickError("Please select the element first.")}),p.on("contextmenu",".pg-dm-style-list-item",function(e){e.preventDefault();var t=$(this).closest(".pg-dm-style-list-item").attr("data-key"),t=pinegrow.classStyles.findStyleByKey(t);return pinegrow.classStyles.showStyleContextMenu(t,$(e.target),e),!1}),p.on("click","i.open",function(e){e.preventDefault();var t=$(this).closest(".pg-dm-style-list-item"),n=t.attr("data-key"),n=pinegrow.classStyles.findStyleByKey(n);return pinegrow.classStyles.expandStyle(n,!0),t.addClass("open"),pinegrow.classStyles.setLastExpanded(!0),!1}),p.on("click","i.collapse",function(e){e.preventDefault();var t=$(this).closest(".pg-dm-style-list-item"),n=t.attr("data-key"),n=pinegrow.classStyles.findStyleByKey(n);return pinegrow.classStyles.expandStyle(n,!1),t.removeClass("open"),pinegrow.classStyles.setLastExpanded(!1),!1}),p.on("click","i.lock",function(e){e.preventDefault();var t=$(this).closest(".pg-dm-style-list-item"),n=t.attr("data-key"),n=pinegrow.classStyles.findStyleByKey(n);return val=!n.locked,pinegrow.classStyles.lockStyle(n,val),val?t.addClass("locked"):t.removeClass("locked"),pinegrow.showMode("Style is locked",val),pinegrow.classStyles.setLastLocked(val),!1}),p.on("click",".pg-tree-class",function(e){e.preventDefault();var t=$(this).closest(".pg-dm-style-list-item").attr("data-key"),t=pinegrow.classStyles.findStyleByKey(t),n=$(this).attr("data-class"),s=pinegrow.selectedElements.getLastSelected();return s?0<=pinegrow.classStyles.getStylesForPgel(s).indexOf(t)?pinegrow.dispatchEvent("on_class_style_property_clicked",s.getPage(),t,n):pinegrow.showQuickError(`Selected element does not have the style <b>${t.display_name}</b>.`):pinegrow.showQuickError("Select the element with this style first."),!1}),p.on("click",".count",function(e){e.preventDefault(),pinegrow.classStyles.updateUsageCounts(function(){n.show()})}),function(e,t,n){return`<div class="pg-dm-style-list-item${t?" active":""}${n?" used":""}${e.expanded?" open":""}${e.locked?" locked":""} level-${e.level} ${0<e.children.length?"has-kids":"no-kids"}" data-key="${e.key}" style="margin-left:${20*e.level}px;">${m(e)}</div>`}),m=function(e){var t,n="";return y?(t=y(e),n=(n=t.html).replace("ALT click","Click")):e.getClasses().forEach(function(e){n+=`<span class="pg-tree-class" data-class="${e}" title="Click to jump to property.">${e}</span>`}),`<div class="info"><span class="name" title="Click to add or remove from the selected element, right-click for options.">${e.scopeParent?"&gt; ":""}${e.name}</span><span class="count" title="Used ${e.count} times in the project. Click to update counts.">${e.count}</span><i class="lock icon icon-Lock_open" title="Unlock the style for editing."></i><i class="lock icon icon-Lock_closed" title="Lock the style."></i><i class="collapse-expand collapse icon icon-down"></i><i class="collapse-expand open icon icon-right"></i></div><div class="classes">${n}</div>`},w=function(e){return p.get(0).querySelector(`[data-key="${e.key}"]`)},v=(this.show=function(){h.whenVisible(function(){var t=pinegrow.classStyles.getCurrentStyle(),n=null,e=pinegrow.selectedElements.getLastSelected(),s=(e&&(n=pinegrow.classStyles.getStylesForPgel(e)),"");pinegrow.classStyles.getStyles().forEach(function(e){l&&!l.test(e.display_name)||(s+=f(e,t===e,!!n&&0<=n.indexOf(e)))}),(p.get(0).innerHTML=s)?u.show(null):u.show("No Class Styles are defined. Class Styles are a part of Tailwind Visual Editor and only work when a project is loaded.")}),h.clearWhenVisible("setActiveStyle"),h.clearWhenVisible("updateUsed"),h.clearWhenVisible("updateSingleClassStyle")},this.show(),function(){p.get(0).querySelectorAll(".pg-dm-style-list-item.used,.pg-dm-style-list-item.active").forEach(function(e){e.classList.remove("used"),e.classList.remove("active")})}),S=function(e){var t;e&&(t=w(e))&&(t=$(t),pgScrollToItemInContainer(t,t.parent()))},_=function(){var e=pinegrow.selectedElements.getLastSelected(),n=pinegrow.classStyles.getCurrentStyle();e&&pinegrow.classStyles.getStylesForPgel(e).forEach(function(e){var t=w(e);t&&(t.classList.add("used"),e===n)&&t.classList.add("active")})};pinegrow.addEventHandler("on_current_class_style_changed",r),pinegrow.addEventHandler("on_class_styles_changed",o),pinegrow.addEventHandler("on_page_frameworks_changed",c),pinegrow.addEventHandler("on_class_styles_updated_from_db",o),pinegrow.addEventHandler("on_selected_elements_changed",d),h.onDestroy=function(){pinegrow.removeEventHandler("on_current_class_style_changed",r),pinegrow.removeEventHandler("on_class_styles_changed",o),pinegrow.removeEventHandler("on_page_frameworks_changed",c),pinegrow.removeEventHandler("on_class_styles_updated_from_db",o),pinegrow.removeEventHandler("on_selected_elements_changed",d),g.destroy()}},$("body").one("pinegrow-ready",function(e,t){t.classStyles=new n}))});