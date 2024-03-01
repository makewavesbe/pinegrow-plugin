var PgCollection=function(e){var t=[],o=(this.getList=function(){return t},this.setList=function(e){t=e},this);e&&(e instanceof pgParserNode?this.add(e):e.each(function(e,t){var n=getElementPgNode($(t));n&&o.add(n)}))},PgSelectedElements=(PgCollection.prototype.getLength=function(){return this.getList().length},PgCollection.prototype.select=function(e){this.clear(),this.add(e)},PgCollection.prototype.clear=function(){this.setList([])},PgCollection.prototype.clone=function(){var e=new PgCollection;return e.setList(this.getList().slice()),e},PgCollection.prototype.add=function(e){var t,n;e instanceof PgCollection?(t=this,e.forEachElement(function(e){t.add(e)})):(n=this.getList()).indexOf(e)<0&&n.push(e)},PgCollection.prototype.remove=function(e){var t=this.getList(),n=t.indexOf(e);return 0<=n&&t.splice(n,1),n},PgCollection.prototype.cleanDeleted=function(){var t=[],n=!1;return this.forEachElement(function(e){e.isDeleted?n=!0:t.push(e)}),this.setList(t),n},PgCollection.prototype.forEachElement=function(e){for(var t=this.getList().slice(0),n=0;n<t.length&&!1!==e(t[n],n,t.length);n++);},PgCollection.prototype.contains=function(e){return 0<=this.getList().indexOf(e)},PgCollection.prototype.getIndex=function(e){return this.getList().indexOf(e)},PgCollection.prototype.getLast=function(){var e=this.getList();return 0<e.length?e[e.length-1]:null},PgCollection.prototype.getFirst=function(){var e=this.getList();return 0<e.length?e[0]:null},PgCollection.prototype.scrollTo=function(){var e=this.getFirst();e&&e.scrollTo()},PgCollection.prototype.normalize=function(){for(var e=this.getList(),t=[],n=0;n<e.length;n++){for(var o=!1,i=0;i<e.length;i++)if(n!=i&&e[n].isDescendantOf(e[i])){o=!0;break}o||t.push(e[n])}this.setList(t)},PgCollection.prototype.reverse=function(){var e=this.getList();this.setList(e.reverse())},PgCollection.prototype.orderByDocumentPosition=function(e){for(var t=this.getList(),n=[],o=0;o<t.length;o++)n.push({pgel:t[o],pos:t[o].getPositionInDocument(e)});n.sort(function(e,t){return e.pos-t.pos}),t=[],n.forEach(function(e){t.push(e.pgel)}),this.setList(t)},PgCollection.prototype.to$List=function(){var n=[];return this.forEachElement(function(e){var t=e.get$DOMElement();t&&n.push(t.get(0))}),$(n)},PgCollection.prototype.getName=function(e,t){var n,o,i=this.getList();return 0===i.length?"&lt;No element selected&gt":((n=$.extend({short:!0},e||{})).def||t||(o=i[0].getPage())&&(n.def=o.getMainType(null,i[0])),i[0].getName(n)+(1<i.length?" + "+(i.length-1):""))},PgCollection.prototype.getPages=function(){var n=[];return this.forEachElement(function(e){var t=e.getPage();t&&n.indexOf(t)<0&&n.push(t)}),n},PgCollection.prototype.forEachPage=function(e){var o=[],i=[];this.forEachElement(function(e){var t,n=e.getPage();(n=!n&&e.replacedWith?e.replacedWith.getPage():n)&&((t=o.indexOf(n))<0&&(o.push(n),i.push(new PgCollection),t=o.length-1),i[t].add(e))});for(var t=0;t<o.length;t++)e(o[t],i[t])},PgCollection.prototype.forEachElementAsync=function(e,n){var o=[],i=this.getLength();0===i?n&&n(o):this.forEachElement(function(t){e(t,function(e){o.push({pgel:t,data:e}),0===--i&&n&&n(o)})})},function(){function i(e){e&&(d=e||{})}function o(){e&&clearTimeout(e),e=setTimeout(function(){pinegrow.dispatchEvent("on_selected_elements_changed",null,r.getPages(),d),d={},e=null},10)}function l(e){return e.getId()}var n,s,r=this,a=new PgCollection,c={},u=!0,e=null,t=new PgDelayedTasks,d={},h=(this.getCollection=function(){return a},this.setCollection=function(e){a=e},this.select=function(e,t){return this.clear(),this.add(e,t)},this.clear=function(){var e=a.clone();a.clear(),$.each(c,function(e,t){t.destroy()}),c={},e.forEachElement(function(e){e.deselected()}),o(),h="down"},this.cleanDeleted=function(){a.cleanDeleted()&&o()},this.add=function(e,t){i(t),a.add(e);var n=this.updateMenuForPgel(e);return e.selected(),o(),n},this.updateMenuForPgel=function(e){var t=l(e);return c[t]&&c[t].destroy(),c[t]=new PgElementMenus(e,a.getIndex(e)),u||c[t].hide(),g(),c[t]},this.selectParent=function(){var t=new PgCollection;this.forEachElement(function(e){e.parent&&t.add(e.parent)}),0===t.getLength()?pinegrow.showQuickError("The element doesn't have a parent."):this.selectCollection(t)},this.selectFirstChild=function(){var n=new PgCollection;this.forEachElement(function(e){var t=e.getChildAtPos(0,!0);t&&n.add(t)}),0===n.getLength()?this.selectNext():this.selectCollection(n)},this.selectNext=function(){var n=new PgCollection;this.forEachElement(function(e){var t=e.next();(t=t||e.parent.first())&&n.add(t)}),0!==n.getLength()&&this.selectCollection(n)},this.selectPrevious=function(){var n=new PgCollection;this.forEachElement(function(e){var t=e.prev();(t=t||e.parent.last())&&n.add(t)}),0!==n.getLength()&&this.selectCollection(n)},"down"),g=(this.selectNextWithShift=function(){var e,t=this.getCollection().clone(),n=(t.orderByDocumentPosition(),"down"==h?t.getLast():t.getFirst());n&&("down"==h?(e=n.next())&&this.add(e):1<t.getLength()?this.remove(n):(h="down",this.selectNextWithShift()))},this.selectPreviousWithShift=function(){var e=this.getCollection().clone(),t=(e.orderByDocumentPosition(),"down"==h?e.getLast():e.getFirst());t&&("down"==h?1<e.getLength()?this.remove(t):(h="up",this.selectPreviousWithShift()):(e=t.prev())&&this.add(e))},this.triggerElementSelectedEvent=function(e,t){e&&($("body").trigger("crsa-element-selected",e,t),e.getPage().callFrameworkHandler("on_element_selected",e,t),i(t),o())},this.setShowMenus=function(e){u=e,$.each(c,function(e,t){u?t.show():t.hide()})},this.temporaryHideMenus=function(e){var t=$("body");n=t.hasClass("pg-show-sel-menu"),t.removeClass("pg-show-sel-menu"),!0===e&&(s=!t.hasClass("pg-show-sel-no-border"),t.addClass("pg-show-sel-no-border"))},this.restoreShowMenus=function(e){var t=$("body");n&&t.addClass("pg-show-sel-menu"),!0===e&&s&&t.removeClass("pg-show-sel-no-border")},this.selectIds=function(e,t){var n;i(t),this.clear(),e&&(e.forEach(function(e){var t=getPgNodeByPgId(e);t&&r.add(t)}),n=this.getLastSelected())&&this.triggerElementSelectedEvent(n,t)},this.selectCollection=function(e){var t=[];e.forEachElement(function(e){t.push(e.getId())}),this.selectIds(t)},this.addOrRemove=function(e,t){if(!a.contains(e))return this.add(e,t);this.remove(e)},this.addRange=function(e,t){var n=this.getLastSelected();if(n){for(;e.parent&&e.parent!==n.parent;)e=e.parent;if(n.parent!==e.parent||n===e)return!1;for(var o=n.parent.getChildPos(n),i=e.parent.getChildPos(e),l=i<o?-1:1,s=o+l;s!=i+l;s+=l)n.parent.children[s].isElementOrScript&&this.add(n.parent.children[s],t)}else this.add(e,t);return!0},this.getLastSelected=function(){return a.getLast()},this.getFirstSelected=function(){return a.getFirst()},this.getLastSelectedOnPage=function(t){var n=null;return a.forEachElement(function(e){e.getPage()===t&&(n=e)}),n},this.getSelectedOnPage=function(t){var n=[];return a.forEachElement(function(e){e.getPage()===t&&n.push(e)}),n},this.remove=function(e,t){var n;0<=a.remove(e)&&(i(t),n=l(e),c[n]&&(c[n].destroy(),delete c[n]),g(),e.deselected(),o())},this.removeForPage=function(t){a.clone().forEachElement(function(e){e.getPage()===t&&r.remove(e)})},this.areAllFromTheSamePage=function(){var n=null,o=!0;return a.forEachElement(function(e){var t=e.getPage();null===n?n=t:n!==t&&(o=!1)}),o},this.getElementRect=function(e){var t=l(e);return c[t]?c[t].getElementRect():null},this.replace=function(e,t){this.isSelectedElement(e)&&(this.remove(e),this.add(t))},this.destroyMenusForPageView=function(n){$.each(c,function(e,t){t.destroyForPageView(n)})},this.getMenuPoints=function(n){var o=[];return $.each(c,function(e,t){o=o.concat(t.getMenuPoints(n))}),o},this.reselect=function(){var e=a.clone(),o=(this.clear(),[]);if(e.forEachElement(function(e,t,n){(e=e.replacedWith||getPgNodeByPgId(e.getId()))&&!e.isDeleted&&o.push(e)}),o.length)for(var t=0;t<o.length;t++){var n=o[t];t==o.length-1?pinegrow.selectElement(n,null,!0):this.add(n)}},this.reselectDelayed=function(e){t.run("reselect",function(){r.reselect()},e||1e3)},this.getIds=function(){var n=[];return a.forEachElement(function(e){var t=e.getId();t&&n.push(t)}),n},this.forEachElement=function(e){a.forEachElement(e)},this.forEachSubsequentElement=function(i,l){a.forEachElement(function(e,t,n,o){e!=i&&l(e,t,n,o)})},this.forEachElementOrderedByDocumentPosition=function(e){var t=a.clone();t.orderByDocumentPosition(),t.forEachElement(e)},this.forEachSubsequentElementOrderedByDocumentPosition=function(i,l){this.forEachElementOrderedByDocumentPosition(function(e,t,n,o){e!=i&&l(e,t,n,o)})},this.getPages=function(){return a.getPages()},this.forEachPage=function(e){this.getPages().forEach(e)},this.getMenu=function(e){return c[l(e)]||null},this.repositionMenus=function(n){$.each(c,function(e,t){t.reposition(n)}),this.onRepositionMenus&&this.onRepositionMenus()},this.repositionMenusDelayed=function(){t.run("repositionMenus",function(){r.repositionMenus()},200)},this.hasSelection=function(){return 0<a.getLength()},this.getLength=function(){return a.getLength()},this.isInSelectedElement=function(e){for(var t=a.getList(),n=0;n<t.length;n++)if(e.isDescendantOf(t[n]))return t[n];return null},this.isDescendantSelected=function(e){for(var t=a.getList(),n=0;n<t.length;n++)if(t[n].isDescendantOf(e))return t[n];return null},this.isSelectedElement=function(e){return a.contains(e)},this.isElementOrDescendantSelected=function(e){return this.isSelectedElement(e)||this.isDescendantSelected(e)},this.isSelectedElementOrInSelectedElement=function(e){return this.isSelectedElement(e)||this.isInSelectedElement(e)},this.isSelected$Element=function(e){return this.isSelectedElement(getElementPgNode(e))},this.getRange=function(){var i={first:null,count:0},l=-1,s=-1;if(a.forEachElement(function(e,t,n){if(i.first&&i.first.parent!=e.parent)return null;var o=e.parent.getChildPos(e);(null==i.first||o<s)&&(i.first=e,s=o),(l<0||l<o)&&(l=o)}),!i.first)return null;i.count=l-s+1,i.all=[];for(var e=s;e<=l;e++)i.all.push(i.first.parent.children[e]);return i},this.getName=function(e){return a.getName(e)},this.selectMany=function(e,t){t&&this.clear(),e.forEachElement(function(e,t,n){t==n-1?pinegrow.selectElement(e,null,!0):r.add(e)})},this.deselectMany=function(e){e.forEachElement(function(e,t,n){r.remove(e)})},function(){a.forEachElement(function(e,t,n){var o=r.getMenu(e);o&&(t==n-1?o.show():o.hideMenu())})}),p=null;pinegrow.addEventHandler("on_page_changes_done",function(e,n){var t,o;n&&n.sourceType&&"undo"==n.sourceType?p&&(clearTimeout(p),p=null):(i(n),t=[],a.forEachElement(function(e){e.isDeleted&&t.push(e)}),o=0<=t.indexOf(r.getLastSelected()),t.forEach(function(e){e.replacedWith?r.replace(e,e.replacedWith):r.remove(e)}),o&&(p&&clearTimeout(p),p=setTimeout(function(){p=null;var e=r.getLastSelected(),t=e?e.getPage():null;$("body").trigger("crsa-element-selected",e,n),pinegrow.dispatchEvent("on_element_selected",t,e,n)},10)))})}),PgChangeManager=function(){new PgCollection;function c(e,t){return t||e.getPage()}var i,o=new PgCollection,l=this,u=(this.willChange=function(e,t){o.add(e);var n=pinegrow.getCrsaPageOfPgParserNode(e);willMakeChange(n.$iframe,t+" / "+getElementName(e.get$DOMElement(n.get$Html())))},this.didChange=function(e,t,l,s,r){var n,a,o;(l=l||{}).replacedIds={},l.action=t,l.skip_change_event||(e?(n=pinegrow.getCollection(e),u?(h++,i=t,d.add(n)):(pinegrow.dispatchEvent("on_before_changes_done",null,n,l),a=[],n.forEachElement(function(n){n.replacedWith&&(o=!1,i=n.getId(),$.each(l.replacedIds,function(e,t){if(t==i)return l.replacedIds[e]=n.replacedWith.getId(),o=!0,!1}),o||(l.replacedIds[n.getId()]=n.replacedWith.getId()),n=n.replacedWith);var o,i,e=c(n,s)||n.removedFromPage;e&&(e instanceof PgEmulatePageForUndo?a.indexOf(e)<0&&a.push(e):e.openedInEditor&&(r||g(n,"on_changed",n,e,null,null,e),e.callFrameworkHandler("on_page_changed",n,l)))}),a.forEach(function(e){pinegrow.dispatchEvent("on_emulated_page_changed",e,l)}),o=!1,n.forEachPage(function(e,t){e.openedInEditor&&(e.callFrameworkHandler("on_page_changes_done",l,t),e.setPageChanged(!0),e===s)&&(o=!0)}),s&&!o&&s.openedInEditor&&(s.callFrameworkHandler("on_page_changes_done",l,n),s.setPageChanged(!0)))):u?(h++,i=t):s instanceof PgEmulatePageForUndo?pinegrow.dispatchEvent("on_emulated_page_changed",s,l):s.openedInEditor&&(s.callFrameworkHandler("on_page_changed",null,l),s.callFrameworkHandler("on_page_changes_done",l),s.setPageChanged(!0)))},this.didChangePage=function(e,t,n){this.didChange(null,t,n,e)},this.didDelete=function(e,n){e&&pinegrow.getCollection(e).forEachElement(function(e){var t=n||e.removedFromPage;t&&l.elementWasDeleted(e,t)}),u?(d.add(e),h++,i="Delete elements"):this.didChange(e,"Delete elements",null,n,!0)},this.didMove=function(e,t,n){e&&pinegrow.getCollection(e).forEachElement(function(e){t=c(e,t),l.elementWasMoved(e,t,n)}),u?(d.add(e),h++,i="Move elements"):this.didChange(e,"Move elements",null,t,!0)},this.didInsert=function(e,t,n){e&&pinegrow.getCollection(e).forEachElement(function(e){l.elementWasInserted(e,t,!0),e.formatHtml=n}),u?(d.add(e),h++,i="Insert elements"):this.didChange(e,"Insert elements",null,null,!0)},!1),d=null,h=0,g=(this.batchChanges=function(e,t){u=!0,h=0,d=new PgCollection,e(),u=!1,this.didChange(d,1==h?i:t)},function(e,t,n,o,i,l,s){return e.callDefHandlers(t,n,o,i,l,s)});this.elementWasMoved=function(e,t,n){removeEmptyPlaceholderFromParents(e),g(e,"on_moved",e,t,n)},this.elementWasDeleted=function(e,t){(t=t||e.getPage())&&(g(e,"on_deleted",e,t,null,null,t),t.callFrameworkHandler("on_element_deleted",e),"link"===e.tagName)&&"stylesheet"===e.getAttribute("rel")&&t.updateStylesheetsList()},this.elementWasInserted=function(e,t,n){var o,i,l,s,r,a,c,u,d=e.getPage();d&&(i=(o=g(e,"on_inserted",e,d)).length?o[0]:null,t&&t!=i&&o.indexOf(t)<0&&t.on_inserted&&t.on_inserted(e,d),d.callFrameworkHandler("on_element_inserted",e,i,o),removeEmptyPlaceholderFromParents(e),l="on_child_inserted",s=-1,e.callDefHandlersOnParents(l,s,d,e,r,a),t&&t.empty_placeholder&&!pgf.empty_ph_attribute&&"1"==pinegrow.getSetting("show-placeholders","1")&&showNotice("<p><b>Empty "+e.tagName+" </b>was just added to the page. Pinegrow added <b>pg-empty-placeholder</b> class to it, with <code>min-height:100px</code> so that you can see the element on the page. Once you add content to the element the class is removed. This does not affect how page looks like outside of Pinegrow - it's just a help to make editing easier.</p><p>You can enable or disable this behaviour in Support -&gt; Settings.</p>","A note about empty elements","empty-placeholder-2"),n||(e.scrollTo(),setTimeout(function(){pinegrow.highlightElement(e)},200)),"link"===e.tagName&&"stylesheet"===e.getAttribute("rel")&&d.updateStylesheetsList(),t&&(t.resources&&t.resources.list.length&&(u=pinegrow.getCurrentProject(),pinegrow.addFrameworkResourcesToPageOrProject(t.framework,u||d,{resources:t.resources,only_add_to_page:d,overwrite:!0}),c=pinegrow.getCurrentProjectInfo(d),t.resources.list.forEach(function(e){e.isCss()&&e.relative_url&&(c.setSettingForUrl(e.relative_url,"locked",!0),c.setSettingForUrl(e.relative_url,"locked_reason","This stylesheet is a library resource and will be overwritten on update. Over-ride CSS rules in the your project's stylesheet."))}),c.save()),t.required_plugins)&&t.required_plugins.forEach(function(e){var t=pinegrow.findFrameworkByKey(e);t&&pinegrow.activateFrameworkInCurrentContext(t,function(){pinegrow.addFrameworkResourcesToPageOrProject(t,d,{done:function(){d.refresh()},overwrite:!1})},d)}),pgf.smart_blocks)&&(u=pinegrow.getCurrentProject())&&(u.smartStylesheet&&t&&t.add_style&&(u.smartStylesheet.addPart(t.type,t.add_style,e),u.smartStylesheet.update()),u.smartScript)&&t&&t.add_script&&(u.smartScript.addPart(t.type,t.add_script,e),u.smartScript.update())}},PgElementMenus=function(t,n){var o=[],e=!0,i=pinegrow.getCrsaPageOfPgParserNode(t);i.getPageViews().forEach(function(e){o.push(new PgElementPageViewMenu(t,i,e,n))}),this.destroyForPageView=function(e){for(var t=0;t<o.length;t++)if(o[t].pageView===e){o[t].destroy(),o.splice(t,1);break}},this.getMenuPoints=function(e){for(var t=[],n=0;n<o.length;n++)o[n].pageView===e&&(t=t.concat(o[n].getPoints()));return t},this.getMenus=function(){return o},this.show=function(){e||(o.forEach(function(e){e.show()}),e=!0)},this.hide=function(){e&&(o.forEach(function(e){e.hide()}),e=!1)},this.hideMenu=function(){o.forEach(function(e){e.hideMenu()})},this.destroy=function(){o.forEach(function(e){e.destroy()}),o=null},this.reposition=function(t){o.forEach(function(e){e.reposition(t)})},this.getElementRect=function(){for(var e=0;e<o.length;e++){var t=o[e].getElementRect();if(t)return t}return null}},PgElementPageViewMenuPoint=function(e,t,n,o){var i,l,s,r=this;switch(this.$element=$(`<div class="pg-sel-menu-point"><span>${o||""}</span><div class="pg-sel-menu-point-label"></div></div>`),this.$label=this.$element.find(".pg-sel-menu-point-label"),pg$Hide(this.$label),this.width=20,this.height=20,this.placement=e,this.snapX=1,this.snapY=1,this.axis=null,this.placement){case"left":case"right":this.axis="x";break;case"top":case"bottom":this.axis="y"}this.in_drag=!1,this.tooltip=null,"y"==this.axis&&this.$element.addClass("pg-sel-menu-point-y"),n||((i=this.dragHelper=new PgDragHelper(this.$element)).on("dragStart",function(e,t,n){this.in_drag=!0,$.fn.crsapages("showOverlays"),l=parseInt(this.$element.css("left")),s=parseInt(this.$element.css("top")),pinegrow.highlightElement(null),pinegrow.shouldHighlightElements=!1,this.onDragStart.call(this,e,t)},this),i.on("drag",function(e,t,n){"x"==this.axis&&(t=0),"y"==this.axis&&(e=0),1<this.snapX&&(e=Math.floor(e/this.snapX)*this.snapX),1<this.snapY&&(t=Math.floor(t/this.snapY)*this.snapY);var o=this.onDrag.call(this,e,t);o&&(e=o.x,t=o.y),this.$element.css({left:l+e+"px",top:s+t+"px"})},this),i.on("dragStop",function(e,t){this.in_drag=!1,pinegrow.shouldHighlightElements=!0,$.fn.crsapages("showOverlays",!0),this.onDragStop.call(this,e,t)},this)),this.$element.on("click",function(e){return e.preventDefault(),r.onClick&&r.onClick.call(r),!1})},PgElementPageViewMenuPointButton=(PgElementPageViewMenuPoint.prototype.add=function(e,t){var n;this.$element.appendTo(t),this.menu=e,this.tooltip&&(n=this,addTooltip(this.$element,null,{title:function(){return n.tooltip}}))},PgElementPageViewMenuPoint.prototype.setTooltipText=function(e){this.tooltip=e},PgElementPageViewMenuPoint.prototype.setText=function(e){this.$element.find(">span").html(e),this.width=this.$element.outerWidth()},PgElementPageViewMenuPoint.prototype.setLabel=function(e){var t;"number"==typeof e&&(e+=""),null!=e&&e.length?(this.$label.html(e),pg$Show(this.$label),t=this.$label.outerWidth(),this.$label.css("left",this.width/2-t/2+"px")):pg$Hide(this.$label)},PgElementPageViewMenuPoint.prototype.hide=function(e){pg$Hide(this.$element)},PgElementPageViewMenuPoint.prototype.show=function(e){pg$Show(this.$element)},PgElementPageViewMenuPoint.prototype.setIsNotSet=function(e){e?this.$element.addClass("pg-sel-menu-point-not-set"):this.$element.removeClass("pg-sel-menu-point-not-set")},PgElementPageViewMenuPoint.prototype.destroy=function(){pg$Hide(this.$element),this.$element.remove(),this.dragHelper&&this.dragHelper.destroy()},PgElementPageViewMenuPoint.prototype.onDragStart=function(){},PgElementPageViewMenuPoint.prototype.onDrag=function(){},PgElementPageViewMenuPoint.prototype.onDragStop=function(){},PgElementPageViewMenuPoint.prototype.onReposition=function(){},PgElementPageViewMenuPoint.prototype.onClick=function(){},function(e,t,n){PgElementPageViewMenuPoint.call(this,"menu",e),this.$element.addClass("pg-sel-menu-point-button"),t.endsWith("</i>")&&this.$element.addClass("just-icon"),this.label=t,this.menu=e,this.tooltip=n,this.update()}),PgElementPageViewMenuPointForStyleProp=(extendObject(PgElementPageViewMenuPointButton,PgElementPageViewMenuPoint),PgElementPageViewMenuPointButton.prototype.update=function(e,t){this.setText(this.label)},PgElementPageViewMenuPointButton.prototype.onReposition=function(){var e=this.menu.getElementRect();e&&this.$element.css("max-width",e.width-16)},function(e){PgElementPageViewMenuPoint.call(this),this.value=null,this.prop=e}),PgElementPageViewMenu=(extendObject(PgElementPageViewMenuPointForStyleProp,PgElementPageViewMenuPoint),PgElementPageViewMenuPointForStyleProp.prototype.onDragStart=function(e,t){"width"===this.prop&&(this.value=this.menu.$el.outerWidth())},PgElementPageViewMenuPointForStyleProp.prototype.onDrag=function(t,e){var n=this;pinegrow.getCollectionForElement(this.menu.pgel).forEachElement(function(e){e.setInlineStylePropertyValue(n.prop,Math.round(n.value+t*n.menu.pageView.zoom)+"px")}),this.menu.reposition()},PgElementPageViewMenuPointForStyleProp.prototype.onDragStop=function(e,t){pinegrow.changeManager.didChange(pinegrow.getCollectionForElement(this.menu.pgel),"Resize with drag"),pinegrow.selectedElements.reselect()},function(l,O,s,W){this.element_idx=W||0;function N(){if(!M)return null;try{return M.get(0).ownerDocument.defaultView||(M=l.get$DOMElement(s.get$Html()))&&M.get(0).ownerDocument.defaultView?M:null}catch(e){return null}}var r,a,c,u,t,d,e,h,n,g,A,o,i,p,R,f,m,v,P,w,E,_,B,y,C,b=[],D=[],U=O,S=pgFastdomTasks.getUniqueKey(),q=new PgDelayedTasks,M=(this.pageView=s,this.pgel=l,this.$el=l.get$DOMElement(s.get$Html())),k=M?this.$el.get(0):null,T=k?k.ownerDocument:null,L=s.get$Iframe(),I=this,j=new PgElementPositionObserver(function(e){var t=N();return t?t.get(0):null},function(e){I.reposition()}),F=(this.get$Element=function(){return g},this.getPoints=function(){return b},!0),K=(this.show=function(){g.removeClass("hidden").show(),Y(),b.forEach(function(e){e.show()}),F=!0},this.hide=function(){g.hide(),K(),b.forEach(function(e){e.hide()}),F=!1},this.hideMenu=function(){g.addClass("hidden").hide()},function(){r&&r.each(function(e,t){pgHide(t)})}),Y=function(){r?r.each(function(e,t){pgShow(t)}):I.reposition()},x=(this.destroy=function(){j.destroy(),q.destroy(),pinegrow.removeEventHandler("on_page_views_updated",H),pinegrow.removeEventHandler("on_page_changes_done",H),pinegrow.removeEventHandler("on_page_shown_in_live_view",H),pinegrow.removeEventHandler("on_css_node_deleted",H),pinegrow.removeEventHandler("on_css_node_added",H),pinegrow.removeEventHandler("on_css_node_updated",H),f&&pinegrow.removeEventHandler("on_element_link_changed",f),T&&(T.removeEventListener("transitionend",V),T.removeEventListener("animationend",V),T.removeEventListener("load",V,!1)),k&&k.removeEventListener("load",V,!1),document.addEventListener("mousemove",Q),r&&(pg$Hide(r),r=null),M&&M.removeClass("crsa-selected"),g&&g.stop().remove(),g=null,_&&_.destroy(),b.forEach(function(e){e.destroy()}),D.forEach(function(e){e.destroy()}),b=[],d&&d.stop(),pgFastdomTasks.stopAll(S),this.destroyed=!0},null),H=function(){l.isDeleted||I.reposition()},V=(pinegrow.addEventHandler("on_page_views_updated",H),pinegrow.addEventHandler("on_page_changes_done",H),pinegrow.addEventHandler("on_page_shown_in_live_view",H),pinegrow.addEventHandler("on_css_node_deleted",H),pinegrow.addEventHandler("on_css_node_added",H),pinegrow.addEventHandler("on_css_node_updated",H),function(e){k&&(e.target===k||e.target.contains(k)||k.contains(e.target))&&I.repositionDelayed()}),z=(T&&(T.addEventListener("transitionend",V,!1),T.addEventListener("animationend",V,!1)),k&&k.addEventListener("load",V,{capture:!0}),null),Q=function(e){z&&crsaFuncs.showInsertionLine(M,"inside-top")},X=function(e,t,n){var o=e.pgCurrentPosition||{x:0,y:0};pgPositionAt(e,o.x+t,o.y+n)};this.getElementRect=function(){if(r){var e=r.filter(".crsa-hl-size-sel");if(e.length)return e.get(0).getBoundingClientRect()}return null},this.repositionDelayed=function(){q.run("reposition",function(){I.reposition()},200)},this.reposition=function(i){var l=N();l&&crsaFuncs.positionElementMenu(g,l,L,S,function(e){var t,n,o;i&&x?(n=e.left-x.left,o=e.top-x.top,r&&r.each(function(e,t){X(t,n,o)}),b.forEach(function(e){e.in_drag||X(e.$element.get(0),n,o)}),g&&(t=g.get(0),y&&clearTimeout(y),t.classList.contains("crsa-disable-hover")||t.classList.add("crsa-disable-hover"),y=setTimeout(function(){t.classList.remove("crsa-disable-hover")},250))):(r&&(a=r,r=null),F?d=highlightElementsInPageView(s,l,"",null,"pg-hl-select","-sel",u,c,null,null,!0,I.element_idx):a&&(a.remove(),a=null),b.forEach(function(e){e.onReposition()})),x=e})},M&&(M.addClass("crsa-selected"),c=function(e,t){r=$(e),F||K(),b.forEach(function(e){t(e.$element,e.width,e.height,"function"==typeof e.placement?e.placement.call(e):e.placement,e.in_drag)})},u="Menu"+l.getId(),t=pg$Closest(L,".content"),b=[],pinegrow.dispatchEvent("on_get_menu_points",s.getPage(),l,this,b),pinegrow.dispatchEvent("on_get_menu_points_with_callback",s.getPage(),l,this,function(e){setTimeout(function(){e.length&&!I.destroyed&&(e.forEach(function(e){"menu"===e.placement?(e.$element.insertBefore(g.find(".actions")),e.tooltip&&addTooltip(e.$element,e.tooltip)):(e.add(I,t),b.push(e))}),I.reposition())},0)}),D=[],b.forEach(function(e){"menu"===e.placement?D.push(e):e.add(I,t)}),d=highlightElementsInPageView(s,M,"",null,"pg-hl-select","-sel",u,c,null,null,!0,I.element_idx),e=l.dynamic,w=pgf.simple_element_menu||!1,h=[],n={simple:w,on_click_name:null},(m=s.getPage()).callFrameworkHandler("on_get_menu_commands",l,h,this.$el,n),l.callDefHandlers("on_get_menu_commands",l,h,this.$el),w=n.simple,g=$("<div/>",{class:`crsa-inline-menu ${e?"dyn":""} `+(w?" crsa-inline-menu-simple":"")}).appendTo(t),pgf.edit_html?(e?(v="DYN",P="This is a dynamic element created by Javascript code. You can style it with the Style panel. Note that inline styles can't be saved. Click on DYN for more information.",A=pgf.docs.dyn_elements_help,m.wrapper_node&&(v="WRAP",P=`This is an element on the wrapper page.`),m=$(`<span class="dyn-info">${v}</span>`).appendTo(g),addTooltip(m,P),m.on("click",function(e){e.preventDefault(),pinegrow.openExternalUrl(A)})):(o=$('<i class="icon icon-Pin6 crsa-inline-menu-move"></i>').appendTo(g),v=$(`<div class="crsa-inline-menu-updown"></div>`).appendTo(g),addTooltip($('<i class="icon icon-up crsa-inline-menu-move-up"></i>').appendTo(v).on("click",function(e){e.preventDefault(),(new PgApi).moveUp()}),"Move the element up (before the preceding element)."),addTooltip($('<i class="icon icon-down crsa-inline-menu-move-down"></i>').appendTo(v).on("click",function(e){e.preventDefault(),(new PgApi).moveDown()}),"Move the element down (after the next element)"),l.canMove()||v.css("visibility","hidden")),e||(w&&(i=$(`<span class="crsa-inline-menu-name">${pinegrow.selectedElements.getName()}</span>`).appendTo(g),n.on_click_name)&&i.on("click",function(e){e.preventDefault(),n.on_click_name(i,l,I,e)}),(P=$("<i/>",{class:"icon icon-text_edit"}).appendTo(g)).on("click",function(e){e.preventDefault(),pinegrow.inlineEditManager.edit(M,!0,!1,e)}),addTooltip(P,"Edit text"),isApp()||(p=$(`<a href="#" target="_blank" style="text-decoration:none;"><i class="icon icon-touch"></i></a>`).appendTo(g),addTooltip(p,"Click the link."),p.on("click",function(e){var t,n,o,i=p.attr("href");crsaIsAbsoluteUrl(i)||i.match(/^[a-z]+\:/)||(e.preventDefault(),t=(o=pinegrow.getCurrentProject()).getAbsoluteUrl(i),n=pinegrow.getCrsaPageByUrl(t),o=o.getFileForUrl(t),n||o?pinegrow.openOrShowPage(t):pinegrow.showQuickError(`Page ${i} not found.`))}),(R=function(e){var t=e.getLinkElement()||e.closest("a");if(t){t=t.getAttr("href");if(p.attr("href",t),t)return void pg$Show(p,"inline")}pg$Hide(p)})(l),f=function(){R(l)},pinegrow.addEventHandler("on_element_link_changed",f)),w)||((m=$("<i/>",{class:"icon icon-settings crsa-inline-menu-prop"}).appendTo(g)).on("click",function(e){e.preventDefault();PgQuickProperties(null,l,M)}),addTooltip(m,"Show element properties "+pgShowKbdCombo("P"))),w||((v=$("<i/>",{class:"icon icon-Pin15 crsa-inline-menu-style"}).appendTo(g)).on("click",function(e){e.preventDefault(),pinegrow.showCreateCssRule()}),addTooltip(v,"Style with CSS "+pgShowKbdCombo("R"))),!e&&l.canDuplicate()&&((P=$("<i/>",{class:"icon icon-duplicate crsa-inline-menu-duplicate"}).appendTo(g)).on("click",function(e){e.preventDefault(),crsaFuncs.duplicateCurrnetElement(null,e.altKey)}),1<pinegrow.selectedElements.getLength()?addTooltip(P,"Duplicate "+pgShowKbdCombo("CMD+D")+"<br>Use "+pgShowKbdCombo("ALT")+" to duplicate as group"):addTooltip(P,"Duplicate "+pgShowKbdCombo("CMD+D"))),e||w||((m=$("<i/>",{class:"icon icon-import crsa-inline-menu-add"}).appendTo(g)).on("click",function(e){e.preventDefault(),pinegrow.showQuickInsert(l,M)}),addTooltip(m,"Insert element "+pgShowKbdCombo("PLUS")))):g.css("padding-left","10px"),h.forEach(function(t){var e;(t.icon||t.html)&&((e=$(t.html||`<i class="icon ${t.icon}"></i>`).appendTo(g)).on("click",function(e){return e.preventDefault(),t.action(l,$(this)),!1}),addTooltip(e,t.tooltip))}),pgf.edit_html&&!e&&["html","head","body"].indexOf(l.tagName)<0&&((v=$("<i/>",{class:"icon icon-bin crsa-inline-menu-delete"}).appendTo(g)).on("click",function(e){e.preventDefault(),crsaFuncs.deleteCurrentElement()}),addTooltip(v,"Delete "+pgShowKbdCombo("DELETE"))),pgf.empty_ph_attribute&&l.canHaveChildren()&&((P=l.hasAttribute(pgf.empty_ph_attribute)||l.hasClass("pg-empty-placeholder"))||1)&&((w=$("<i/>",{class:"pg-el-menu-placeholder icon icon-Pin21"+(P?" active":"")}).appendTo(g)).on("click",function(e){e.preventDefault();new PgApi;pinegrow.makeChanges(l,"Toggle empty placeholder",function(){pinegrow.getCollection().forEachElement(function(e){e.hasAttribute(pgf.empty_ph_attribute)||e.hasClass("pg-empty-placeholder")?(e.removeAttribute(pgf.empty_ph_attribute),e.removeClass("pg-empty-placeholder"),e.placeholderWasAutoRemoved=!1):e.setAttribute(pgf.empty_ph_attribute)})}),pinegrow.selectedElements.reselect()}),addTooltip(w,P?"Switch off the empty placeholder":"Turn on the empty placeholder")),D.forEach(function(e){g.append(e.$element),e.tooltip&&addTooltip(e.$element,e.tooltip)}),C=new PgDropdownButton(null,function(e){e.preventDefault();var t,n,o=$.fn.crsa("getActionsMenuFor",l,!0),i=(pgf.kids&&(o=o.filter(function(e){return!("Transform"!=e.label||!l.canDelete()||(e.label="Change to",e.submenu=e.submenu.filter(function(e){return!(!e.group||"change_to"!=e.group)}),0))})),h.length&&(t=0,n=null,h.forEach(function(e){e.header&&e.header!=n&&(o.splice(t++,0,{type:"header",label:e.header}),n=e.header),e.label&&o.splice(t++,0,e)})),pgf.kids||U.callFrameworkHandler("on_build_actions_menu",o,l,!0),new CrsaContextMenu(o,C.$element));i.targetPgel=l,i.showForElement(C.$element,C.$element.closest(".page"))}),pgf.kids&&!l.canDelete()||(C.$element.appendTo(g),C.setTooltip("More actions")),M&&M.is("body,html,head,script")&&o&&o.hide(),o&&!l&&o.on("mousedown",function(e){var t=new pgParserSourceProblem(l,M);l||t.add("element",getElementName(M),"change"),t.ok()?(e.preventDefault(),e.stopImmediatePropagation()):showAlert(t.toString(),"Can't move this element")}),crsaIsInEdit()?o&&o.on("mousedown",function(e){crsaIsInEdit()&&(showAlert("Go out of content editing mode before moving elements.","Can't move during content editing"),e.preventDefault(),e.stopImmediatePropagation()),canMakeChange(l,"move_element")||(e.preventDefault(),e.stopImmediatePropagation())}):((_=new PgDragHelper(g,".crsa-inline-menu-move")).onBefore=function(e){return!!pgf.edit_html},_.on("dragStart",function(e,t,n){$.fn.crsapages("showOverlays");var o=getCrsaPageOfElement(M);(E=new PgDragMenu(o.getMainType(null,l),!0,!0,null,l)).pgel=l,E.movedPgel=l,crsaFuncs.setDraggedMenu(E),E.handleMoveEvent(n,E),g.hide()},this),_.on("drag",function(e,t,n){E.handleMoveEvent(n,E)},this),_.on("dragStop",function(e,t){$.fn.crsapages("showOverlays",!0),g&&g.show(),E&&(E.insert(),E.destroy(),E=null,crsaFuncs.setDraggedMenu(null),crsaFuncs.showInsertionLine(null),pinegrow.highlightElement(null))},this),crsaFuncs.positionElementMenu(g,M,L,S,function(e){x=e}),(B=g).on("mousewheel",function(e){var t;$(e.target.closest("ul")).hasClass("dropdown-menu")||((t=B.get(0)).classList.contains("crsa-disable-hover")||fastdom.mutate(function(){t&&t.classList.add("crsa-disable-hover")}),y&&clearTimeout(y),y=setTimeout(function(){fastdom.mutate(function(){t&&t.classList.remove("crsa-disable-hover")})},250))}),M.is("html")&&g.hide()),j.check())}),PgQuickSelectElement=function(e){var t=new PgSelectElementView(e),n=new PgQuickWindow(e.title,t,"quickSelectElement",400,250);(t.quickWin=n).showFor$El(e.target),n.autoSize(80),n.$element.addClass("important")},PgSelectElementView=function(i){function e(){(r=a.clone()).add(pinegrow.selectedElements.getCollection()),u(r),d(),0}function t(e,t,n,o){o.stop=!0,o.multi?r.contains(t)?r.remove(t):r.add(t):(r=new PgCollection).add(t),u(r),d(),i.updated_message&&pinegrow.showQuickMessage(i.updated_message)}i=$.extend({label:"Save changes",current_col:null,remove_label:"remove",select:!0,on_changed:null,remove:!0},i||{});var n=this,o=$('<div class="pg-select-element"><div class="pg-select-element-description"></div><div class="pg-select-element-help">Click on an element on the page or in the tree. '+pgShowKbd("CMD")+' + Click to select multiple. Click on the listed element to reveal it on the page.</div><ul class="pg-select-element-list"></ul><button class="pg-button pg-button-primary done">'+i.label+'</button> <button class="pg-button cancel ">Cancel</button></div>'),l=o.find(".pg-select-element-description"),s=o.find(".pg-select-element-list"),l=(o.find("button.done").on("click",function(e){e.preventDefault(),r.forEachElement(function(e){c.remove(e)}),i.func&&i.func(r,c),n.quickWin&&n.quickWin.destroy(),i.reselect&&pinegrow.selectedElements.reselect()}),o.find("button.cancel").on("click",function(e){e.preventDefault(),n.quickWin&&n.quickWin.destroy(),i.reselect&&pinegrow.selectedElements.reselect()}),s.on("click","[data-pg-id]",function(e){e.preventDefault();var t=$(this).attr("data-pg-id"),n=getPgNodeByPgId(t);n&&(n.scrollTo(),setTimeout(function(){pinegrow.highlightElement(n.get$DOMElement())},100))}),s.on("click",".remove",function(e){e.preventDefault();var t=$(this.closest("li")).attr("data-pg-id"),t=getPgNodeByPgId(t);t&&(c.add(t),a.remove(t),r.remove(t),u(r),d())}),l.html(i.description),this.view=new PgUIView(o)),r=new PgCollection,a=new PgCollection,c=new PgCollection,u=function(e){var t;e&&0<e.getLength()?(t="",e.forEachElement(function(e){t+='<li data-pg-id="'+e.getId()+'"><span class="name">'+e.getName({short:!1})+"</span>",("all"===i.remove||a.contains(e)&&i.remove)&&(t+='<span class="remove"><i class="remove icon icon-close"></i>'+i.remove_label+"</span>"),t+="</li>"}),s.html(t)):s.html("<li>No element is selected.</li>"),n.quickWin&&n.quickWin.autoSize(80)},d=function(){i.on_changed&&i.on_changed(r)};i.current_col&&(a=(a=r="function"==typeof i.current_col?i.current_col():i.current_col)||new PgCollection,u(a));i.select||pinegrow.addEventHandler("on_element_clicked",t),pinegrow.addEventHandler("on_selected_elements_changed",e),l.onDestroy=function(){pinegrow.removeEventHandler("on_selected_elements_changed",e),i.select||pinegrow.removeEventHandler("on_element_clicked",t)}};class PgElementPositionObserver{constructor(e,t){this.element=e,this.on_change=t,this.rect={x:0,y:0,width:0,height:0},this.force_resolve_element=!1}check(){return}destroy(){clearInterval(this.timer)}}