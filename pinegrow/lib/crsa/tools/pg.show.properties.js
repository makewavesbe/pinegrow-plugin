var PgQuickProperties=function(e,t,n,s,i,o,a,l){void 0===i&&(i=Math.floor(.75*$("body").height()));var r=new PgPropertiesView(e,!0,l),c=this.win=new PgQuickWindow(s||"Quick Properties",r,"quickProperties",400,i,!1);c.noRightEdge(),c.showFor$El(n),r.quickWin=c,r.setQuickWinTitle=!s,r.show(t,o),e&&c.autoSize(a),c.onDestroy=function(){}},PgPropertiesView=function(e,t,n){function s(){pinegrow.getSelectedPage()&&p.show(f,p.just_obj)}function i(e,t,n){n&&n.source&&n.source===p?(_.updateHasDataDelayed(),a&&a.updateHasDataDelayed()):g()}function o(e,t,n){var s=a?.classes_control||_?.classes_control;s&&n&&n?.source===s&&(s.ignore_update=!0),g(),s&&n&&n?.source===s&&(s.ignore_update=!1)}var a,l,r,c=localStorage.use_class_tree||!1,u=null,h=$('<div class="crsa-panel crsa-properties"></div>'),d=(e&&h.addClass("crsa-properties-compact"),new PgUIView(h,"prop","Props")),p=(this.view=d,this.just_obj=!1,d.tabIcon="icon-settings",this),f=null,_=new PgShowProperties(h),g=(_.scrollParentSelector=".pg-grid",_.onlySections=e,_.forceDefinitions=n,e?_.view.get$Element().appendTo(h):((a=new PgShowProperties(h)).showCustomSections=!1,a.scrollParentSelector=".pg-combined-panel-master",l=new PgCombinedPanelView("propertiesCombo4"+(t?"Quick":""),a.view,(c?u:_).view,null,75),_.showName=!1,h.append(l.view.get$Element()),r=["attributes","pg-classes","pg-info","pg-attributes"],_.filterSection=function(e,t){if(w.filter_sections){var n=w.filter_sections(e,!1);if(!1===n||!0===n)return n}return r.indexOf(e)<0&&"pg-classes"!==e},a.filterSection=function(e,t){if(w.filter_sections){var n=w.filter_sections(e,!0);if(!1===n||!0===n)return n}return 0<=r.indexOf(e)}),t&&(_.showName=!1,a)&&(a.showName=!1),function(e){var t;p.just_obj||(t=pinegrow.selectedElements.getLastSelected(),p.show(t,null,p.just_obj))}),w=null;this.show=function(n,s){var e;this.just_obj=s,d.whenVisible(function(){var e,t;r=["pg-classes","pg-info","pg-attributes"],pgf.kids&&r.pop(),n&&(e=n.getPage())&&(e.classSetter===pinegrow.classStyles&&(r.shift(),r.unshift("attributes"),r.unshift("html.page")),pgf.kids&&(r.unshift("pg.html.link"),r.unshift("attributes"),r.unshift("html.page")),t={show_device_size_control:!1,show_styles_control:!1,show_classes_control:!1,filter_sections:null,show_custom_sections_in_general:!1,class_tree:!1},l&&pinegrow.dispatchEvent("on_before_properties_shown",e,_,t),(c=t.class_tree)?(u=u||new PgClassTreeView,l.setHelperView(u.view)&&u.show()):l&&l.setHelperView(_.view),(w=t).show_custom_sections_in_general?(a&&(a.showCustomSections=!0),_.showCustomSections=!1):(a&&(a.showCustomSections=!1),_.showCustomSections=!0)),a&&(a.show(n,null,s),!n||pgf.kids?l.hideSecondPanel():l.showSecondPanel()),c||_.show(n,null,s,t)}),f=n,this.quickWin&&this.setQuickWinTitle&&(n?(e=(e=n.getPage())?e.getMainType(null,n):null,this.quickWin.setTitle("Properties for "+pinegrow.selectedElements.getName({short:!0,def:e,num_classes:-1}))):this.quickWin.setTitle("Element properties"))},t||this.show(null),d.onAddedToLayout=function(e){l&&l.onAddedToLayout()},d.onResize=function(){l&&l.view.onResize(),c||_.updateLayout(),a&&a.updateLayout()},$("body").on("crsa-frameworks-changed",s),h.on("crsa-field-value-changed",function(e){return pinegrow.dispatchEventDelayedForObject(f,"on_prop_field_changed",null,f,{source:p}),!1}),h.on("crsa-refresh-properties",function(e){return p.show(f,p.just_obj),!1}),pinegrow.addEventHandler("on_prop_field_changed",i),pinegrow.addEventHandler("on_selected_elements_changed",g);pinegrow.addEventHandler("on_element_classes_changed",o),d.onDestroy=function(){_.show(null),a&&a.show(null),pinegrow.removeEventHandler("on_selected_elements_changed",g),pinegrow.removeEventHandler("on_prop_field_changed",i),pinegrow.removeEventHandler("on_element_classes_changed",o),$("body").off("crsa-frameworks-changed",s)}},PgShowProperties=function(){function g(e){H.show(e)}function D(){return V}function e(e,t){j&&T.updateShow()}function t(e,t,n){O&&"element_selected"!==n.source&&T.updateShow()}function n(e){F=!0,T.updateShow()}function s(){T.delayedTasks.cancel("updateHasData"),E.sections.forEach(function(e){for(var t=!1,n=0;n<e._propData.controls.length;n++)if(e._propData.controls[n].hasData()){t=!0;break}if(!t)for(n=0;n<e._propData.fields.length;n++)if(e._propData.fields[n].hasData()){t=!0;break}e.setHasData(t)})}this.showCustomSections=!0,this.showName=!0,this.forceDefinitions=null,this.scrollParentSelector=".pg-show-properties",this.onGetValues=function(e,t){return getValuesForObject(e,t)},this.delayedTasks=new PgDelayedTasks;var C,w,m,V,v=$('<div class="pg-show-properties"></div>'),y=null,i=new PgUIView(v),E=(this.view=i,this.filterSection=null,new PgUISectionGrid),T=this,H=(this.onlySections=null,new PgPanelNotice),j=(H.$element.appendTo(v),v.append(E.$element),this.show_device_sizes_control=!0,null),O=null,M=null,F=!1,L=null,N={},x=(this.forgetFields=function(){$.each(N,function(e,t){t.destroy()}),N={}},this.showMessage=g,this.updateLayout=function(){E.updateLayout()},this.updateShow=function(){this.show(C,null,w,m)},{}),z=(pinegrow.addEventHandler("on_current_device_size_changed",e),pinegrow.addEventHandler("on_current_class_style_changed",t),pinegrow.addEventHandler("on_page_frameworks_changed",n),{}),I={};this.show=function(b,n,e,t){m=t=t||{};var s,i=new CrsaProfile,o=(C=b,w=e,t.show_device_size_control?(o={onUpdateDisplay:null,onShowMenu:null},t.states_options&&(o=t.states_options),j?(j.setStatesOptions(o),F?(F=!1,j.show()):j.update()):((j=new PgDeviceSizesControl).setStatesOptions(o),j.onDeviceSizeChanged=function(e,t){},s=pinegrow.findFrameworkByType("tailwind"),j.onHasTabSizeClassesOrRules=function(e,t){var n=C;return!!(n&&n instanceof pgParserNode&&s)&&s.twHasClassesForScreenSize(n,e)},v.prepend(j.$element),j.show())):j&&j.hide(),t.show_styles_control?(O||(O=new PgPropStylesControl,v.prepend(O.$element)),O.show(b)):O&&O.hideControl(),t.show_classes_control?(M||(this.classes_control=M=new PgElementClassesControl,v.prepend(M.$element)),M.show(b)):M&&M.hide(),E.$element),S=o.closest(this.scrollParentSelector),a=S.scrollTop();if($.each(N,function(e,t){t.detach()}),E.clear(),this.onlySections&&E.$element.addClass("pg-grid-compact"),o.find(".crsa-input-color-picker").spectrum("destroy"),o.addClass("clearable-area"),pgRemoveMultiselects(o),o.trigger("crsa-will-clear-area"),H.show(),b){if(n=(n=!n&&T.forceDefinitions?T.forceDefinitions[0]:n)||getDefinitionForObject(b,!0)){this.showName&&((y=y||$('<div class="pg-show-properties-name"></div>').prependTo(v)).get(0).innerHTML=`<span>${pgf.kids?"Attributes of":"Properties for"}</span><name>`+pinegrow.selectedElements.getName({short:!0,def:n,num_classes:-1})+"</name>",pg$Show(y));function l(e,t){for(var n=0;n<e.length;n++)if(e[n].section_key==t)return n;return-1}var r,c,u=[],o=null,h=null;if(b instanceof pgParserNode?((o=b).get$DOMElement(),r=o.getPage(),n.sections||(n.sections={}),(c=pinegrow.getCollection(e?b:null)).forEachElement(function(e,s,t){if(h=T.forceDefinitions||r.getAllTypes(null,e,!0))for(var i=[],n=0;n<h.length;n++){var o=h[n];o.sections&&$.each(o.sections,function(e,t){if(T.onlySections){var n=!t.hasOwnProperty("show")||t.show;if(T.onlySections.indexOf(t)<0&&n)return!0}if(T.filterSection&&!T.filterSection(e,t))return!0;t.section_key=e,t.component_definition=o,t.framework||(t.framework=o.framework),0==s&&((n=l(u,e))<0?"position"in t&&t.position<u.length?u.splice(t.position,0,t):u.push(t):u[n].inherit&&(u[n]=t)),i.push(t)})}var a;0<s&&(a=[],u.forEach(function(e){0<=l(i,e.section_key)&&a.push(e)}),u=a)}),c.length):n.sections&&$.each(n.sections,function(e,t){u.push(t),t.section_key=e,t.component_definition=n}),b instanceof pgParserNode){if(!o)return void g("This is a dynamic element created by JavaScript code. Edit that code to change the element.");var d=pinegrow.isElementLocked(o);if(d)return void g("The element is locked: "+d);if(o.script_info)return void g("The element is a server-side script tag. Use Actions -&gt; Edit code (or double click on the element) to edit its code.");(t.show_device_size_control||this.showCustomSections)&&r&&r.callFrameworkHandler("on_show_properties",u,o,h,T)}if(0==u.length)g("No other properties are available for the selected element.");else{V={};for(var p,P={},k=($.each(u,function(e,s){$.each(s.fields,function(e,t){var n;"custom"==t.type&&t.control&&!t.control_defined&&((n=t.control().define(s.component_definition))&&u.push(n),t.control_defined=!0)})}),V=b instanceof pgParserNode?(p={},c.forEachElement(function(e,t,n){var s=T.onGetValues(e,u);1==n?p=s:$.each(s,function(e,t){e in p?p[e]!==t&&(e in P||(P[e]=[p[e]]),P[e].indexOf(t)<0&&P[e].push(t),p[e]=null):e in P?P[e].indexOf(t)<0&&P[e].push(t):p[e]=t})}),p):T.onGetValues(b,u),[]),f=(t.show_section_nav_control?(L||(L=new PgSectionNavigator,j?L.$element.insertAfter(j.$element):v.prepend(L.$element)),L.setGrid({hasData:function(e){return z[e]||!1},scrollTo:function(e){e.forEach(function(e){x[e]&&x[e].openClose(!0)});var t=x[e[0]]||null;t&&t.scrollTo()}}),d=[],pinegrow.dispatchEvent("on_get_sections_for_prop_section_nav",r,d),L.show(d)):L&&L.hide(),z={},$.each(u,function(e,r){var c=r.section_key;if(r.show_if&&!("function"==typeof r.show_if?r.show_if(b):r.show_if))return!0;if(r.hasOwnProperty("show")&&!r.show||!r.name)return!0;var u,t=T.onlySections,h=(pgf.kids&&(r.is_closable=!1),r.force_open&&(t="function"==typeof r.force_open?r.force_open(b):r.force_open),new PgUISection(r.name,!r.framework||pgf.kids||r.framework.no_prop_section_subtitles?null:r.framework.name_short||r.framework.name,r,null,t)),d=(E.addSection(h),!1),p="Add field",f=null,_=[],g=((x[c]=h)._propData={controls:[],fields:[]},!1),w=h.$content,m=w,v=0,y=null;$.each(r.fields,function(e,n){var t,s=null,i=n.append_to?w.find(n.append_to):m||w;if(n.hasOwnProperty("show")&&!n.show)return!0;n.show_button_in_section_title&&("function"==typeof n.show_button_in_section_title?n.show_button_in_section_title(b):n.show_button_in_section_title)&&(i=h.$title,h.$title.addClass("has-button")),n.start_repeat_item&&(n.add_repeat_item_label&&(p=n.add_repeat_item_label),f=n.on_create_repeat_item_button||null,v++,m=$('<div class="pg-action-repeat-item" data-repeat-item="'+v+'"><h5>'+n.start_repeat_item+"</h5></div>").appendTo(w),_.push(m),d=!0,1<v&&!n.repeat_item_open&&$('<i class="icon icon-bin remove-repeat-item"></i>').appendTo(m),u=[],m.data("repeat-item-fields",u),m.data("repeat-item-fdef",n),n.repeat_item_open&&m.addClass("pg-repeat-item-open"),n.append_to||(i=m)),n.end_section&&(i=m=y||w,0),n.start_section&&(y=m=i,n.start_section,s=$(`<div class="pg-action-section ${I[c]?"open":""}"><h6><i class="icon icon-right"></i><i class="icon icon-down"></i> ${n.start_section}</h6><div class="fields"></div></div>`).appendTo(m),i=m=s.find(".fields"),s.on("click","h6",function(e){e.preventDefault(),s.hasClass("open")?(s.removeClass("open"),I[c]=!1):(s.addClass("open"),I[c]=!0)}),0);var o,a,l=!1;"custom"==n.type?n.control?(N[e]?((o=N[e]).setObject(b),o.setValues(V,P),i.append(o.$element),l=!0):((o=n.control()).setObject(b),o.setValues(V,P),o.show(S),i.append(o.$element),N[e]=o),t=o.$element,h._propData.controls.push(o),g=g||o.hasData()):t=n.show(w,b,e,n,V,S,P):(N[e]&&!n.recreate_on_show?((a=N[e]).setValue(e in V?V[e]:null),a.appendTo(i),l=!0):(a=new PgPropertyField(i,function(){return C},e,n,D,S),N[e]=a),t=a.$field,a.setHasMultipleValues(P[e]||!1),a.grid_section=h,g=g||a.hasData(),h._propData.fields.push(a)),u&&u.push(e),n.without_icon||r.icons&&(t.addClass("with-icons"),$('<i class="field-icon icon-'+e+'"></i>').insertAfter(t.find(">label"))),n.on_fields_created&&k.push({func:n.on_fields_created,obj:b,field:t,def:n,name:e,default_value:n.default_value||null,recycled:l,propField:o||a}),n.validate&&pinegrow.validateField(b,e,V.hasOwnProperty(e)?V[e]:null,n,t,V),n.show_if&&(("function"==typeof n.show_if?n.show_if(V,b):crsaEvaluateShowIfString(n.show_if,V,n,b))?pg$Show(t,n.control?"block":"flex"):pg$Hide(t)),n.on_field_updated&&(n.on_field_updated(b,t,n,o,e,a),o)&&o.shown_fields&&$.each(o.shown_fields,function(e,t){n.on_field_updated(b,t.$field,t.def,null,e,t)})}),d&&(w.on("click",".remove-repeat-item",function(e){var t=$(this).closest(".pg-action-repeat-item"),n=(t.attr("data-repeat-item"),t.data("repeat-item-fdef"));n.on_repeat_item_removed&&n.on_repeat_item_removed(T,t,n)}),"none"!==p&&((t=$(`<div class="pg-action-repeat-item-add"><button class="pg-button add-repeat-item"><i class="icon icon-plus"></i> ${p}</button></div>`).appendTo(w)).on("click","button.add-repeat-item",function(e){e.preventDefault();var t=w.find(".pg-action-repeat-item").not('.pg-repeat-item-open,.has-value,[data-repeat-item="1"]');t.length?t.first().addClass("has-value"):pinegrow.showQuickError("Sorry, can not add more items.")}),f)&&f(t),_.forEach(function(e){e.get(0).querySelector(".has-value")&&e.addClass("has-value")})),r.on_section_shown&&r.on_section_shown(r,h),h.setHasData(g),z[c]=g}),L&&L.updateHasData(),0);f<k.length;f++){var _=V.hasOwnProperty(k[f].name)?V[k[f].name]:null;null===_&&k[f].default_value&&(_=k[f].default_value),k[f].func(k[f].obj,k[f].name,_,k[f].def,k[f].field,V,k[f].recycled,k[f].propField)}k=null,E.updateLayout(),S.scrollTop(a),i.show("showProperties")}}}else g("Select one or more elements on the page to edit their properties."),y&&pg$Hide(y)};this.updateHasDataDelayed=function(){this.delayedTasks.run("updateHasData",s,1e3)},this.scrollToSection=function(e,t){var n;e&&(n="string"==typeof e?x[e]||null:e)&&(t&&!n.open&&(n.toggle(null,!0),n.sec_def)&&(n.sec_def.closed=!1),n.scrollTo())},i.onDestroy=function(){pinegrow.removeEventHandler("on_current_device_size_changed",e),pinegrow.removeEventHandler("on_current_class_style_changed",t),pinegrow.removeEventHandler("on_page_frameworks_changed",n),T.delayedTasks.destroy()}},PgPropertyField=function(e,t,n,o,s,i){this.$field=$.fn.crsa("addInputField",e,t,n,o,s,!1,i),this.$input=this.$field.find("input.crsa-input"),this.def=o,this.field_key=n,this.$field.data("propertyField",this);function a(e,t){var n,s=e.closest(".crsa-field"),i=e.parent();t?i.addClass("has-value"):i.removeClass("has-value"),s.hasClass("crsa-field-color")&&(i=s.find(".color-value-placeholder"),s=getStylePropWithoutImportant(t),(n=e.data("color-input"))&&0<n.length&&n.spectrum("set",s,!1),i.css("background-color","black").css("background-color",s)),("image"==o.type||o.file_picker||o.colors)&&e.trigger("pg-on-value-updated"),o.rich&&e.siblings(".crsa-select-val").data("crsa-select").paintVal(),c=t}var l=this.$field.get(0).querySelector("div.crsa-input"),r=this.$field.data("pgControl"),c=(r&&(this.$input=r.get$input()),0==this.$input.length&&(this.$input=this.$field.find(".crsa-input")),this.$input.on("input change",function(e){a($(this),$(this).val())}),null),u=(s&&("function"==typeof s&&(s=s()),c=n in s?s[n]:null),a(this.$input,c),this.on=function(e,t){this.$input.on(e,t)},this.setValue=function(e,t){o.on_set_field_value&&(e=o.on_set_field_value(e)),r?r.setValue(e):"checkbox"===o.type?e==o.value||!e&&o.default_value&&o.default_value==o.value?this.$input.prop("checked",!0):this.$input.prop("checked",!1):(this.$input.val(e),a(this.$input,e)),c=e,t&&this.$input.trigger("change")},this.getCurrentValueQuick=function(){return c},this.getValue=function(){return r?r.getValue():"checkbox"===o.type?this.$input.prop("checked")?o.value:null:this.$input.val()},this.appendTo=function(e){this.$field.appendTo(e),this.$field.data("pgDetached",!1)},this.setWidth=function(e){this.$input.find(".selector-container").css("width",e+"px")},this.detach=function(){this.$field.data("pgDetached",!0),this.$field.detach()},this.destroy=function(){this.$field.remove()},!1),h=(this.setHasMultipleValues=function(e){u!=e&&(e?this.$field.addClass("has-multiple-vals"):this.$field.removeClass("has-multiple-vals"),u=e),r&&r.setMultipleValues&&r.setMultipleValues(e)},this.hasData=function(){return c&&Array.isArray(c)?0<c.length:u||null!==c&&""!==c&&!1!==c},null),d=null,p=null;this.setInheritedValue=function(e,t,n){var s,i=this.$field.get(0);r?r.setInheritedValue(n,t):null===e?i.classList.contains("has-inherited-value")&&i.classList.remove("has-inherited-value"):(h||((h=document.createElement("div")).classList.add("inherited-value"),(d=document.createElement("span")).classList.add("responsive-label"),h.append(d),(p=document.createElement("span")).classList.add("value-label"),h.append(p),"checkbox"===o.type?(s=this.$field.get(0).querySelector("label"))&&s.append(h):l&&l.append(h)),d.innerText=t,"checkbox"===o.type?p.innerHTML='<i class="icon icon-check"></i>':p.innerText=o.colors?n:e,i.classList.add("has-inherited-value"))}},pgCustomControlCount=0,PgCustomPropertyControl=function(n){function i(){return o.obj}var o=this;this.control_id=n,this.obj,this.values,this.hasMultipleValues,this.$scrollParent,this.$element,this.$field,this.onDefine=null,this.onShow=null,this.onSetObject=null,this.onSetValues=null,this.onDestroy=null,this.destroyed=!1,this.fields=null,this.shown_fields={},this.shown=!1,this.setObject=function(n){this.obj=n,$.each(this.shown_fields,function(e,t){t instanceof PgCustomPropertyControl&&t.setObject(n)}),this.onSetObject&&this.onSetObject.call(this)},this.setValues=function(n,s){this.values=n,this.hasMultipleValues=s||[],$.each(this.shown_fields,function(e,t){t instanceof PgCustomPropertyControl?t.setValues(n,s):(t.setValue(n[e]||null),t.setHasMultipleValues(s&&e in s))}),this.shown&&this.onSetValues&&this.onSetValues.call(this)},this.define=function(e){var t;return this.onDefine&&this.onDefine.call(this),this.fields?(t={name:"Custom",show:!1,fields:this.fields},e.sections||(e.sections={}),e.sections[n+".control_fields"]=t):null},this.show=function(e){return this.$scrollParent=e,this.$field=this.$element=this.onShow.call(this),this.shown=!0,this.onSetValues&&this.onSetValues.call(this),this.$element};this.detach=function(){this.$element.detach()},this.hasData=function(){var n;return this.onHasData?this.onHasData.call(this):!(!this.hasMultipleValues||!this.hasMultipleValues.length)||(n=!1,$.each(this.shown_fields,function(e,t){if(t.hasData())return n=!0,!1}),n)},this.registerInputField=function(e,t){this.fields||(this.fields={}),this.fields[e]=t},this.registerInputFields=function(e){this.fields=e},this.showInputField=function(e,t,n){var s;return n.control?((s=n.control()).setObject(i()),s.setValues(this.values,this.hasMultipleValues),s.show(this.$scrollParent),e.append(s.$element),s=s):(s=new PgPropertyField(e,i,t,n,function(){return o.values},this.$scrollParent),this.hasMultipleValues&&t in this.hasMultipleValues&&s.setHasMultipleValues(!0)),this.shown_fields[t]=s},this.get$Field=function(e){return this.$element.find(".crsa-field-"+e.replace(/\./g,"-"))},this.destroy=function(){this.onDestroy&&this.onDestroy(),this.destroyed=!0}};