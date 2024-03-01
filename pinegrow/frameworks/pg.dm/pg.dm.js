var PgDmFontCombo=function(n){var r={h:"heading",s:"lead",t:"text"};this.toFonts=function(o){["h","s","t"].forEach(function(e){var t=new PgDmFont;t.family=n[e].f,t.italic=0<=n[e].v.indexOf("i"),t.weight=n[e].v.replace("i",""),t.key=r[e],o.setFont(t)})}},PgDmProject=function(e){var r=this,t=PgCSSStylesheet(),o=(t.fast=!0,t.loaded=!0,t.ignoreInSave=!0,this.dmAddOns={},this.css_mode="generate",require("path")),n=(this.palettes=new PgDmPalettes,this.getResourceFileName=function(e){return o.join(crsaGetAppDir(),"frameworks","pg.dm",e)},this.getResourceUrl=function(e){return crsaMakeUrlFromFile(this.getResourceFileName(crsaMakeFileFromUrl(e)))},{}),a=(this.getParams=function(){return n},this.getParamsCopy=function(){return $.extend({},n)},this.restoreParams=function(e){n=$.extend({},e),this.update()},this.setParameter=function(e,t){n[e]=t},this.getParameter=function(e){return n[e]||null},5);this.colors=[];for(var i=1;i<=a;i++)this.colors.push(`color`+i);this.colors.push(`success`),this.colors.push(`info`),this.colors.push(`warning`),this.colors.push(`danger`);var t=chroma.brewer,s=[],l=($.each(t,function(e,t){s.push(e)}),this.getAllPallets=function(){return s},this.getPalleteOptions=function(){return s.map(function(e){return{key:e,name:e}})},{}),l=$.extend(l,{"grid-breakpoints-disable":`(sm: 0, md: 768px, lg: 1200px)`,"pg-colors":"(1: $color1, 2: $color2, 3: $color3, 4: $color3, 5: $color3)","m-sizes":function(){for(var e=1.414,t=8,o=2,n=[`0: 1rem`],r=1;r<=t;r++)n.push(`${r}: ${Math.pow(e,r).toFixed(4)}rem`);for(r=1;r<=o;r++)n.unshift(`${-r}: ${Math.pow(e,-r).toFixed(4)}rem`);return`( ${n.join(", ")} );`},primary:"$color1",secondary:"$color2",light:function(){return r.getParameter("light")||"rgba(255, 255, 255, 0.85)"},dark:function(){return r.getParameter("dark")||null},"link-color":function(){for(var e=0;e<r.colors.length;e++){var t=r.getParameter(r.colors[e]);if(t){var o=chroma.deltaE(t,"#212529"),n=chroma.contrast("#ffffff",t);if(console.log(r.colors[e]+" c dist "+o+", cont "+n),34<o&&3<=n)return t}}return null},"body-bg":function(){return r.getParameter("bck_color")},"nav-tabs-link-active-bg":function(){if(r.getParameter("bck_color"))return"white"}}),c=(this.getVarValue=function(e){return l[e]?l[e]():null},[{name:"Lato"},{name:"Montserrat"},{name:"Playfair Display"},{name:"Open Sans"},{name:"Merriweather"},{name:"Georgia",system:!0}]),h=[{name:"Faster One",w:400,s:"2px"},{name:"Chonburi"},{name:"Tulpen One",w:400},{name:"Oswald"},{name:"Open Sans",w:700},{name:"Montserrat",w:400,s:"2px",t:"u"},{name:"Playfair Display"},{name:"Indie Flower"},{name:"Georgia",system:!0,style:"italic"}];this.getRandomFont=function(e){return e[Math.round(Math.random()*(e.length-1))]},this.getRandomTextFont=function(){return this.getRandomFont(c)},this.getRandomHeadingFont=function(){return this.getRandomFont(h)},font_sample_text="AaBbCcDdEeFfGgHhIiJjKk",this.getFontOptions=function(e){var i=1;return e.map(function(e){return{key:i++,name:e.name,html:'<span style="'+(o=!0,(a={})["font-family"]="'"+(t=e).name+"'",t.style&&(a["font-style"]=t.style),t.w&&(a["font-weight"]=t.w),t.s&&(a["letter-spacing"]=t.s),t.t&&(a["text-transform"]="u"==t.t?"uppercase":"lowercase"),o?(r="",$.each(a,function(e,t){if(n&&n.indexOf(e)<0)return!0;r+=e+":"+t+";"}),r):a)+'">'+e.name+"</span>"};var t,o,n,r,a})},this.getTextFontOptions=function(){return this.getFontOptions(c)},this.getHeadingFontOptions=function(){return this.getFontOptions(h)},this.getTextFontByKey=function(e){return c[e-1]},this.getHeadingFontByKey=function(e){return h[e-1]},this.getTextFontKey=function(e){return c.indexOf(e)+1},this.getHeadingFontKey=function(e){return h.indexOf(e)+1},this.loadAllFonts=function(){},this.updateColorsFromPalette=function(o){var n=this;try{n.colors.forEach(function(e){var t=n.getParameter("palette");o&&o[e]||(t=t.getColor(e),n.setParameter(e,t),pinegrow.dispatchEvent("on_dm_color_changed",null,e,t))})}catch(e){console.log(e)}},this.magic=function(e,n,r){function t(){var o=[];pgDmStore.db.startBatchUpdates(),pgDmStore.forEachDesignSkill(function(e){o.push(e)}),pgDmStore.forEachDesignSkill(function(t){t.surpriseMe(function(){var e=o.indexOf(t);0<=e&&o.splice(e,1),0===o.length&&(pgDmStore.db.endBatchUpdates("Surprise me!","design_panel"),n?r&&r():a.update(r))})})}var a=this,o=pgDmStore.getActiveDesignProvider();o&&o.onBeforeSurpriseMe?o.onBeforeSurpriseMe(function(){t()}):t()};this.update=function(e){pgDmStore.update(e)},this.onGetCSS=function(t,o){var n="";o.config||(o.config={}),pgDmStore.forEachDesignSkill(function(e){n+=e.onGetCSS(t,o.cs_url),e.onGetConfigObject&&e.onGetConfigObject(t,o.config,o.cs_url)}),o.css+=n},e&&e.call(this)},PgDmPalettes=function(){var t=null;this.getRandomPalette=function(){var e;return null===t&&(e=require("fs").readFileSync(pgDmProject.getResourceFileName("palettes.json"),{encoding:"utf8"}),t=JSON.parse(e)),new PgDmPalette(t[getRand(0,t.length-1)])}},PgNewDmPalette=function(e,t,o){new Vibrant(t,{}).getPalette().then(function(e){console.log(e)}),this.getColorsInfo=function(e){}},PgDmPalette=function(r,a,c){var h,t=null,o={},u=null,d=(this.harmony=null,this);c<2&&(c=2),this.getColors=function(){return r},this.getColorsInfo=function(e){h=e,null===u&&n()},this.getPrimary=function(){var e=t.DarkVibrant.getHex();return o[e]=!0,e},this.getSecondary=function(){var e=chroma(chroma.scale([this.getPrimary(),"white"]).colors(8)[6]).desaturate(.1).css();return o[e]=!0,e},this.getInfo=function(){var e=(t.Muted||t.LightVibrant).getHex();return o[e]=!0,e};function n(){var e=document.createElement("canvas"),t=e.getContext("2d");if(a){e.width=a.naturalWidth,e.height=a.naturalHeight,t.drawImage(a,0,0),t.drawImage(a,0,0,a.width,a.height);var l=(new ColorThief).getPalette(a,c,3).map(function(e){return chroma(e)});new Vibrant(a.src,{}).getPalette().then(function(e){u=[];for(var t=["Vibrant","DarkVibrant","LightVibrant","Muted","DarkMuted","LightMuted"],o=0;o<t.length;o++)e[t[o]]&&u.push(chroma(e[t[o]].getHex()));if(c>u.length){function n(e){for(var t=0,o=0;o<u.length;o++){var n=chroma.distance(e,u[o]);t<n&&(t=n)}return t}for(l.sort(function(e,t){return n(e)-n(t)});u.length<c;)u.push(l.shift())}var r=[],a=u[0];switch(d.harmony){case"complimentary":r.push(a.set("hsl.h","+180"));break;case"split":r.push(a.set("hsl.h","+150")),r.push(a.set("hsl.h","+210"));break;case"triad":r.push(a.set("hsl.h","+120")),r.push(a.set("hsl.h","+240"));break;case"analog":r.push(a.set("hsl.h","-30")),r.push(a.set("hsl.h","+30"))}for(var i=2,o=0;o<r.length;o++)u.length>i+o?u[i+o]=r[o]:u.push(r[o]);for(var s=[],o=0;o<u.length;o++)s.push({name:`color`+(o+1),color:u[o]});h&&h(s)})}else{u=[],r.forEach(function(e){u.push(chroma(e))});for(var o=[],n=0;n<u.length;n++)o.push({name:`color`+(n+1),color:u[n]});h&&h(o)}}this.success=null,this.getSuccess=function(){return this.success||null},this.warning=null,this.getWarning=function(){return this.warning||null},this.danger=null,this.getDanger=function(){return this.danger||null},this.colors=pgDmProject.colors,this.getColor=function(e){null===u&&n();var t=e.startsWith("color")?parseInt(e.replace("color",""))-1:0;return t<u.length?u[t].css():"#000"}},PgDmColorSwatches=function(l,a){var c=this,h={},e=null,i=(this.$element=$('<div class="pg-dm-color-swatches"></div>'),this.updateDisplay=function(r){$.each(h,function(e,t){t.destroy()}),e&&e.remove(),l.forEachColor(function(n,e,o){o.setLocked(pgDmStore.isParamLocked(a,n,o.isLocked()));var t=new PgDmColorSwatch;h[n]=t,c.$element.append(t.$element),t.onColorChanged=function(e,t,o){c.onColorChanged(n,e,o)},t.onColorRenamed=function(e,t){h[t]=h[n],delete h[n],n=t,c.onColorRenamed(e,t,o)},t.onLocked=function(e){l.setLocked(n,e),pgDmStore.setParamLocked(a,n,e)},t.onTextTool=function(){l.onTextTool(n,l.getColor(n))},t.onBackgroundTool=function(e){l.onBackgroundTool(n,l.getColor(n),e)},t.onColorDeleted=function(){c.onColorDeleted(o)},r&&t.setColor(e,n,o)}),l.can_edit&&(e=$(`<div class="add-new"><i class="icon icon-plus"></i></div>`).appendTo(c.$element),addTooltip(e,"Add a new color."))});i(),this.$element.on("contextmenu",".pg-dm-color-swatch",function(e){return l.showContextMenu(this.getAttribute("data-name"),$(this)),!1}),this.$element.on("click",".add-new",function(e){e.preventDefault();function r(e){var t=[];if(e)for(var t=e.trim().split(",").map(function(e){return e.trim()}),o=0;o<t.length;o++)if(!t[o]||!t[o].match(/^[a-z0-9]+$/i))return!1;return t}var t={name:{type:"text",name:"Color name",validate:function(e,t,o){var n;return o?o.match(/^[a-z0-9\_]+$/i)?(n=!1,o=o.toLowerCase(),l.forEachColor(function(e,t){e.toLowerCase()===o&&(n=!0)}),n?`Color with the name ${o} already exists.`:void 0):"Color name should only contain letters, numbers and _ character.":"Please enter the color name."}},color:{type:"color",name:"Color value",validate:function(e,t,o){if(!o||0===o.trim().length)return"Please select a color."}},shades:{type:"text",name:"Shades",placeholder:"light, normal, dark",value:l.default_shades?l.default_shades.join(", "):null,helptext:"<p>Leave empty to add a color without shades.</p>",validate:function(e,t,o){if(!1===r(o))return"Shades have to be separated with commas and only contain letters and numbers."}}};l.default_shades||delete t.shades,pinegrow.showQuickDialog("Add a new color",`Color information`,``,t,"Cancel","Add color",null,function(e){var t=r(e.shades),o=null;if(t.length)for(var o={},n=0;n<t.length;n++)o[t[n]]=e.color;l.add(e.name,e.color,!1,o,!0).calculateShades(),i(!0),c.onColorsReordered("copy")})}),new PgDraggableReorder(this.$element,".pg-dm-color-swatch",function(e,t,o,n){var r,a,i,s;e&&t&&(r=e.getAttribute("data-name"),a=t.getAttribute("data-name"),i=h[r].color_object.clone(),s=h[a].color_object.clone(),"move"===o?pinegrow.keyState.shift||n.originalEvent.shiftKey?(l.moveColorBeforeColor(r,a),h[r].$element.insertBefore(h[a].$element),c.onColorMoved(r,a)):(l.copyFromColor(r,s,!0),l.copyFromColor(a,i,!0),h[r].setColorFromColorObject(s),h[a].setColorFromColorObject(i),c.onColorsReordered(o)):"copy"===o&&(l.copyFromColor(a,i,!0),h[a].setColorFromColorObject(i),c.onColorsReordered(o)))},function(e){var t=e.attr("data-name");h[t].color_object;return"move"});this.setColor=function(e,t,o){h[e]&&h[e].setColor(t,e,o)},this.setLocked=function(e,t){h[e]&&h[e].setLocked(t)},this.onColorChanged=function(){},this.getSwatch=function(e){return h[e]},this.debug=function(){}},PgDmColorSwatch=function(){function t(e){var t=pgDmStore.getActiveDesignProvider(),o=[];t.canEditColors()?(t.supportsColorShades()&&o.push({label:"Edit shades...",action:function(){n()}}),o.push({label:"Rename color...",action:function(){r()}}),o.push({label:"Delete color",action:function(){h()}})):o.push({type:"header",label:"Colors can not be renamed or deleted."}),new CrsaContextMenu(o,e).showForElement(e)}var a=this,i=(this.color=null,this.color_object=null,this.name=null,this.locked=!1,this.can_rename=!1,this.onLocked=function(e){},this.onColorChanged=function(e){},this.onColorDeleted=function(e){},this.$element=$('<div class="pg-dm-color-swatch"><div class="pg-dm-color-swatch-color" draggable="true"><div class="pg-dm-color-swatch-shades"></div></div>\x3c!--<div class="pg-dm-color-swatch-tool pg-dm-color-swatch-tool-text"><i class="icon icon-ikone1-100-copy-63"></i></div><div class="pg-dm-color-swatch-tool pg-dm-color-swatch-tool-background"><i class="icon icon-Pin21"></i></div>--\x3e</div>'),this.$element.find(".pg-dm-color-swatch-color")),s=this.$element.find(".pg-dm-color-swatch-shades"),l=this.$element.find(".pg-dm-color-swatch-tool"),c=$('<div class="pg-dm-color-swatch-label"></div>').appendTo(this.$element),o=$('<i class="icon icon-Lock_closed pg-dm-color-swatch-lock"></i>').appendTo(this.$element),n=($('<i class="icon icon-down pg-dm-color-swatch-menu"></i>').appendTo(this.$element),addTooltip(this.$element,`Click to pick color,<br>Drag to swap colors,<br>${is_mac?pgShowKbd("OPTION"):pgShowKbd("ALT")} drag to copy color,<br>${pgShowKbd("SHIFT")} drag to reorder colors.`,{delay:{show:1200,hide:100}}),this.setColor=function(e,o,t,n){this.color=e,void 0!==o&&(this.name=o),t&&(this.color_object=t),this.color_object&&this.color_object.setValue(e),n&&this.color_object.calculateShades(),this.$element.attr("data-name",o),i.css("background-color",e),o&&c.html(`<span>${o}</span>`);var r="";this.color_object.forEachShade(function(e,t){r+=`<div title="${o}-${e}" style="background-color:${t};"></div>`}),r.length?(s.get(0).innerHTML=r,pg$Show(s,"flex")):pg$Hide(s),4.5<chroma.contrast("#ffffff",e)?l.addClass("dark"):l.removeClass("dark"),t&&this.setLocked(t.isLocked())},this.setColorFromColorObject=function(e){this.setColor(e.getValue())},this.update=function(){this.setColor(this.color,this.name)},this.getColor=function(){return this.color},this.setLocked=function(e){a.locked=e,a.locked?o.addClass("active icon-Lock_open").removeClass("icon-Lock_closed"):o.removeClass("active icon-Lock_open").addClass("icon-Lock_closed")},function(){a.color_object.shades&&Object.keys(a.color_object.shades).join(", ");var o="",e=(a.color_object.forEachShade(function(e,t){o+=e+` = ${t}
`}),{base:{type:"color",name:"Base color",value:a.color_object.value,helptext:`<p>Set the base color.</p>`,validate:function(e,t,o){if(!o)return"Base color is required."}},shades:{name:"Shades",type:"text",textarea:!0,value:o,placeholder:"50 = #eee\n100 = #ddd\n200 = #ccc...",helptext:`<p>List shades, one per line. Use the format shade = color (in every line), or just list shades if the color will be generated from the base color. Leave empty to remove all shades.</p>`}});pinegrow.showQuickDialog("Edit color and shades for "+a.color_object.name,`Define color shades`,`<p>List color shades, one per line in the format:</p><pre>100 = #111111
200 = #222222
...</pre>
<p>If the shade colors should be auto-generated from the base color use:</p>
<pre>100
200
...</pre>
<p>Both styles can be combined:</p>
<pre>
100 = #111111 &lt;- Will not be calculated
200           &lt;- Calculate it
...
</pre>
`,e,"Cancel","OK",null,function(e){var t=e.shades?e.shades.split("\n").filter(function(e){return 0<e.length}).map(function(e){return e.trim()}):[],o=null,n=[],r=!1;t.length&&(o={},t.forEach(function(e){var t=e.split(/\s*=\s*/);1===t.length?(o[t[0]]=null,n.push(t[0]),r=!0):o[t[0]]=t[1],0})),a.color_object.setValue(e.base),a.color_object.setShades(o,r,n),a.update(),a.onColorChanged(a.color,a.name,!1)})}),r=function(e){pinegrow.showPrompt("Color name","Rename color",e||a.name,"",null,function(e){var t;pgDmStore.design.findColorByName(this.name);e&&!e.match(/^[a-z0-9\-\_]+$/i)?(pinegrow.showQuickError("The color name can only contain letters, numbers, - and _."),r(e)):e&&e!==this.name&&(pgDmStore.design.findColorByName(e)?(pinegrow.showQuickError("Color with this name already exists."),r(e)):(t=a.name,a.name=e,c.html(`<span>${a.name}</span>`),a.onColorRenamed(t,a.name)))})},h=function(){a.onColorDeleted(a)};c.on("click","span",function(e){return e.preventDefault(),pgDmStore.getActiveDesignProvider().canEditColors()&&r(),!1}),l.on("click",function(e){return this.classList.contains("pg-dm-color-swatch-tool-background")?a.onBackgroundTool(e):a.onTextTool(e),!1}),o.on("click",function(e){return a.setLocked(!a.locked),a.onLocked(a.locked),!1}),this.$element.on("click",".pg-dm-color-swatch-color",function(e){e.preventDefault();var t,o=!1,n=!1,r=null;a.$element.spectrum({showAlpha:!0,clickoutFiresChange:!0,showInitial:!0,showInput:!0,allowEmpty:!0,preferredFormat:"hex",palette:[],beforeShow:function(e){return t=a.color,a.color_object.shades&&(r=cloneObject(a.color_object.shades)),!0},move:function(e){a.setColor(colorToString(e),a.name,null,!0),a.onColorChanged(a.color,a.name,!0),n=!0},show:function(e){},change:function(e){o=!0},hide:function(e){o?(a.setColor(colorToString(e),a.name,null,!0),a.onColorChanged(a.color,a.name),o=!1):n&&(a.color_object.shades=r,a.setColor(t,a.name,null,!1),a.onColorChanged(t,a.name,!0)),a.$element.spectrum("destroy")}}),new PgSpectrumHelper(a.$element,{"mouse-moved":function(e){var t=e.spectrum("get");a.setColor(colorToString(t)),a.onColorChanged(a.color,a.name)},"color-picked":function(e){e.spectrum("get");o=!0}},!0);return a.$element.spectrum("set",a.color),a.$element.spectrum("show"),!1});this.$element.on("contextmenu",function(e){return t($(this)),!1}),this.$element.find(".pg-dm-color-swatch-menu").on("click",function(e){return t($(this)),!1}),this.destroy=function(){this.$element.remove(),this.onLocked=null,this.onColorChanged=null}};$(function(){$("body").one("pinegrow-ready",function(e,t){var o=new PgFramework("pg.dm","Pinegrow Design Magic");o.type="pg.dm",o.allow_single_type=!0,o.description="Magic.",o.author="Pinegrow",o.author_link="http://pinegrow.com",o.has_actions=!1,o.show_in_manager=!0,o.setScriptFileByScriptTagId("plugin-pgdm"),t.addFramework(o),window.pgDmFramework=o,t.addEventHandler("on_dm_register_addons",function(e,t){for(var o=new PgToggleButtonMaker,n=[],r=1;r<=6;r++)n.push({key:"h"+r,name:"H"+r,html:o.makeText("H"+r)});var a=new PgDmAddOn("heading.line","Heading Line",function(){this.description="Display a line under headings",this.addControl("headings",{type:"select",name:"Headings",toggle_buttons:!0,multiple:!0,options:n,help:"Select Headings that should have a line under them."}),this.addControl("color",{type:"color",name:"Color",help:"Line color."}),this.addControl("width",{name:"Width",type:"slider",default_value:"40px",slider_min:0}),this.addControl("height",{name:"Height",type:"slider",slider_min:0}),this.addControl("opacity",{name:"Opacity",type:"range",range_min:0,range_max:1,range_step:.05}),this.populateDefaultParams=function(){this.setParam("headings","h1,h2"),this.setParam("width","50px"),this.setParam("height","0.05em")},this.getExtraCSS=function(){var e,t=this.getParam("headings"),o=this.getParam("color"),n=this.getParam("width"),r=this.getParam("height"),a=this.getParam("opacity");if(t)return e=[],null!==a&&e.push(`opacity: ${a};`),`
${t} {
    &:after {
        border-top: ${r} solid ${o?" "+o:""};
        display: block;
        width: ${n};
        height: 1px;
        margin-top: 1rem;
        content: "";
        ${e.join("\n")}
    }
    
    &.text-center,&.text-sm-center,&.text-md-center,&.text-lg-center,&.text-xl-center {
        &:after {
            margin-left: auto;
            margin-right: auto;
        }
    }
    
    &.text-left,&.text-sm-left,&.text-md-left,&.text-lg-left,&.text-xl-left {
        &:after {
            margin-left: 0;
            margin-right: auto;
        }
    }
    
    &.text-right,&.text-sm-right,&.text-md-right,&.text-lg-right,&.text-xl-right {
        &:after {
            margin-left: auto;
            margin-right: 0;
        }
    }
}
`}});t.push(a),new PgDmAddOn("heading.spacing","Heading Spacing",function(){this.description="Add more space before headings.";new PgToggleButtonMaker;this.addControl("headings",{type:"select",name:"Headings",toggle_buttons:!0,multiple:!0,options:n,help:"Select Headings that should have top spacing."}),this.addControl("space",{name:"Top spacing",type:"range",range_min:0,range_max:2,range_step:.25}),this.populateDefaultParams=function(){this.setParam("space",0)},this.getExtraCSS=function(){var e=this.getParam("space"),t=this.getParam("headings");if(t&&e)return`
${t} {
    margin-top: ${e}em;
}
${t} {
    &:aaafirst-child {
        margin-top: 0;
    }
}
`}})})})});