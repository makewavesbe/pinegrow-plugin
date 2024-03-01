class PgCSSApi{constructor(){this.api=new PgApi}getStylesheetFromNode(e){return pgcssh.getStylesheetForNode(e)}isNodeImport(e){return e&&("atrule"===e.type||"import"===e.type)&&"import"===e.name}updateStylesheetCodeFromRules(e,t,n){e&&(t&&e.updateSingleRule?e.updateSingleRule(t,function(){n&&n(e.getRootNode())}):e.setSourceForRules(e.rootNode,function(){n&&n(e.getRootNode())},!1,!0))}updateRuleSelector(e,t,n,o){pgStylesheetHelper.getStylesheetFromNode(e).renameRuleSelector(e,t,n,o)}commentNode(e,t){var n=pgcssh.getRuleForNode(e)||pgcssh.getRootNodeFor(e);let o=null;var l=((o=n.inline?o:this.getStylesheetFromNode(e))?o.filterSource(pinegrow.pgPostCSSHelper.getSource(e)):pinegrow.pgPostCSSHelper.getSource(e)).replace(/\/\*/,"||*|").replace(/\*\//,"|*||"),r=pinegrow.pgPostCSSHelper.createNode("comment",l,null,e,o),s=pinegrow.pgPostCSSHelper.getNodeIndices(e);o&&pinegrow.dispatchEvent("on_css_before_node_deleted",null,{node:e,stylesheet:o}),pinegrow.pgPostCSSHelper.replaceNodeWith(e,r),r["pg-node-id"]=e["pg-node-id"],o&&this.isNodeImport(e)&&o.ignoreImportedFile(e,!0),n.inline?(this.api.setInlineStyle(pinegrow.getCollectionForElement(n.inline_for_pgel),n,{event_name:"Comment style"}),t&&t()):this.updateStylesheetCodeFromRules(o,null,function(){delete r["pg-node-id"];var e=pinegrow.pgPostCSSHelper.getNodeByIndices(o.getRootNode(),s);pinegrow.dispatchEvent("on_css_node_added",null,{node:e,stylesheet:o}),t&&t()})}uncommentNode(s,i){const d=this,a=pgcssh.getRuleForNode(s)||pgcssh.getRootNodeFor(s);let u=null;var e=(u=a.inline?u:this.getStylesheetFromNode(s))?u.filterSource(pinegrow.pgPostCSSHelper.getSource(s)):pinegrow.pgPostCSSHelper.getSource(s),e=(e=(e=e.trim()).startsWith("/*")&&e.endsWith("*/")?e.substr(2,e.length-4).trim():e).replace(/\|\|\*\|/,"/*").replace(/\|\*\|\|/,"*/");pinegrow.pgPostCSSHelper.parsedCSSSourceFromText(e,function(e,t,n){var o,l,r;e||0===n.nodes.length?(pinegrow.showQuickError("The content is not a valid CSS expression."),i&&i(!1)):(o=pinegrow.pgPostCSSHelper.getNodeIndices(s),l=n.nodes[0],u&&"css"===u.fileType&&d.isNodeImport(l)&&u.isImported()?(pinegrow.showQuickError("Imports are not allowed here."),i&&i(!1)):(s["ignore"]=!1,pinegrow.pgPostCSSHelper.copyNodeRawsTo(l,s),u&&pinegrow.dispatchEvent("on_css_before_node_deleted",null,{node:s,stylesheet:u,operation:"ignore"}),pinegrow.pgPostCSSHelper.replaceNodeWith(s,l),r=i,a.inline?(d.api.setInlineStyle(pinegrow.getCollectionForElement(a.inline_for_pgel),a,{event_name:"Uncomment style"}),r&&r(!0)):d.updateStylesheetCodeFromRules(u,null,function(e){var t=pinegrow.pgPostCSSHelper.getNodeByIndices(u.getRootNode(),o);pinegrow.dispatchEvent("on_css_node_added",null,{node:t,stylesheet:u,operation:"ignore"}),r&&r(!0)})))})}deleteNode(e,t,n){var o="rule"!==e.type&&e.parent&&"rule"===e.parent.type?e.parent:null;let l=this.getStylesheetFromNode(e);pinegrow.pgPostCSSHelper.getNodeIndices(e);l&&pinegrow.dispatchEvent("on_css_before_node_deleted",null,{node:e,stylesheet:l}),pinegrow.pgPostCSSHelper.removeNodeFrom(e),!l&&o&&o.inline?(this.api.setInlineStyle(pinegrow.getCollectionForElement(o.inline_for_pgel),o,{event_name:"Delete style "+e.prop,edited_by:n}),t&&t()):this.updateStylesheetCodeFromRules(l,null,function(){pinegrow.dispatchEvent("on_css_node_deleted",null,{node:e,stylesheet:l,edited_by:n}),t&&t()})}deleteNodeAndKeepChildren(e,n){if(e.nodes&&0!==e.nodes.length){let t=this.getStylesheetFromNode(e);for(var o=e;e.nodes.length;){var l=e.nodes[0];pinegrow.pgPostCSSHelper.insertNodeAfter(l,o),pinegrow.pgPostCSSHelper.removeNodeFrom(l,e),o=l}this.updateStylesheetCodeFromRules(t,null,function(){var e={};e.list=[t],e.action="Remove CSS node",pinegrow.dispatchEvent("on_css_source_changed",null,e),n&&n()})}else this.deleteNode(e,n)}changeMediaQueryForRule(e,t,n,o){o=o||{};var l=pinegrow.pgPostCSSHelper.getMediaNode(e);l?this.changeMediaQuery(l,t,n,o):this.getStylesheetFromNode(e).ruleMediaChanged(e,t,n,o.edited_by||null)}changeMediaQuery(t,e,n,o){o=$.extend({},{dispatchEvent:!0,undoCombineKey:"atRuleChanged",undoRuleName:"string"==typeof dispatchEvent?dispatchEvent:null},o||{});const l=this.getStylesheetFromNode(t);var r=pinegrow.pgPostCSSHelper.getNodeIndices(t);t.params=e,this.updateStylesheetCodeFromRules(l,null,function(){o.dispatchEvent&&pinegrow.dispatchEvent("on_css_node_updated",null,{node:t,stylesheet:l,...o});var e=pinegrow.pgPostCSSHelper.getNodeByIndices(l.getRootNode(),r);n&&n(e)})}addRuleProperty(e,t,n,o,l){l=$.extend({},{dispatchEvent:!0,source:"api",insertAtIndex:-1},l||{});var r,s;return e.inline?(s=!1,n&&(0<n.indexOf("!important")&&(n=n.replace("!important",""),s=!0),n=n.trim()),(r=pinegrow.pgPostCSSHelper.createNode("decl",t,n,e,null)).important=s,s=l.insertAtIndex<0?pinegrow.pgPostCSSHelper.getLastDeclIndex(e)+1:l.insertAtIndex,pinegrow.pgPostCSSHelper.insertNodeAt(r,e,s),l.event_name="Set "+t,l.dispatchEvent||(l.skip_change_event=!0),this.api.setInlineStyle(pinegrow.getCollectionForElement(e.inline_for_pgel),e,l),r):this.getStylesheetFromNode(e).ruleValueChanged(e,t,n,o,!1,l.source,l.dispatchEvent,null,!0,null,!1,!1,l.insertAtIndex)}setRuleProperty(e,t,n,o,l){l=$.extend({},{dispatchEvent:!0},l||{});var r,s=pgcssh.getRuleForNode(e)||pgcssh.getRootNodeFor(e);return e.prop!==t&&pgcssh.setNodeProperty(e,"prop",t),s&&s.inline?(r=!1,n&&(0<n.indexOf("!important")&&(n=n.replace("!important",""),r=!0),n=n.trim()),e.important=r,e.value=n,l.event_name="Set "+t,l.dispatchEvent||(l.skip_change_event=!0),this.api.setInlineStyle(pinegrow.getCollectionForElement(s.inline_for_pgel),s,l),e):this.getStylesheetFromNode(e).ruleValueChanged(s,e,n,o,!1,l.source,l.dispatchEvent,null,!0)}addOrSetRuleProperty(e,t,n,o,l){var r=pinegrow.pgPostCSSHelper.getChildrenDeclWithPropName(e,t);return r.length?(this.setRuleProperty(r[r.length-1],t,n,o,l),r[r.length-1]):this.addRuleProperty(e,t,n,o,l)}getInsertCSSPropMenu(s,i){function d(e,t){pinegrow.getSetting("css-menu-show-desc","1");var r=!1;return function(){var l=t?t.slice(0):[];return l.length,e.forEach(function(t){var e,n,o;"-"===t.name?e={type:"divider"}:"pgmore"===t.name?(e={label:"More...",action:function(){}},t.sub&&t.sub.length&&(e.submenu=d(t.sub))):(e={class:"pg-css-menu-prop",label:'<i class="icon icon-minus"></i>'+"<code>"+t.name+"</code>",action:function(){s&&s(t.name,"")}},n=pinegrow.devTools.getCSSPropertyInfo(t.name),o=[],n&&(r&&n.desc&&(o.push({type:"html",html:n.desc_html,on_click:function(e,t){}}),o.push({type:"divider"})),n.values&&n.values.length&&(o.push({type:"header",label:"Values"}),n.values.forEach(function(e){o.push({label:e,class:"pg-css-menu-value",action:function(){i&&i.restore(),s&&s(t.name,e),i&&i.remember()},on_mouseenter:function(){i&&i.setStyle(t.name,e)},on_mouseleave:function(){i&&i.restore()}})})),n.examples)&&n.examples.length&&(o.length&&o.push({type:"divider"}),o.push({type:"header",label:"Examples"}),n.examples.forEach(function(t){o.push({label:"<code>"+t+"</code>",action:function(){var e=t.indexOf(":");i&&i.restore(),s&&s(t.substr(0,e).trim(),t.substr(e+1).trim().replace(";","")),i&&i.remember()},on_mouseenter:function(){var e=t.indexOf(":");i&&i.setStyle(t.substr(0,e).trim(),t.substr(e+1).trim().replace(";",""))},on_mouseleave:function(){i&&i.restore()}})})),(t.sub&&t.sub.length||o.length)&&(t.sub&&t.sub.length&&(o.push({type:"divider"}),o.push({type:"header",label:"Longhands"})),e.submenu=d(t.sub||[],o))),l.push(e)}),l}}var o=[],e=new PgSmartInputForCSS(i),t=(e.onPropSelected=function(e,t){i.restore();var n=s(e,t);return i&&i.remember(),n},o.push({type:"smartinput",input:e,on_menu_shown:function(){e.focus()}}),o.push({type:"divider"}),pinegrow.devTools.getCSSPropsInfo());return $.each(t,function(e,t){var n={label:`<i class="icon ${t.icon}" style="margin-right:8px;"></i>`+t.name,submenu:d(t.sub),class:"pg-css-menu-cat"};o.push(n)}),o}walkRules(e,t,n,o){if(o=o||0,n=n||e.getRootNode()){if("rule"===n.type){if(!1===t(n,o))return!1;o++}if(n.nodes)for(var l=0;l<n.nodes.length;l++)if(!1===this.walkRules(e,t,n.nodes[l],o))return!1}}getMediaMatchRe(e){return new RegExp(`\\(\\s*min\\-width:\\s*${pgParserEscapeRegExp(e+"px")}\\s*\\)`)}matchesMedia(e,t){return!!e.params.match(t)}getRuleForMediaSize(e,l,r,o,t){const s=this;var n,i,d,a,u=null,p=(r&&this.getMediaMatchRe(r),{}),c=null;this.walkRules(e,function(e,t){var n,o;if(0===t&&e.selector===l)return o=(n=pgcssh.getMediaNode(e))?s.getMediaSizeForRule(e):0,p[o]=n||e,c=c||n||e,!u&&(!n&&!r||n&&s.matchesMedia(n,r))?(u=e,!1):void 0}),!u&&t?(n=`
${l} {
}`,r&&(n=`
@media (min-width: ${r}px) { ${n} 
}`),i=null,$.each(p,function(e,t){e<r&&(i=t)}),a=!1,null===i&&c?(d=c,a=!0):d=i,this.api.addCSSRuleToStylesheet(n,e,d,{},function(e,t,n){o&&o((r?t[0].nodes:t)[0])},null,a)):o&&o(u)}getMediaSizeForRule(e){var t=pgcssh.getMediaNode(e);return(t=t&&t.params.match(/min\-width:\s*([0-9\.]+)px\s*\)/))?parseInt(t[1]):0}showInsertCSSPropMenuForRule(n,e,t){const o=this;var l=[{type:"html",html:`<p style="margin-bottom:0;padding: 5px 10px 0px;"><span style="color:rgba(255,255,255,0.70);">Set property for</span> <span style="color:rgba(255,255,255,1)">${pgcssh.getRuleDisplayName(n)}</span></p>`},{type:"divider"}],r=new PgFastDOMStylePreviewForPgel(t),l=new CrsaContextMenu(l.concat(this.getInsertCSSPropMenu(function(e,t){if(e&&""!==t&&(r.restore(),o.addOrSetRuleProperty(n,e,t,function(){})),null===t||""===t)return pinegrow.showQuickError("Please enter the property value."),!1},r)),e);return e?l.showForElement(e,null,4):l.showAtPgel(t),l.onClosed=function(){r.destroy()},l.keepOpenOnClick=!0,l}highlightNodeInCode(t,e){var n,o,l,r=!1;pgPageCodeEditorsStack.highlight_css_rule&&pgPageCodeEditorsStack.isEditorShown()&&(o=pgStylesheetHelper.getStylesheetFromNode(t))&&o.url&&(l=pinegrow.codeEditors.isUrlOpen(o.url))&&(pgPageCodeEditorsStack.isEditorShown(l.view)||pgPageCodeEditorsStack.showEditor(l.view),n=pgcssh.getNodePositionInSource(t),l.highlightRange(n),r=!0),!r&&e&&((o=pgStylesheetHelper.getStylesheetFromNode(t))&&o.url?(pinegrow.stylesheets.editCode(o),l=pinegrow.codeEditors.isUrlOpen(o.url),setTimeout(function(){var e=pgcssh.getNodePositionInSource(t);l.highlightRange(e)},500)):pinegrow.showQuickError("Sorry, unable to show the source of this stylesheet."))}getContextMenuActionsForRule(o,e,l){function t(e,o){o=o||"",pinegrow.stylesheets.getAllAsSelectOptions(null,!0);var t=pinegrow.getSelectedPage().getAttachedStylesheets({loaded:!1,ignored:!0,imported:!0,inline:!1,locked:!1}).map(function(e){return{name:crsaGetNameFromUrl(e.url)+(e.locked?" &#128274;":""),key:e.url}}),l=new PgInputField("stylesheet",{type:"select",show_empty:!0,name:"in",without_text:!1,system_field:!0,default_value:null,options:t});(t=pgcssh.getUrlOfStylesheetForOverrides(null,o))&&l.setValue(t),e.addClass("has-field"),l.$field.addClass("field-in-menu"),l.appendTo(e),l.on("change",function(e){var t=l.getValue();if(t){var n=pinegrow.stylesheets.getByUrl(t);if(n&&!n.canEdit(!0))return pinegrow.showQuickError("The selected stylesheet is locked."),void l.setValue("")}pgcssh.setUrlOfStylesheetForOverrides(t,null,o)})}function n(e,t){t=t||"";var n,o=pgcssh.getUrlOfStylesheetForOverrides(null,t);o?(n="current"==o?h:pinegrow.stylesheets.getByUrl(o))?n.canEdit()&&(n.ignore=!1,n.loaded?e(n):n.load(n.url,function(){e(n)},!0)):pinegrow.showAlert("Stylesheet with "+o+" not found or not loaded!","Error"):pinegrow.showQuickMessage("Please select the destination stylesheet.",4e3,!1,"error")}function r(o,e){var t,n,l;o.canEdit()&&(l=e,pgcssh.isMedia(l.parent)&&(l=l.parent),t=new PgApi,n=pgcssh.getSelectorWithoutPgId(e.selector)+" {}",l=o===h?l:"append",t.addCSSRuleToStylesheet(n,o,l,{action:"Override "+pgcssh.getNodeDisplayName(e)},function(e,t){var n;e||t.length&&(n=f(t[0]),0||o===h||pinegrow.activeCSSView.setActiveCs(o),n)&&pinegrow.selectRule(n)}))}function s(e,t,n){var o=e.getSourceForRules(t),o=e.filterSource(o,!0);y(e,o,t,n)}var i,d,a,u,p=this,c=pgcssh.getStylesheetForNode(o),g=!c.canEdit(!0),h=c,S=pgcssh.getRuleForNode(o),m=new CrsaContextMenu(null,e),v=pinegrow.getSelectedElement(),f=function(e){if("rule"===e.type)return e;for(var t=0;t<e.nodes.length;t++){var n=f(e.nodes[t]);if(n)return n}return null},y=function(o,e,t,n){var l;o.canEdit()&&(t=t||e,pgcssh.isMedia(t.parent)&&(t=t.parent),l=n||(o===h?t:"append"),(new PgApi).addCSSRuleToStylesheet(e,o,l,{action:"Duplicate "+pgcssh.getNodeDisplayName(t)},function(e,t){var n;e||t.length&&(n=f(t[0]),0||o===h||pinegrow.activeCSSView.setActiveCs(o),n)&&pinegrow.selectRule(n)}))},w=(g&&m.add({label:"This stylesheet is locked.",action:function(){}}),S&&1&&(S.selector&&!g&&m.add("Edit...",null,function(){pinegrow.selectRule(S)}),m.add("Edit code...",null,function(){p.editRuleSource(S,e)}),c)&&c.url&&m.add("Reveal in code",null,function(){p.highlightNodeInCode(S,!0)}),pgcssh.isVariable);if("decl"===pgcssh.getNodeType(o)&&S===o.parent&&(m.add("",null,null,"divider"),m.add("!important",null,function(){var t,e;c.canEdit(!1,!1)&&((e=o.value).endsWith("!important")||o.important?(o.value=e.replace(/\s*!important/,""),o.important=!1):o.important=!0,t=pgcssh.getNodeIndices(o),e=pgcssh.getRootNodeFor(o),c.setSourceForRules(e,function(){var e=pgcssh.getNodeByIndices(c.getRootNode(),t);pinegrow.dispatchEvent("on_css_node_updated",null,{node:e,stylesheet:c,edited_by:"context_menu",oldValue:pgcssh.getNodeOldValues(e),undoCombineKey:"ruleValueChanged_"+e.prop})},!1,!0))},null,null,o.value.endsWith("!important")||o.important)),S?(m.add("",null,null,"divider"),m.add("Duplicate the whole rule",null,null,"header"),g||m.add("Duplicate",null,function(){y(h,S)}),m.add("<span>Duplicate</span>",null,function(){n(function(e){y(e,S)})},null,null,null,function(e){t(e)})):w(o)?(m.add("",null,null,"divider"),g||m.add("Duplicate",null,function(){s(h,o)}),i=w(o),d=i?"-vars":"",m.add("<span>"+(i?"Customize":"Duplicate")+"</span>",null,function(){n(function(n){(new PgApi).overrideCSSVariable(o,n,function(e){var t;e.length&&(pinegrow.activeCSSView.setActiveCs(n),t=e.pop(),i||pinegrow.selectRule(t),l?.on_node_created)&&l.on_node_created(t)})},d)},null,null,null,function(e){t(e,d)})):(m.add("",null,null,"divider"),d="-media",m.add("<span>Duplicate</span>",null,function(){n(function(e){s(e,o)},d)},null,null,null,function(e){t(e,d)})),("decl"===pgcssh.getNodeType(o)||"atrule"===pgcssh.getNodeType(o))&&c.isCompilableStylesheet()&&!g){var C=c.smartGetAllUsedNodes(o,!0).nodes;if(0<C.length){m.add("",null,null,"divider"),m.add("Edit variables",null,null,"header");for(var N=0;N<C.length;N++){var _=C[N],E=pgcssh.getVariableProp(_);m.add("Edit "+E,null,function(e,t,n,o){var l,r,s,i,d,a,u,p,c;o&&o.node&&(l=o.node,r=$('<div class="var-dialog-content"></div>'),s=new PgVarDialogView(r),d=(i=pgcssh.getStylesheetForNode(l)).getMainParnetStylesheets(),a=[],d.forEach(function(e){var t=e.smartGetAllUsedNodes(l);t&&(a=a.concat(t.nodes))}),(u=new PgStylesheetVars(i,r,{useInsertBorder:!1})).show(a),s.setStylesheetVar(u),(p=new PgQuickWindow("Edit "+pgcssh.getVariableProp(l),s,"vars-editor",380,400)).showFor$El(n),c=function(e,t){if(t)for(var n=t.list,o=0;o<n.length;o++){var l=n[o];if(u.isPgStylesheetExists(l)){p.close();break}}},pinegrow.addEventHandler("on_css_source_changed",c),p.onDestroy=function(){pinegrow.removeEventHandler("on_css_source_changed",c)})},null,{node:_})}}}return S&&S.selector&&(m.add("",null,null,"divider"),m.add("Create empty rule with this selector",null,null,"header"),g||m.add("<span>Override</span>",null,function(){r(h,S)},null,null,null,function(e){}),m.add("<span>Override</span>",null,function(){n(function(e){r(e,S)})},null,null,null,function(e){t(e)})),g||(m.add("",null,null,"divider"),m.add("Delete",null,function(){h.canEdit(!1,!0)&&p.deleteNode(S)})),S&&(w=S.selector?pgcssh.getClassesFromSelector(S.selector):[]).length&&(v?(a=[],u=[],$.each(w,function(e,t){(v.hasClass(t)?a:u).push(t)}),u.length&&(m.add("",null,null,"divider"),m.add("Add class to&nbsp;&nbsp;<b>"+pinegrow.selectedElements.getName()+"</b>",null,null,"header"),u.forEach(function(e){m.add("+ "+e,null,function(){(new PgApi).addClass(null,e)})})),v.getClasses(),g=[],(0<a.length||0<g.length)&&(m.add("",null,null,"divider"),m.add("Remove class from&nbsp;&nbsp;<b>"+pinegrow.selectedElements.getName()+"</b>",null,null,"header"),$.each(a,function(e,t){m.add("- "+t,null,function(){(new PgApi).removeClass(null,t)})}),$.each(g,function(e,t){0!==t.indexOf("crsa-")&&m.add("- "+t,null,function(){(new PgApi).removeClass(null,t)})}))):m.add("Select element first, then assign class to it.",null,null,"header")),m.actions}editRuleSource(e,t){e=pgcssh.getRuleForNode(e);var n=pgcssh.getStylesheetForNode(e);new PgQuickCSSRuleCodeEdit(e,t);n.canEdit(!0)||pinegrow.showQuickError("Opened in read-only mode because the stylesheet is locked.")}}