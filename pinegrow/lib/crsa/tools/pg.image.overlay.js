$(function(){pgf.edit_css&&$("body").one("pinegrow-ready",function(e,s){function a(e,a){e&&e.get$DOMElements().forEach(function(e){var t=e.find("> .pg-image-overlay");a(e,0<t.length?t:null)})}function i(){t.requireSelectedPage(function(e){var t=e.sourceNode.findOne("body");t?PgQuickProperties([r.sections["pg.image.overlay"]],t,null,"Setup image overlay",500,!0,120,[r]):s.showQuickMessage("BODY element is required.")})}function o(e){var o,n,r,l,g,p,t;e&&(t=e.getPage(),t="body"!=e.tagName?t.sourceNode.findOne("body"):e)&&(o=t.getAttribute(y),n=!0||t.getAttribute(y+"-append"),r=t.getAttribute(y+"-opacity")||"0.5",l=t.getAttribute(y+"-x")||"0",g=t.getAttribute(y+"-y")||"0",p=parseInt(t.getAttribute(y+"-gray")||"0"),a(t,o?function(e,t){t||(t=$('<div class="pg-image-overlay pinegrow-ui-helper"><div class="pg-image-overlay-tint"></div></div>')).appendTo(e);t.find("> .pg-image-overlay-tint");0<t.next().length&&(n?t.appendTo(e):t.prependTo(e));var a=t.get(0),i="url('"+s.getProxyUrl(o)+"')",i=(a.style.backgroundImage!=i&&(a.style.backgroundImage=i),a.style.opacity!=r&&(a.style.opacity=r),l+" "+g),i=(a.style.backgroundPosition!=i&&(a.style.backgroundPosition=i),0<p?"grayscale("+p+"%)":"");a.style.filter!=i&&(a.style.filter=i),e.addClass("pghelper-image-overlay-body")}:function(e,t){t&&t.remove(),e.removeClass("pghelper-image-overlay-body")}))}var t=new PgFramework("pg.image.overlay","Image overlay"),y=(s.addFramework(t),t.default=!0,t.show_in_manager=!1,t.not_main_types=!0,"data-pg-overlay"),n=new PgPageViewHelper('Image overlay <extracmd class="pg-image-overlay-setup"><i class="icon icon-settings"></i></extracmd>',"pg-image-overlay","pg-internal-page-view-image-overlay",null,null,"0",t),r=(n.onChange=function(e){var t;(t=s.getSelectedPage().sourceNode.findOne("body"))&&t.hasAttribute(y)||i()},n.onExtraCmd=function(){i()},new PgComponentType("pg.overlay","Body overlay",{selector:null,not_main_type:!0,sections:{"pg.image.overlay":{name:"Image overlay",fields:{"pg.image.overlay.src":{name:"Image",type:"image",file_picker:!0,file_picker_no_proxy:!0,action:"element_attribute",attribute:y,on_changed:o},"pg.image.overlay.opacity":{name:"Opacity",type:"slider",action:"element_attribute",slider_def_unit:"",slider_step:.1,slider_min:0,slider_max:1,attribute:y+"-opacity",on_changed:o},"pg.image.overlay.gray":{name:"Grayscale",type:"slider",action:"element_attribute",slider_def_unit:"%",slider_min:0,slider_max:100,attribute:y+"-gray",placeholder:"0%",on_changed:o},"pg.image.overlay.x":{name:"X",type:"slider",action:"element_attribute",slider_def_unit:"px",attribute:y+"-x",on_changed:o},"pg.image.overlay.y":{name:"Y",type:"slider",action:"element_attribute",slider_def_unit:"px",attribute:y+"-y",on_changed:o},"pg.image.overlay.remove":{type:"button",action:"button",name:"Remove overlay",func:function(e,t){s.makeChanges(e,"Remove image overlay",function(){e.removeAttrIfStartsWith(y,!0)}),t.trigger("crsa-field-value-changed"),t.trigger("crsa-refresh-properties"),o(e)}}}}}}));t.addComponentType(r),t.on_plugin_activated=t.on_page_shown_in_live_view=function(e){o(e.sourceNode)},t.on_set_inline_style=function(e,t){t.css+="            .pg-image-overlay {            position: absolute;            top: 0;            left: 0;            right:0;            bottom:0;            opacity: 0.5;            background-repeat:no-repeat;            background-attachment:left top;            pointer-events:none;            display:none;            }            .pg-image-overlay-tint {                position:absolute;                top: 0;                left: 0;                right:0;                bottom:0;            }            .pghelper-image-overlay-body {            position: relative;            }            .pg-internal-page-view-image-overlay .pg-image-overlay{                display:block;            }            "}})});