class PgDmDesignSkillTailwindOptions extends PgDmDesignSkill{constructor(e,s){super("tailwind","Tailwind CSS options"),this.version=e,this.provider=s;var t=this;this.openDialog=function(){var t=s.settings,o=pinegrow.getCurrentProject(),i=(t.jit&&"true"===t.jit&&(t.mode="jit"),t.external_source_url&&(t.external_source_url=o.getAbsoluteUrl(t.external_source_url)),t.mode),e={mode:{name:"Compiler",type:"select",value:t.mode,default_value:"jit",options:function(){var e=[{key:"jit",name:"Built-in JIT compiler (3.3.3)"},{key:"jit2",name:"Built-in JIT compiler (2.2.6)"},{key:"full",name:"Built-in non-JIT compiler (2.2.6)"}];return isApp()&&e.push({key:"external",name:"External build process"}),e},helptext:`<p>Choose how to compile the Tailwind CSS stylesheet. Options are:</p>
<ul>
<li><b>Built-in JIT compiler</b> - Use built-in Tailwind compiler to generate optimized Tailwind CSS with just CSS rules that are used in the project.</li>
<li><b>Built-in full (non-JIT) compiler</b> - Use built-in Tailwind compiler to generate full Tailwind CSS stylesheet. Not recommended due to huge size.</li>
<li><b>External build process</b> - Use an external build process with <code>npm</code> or standalone executable. This option gives you the most flexibility and it lets you use whatever Tailwind version you need. This option is only available in the desktop Pinegrow version.</li>
</ul>`},external_source_url:{name:"Source CSS file",type:"text",value:t.external_source_url,file_picker_use_project_as_parent:!0,file_picker:!0,file_picker_no_proxy:!0,show_if:"mode==external",validate:function(e,t,i,s,n,r){var a;if("external"===r.mode)return i?(a=o.getAbsoluteUrl(i),crsaIsFileExist(crsaMakeFileFromUrl(a))?void 0:"The file does not exist."):"Source CSS file is required."},helptext:`<p>Select the source css file of your external build process. That is usually the css files that contains statements:</p>
<pre>
@tailwind base;
@tailwind components;
@tailwind utilities;
</pre>`},external_help:{name:"Learn more about using external build",type:"button",show_if:"mode==external",func:function(){pinegrow.openExternalUrl("https://pinegrow.com/docs/tailwind/using-external-build-process/")}}};pinegrow.showQuickDialog("Tailwind CSS Options",`Options`,`<p>Decide how to compile the Tailwind CSS stylesheet.</p><p>Note, these settings are stored in the project settings and therefore apply to all designs in the project.</p>`,e,"Cancel","Save",null,function(e){t.external_source_url&&(t.external_source_url=o.getRelativeUrl(t.external_source_url)),i===e.mode||"external"!==i&&"external"!==e.mode?s.setSettings(e):(s.setSettings(e,!0),s.recreateEngine(function(){"external"===i&&pinegrow.getAllPages().forEach(function(t){s.getEngine(function(e){e.activateOnPage(t)})}),pgDmStore.update()}),"external"===e.mode&&pinegrow.showAlert(`<p>Please make sure that the externally compiled Tailwind CSS stylesheet is included on HTML pages in this project. If the built-in compiler was used before, you will also have to remove any references to <code>tailwind_theme/tailwind.css</code> from the page.</p><p>The easiest way to add the stylesheet is to drag it from the Project panel to the page view.</p><p>To remove the old stylesheet from the page, delete its style node in the Tree panel.</p>`,"Add the Tailwind CSS stylesheet to the page, if needed",null,"Got it"))})},isApp()&&this.addControl("button.options",{type:"button",name:"Compiler options...",func:function(){t.openDialog()}}),this.addControl("disable.preflight",{name:"Disable preflight",type:"checkbox",value:"1",helptext:`<p>Preflight is a collection of CSS rules that reset all default browser styling. Check this to disable it.</p>`})}populateDefaultParams(){this.setParam("disable.preflight","0",!0)}}class PgDmDesignSkillColorsForTailwind extends PgDmDesignSkillColors{constructor(e){super("tw.colors",e,function(){return""})}onGetConfigObject(e,n){"init"===e&&(n.theme=n.theme||{},n.theme.extend=n.theme.extend||{},n.theme.extend.colors=n.theme.extend.colors||{},this.colors.forEachColor(function(e,t,i){try{var s;i.hasShades()?(s={},i.forEachShade(function(e,t){s[e]=chroma(t).hex()}),n.theme.extend.colors[e]=s):n.theme.extend.colors[e]=chroma(t).hex()}catch(e){}}))}populateDefaultParams(e){e||this.colors.clear(),this.colors.add("gray","rgba(107,114,128,1)",!0,{50:"rgba(249,250,251,1)",100:"rgba(243,244,246,1)",200:"rgba(229,231,235,1)",300:"rgba(209,213,219,1)",400:"rgba(156,163,175,1)",500:"rgba(107,114,128,1)",600:"rgba(75,85,99,1)",700:"rgba(55,65,81,1)",800:"rgba(31,41,55,1)",900:"rgba(17,24,39,1)"},!0),this.colors.add("red","rgba(239,68,68,1)",!0,{50:"rgba(254,242,242,1)",100:"rgba(254,226,226,1)",200:"rgba(254,202,202,1)",300:"rgba(252,165,165,1)",400:"rgba(248,113,113,1)",500:"rgba(239,68,68,1)",600:"rgba(220,38,38,1)",700:"rgba(185,28,28,1)",800:"rgba(153,27,27,1)",900:"rgba(127,29,29,1)"},!0),this.colors.add("yellow","rgba(245,158,11,1)",!0,{50:"rgba(255,251,235,1)",100:"rgba(254,243,199,1)",200:"rgba(253,230,138,1)",300:"rgba(252,211,77,1)",400:"rgba(251,191,36,1)",500:"rgba(245,158,11,1)",600:"rgba(217,119,6,1)",700:"rgba(180,83,9,1)",800:"rgba(146,64,14,1)",900:"rgba(120,53,15,1)"},!0),this.colors.add("green","rgba(16,185,129,1)",!0,{50:"rgba(236,253,245,1)",100:"rgba(209,250,229,1)",200:"rgba(167,243,208,1)",300:"rgba(110,231,183,1)",400:"rgba(52,211,153,1)",500:"rgba(16,185,129,1)",600:"rgba(5,150,105,1)",700:"rgba(4,120,87,1)",800:"rgba(6,95,70,1)",900:"rgba(6,78,59,1)"},!0),this.colors.add("blue","rgba(59,130,246,1)",!0,{50:"rgba(239,246,255,1)",100:"rgba(219,234,254,1)",200:"rgba(191,219,254,1)",300:"rgba(147,197,253,1)",400:"rgba(96,165,250,1)",500:"rgba(59,130,246,1)",600:"rgba(37,99,235,1)",700:"rgba(29,78,216,1)",800:"rgba(30,64,175,1)",900:"rgba(30,58,138,1)"},!0),this.colors.add("indigo","rgba(99,102,241,1)",!0,{50:"rgba(238,242,255,1)",100:"rgba(224,231,255,1)",200:"rgba(199,210,254,1)",300:"rgba(165,180,252,1)",400:"rgba(129,140,248,1)",500:"rgba(99,102,241,1)",600:"rgba(79,70,229,1)",700:"rgba(67,56,202,1)",800:"rgba(55,48,163,1)",900:"rgba(49,46,129,1)"},!0),this.colors.add("purple","rgba(139,92,246,1)",!0,{50:"rgba(245,243,255,1)",100:"rgba(237,233,254,1)",200:"rgba(221,214,254,1)",300:"rgba(196,181,253,1)",400:"rgba(167,139,250,1)",500:"rgba(139,92,246,1)",600:"rgba(124,58,237,1)",700:"rgba(109,40,217,1)",800:"rgba(91,33,182,1)",900:"rgba(76,29,149,1)"},!0),this.colors.add("pink","rgba(236,72,153,1)",!0,{50:"rgba(253,242,248,1)",100:"rgba(252,231,243,1)",200:"rgba(251,207,232,1)",300:"rgba(249,168,212,1)",400:"rgba(244,114,182,1)",500:"rgba(236,72,153,1)",600:"rgba(219,39,119,1)",700:"rgba(190,24,93,1)",800:"rgba(157,23,77,1)",900:"rgba(131,24,67,1)"},!0),super.populateDefaultParams()}}class PgDmDesignProviderForTailwind extends PgDmDesignProvider{constructor(e){super("tw","Tailwind CSS Design"),this.framework=e;this.on_engine_ready_funcs=[],this.colors=new PgDmDesignColors,this.colors.can_edit=!0,this.colors.mode="class",this.colors.default_shades=["50","100","200","300","400","500","600","700","800","900","950"],this.setDefaultSettings(),this.addSkills()}useExternalBuild(){return isApp()&&"external"===this.settings.mode}useTailwindJIT(){return"jit"===this.settings.mode||"jit2"===this.settings.mode}disablePreflight(){return"1"===this.options_skill.getParam("disable.preflight")}getExternalConfig(e,t){if(!(e=e||this.settings.config_url))return{};crsaIsAbsoluteUrl(e)||(e=pinegrow.getCurrentProject().getAbsoluteUrl(e));try{var i=crsaMakeFileFromUrl(e),s=require("fs").readFileSync(i,{encoding:"utf8"});return Function("var module = {}; return ("+s+")")()}catch(e){return void 0!==t?t:{}}}getTailwindVersion(){switch(this.settings.mode){case"jit":return 3;case"jit2":case"full":return 2.2;default:return 3}}activate(){super.activate()}firstActivateInProject(e){var t=this;t.default_compiler="jit",t.setDefaultSettings(),pinegrow.getCurrentProject().findFilesByName("tailwind.config.js").length?pinegrow.showAlert(`<p>The project contains the <code>tailwind.config.js</code> file. If you are using an existing Tailwind CSS build process outside of Pinegrow, you can keep using it with the Design panel, after making <a href="https://pinegrow.com/docs/tailwind/using-external-build-process/" class="external">a couple of simple changes</a>.</p><p>Which Tailwind CSS compiler would you like to use?</p>
<ul>
<li>The built-in compiler (the simplest option), or</li>
<li>The external compiler (the most flexible option, if you are already compiling Tailwind CSS outside Pinegrow).</li>
</ul>
`,"Would you like to use the external build process?","Cancel","Use the built-in compiler",null,function(){e&&e()},"Use the external compiler",function(){t.default_compiler="external",t.setDefaultSettings(),t.setSettings(t.settings,!0),t.notifyAboutMissingSource(),e&&e()}):e&&e()}notifyAboutMissingSource(){pinegrow.showAlert(`<p>Source CSS file for the external Tailwind CSS build process needs to be selected. Please open Tailwind CSS Compiler options and update the information.</p>`,"Tailwind CSS Source file is not set","Cancel","Open Tailwind CSS options...",null,function(){var e=pgDmStore.getDesignSkill("tailwind");e&&e.openDialog()})}onProjectLoaded(e){super.onProjectLoaded(e),this.default_compiler="jit"}setDefaultSettings(){this.settings={mode:this.default_compiler||"jit",external_source_url:null}}activatedOnPage(e){this.class_tracker.enable(),this.class_tracker.inspectPage(e)}addSkills(){var e=new PgDmDesignSkillColorsForTailwind(this.colors);this.addSkill(e),this.fonts_skill=new PgDmTailwindFontsSkill,this.addSkill(this.fonts_skill),this.bck_skill=new PgDmDesignSkillBackground(e,"TW"),this.bck_skill.onGetBackgroundColorCSS=function(e){return e?`body { @apply bg-${e}; }
`:""},this.bck_skill.onGetConfigObject=function(e,i){var t;"init"===e&&(i.theme=i.theme||{},i.theme.extend=i.theme.extend||{},i.theme.extend.backgroundImage=i.theme.extend.backgroundImage||{},t=this.getBackgroundImagesAsObject(),$.each(t,function(e,t){i.theme.extend.backgroundImage[e]=t}))},this.addSkill(this.bck_skill),this.options_skill=new PgDmDesignSkillTailwindOptions(2,this),this.addSkill(this.options_skill)}getActiveFonts(){return this.fonts_skill.getActiveFonts()}canEditColors(){return!0}supportsColorShades(){return!0}getEngine(e){var i=this;this.engine?this.engine.isReady()?e(this.engine):i.on_engine_ready_funcs.push(e):this.engine=new PgDmTailwindEngine(function(t){i.on_engine_ready_funcs.forEach(function(e){e(t)}),i.on_engine_ready_funcs=[],e&&e(t)},this)}onClassesChanged(){this.framework&&this.framework.twIsUsingExternalBuild()||this.getEngine(function(e){e.jit&&e.update()})}hasOnlyDefaultColors(){var t,i,e=["gray","red","yellow","green","blue","indigo","purple","pink"];return e.length===this.colors.getNumberOfColors()&&(t=0,i=this,e.forEach(function(e){i.colors.getColorObject(e)&&t++}),t===e.length)}onBeforeSurpriseMe(e){var t=this,i=pinegrow.getCurrentProject();0===this.colors.getNumberOfUnlockedColors()&&this.hasOnlyDefaultColors()&&!i.twAskedAboutColors?(i.twAskedAboutColors=!0,pinegrow.showAlert(`<p>Default Tailwind CSS colors are locked by default because it makes no sense to change Red into blue, for example.</p><p>You can either unlock some of the default colors, or you can add additional colors and use them with Surprise Me. Such colors should have names like <code>primary</code>, <code>secondary</code>, <code>color3</code> and <code>color4</code> (you can rename the colors at any time).</p><p>Would you like to add these additional colors now and use them with Surprise Me?</p>`,"All colors are locked",`No, don't change colors`,`Yes, add colors`,e,function(){t.addCustomizableColors(),e()})):e()}onGetDesignThumbHTML(e,t){t.fonts=this.fonts_skill.getDesignThumbHTML(e)}addCustomizableColors(){this.colors.add("primary","rgba(107,114,128,1)",!1,{50:"rgba(249,250,251,1)",100:"rgba(243,244,246,1)",200:"rgba(229,231,235,1)",300:"rgba(209,213,219,1)",400:"rgba(156,163,175,1)",500:"rgba(107,114,128,1)",600:"rgba(75,85,99,1)",700:"rgba(55,65,81,1)",800:"rgba(31,41,55,1)",900:"rgba(17,24,39,1)"},!0),this.colors.add("secondary","rgba(107,114,128,1)",!1,{50:"rgba(249,250,251,1)",100:"rgba(243,244,246,1)",200:"rgba(229,231,235,1)",300:"rgba(209,213,219,1)",400:"rgba(156,163,175,1)",500:"rgba(107,114,128,1)",600:"rgba(75,85,99,1)",700:"rgba(55,65,81,1)",800:"rgba(31,41,55,1)",900:"rgba(17,24,39,1)"},!0),this.colors.add("color3","rgba(107,114,128,1)",!1,{50:"rgba(249,250,251,1)",100:"rgba(243,244,246,1)",200:"rgba(229,231,235,1)",300:"rgba(209,213,219,1)",400:"rgba(156,163,175,1)",500:"rgba(107,114,128,1)",600:"rgba(75,85,99,1)",700:"rgba(55,65,81,1)",800:"rgba(31,41,55,1)",900:"rgba(17,24,39,1)"},!0),this.colors.add("color4","rgba(107,114,128,1)",!1,{50:"rgba(249,250,251,1)",100:"rgba(243,244,246,1)",200:"rgba(229,231,235,1)",300:"rgba(209,213,219,1)",400:"rgba(156,163,175,1)",500:"rgba(107,114,128,1)",600:"rgba(75,85,99,1)",700:"rgba(55,65,81,1)",800:"rgba(31,41,55,1)",900:"rgba(17,24,39,1)"},!0)}getFontsOptions(e){return this.fonts_skill.getFontsOptions(e)}getBackgroundImageOptions(){var i=[],e=this.bck_skill.getBackgroundImagesAsObject();return $.each(e,function(e,t){i.push({key:"bg-"+e,name:e})}),i}getColorOptions(e){for(var t=this.getColorsForPicker(e),i=[],s=0;s<t.length;s++)for(var n=t[s],r=0;r<n.length;r++)i.push(n[r]);return i}getColorsForPicker(e){return this.colors.getColorsForPicker(e,[[{key:e+"current",name:"current",color:"white",text:"c"},{key:e+"transparent",name:"transparent",color:"rgba(0,0,0,0)"},{key:e+"black",name:"black",color:"black"},{key:e+"white",name:"white",color:"white"},{key:e+"inherit",name:"inherit",color:"rgba(0,0,0,0.5)"}]])}destroyEngine(){this.engine&&this.engine.destroy(),this.engine=null}recreateEngine(e){this.destroyEngine(),this.getEngine(e,this)}}class PgDmTailwindFontsSkill extends PgDmDesignSkill{constructor(){super("fonts","Fonts"),this.fixed=["sans","serif"],this.max_num=10;for(var a=this,e=new PgToggleButtonMaker,t=1;t<=this.max_num;t++){var i=t<=this.fixed.length?this.fixed[t-1]:null;this.addControl(`name_`+t,{name:"Name",type:i?"hidden":"text",default_value:i,start_repeat_item:i||`Custom font `+(t-this.fixed.length),tw_repeat_item_index:t,repeat_item_open:null!==i,add_repeat_item_label:"Add font family",on_create_repeat_item_button:function(e){$(`<button class="pg-button" style="margin-left:4px;height: 27px;vertical-align: top;">Manage fonts...</button>`).appendTo(e).on("click",function(e){e.preventDefault(),pinegrow.fontLibrary.showLibrary()})},dm_no_lock:"placeholder",on_repeat_item_removed:function(e,t,r){t.removeClass("has-value"),pinegrow.requireProjectDB(function(e){e.startBatchUpdates();var t=r.tw_repeat_item_index;a.setParam(`family_`+t,""),a.setParam(`name_`+t,"");for(var i=t+1;i<=a.max_num;i++){var s=a.getParam(`name_`+i),n=a.getParam(`family_`+i);(s||n)&&(a.setParam(`family_`+(i-1),n),a.setParam(`name_`+(i-1),s),a.setParam(`family_`+i,""),a.setParam(`name_`+i,""))}e.endBatchUpdates("Remove font family","design_panel"),pgDmStore.update()})}}),this.addControl(`family_`+t,{name:"Family",type:"select",show_empty:!0,fill_list_on_open:!0,can_add_items:!0,options:function(){return pinegrow.fontLibrary.getSelectOptions()}}),a.addControl(t+`_options_container`,{name:"Use for",type:"displayhtmlwithlabel",html:"",class:`crsa-field-text-font-options-container crsa-field-text-font-options-container-`+t,dm_no_lock:"placeholder"});for(var s=1;s<=6;s++)a.addControl(`h${s}_`+t,{name:"H"+s,type:"select",toggle_buttons:!0,append_to:`.crsa-field-text-font-options-container-`+t,without_text:!0,show_empty:!0,dm_no_lock:!0,options:[{key:"h"+s,name:"H"+s,html:e.makeText("H"+s,{attributes:{title:"Use for H"+s},styles:{padding:"4px 0"}})}]})}}getFontsOptions(e){var t=[],i=!1;for(let r=1;r<=this.max_num;r++){var s=r<=this.fixed.length?this.fixed[r-1]:this.getParam(`name_`+r),n=this.getParam(`family_`+r);s&&(r<=this.fixed.length||n)&&(t.push({key:e+s,name:s}),"mono"===s)&&(i=!0)}return i||t.push({key:e+"mono",name:"mono"}),t}getActiveFonts(){var e=[];for(let s=1;s<=this.max_num;s++){var t=s<=this.fixed.length?this.fixed[s-1]:this.getParam(`name_`+s),i=this.getParam(`family_`+s);t&&i&&e.indexOf(i)<0&&e.push(i)}return e}getDesignThumbHTML(e){var t=e.findOne('dmdesignskill[skill="fonts"]'),i="",s=0;if(t)for(let e=1;e<=this.max_num;e++){var n=e<=this.fixed.length?this.fixed[e-1]:t.getAttribute(`name_`+e),r=t.getAttribute(`family_`+e);n&&r&&s<2&&(i+=`<p style="font-family: ${r.replace(/"/g,"'")};margin: 0px 0px;white-space: nowrap;">${r.replace(/["']/g,"")}</p>`,s++)}return i}onSurpriseMe(e){for(var t=1;t<=this.max_num;t++){var i=t<=this.fixed.length?this.fixed[t-1]:this.getParam(`name_`+t),s=`family_`+t;!this.isLocked(s)&&i&&(i="all",(this.getParam(`h1_`+t)||this.getParam(`h2_`+t))&&(i="h1"),i=pinegrow.fontLibrary.getRandomFont(i),this.setParam(s,i.family))}e()}onGetCSS(e,t){if("import"===e){var i=pgDmStore.design.fonts;i.clear();for(let e=1;e<=this.max_num;e++){var s=e<=this.fixed.length?this.fixed[e-1]:this.getParam(`name_`+e),n=this.getParam(`family_`+e);s&&n&&i.setFont({key:s,family:n})}var r=i.getImportStatements(t),r=r.length?r.join("\n")+"\n\n":"",a=i.getFontFontFaceStatements();return r+=a.length?a.join("\n\n")+"\n\n":""}if("rules"!==e)return"";var o="";for(let h=1;h<=this.max_num;h++){var l=h<=this.fixed.length?this.fixed[h-1]:this.getParam(`name_`+h),d=this.getParam(`family_`+h);if(l&&d){for(var c=[],g=1;g<=6;g++)this.getParam(`h${g}_`+h)&&c.push("h"+g);c.length&&(o+=`
${c.join(",")} {
    @apply font-${l};
}                    
`)}}return o}onGetConfigObject(e,i){if("init"===e){i.theme=i.theme||{},i.theme.extend=i.theme.extend||{},i.theme.extend.fontFamily=i.theme.extend.fontFamily||{};for(let t=1;t<=this.max_num;t++){var s,n=t<=this.fixed.length?this.fixed[t-1]:this.getParam(`name_`+t);let e=this.getParam(`family_`+t);n&&e&&((s=pinegrow.fontLibrary.getFontByFamily(e))&&(e=s.getFamilyWithFallback()),i.theme.extend.fontFamily[n]=[e])}}}}class PgDmTailwindEngine extends PgDmEngine{constructor(e,t){super(e);var i=this,s=(this.design_provider=t,this.external_build=t.useExternalBuild(),this.jit=!0,this.is_ready=!1,this.done_list=[],this.class_cache={colors:"",fonts:"",backgrounds:""},this.delayedTasks=new PgDelayedTasks,this.twf=pinegrow.findFrameworkByKey("tw"),this.busy=!1,this.update_on_done=!1,pinegrow.getCurrentProject());this.custom_cs_url=null,isApp()&&(this.fs=require("fs")),this.external_build?(t.settings.external_source_url||t.notifyAboutMissingSource(),this.is_ready=!0,setTimeout(function(){e&&e(i)},1)):(this.custom_cs_url=s.getAbsoluteUrl("tailwind_theme/tailwind.css"),(s=this.outcs=pinegrow.getStylesheetByUrl(this.custom_cs_url))?(i.is_ready=!0,e&&e(i)):((s=this.outcs=PgCSSStylesheet()).setUrl(this.custom_cs_url),pinegrow.stylesheets.addCrsaStylesheet(s),s.load(this.custom_cs_url,function(){i.is_ready=!0,e&&e(i)},!1,!0,!0)),s.usedByDesignPanel=!0)}getStylesheetUrl(){return this.custom_cs_url}getWorker(){return this.design_provider.getTailwindVersion()<3?(this.worker2||(this.worker2=new Worker("frameworks/tailwindcss/resources/tailwind.compiler.v2.js")),this.worker2):(this.worker||(this.worker=new Worker("frameworks/tailwindcss/resources/tailwind.compiler.js")),this.worker)}activateOnPage(e,t){var i,s=this;!isApp()&&"_info.html"===e.name||(this.design_provider.activatedOnPage(e),this.external_build)?t&&t():(!e.sourceNode||(i=null,e.stylesheets.has(this.outcs))?t&&t():(e.sourceNode.withoutEvents(function(){e.sourceNode.find("link").forEach(function(e){var t;"stylesheet"===e.getAttribute("rel")&&(t=e.getAttribute("href"))&&t.match(/tailwind(\.min|)/i)&&(i=e)}),e.sourceNode.find("script").forEach(function(e){0<=(e.getAttribute("src")||"").indexOf("cdn.tailwindcss.com")&&e.remove()}),s.outcs?e.stylesheets.attachTo(s.outcs,null,function(){pinegrow.changeManager.didChange(null,"Add generated stylesheet",null,e),$("body").trigger("crsa-stylesheets-changed"),e.refresh(),t&&t()},i):(pinegrow.showQuickError("Please reopen the project."),t&&t())}),e.setPageChanged(!0)),e.tw_update_jit_on_activate&&this.design_provider.useTailwindJIT()&&(e.tw_update_jit_on_activate=!1,this.update()))}getTailwindCS(e){return this.outcs}update(e){e&&this.done_list.push(e),this.delayedTasks.run("update",this.updateTask.bind(this),this.external_build?1:100)}updateTask(){var n=this,r=pinegrow.getCurrentProject(),a=pinegrow.getSelectedPage();if(a)if(this.busy&&4e3<Date.now()-this.busy_time&&(this.busy=!1),this.busy)this.update_on_done=!0;else{var o=!1,e=pinegrow.findFrameworkByKey("wordpress.pinegrow"),l=(e&&(o=e.isWPEnabledForProject()),this.external_build=this.design_provider.useExternalBuild(),this.jit=this.design_provider.useTailwindJIT(),{css:"",config:{},cs_url:this.custom_cs_url}),e=(l.config.mode=this.jit?"jit":"",l.config.customPlugins={typography:!0,forms:{active:!0},aspectRatio:!0,lineClamp:!0},l.config.corePlugins={preflight:!0},pinegrow.dispatchEvent("on_dm_get_css",null,"import",l),pinegrow.dispatchEvent("on_dm_get_css",null,"init",l),l.css),t=l.css+`
${this.design_provider.disablePreflight()?"":"@tailwind base;"}
@tailwind components;
@tailwind utilities;
`,i=(this.wp_css=null,o&&(t=l.css+`
/* PREFLIGHT START */${this.design_provider.disablePreflight()?"":"@tailwind base;"}/* PREFLIGHT END */
@tailwind components;
@tailwind utilities;
`),l.css="",pinegrow.dispatchEvent("on_dm_get_css",null,"rules",l),t+="\n"+l.css,!1),s=JSON.stringify(l.config.theme.extend.colors),d=JSON.stringify(l.config.theme.extend.fontFamily),c=JSON.stringify(l.config.theme.extend.backgroundImage);if(this.class_cache.colors===s&&this.class_cache.fonts===d&&this.class_cache.backgrounds===c||(i=!0,this.class_cache.colors=s,this.class_cache.fonts=d,this.class_cache.backgrounds=c),this.external_build){try{this.external_config_path=r.getAbsolutePath("tailwind.config.js"),this.external_source_file=crsaMakeFileFromUrl(r.getAbsoluteUrl(this.design_provider.settings.external_source_url));var g=this.fs.readFileSync(this.external_config_path,{encoding:"utf8"}),h=new PgSimpleJsParser(g),u=`
const pg_colors = ${h.objToString(l.config.theme.extend.colors)}

const pg_fonts = ${h.objToString(l.config.theme.extend.fontFamily)}   

const pg_backgrounds = ${h.objToString(l.config.theme.extend.backgroundImage)}    
             
                `,g=pgUpdateGeneratedSectionContent(g,"Design Panel",u,"prepend"),t=(this.fs.writeFileSync(this.external_config_path,g,{encoding:"utf8"}),this.fs.readFileSync(this.external_source_file,{encoding:"utf8"})),p=(t=pgUpdateGeneratedSectionContent(t,"Design Panel Init",e,"prepend"),t=pgUpdateGeneratedSectionContent(t,"Design Panel Extra Rules",l.css,"append"),this.fs.writeFileSync(this.external_source_file,t,{encoding:"utf8"}),pgDmStore.design.fonts.getFontUrls());n.addFontsToPageViews(function(){return pinegrow.getAllPages()},p)}catch(e){console.warn(`Unable to update tailwind.config.js and source file.`,e)}setTimeout(function(){n.update_on_done?n.update():(n.done_list.forEach(function(e){e()}),n.done_list=[]),n.busy=!1,n.update_on_done=!1},1)}else{var f=new CrsaProfile;this.busy=!0,this.busy_time=Date.now(),this.getWorker().onerror=function(e){console.error(e),n.busy=!1,n.update_on_done=!1},this.getWorker().onmessage=function(e){var t,i,s;e.data.error?(console.error(e.data.error),n.busy=!1,n.update_on_done=!1):(f.show("Compiled TW JIT"),(t=n.getTailwindCS(a))?(t.ignore_imports_in_apply=!0,o&&(s=`
*,::before,::after {
  box-sizing: border-box;
}

a {
          color: inherit;
          text-decoration: inherit;
        }
        ol,
        ul,
        menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre {
          margin: 0;
        }                        
`,(i=l.config.theme?.extend?.fontFamily?.sans)&&(s+=`
html {
  font-family: ${i[0]};
}                      
`),i=e.data.css,e.data.css=e.data.css.replace("/* PREFLIGHT START */","").replace("/* PREFLIGHT END */",""),i=i.replace(/\/\* PREFLIGHT START \*\/([\s\S]*)\/\* PREFLIGHT END \*\//m,s),n.wp_css=i,isApp()||r.setContentOfUrlWithLookup("tailwind_theme/tailwind_for_wp_editor.css",i)),t.setSource(e.data.css,function(){f.show("TW JIT Applied to page"),n.busy=!1,n.update_on_done?n.update():(n.done_list.forEach(function(e){e()}),n.done_list=[]),n.update_on_done=!1,pinegrow.dispatchEvent("on_css_stylesheet_changed",null,t),pinegrow.selectedElements.repositionMenusDelayed(),pinegrow.refreshPageChangedStatusForAllPages(!0)}),s=pgDmStore.design.fonts.getFontUrls(),n.addFontsToPageViews(t,s)):(n.busy=!1,n.update_on_done=!1))},pgIsDev()&&console.log("Compile with classes",this.twf.classTracker.getList()),this.getWorker().postMessage({css:t,html:[`<html><body class="${this.twf.classTracker.getList()}"></body></html>`],config:l.config}),i&&this.design_provider.onColorListChanged()}}else n.done_list.forEach(function(e){e()}),n.done_list=[]}saveCSS(){var e,t=pinegrow.getSelectedPage(),t=this.getTailwindCS(t);t&&t.localFile&&(t.save(t.localFile),t.setChanged(!1)),this.wp_css&&(t=pinegrow.getCurrentProject().getAbsolutePath("tailwind_theme/tailwind_for_wp_editor.css"),e=!crsaIsFileExist(t),this.fs.writeFileSync(t,this.wp_css,{encoding:"utf8"}),e)&&pinegrow.refreshCurrentProjectDelayed(!0)}destroy(){this.worker&&this.worker.terminate(),this.worker=null,this.worker2&&this.worker2.terminate(),this.worker2=null,this.design_provider=null,this.delayedTasks.destroy(),this.outcs&&(this.outcs.usedByDesignPanel=!1,this.outcs.remove())}}class PgClassTracker{constructor(e){((this.design_provider=e).class_tracker=this).changed=!1,this.has_unsaved_changes=!1,this.list="",this.map={},this.profile=new CrsaProfile("Class Tracker"),this.profile.pause(),this.twf=null,this.is_enabled=!1,this.delayedTasks=new PgDelayedTasks,this.temp_classes=[];var a=this;pinegrow.addEventHandler("on_page_changes_done",function(e,t,i){var s,n=!1;(n=a.is_enabled&&(a.twf&&a.twf.twIsUsingExternalBuild()||pgDmStore.isDesignEnabled()&&(s=pgDmStore.getActiveDesignProvider())&&s.useTailwindJIT&&s.useTailwindJIT())?!0:n)&&(i&&a.inspectCollection(i),a.changed)&&(a.changed=!1,a.design_provider.onClassesChanged())}),pinegrow.addEventHandler("on_fast_dom_class_preview_start",function(e,t){a.temp_classes=[]}),pinegrow.addEventHandler("on_fast_dom_class_preview",function(e,t,i,s){var n,r;a.is_enabled&&pgDmStore.isDesignEnabled()&&(n=!1,(r=function(e){a.temp_classes.indexOf(e)<0&&!a.map[e]&&(a.temp_classes.push(e),n=!0)})(i),s&&s.forEach(r),n)&&(a.design_provider.onClassesChanged(),a.saveUsedClassesHtmlFileIfUsingExternalBuild())}),pinegrow.addEventHandler("on_fast_dom_class_preview_end",function(e,t){a.temp_classes=[]}),pinegrow.addEventHandler("on_project_loaded",function(e,t){a.twf=pinegrow.findFrameworkByKey("tw"),a.is_enabled=!1,a.reset(),a.load()&&(a.is_enabled=!0),a.twf&&a.twf.twIsUsingExternalBuild()&&(a.is_enabled=!0)}),pinegrow.addEventHandler("on_page_saved",function(e,t,i){a.is_enabled&&(i&&(a.inspectPage(e),a.changed)&&(e.tw_update_jit_on_activate=!0),a.has_unsaved_changes)&&a.save()}),pinegrow.addEventHandler("on_project_closed",function(e,t){isApp()&&(a.is_enabled&&a.save(t),a.is_enabled=!1)}),pinegrow.addEventHandler("on_before_save_backend_project",function(e,t){a.has_unsaved_changes&&a.save()}),pinegrow.addEventHandler("on_project_scan_begin",function(e,t){a.useOnProject(t)&&a.reset()}),pinegrow.addEventHandler("on_project_scan_page",function(e,t,i){a.useOnProject(t)&&a.inspectPage(i)}),pinegrow.addEventHandler("on_project_scan_end",function(e,t){})}getList(){return this.temp_classes.length?this.list+" "+this.temp_classes.join(" "):this.list}rescanProject(){var e=pinegrow.getCurrentProject();this.useOnProject(e)?e.forEachEditableFile(function(e,t,i){t(e,i)},function(){pinegrow.showQuickMessage("Done.")},"Looking for used classes in HTML files..."):pinegrow.showQuickError("Class tracking is not enabled on this project.")}enable(){this.is_enabled=!0}useOnProject(e){return this.is_enabled}inspect(e){this.profile.resume();var t=this;e.walkSelfAndChildren(function(e){return e.isElement&&e.getClasses().forEach(function(e){t.map[e]||(t.map[e]=!0,t.list+=" "+e,t.changed||(t.changed=!0),t.has_unsaved_changes=!0,0)}),!0}),this.changed&&this.saveUsedClassesHtmlFileIfUsingExternalBuild(),this.profile.pause(),this.profile.show("Total time")}saveUsedClassesHtmlFileIfUsingExternalBuild(){var t=this;this.twf&&this.twf.twIsUsingExternalBuild()&&this.delayedTasks.run("saveUsedClassesHtml",function(){var e=pinegrow.getCurrentProject().getAbsolutePath("_pginfo/used-classes.html");require("fs").writeFile(e,`<html><body><div class="${t.list} ${t.temp_classes.join(" ")}"></div></body></html>`,function(){})},5)}inspectCollection(e){var t=this;e.forEachElement(function(e){t.inspect(e)})}inspectPage(e){this.inspect(e.sourceNode)}inspectProject(e,t){var s=this,n=(this.reset(),t?100:0),i=pinegrow.getCurrentProject();i?i.forEachEditableFile(function(e,t,i){s.inspectPage(e),setTimeout(function(){t(e,i)},n)},function(){},"Looking for used classes...",null,null,t):(pinegrow.showQuickMessage("Looking for classes in all open pages..."),pinegrow.getAllPages().forEach(function(e){s.inspectPage(e)}),pinegrow.showQuickMessage("Done!"),e&&e())}reset(){this.changed=!1,this.has_unsaved_changes=!1,this.list="",this.map={}}delayedSave(){this.delayedTasks.run("save",this.save.bind(this),1e3)}save(e){var t=e?e.getProjectInfo():pinegrow.getCurrentProjectInfo();t&&(t.saveFile("class.tracker.json",JSON.stringify({list:this.list,map:this.map})),this.has_unsaved_changes=!1)}load(){var e=pinegrow.getCurrentProjectInfo();if(e){e=e.loadFile("class.tracker.json");if(e)try{var t=JSON.parse(e);return this.list=t.list,this.map=t.map,!0}catch(e){}}return!1}}