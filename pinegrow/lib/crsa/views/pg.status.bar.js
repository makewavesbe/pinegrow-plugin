var PgStatusBarView=function(){function e(e,t,n){n&&n.forEachElement(function(e){0<=f.indexOf(e.getId())&&a(e)})}var r,g=$('<div class="status-bar"><ul class="status-bar-crumbs"></ul></div>').appendTo($("body")),u=g.find(">.status-bar-crumbs"),n=(this.$element=g,this.hide_on_empty=!1,!0),i=new PgUIView(g),h=((this.view=i).alwaysVisible=!0,this),m=[],f=[],s=(i.onAddedToLayout=function(e){e.layoutManager.on("stateChanged",function(){var e=g.closest(".lm_item").prevAll(".lm_item:visible");e.length&&(e=$(e.get(0))),g.addClass("not-after-pages")})},0),l=0,p=(this.onResize=function(e,t){s=t,l=e,n?g.css({left:e+"px",right:t+"px"}):g.css({right:t+"px",left:"auto"})},this.setOpen=function(e){(n=e)?(g.removeClass("closed"),$open.removeClass("icon-plus").addClass("icon-minus")):(g.addClass("closed"),$open.removeClass("icon-minus").addClass("icon-plus")),this.onResize(l,s)},function(){u.html('<li class="empty-desc">Click to select element. Use '+pgShowKbd("CMD")+" or "+pgShowKbd("SHIFT")+" to select multiple. "+pgShowKbd("ESC")+" to unselect elements.</li>")}),o=(p(),function(e){r=e;var t,n=pinegrow.getSelectedPage(),i=e?e.get$DOMElement():null,s=-1;if(i&&!w()&&0<=(s=v(i.get(0))))(t=u.find("li.item")).each(function(e,t){var n=$(t);e!=s?(n.removeClass("selected"),e<s?n.removeClass("child-of-selected"):s<e&&n.addClass("child-of-selected")):(n.addClass("selected"),n.removeClass("child-of-selected"))}),$(t.get(s)).addClass("selected");else if(u.get(0).innerHTML="",m=[],f=[],e){var l=0,o="";if(i&&9!==i.get(0).nodeType)for(var a=i;0<a.length&&9!==a.get(0).nodeType;){var d,c=0,c=((e=getElementPgNode(a))?(c=e.getId(),d=e.getName({short:!0,action_tag:n.getActionTag(e,!1,!0)}),f.unshift(c)):d=pgGetDOMElementName(a.get(0),!0,!0),'<li class="item parent'+(0==l?" selected":"")+'" data-pg-id="'+c+'" data-pg-idx="'+l+'"><name>'+d+"</name></li>");0<l&&(c+='<li class="divider"><i class="icon icon-right"></i>'),o=c+o,l++,m.unshift(a.get(0)),a=a.parent()}u.get(0).innerHTML=o}else u.get(0).innerHTML="",h.hide_on_empty&&g.hide(),p()}),a=function(e){u.find('li[data-pg-id="'+e.getId()+'"] name').html(e.getName({short:!0}))},d=(u.on("click","li.item",function(e){e.preventDefault();var t=$(this).data("pg-id"),t=getPgNodeByPgId(t);t&&(pinegrow.selectElement(t),t.scrollTo())}).on("mouseover","li.item",function(e){var t=d($(this));pinegrow.highlightElement(t)}).on("mouseout","li.item",function(e){pinegrow.highlightElement(null)}).on("contextmenu","li.item",function(e){return pgf.kids||pinegrow.showContextMenuForElement(t($(this)),e),!1}),this.showIfNeeded=function(){m.length&&h.hide_on_empty&&g.show()},this.getHeight=function(){return g.is(":visible"),0},function(e){var t=m.length-1-(e.data("pg-idx")||0);return m.length>t?((t=pgGetActive$DOMElement($(m[t]),function(){o(r)}))||o(r),t):null}),t=function(e){var t=d(e);return t?getElementPgNode(t):null},v=function(e){return m.indexOf(e)},w=function(){for(var e=0;e<m.length;e++)if(!m[e].parentNode)return!0;return!1};pinegrow.addEventHandler("on_selected_elements_changed",function(){i.whenVisible(function(){o(pinegrow.selectedElements.getLastSelected())})}),i.on("crsa-page-selected",function(e,t){i.whenVisible(function(){o(null),h.hide_on_empty&&g.hide()})});pinegrow.addEventHandler("on_page_changes_done",e),i.onDestroy=function(){pinegrow.removeEventHandler("on_page_changes_done",e)}};