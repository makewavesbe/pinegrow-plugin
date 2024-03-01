var PgProjectDBTreeCollapseMap=function(){function a(e){switch(e.tagName){case"document":return e.getAttr("url");case"element":var t=e.parent.parent;return a(t)+"-"+e.getAttr("selector");case"action":return a(e.parent)+"-"+e.getAttr("id")}return""}var l={};this.setCollapsed=function(e,t){var n=a(e);n&&(l[n]=t)},this.isCollapsed=function(e){var t=a(e);if(t)return l[t]||!1}},PgProjectDBTreeView=function(){pinegrow.registerTreeView(this),pinegrow.projectDBTreeView=this;var o,t=$("<div/>",{id:"pg-tree",class:"pg-tree pg-db-tree"}),d=(new PgApi,new PgElementSelectorHelper),s=new PgProjectDBTreeCollapseMap,l=new PgDelayedTasks,i=null,B=function(e,t,n){switch(e){case"ok":return`<b>The mapping is ok.</b> This action set is correctly mapped to the element ${t.getAttr("desc")}.`;case"unused":return`<b>Not used.</b> The action set is currently not mapped to any element on the page.`;case"none":return`<p><b>The target element is not found.</b> The action set's selector doesn't map to any element on the page. Previously it mapped to ${t.getAttr("desc")}.</p><p>Did you change the page structure, element ids or classes that are used in this selector?</p><p><b>To fix the issue</b>, right-click on the Action set and remap it to the selected element.</p>`;case"taken":return`<p><b>Target element is already mapped to another action set.</b> The action set's selector points to the element on the page, but that element is already mapped to another action set.</p><p><b>To fix the issue</b>, right-click on the Action set and remap it to the original element or map it to another element on the page.</p>`;case"multiple":return`<p><b>Multiple elements on the page match the selector.</b> The selector for this action set is not unique.</p><p><b>To fix the issue</b>, right-click on the Action set and remap it to the original element or map it to another element on the page.</p>`}return null},e=new PgSearchBox({toolbar_on:!0,placeholder:"search"}),n=(e.addIcon({icon:"icon-130",label:"Select search results",func:function(){searchSelect("select")}}),e.addIcon({icon:"icon-137",label:"Add search results to selection",func:function(){searchSelect("add")}}),e.addIcon({icon:"icon-138",label:"Deselect search results",func:function(){searchSelect("deselect")}}),this.toolbar=e.getToolbar()),a=(n.addSection("settings").$element,new PgButtonToolbarItem("icon-filter","Select what kind of elements to show in the tree.")),r=(n.addItem("settings",a),{issues:{label:"Issues",desc:"Show only Action sets with mapping issues"},unused:{label:"Unused",desc:"Show only unused Action sets"}}),c={},p=($.each(r,function(e,t){c[e]=!1}),c),m=(a.onClick=function(){var n=new CrsaContextMenu(null,this.$element);n.add({type:"header",label:"Show only:"}),$.each(r,function(t,e){n.add({label:e.label,action:function(){var e=!(!0===p[t]);h.setFilterOption(e?t:null)},check:!0===p[t]})}),n.add({type:"divider"}),n.add({label:"Clear filter",action:function(){h.setFilterOption(null)}}),n.showForElement(this.$element,null,8)},this.setFilterOption=function(e,t){var n;p=$.extend({},c),e?(n=r[e],p[e]=!0,a.setActive(!0),pinegrow.showMode(n.desc,!0),g(n.label)):(a.setActive(!1),g()),T.setFilterOptions(p),t||T.research(!0)},e.$element.appendTo(t),e.$element.find(".pg-button-toolbar-section.icons")),u=((new PgSearchBoxSpacer).$element.appendTo(t),e.onSearch=function(e){var t=new CrsaProfile;T&&T.search(e),e.length?pg$Show(m,"inline-block"):pg$Hide(m),t.show("SEARCH")},pg$Hide(m),$('<div class="pg-tree-filter-msg"><div>Show only: <span></span><i class="close icon icon-close"></i></div></div>').appendTo(t)),g=(pg$Hide(u),u.on("click",function(e){e.preventDefault(),h.setFilterOption(null)}),function(e){e?(u.find("span").html(e),pg$Show(u,"flex"),t.addClass("with-filter-msg")):(pg$Hide(u),t.removeClass("with-filter-msg"))}),n=$("<div/>",{class:"pg-tree-container"}).appendTo(t),e=(t.find(".editor"),this.view=new PgUIView(t,"db_tree","Mappings")),h=(e.classForContainer="pg-tree-panel-container",this),f=(e.tabIcon="icon-mapping",e.onShow=function(){},new PgTreeNodeMenu([{icon:"icon-bin",name:"Delete",func:function(e){}},{icon:"icon-duplicate",name:"Duplicate",func:function(e){}}])),v=(f.hide(),new PgTableGrid),x=(v.draggable=!1,v.onScroll=function(){F()},n.append(v.$element),f.$element.appendTo(t),v.setTemplate('<div class="pg-pdb-tree-cell-document"><i data-element="icon" class="collapse-icon icon-down"></i><name data-element="name"></name></div>'),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-project"><i data-element="icon" class="collapse-icon icon-down"></i><name data-element="name"></name></div>',"project"),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-document"><i data-element="icon" class="collapse-icon icon-down"></i><i class="icon icon-Page decoration"></i><pagename data-element="name"></pagename></div>',"document"),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-element"><i data-element="icon" class="collapse-icon icon-down"></i></i><name data-element="name"></name><problem data-element="problem"></problem></div>',"element"),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-selector"><i class="icon icon-267 decoration"></i><name data-element="name"></name></div>',"selector"),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-mapped"><span data-element="deco"></span><name data-element="name"></name></div>',"mapped"),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-action"><i data-element="icon" class="collapse-icon icon-down"></i><i class="icon icon-WP decoration"></i><action data-element="name"></action></div>',"action"),v.setTemplate('<div class="pg-pdb-tree-cell pg-pdb-tree-cell-action-param"><name data-element="name"></name><value data-element="value"></value></div>',"action_param"),v.onSetDataToCell=function(e,t){T.populateDataItem(e,o);var n,a=e.pgel;switch(a.tagName){case"document":t.setHtml("name",a.getAttr("url"));break;case"action":t.setHtml("name",e.ai.def.name);break;case"action_param":t.setHtml("name",a.name+(null!==a.value?": ":"")),t.setHtml("value",a.value);break;case"element":if(t.setHtml("name",a.getAttr("name")||'<span style="opacity:0.5;">No name</span>'),"ok"===(n=e.pgel.getAttr("status"))||"unused"===n)t.$element.removeClass("problem"),t.addClass("problem","hide");else{t.$element.addClass("problem"),t.removeClass("problem","hide");var l="";switch(n){case"none":l="No element matches the selector.";break;case"multiple":l="Multiple elements match the selector.";break;case"taken":l="The matched element is already linked.";break;case"unused":l="Not used."}t.setHtml("problem",`<span><i class="icon icon-269"></i> ${l}</span>`)}break;case"selector":t.setHtml("name",e.element_pgel.getAttr("selector")||"Not used.");break;case"mapped":t.setHtml("name",e.element_pgel.getAttr("desc")),"ok"===(n=e.element_pgel.getAttr("status"))||"taken"===n||"multiple"===n?(t.$element.removeClass("problem"),t.setHtml("deco",`<i class="icon icon-right-arrow decoration"></i>`)):(t.$element.addClass("problem"),t.setHtml("deco",`<i class="icon icon-close decoration"></i>`));break;default:t.setHtml("name",a.tagName)}(a.pg_selected||!1)!==(t.isSelected||!1)&&(a.pg_selected?t.$element.addClass("selected"):t.$element.removeClass("selected"),t.isSelected=a.pg_selected||!1),e.border!==(t.hasBorder||null)&&(e.border?t.$element.removeClass("no-border"):t.$element.addClass("no-border"),t.hasBorder=e.border),v.hasChildren(e)?e.collapsed?(t.addClass("icon","icon-right"),t.removeClass("icon","icon-minus","icon-down"),t.$element.addClass("collapsed")):(t.removeClass("icon","icon-minus","icon-right"),t.addClass("icon","icon-down"),t.$element.removeClass("collapsed")):(t.removeClass("icon","icon-down","icon-right"),t.addClass("icon","icon-minus"),t.$element.removeClass("collapsed"))},v.onRepaint=function(){f.setBottom(v.getHScrollBarSize()),f.setRight(v.getVScrollBarSize()),F()},v.onSetData=function(){for(var e=v.visibleData,t=0;t<e.length;t++)e[t].border=!0,"element"===e[t].template_type&&0<t&&(e[t-1].border=!1)},function(e){e.forEach(function(e){e.populated=!1}),v&&v.updateItems(e)}),b=function(e){var t=$(e.currentTarget).closest("div");return v.visibleData[parseInt(t.attr("data-visible-idx"))]},w=function(e){var t=e.closest("div");return v.visibleData[parseInt(t.attr("data-visible-idx"))]},_=function(e){for(var t=v.data,n=0;n<t.length;n++)if(t[n].pgel===e)return t[n];return null},E=(this.isOverTree=function(e,t){return null},v.$container.on("contextmenu",".pg-table-grid-cell",function(e){e.preventDefault(),e.stopPropagation();var n,t,a,l,o=pinegrow.getCurrentProject(),s=$(this),i=w(s),r=pinegrow.selectedElements.getLastSelected(),c=[],p=i.element_pgel||(i.pgel?i.pgel.closest("element"):null);return p&&(i=d.getOpenPageForElement(p),d.getOpenPageForElement(p)?(n=p.getAttr("status"),p.getAttr("selector"),p.getAttr("desc"),"taken"===n&&(t=d.getPgelTargetedBySelector(p))&&(a=o.db.getElementNodeForSelector(t.getAttr("data-pg-sel"),i))&&(c.push({type:"html",html:`<p class="pg-menu-html-desc">This action set should be mapped to element ${t.getName({short:!0})}. But that element is already mapped to action set ${d.getActionSetName(a)}.</p>`}),c.push({label:`Jump to `+d.getActionSetName(a),action:function(){D(a)}}),c.push({type:"divider"})),i=function(){var e,t;1<pinegrow.selectedElements.getLength()?c.push({type:"html",html:'<p class="pg-menu-html-desc">Multiple elements are selected on the page. Please select just one element.</p>'}):(e=r.getAttr("data-pg-sel"))||d.isAutoSelectorOn()?c.push({label:`Map to `+r.getName({short:!0}),action:function(){d.mapDBElementToPgel(p,r,e,"multiple"===n)}}):((t=d.getActionsForMenu(r,function(e){d.mapDBElementToPgel(p,r,e)})).unshift({type:"header",label:"Map using the selector:"}),c.push({label:`Map to `+r.getName({short:!0}),submenu:t}))},c.push({type:"header",label:"Map to:"}),r?(l=(l=o.db.getElementNodeForPgel(r))&&null===l.findOne("action")?null:l)?l===p?"multiple"===n?i():c.push({type:"html",html:'<p class="pg-menu-html-desc">The action set is already mapped to the selected element.</p>'}):(c.push({type:"html",html:`<p class="pg-menu-html-desc">${r.getName({short:!0})} is already mapped to another Action set ${l.getAttr("name")} | ${l.getAttr("desc")}</p>`}),c.push({label:"Replace it",action:function(){d.unmapOneDBElementFromPgelAndMapAnother(l,p,r)}})):i():c.push({type:"html",html:`<p class="pg-menu-html-desc">Select an element on the page first.</p>`}),c.length&&(c.push({type:"divider"}),c.push({label:"Edit name...",action:function(){pinegrow.showPrompt("<p>Edit the name of the Action set:</p>","Choose a descriptive name",p.getAttr("name"),"",null,function(e){d.changeActionSetName(p,e)})}})),c.length&&(c.push({type:"divider"}),c.push({label:"Remove from the page (and keep it in the project as Unused)",class:"wrap",action:function(){d.makeElementUnused(p)}}),c.push({type:"divider"}),c.push({label:"Delete...",action:function(){pinegrow.showAlert(`<p>Do you want to delete this Action set? Deleted actions will be removed from the mapped element and the action set will be removed from the project.</p><p>Deleting the Action set can't be undone.</p><p>If you want to keep the Action set in the project, do the "Remove from the page" instead.</p>`,"Are you sure?","Cancel","Delete it",null,function(){d.deleteElement(p)},"Just remove it from the page",function(){d.makeElementUnused(p)})}}))):c.push({type:"html",html:'<p class="pg-menu-html-desc">Please open the page first. You can click on the Action set to open its page.</p>'}),c.length)&&new CrsaContextMenu(c,s).showForElement(s),!1}).on("mouseenter",".pg-table-grid-cell",function(e){var t,n,a;v.inScroll||(a=$(this),"element"===(t=w(a)).template_type&&"ok"!==(n=t.pgel.getAttr("status"))&&(a=$(this),l.run("elementTooltip",function(){addTooltip(a,B(n,t.pgel),{trigger:"manual",close_delay:0}),i=a},300))),e.stopImmediatePropagation()}).on("mouseleave",".pg-table-grid-cell",function(e){$(this);i&&(i.tooltip("destroy"),i=null),l.cancel("elementTooltip"),v.inScroll,e.stopImmediatePropagation()}).on("click","i.collapse-icon",function(e){var t=b(e);t.collapsed=!(t.collapsed||0),t.pgel&&s.setCollapsed(t.pgel,t.collapsed),e.altKey&&v.forEachVisibleSibling(t,function(e){e.collapsed=t.collapsed,t.pgel&&s.setCollapsed(e.pgel,t.collapsed)}),v.refresh(),e.preventDefault(),e.stopPropagation()}).on("click","i.icon-hide",function(e){var t=b(e);showItem(t),e.preventDefault(),e.stopPropagation()}).on("click",".pg-table-grid-cell",function(e){pgCloseContextMenus();var t=$(this),n=w(t);pinegrow.selectedElements.getLastSelected();switch(n.pgel.tagName){case"element":d.selectMappedPgel(n.pgel);break;case"mapped":case"selector":d.selectMatchedPgels(n.element_pgel);break;case"action":d.selectAction(n.pgel);break;case"action_param":d.selectAction(n.pgel.action_pgel);break;case"document":d.openDocument(n.pgel)}return!1}),e.onResize=function(){},new ResizeObserver(function(){v.$element.get(0).getBoundingClientRect(),v.onRepaint(),v.show(),f.updateLayout()})),y=(E.observe(v.$element.get(0)),e.onDestroy=function(){E.disconnect(),E=null,l.destroy(),pinegrow.removeEventHandler("on_projectdb_changed",k),pinegrow.removeEventHandler("on_project_loaded",A),pinegrow.removeEventHandler("on_project_closed",C),pinegrow.removeEventHandler("on_page_changed",y),pinegrow.removeEventHandler("on_page_loaded",H),pinegrow.removeEventHandler("on_page_refreshed",H),pinegrow.removeEventHandler("on_page_selected",V),pinegrow.removeEventHandler("on_drag_drop_operation_done",onDragDropDone),pinegrow.removeEventHandler("on_page_frameworks_changed",N),pinegrow.removeEventHandler("on_element_isolated",R),t.off("mousemove",onMouseMoved),t.off("mouseleave",U),t.off("mouseenter",z)},function(e,t,n){}),P=function(e){v.showInsertionLineAt(-1),v.setEmptyLineAt(-1),v.borderItem(null),e?(e.setFilterOptions(p),e.setTreeView(h),e.setTableGrid(v)):(j=null,v.setData([]),f.hide()),f.updateLayout()},T=null,A=function(e,t){(T=new PgProjectDBTree(t.db,s)).create(),P(T)},C=function(e,t){h.view.setNotificationBadge(null)},k=function(e,t,n){var a,l=pinegrow.getCurrentProject();1&&(l.db.selectedElement&&(l.db.selectedElement.pg_selected=!1,a=pinegrow.selectedElements.getLastSelected())&&(a=l.db.getElementNodeForPgel(a),l.db.selectedElement=a)&&(l.db.selectedElement.pg_selected=!0),(T=new PgProjectDBTree(l.db,s)).create(),P(T)),O(),i&&(i.tooltip("destroy"),i=null)},O=function(){var e=pinegrow.getCurrentProject(),t=0;e&&e.db&&(t=(e=e.db.getElementsWithIssues()).length,L(e))&&d.displayIssuesNotice(e.length),h.view.setNotificationBadge(0<t?``+t:null,`Please resolve ${t} mapping issue${1<t?"s":""}.`)},S=[],L=function(e){var t=e.length>S.length;return S=e,t},D=function(e){var t=[],n=null,a=pinegrow.getCurrentProject();a&&(a.db.selectedElement&&(a.db.selectedElement.pg_selected=!1,(n=_(a.db.selectedElement))&&t.push(n),a.db.selectedElement=null),e&&(e.pg_selected=!0,a.db.selectedElement=e,n=_(e))&&(t.push(n),v.scrollToDelayed(n)),t.length)&&x(t)},H=function(e){},N=function(e){},R=function(e,t){},V=function(e){o=e},j=null,I=null,M=(new PgMouseSpeed,null),U=function(e){v.highlightLevel(-1),v.quickInsertLine.hide(),M&&(clearTimeout(M),M=null),f.hide(),I&&I.$element.removeClass("hovered"),I=null},z=function(e){j&&f.show()},F=(t.on("mouseleave",U),t.on("mouseenter",z),pinegrow.addEventHandler("on_selected_elements_changed",function(){var e,t,n=pinegrow.getCurrentProject();n&&((e=pinegrow.selectedElements.getLastSelected())&&(t=n.db.getElementNodeForPgel(e)),D(t))}),pinegrow.addEventHandler("on_project_loaded",A),pinegrow.addEventHandler("on_project_closed",C),pinegrow.addEventHandler("on_projectdb_changed",k),pinegrow.addEventHandler("on_page_changed",y),pinegrow.addEventHandler("on_page_loaded",H),pinegrow.addEventHandler("on_page_refreshed",H),pinegrow.addEventHandler("on_page_selected",V),pinegrow.addEventHandler("on_page_frameworks_changed",N),function(){var e;j&&(e=v.getScrollOffset(),e=v.getYForVisibleDataIndex(j.visible_idx)-e.top,f.showFor(e,e+v.cellHeight,j.selected||!1,j))});this.onSelected=function(e){j=e;var t=this.getPgel(e);t&&f.find("hide").find("i").removeClass("icon-hide icon-see").addClass(t.isHidden()?"icon-see":"icon-hide"),F()},this.onDeselected=function(e){pinegrow.selectedElements.hasSelection()||(j=null,f.hide())}},PgProjectDBTree=function(n,t){var l,o,i={styles:!1,images:!1},r=!1,c=[],a={},b=pinegrow.findFrameworkByKey("wordpress.pinegrow"),p=(this.setFilterOptions=function(e){var t=r;r=!1,$.each(e,function(e,t){if(t)return r=!0}),i=e,h=t!==r},this.setTreeView=function(e){o=e},null),s=(this.setTableGrid=function(e){p=e,this.$element=p.$element,e.setData(c),h&&this.research()},$("<div/>").addClass("crsa-tree-branch pg-tree-ul"),this.$element=null,this.highlightOnMouseOver=!0,this.destroy=function(){nextFrame.cancelAll(),o=p=null,l&&l.destroy(),a=c=l=null},this.getDataFor$Element=function(e){return p.getDataFor$Element(e)},this.updatePgIdMap=function(){var e=new CrsaProfile;a={},c.forEach(function(e){e.pgid&&(a[e.pgid]=e)}),e.show("updatePgIdMap")},function(e){return a[e]||null});this.getTreeDataItemForPgId=function(e){return s(e)};const d=1,m=3,u=2;var g=null,h=(this.research=function(e){var t={selected_ids:{},changed:!1};(g||t.changed||r||e)&&this.search(g,!0,t)},!1),w=(this.search=function(e,t,n){var s,a;o?(h=!1,s=0<(e=null===e?"":e).length?new RegExp(escapeRegExp(e),"i"):null,g=e,(a=n||{selected_ids:{},changed:!1}).selected_ids,a=a.changed,e||a||r?l&&(c.forEach(function(e){e.search=0,e.peek_in&&(e.collapsed=!0,e.peek_in=!1)}),l.forEachWithParents(function(e,t){var n,a,l=!1;if(s&&!e.search_string.match(s)||(l=!0,"document"===e.template_type&&(l=!1)),l=r&&(a=(n="element"===e.template_type)?e.pgel.getAttr("status"):null,i.issues&&(l=n&&"ok"!==a&&"unused"!==a&&l&&!0),i.unused)?n&&"unused"===a&&l&&!0:l){e.search=d;for(var o=t.length-1;0<=o&&t[o].search===m;o--)t[o].search=u,t[o].collapsed&&(t[o].peek_in=!0),t[o].collapsed=!1}else{e.search=m;for(o=t.length-1;0<=o;o--)if("element"===t[o].template_type&&t[o].search===d){e.search=d;break}}}),p.refresh()):(c.forEach(function(e){e.search=0,e.force_search=!1,e.peek_in&&(e.collapsed=!0,e.peek_in=!1)}),p.refresh())):h=!0},this.scrollToSelected=null,this.handleEvent=function(e){},this.create=function(){c=[],a={};0;var e=n.getProjectNode(),t=new CrsaProfile(!0);_(c,e,!1);t.show("create ProjectDB "+c.length+" tree data items"),(l=new PgTreeDataHelper(c)).reindexData(),this.research()},new PgGetCSSValueHTML,this.populateDataItem=function(e,t){e.populated||(e.pgel.tagName,e.populated=!0)},new Map),_=this.createDataItemForNode=function(t,l,e,n,a){void 0===n&&(n=-1);function o(){return{pgel:l,shown:!0,level:n,tags:"",search_string:""}}var s,i,r,c,p,d,m="sort",u=!1,g=null,h=o();if("element"===l.tagName){h.template_type="element",t.push(h),(a=h).search_string+=`_${l.getAttr("selector")||""}_${l.getAttr("name")||""}_`;var f=o(),f=(f.level++,f.pgel={tagName:"selector"},f.element_pgel=l,f.template_type="selector",t.push(f),o());f.level++,f.pgel={tagName:"mapped"},f.element_pgel=l,f.template_type="mapped",h.collapsed=E(l),t.push(f)}else if("project"!==l.tagName){switch(l.tagName){case"project":case"document":m="no-sort",u=!0,g="label",h.tags="tag-block",h.search_string+=`_${l.getAttr("url")||""}_`;break;case"action_param":a.search_string+=`_${l.value||""}_`;break;case"action":a.search_string+=`_${l.getAttr("name")||""}_`}if("document"===(g=l.tagName)){var v=l.findOne(">elements").children;if(0===v.length)return}h.classes=m,h.collapsed=E(l)||!1,h.no_sort=u,h.focused=!1,h.template_type=g,t.push(h)}"action"===l.tagName?(r=l.getAttr("id"),(s=(f=w.get(r))||((c=b.getComponentType(r))?(p=c.getActionParameters(),d={},p.forEach(function(e){d[e.name]=e}),w.set(r,f={def:c,params_map:d,params:p}),f):null))&&(h.ai=s,i=[],l.getAttrList().forEach(function(e){var t,n,a;"id"!==e.name&&(t=s.params_map[e.name]||null)&&(a=l.getAttribute(e.name,n="______not_set___"))!==n&&i.push({tagName:"action_param",name:t.def.name||e.name,value:a,action_pgel:l})}),i.forEach(function(e){_(t,e,!1,n+1,a)}))):l.children&&(i=l.children,"project"===l.tagName?i=l.findOne(">documents").children:"document"===l.tagName&&(i=v),i.forEach(function(e){e.isElement&&_(t,e,!1,n+1,a)}))},E=function(e){return t.isCollapsed(e)}};