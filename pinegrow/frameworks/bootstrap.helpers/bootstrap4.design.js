class PgDmDesignSkillBootstrapOptions extends PgDmDesignSkill{constructor(s){super("bootstrap","Bootstrap options"),this.version=s,this.addControl("sizer",{name:"Text size",type:"range",range_min:-5,range_max:5,magic_range_min:-2,magic_range_max:2,dm_locked:!0,default_value:0,helptext:`<p>Set the size of text and margin / padding spacers.</p>`}),this.addControl("gutter",{name:"Grid spacing",type:"range",range_min:-5,range_max:5,range_marks:!0,dm_locked:!0,default_value:0,helptext:`<p>Set the amount of space between columns and column padding.</p>`}),this.addControl("roundness",{name:"Roundness",type:"range",range_min:0,range_max:4,range_marks:!0,helptext:`<p>Set the roundness of cards, input fields, pills...</p>`}),this.addControl("buttonRoundness",{name:"Button roundness",type:"range",range_min:0,range_max:4,range_marks:!0,helptext:`<p>Set the button roundness.</p>`}),this.addControl("shadows",{name:"Shadows",type:"range",range_min:0,range_max:4,range_marks:!0,helptext:`<p>Set shadows for cards, navbars...</p>`}),this.addControl("contrast",{name:"Contrast",type:"range",range_min:0,range_max:2,range_marks:!0,dm_no_lock:"placeholder",helptext:`<p>Minimum contrast for calculating light/dark color combinations, for example the color of button labels. Values range is 3, 4.5 and 7 (acceptable values for WCAG 2.0).</p>`}),this.addControl("gradients",{name:"Gradients",type:"checkbox",value:"1",helptext:`<p>Enable gradients on buttons, alerts...</p>`}),"4"===this.version&&this.addControl("responsive_fonts",{name:"Responsive font sizes",type:"checkbox",value:"1",helptext:`<p>Enable responsive font sizes to scale font sizes across viewport sizes.</p>`})}populateDefaultParams(){this.setParam("contrast","0",!0)}onSurpriseMe(s){this.isLocked("gradients")||this.setParam("gradients",Math.random()<.3?"1":""),this.isLocked("responsive_fonts")||this.setParam("responsive_fonts",Math.random()<.5?"1":""),this.surpriseMeForRangeControls(s)}onGetCSS(s){function e(s,e,t,r){var o=n.getParam(t||"roundness");return null===o&&(o=r||1),Math.round(100*(1<o?s+s/.333*(o-1):s*o))/100+e}var n=this,t="";switch(s){case"init":var r=this.getParam("sizer"),r=(1!==r&&(t+="\n"+this.setVar("font-size-base",1+.05*r+"rem")),t=(t=(t=(t=(t=(t=(t=(t+="\n"+this.setVar("grid-gutter-width",30+6*this.getParam("gutter")+"px"))+this.setVar("border-radius",e(.25,"rem",null,2)))+this.setVar("border-radius-lg",e(.3,"rem",null,2)))+this.setVar("border-radius-sm",e(.2,"rem",null,2)))+this.setVar("dropdown-border-radius",".25rem !default"))+this.setVar("btn-border-radius",e(.25,"rem","buttonRoundness")))+this.setVar("btn-border-radius-lg",e(.3,"rem","buttonRoundness")))+this.setVar("btn-border-radius-sm",e(.2,"rem","buttonRoundness")),2<=this.getParam("buttonRoundness")&&(t=(t=(t+=this.setVar("btn-padding-x","1rem"))+this.setVar("btn-padding-x-sm","0.75rem"))+this.setVar("btn-padding-x-lg","1.25rem")),t+=this.setVar("enable-shadows",this.getParam("shadows")?"true":"false"),"4"===this.version?t+=this.setVar("enable-responsive-font-sizes",this.getParam("responsive_fonts")?"true":"false"):"5"===this.version&&(t+=this.setVar("enable-negative-margins","true")),[3,4.5,7]),t=(t+=this.setVar("enable-gradients",this.getParam("gradients")?"true":"false"))+this.setVar("min-contrast-ratio",r[parseInt(this.getParam("contrast")||1)]);this.getParam("colorful")&&(t+=this.setVar("headings-color","$color1"));break;case"rules":this.getParam("shadows")&&(t+=".navbar, .card { box-shadow: 0 "+(.25+.25/4*((r=this.getParam("shadows"))-1))+"rem "+(.75+.75/4*(r-1))+"rem rgba(0, 0, 0, "+(.05+.2/4*(r-1))+"); }\r\n")}return t}}class PgDmDesignSkillColorsForBootstrap extends PgDmDesignSkillColors{constructor(s,e){super("bs"+s+".colors",e,function(){var t="";return e.forEachColor(function(s,e){t+=`$${s}: ${e};
`}),t}),this.version=s}populateDefaultParams(s){s||this.colors.clear(),"4"===this.version?(this.colors.add("primary","#007bff"),this.colors.add("secondary","#6c757d"),this.colors.add("info","#17a2b8",!1),this.colors.add("success","#28a745",!0),this.colors.add("warning","#ffc107",!0),this.colors.add("danger","#dc3545",!0),this.colors.add("white","white",!0),this.colors.add("light","#f8f9fa",!0),this.colors.add("dark","#343a40",!0)):(this.colors.add("primary","#0d6efd"),this.colors.add("secondary","#6c757d"),this.colors.add("info","#0dcaf0",!1),this.colors.add("success","#198754",!0),this.colors.add("warning","#ffc107",!0),this.colors.add("danger","#dc3545",!0),this.colors.add("white","white",!0),this.colors.add("light","#f8f9fa",!0),this.colors.add("dark","#212529",!0)),super.populateDefaultParams()}}class PgDmDesignProviderForBootstrap extends PgDmDesignProvider{constructor(s,e){super("bs"+e,"Bootstrap "+e+" Design"),this.framework=s,this.prefix="bs"+e,this.version=e;var t=this;this.on_engine_ready_funcs=[],this.colors=new PgDmDesignColors,this.addSkills(),pinegrow.addEventHandler("on_bootstrap_theme_setup_done",function(){t.destroyEngine(),pgDmStore.isDesignEnabled()&&pgDmStore.update()})}addSkills(){var s=new PgDmDesignSkillColorsForBootstrap(this.version,this.colors);this.addSkill(s),this.fonts_skill_main=new PgDmDesignSkillFonts(!1,s),this.addSkill(this.fonts_skill_main),this.fonts_skill_headings=new PgDmDesignSkillFonts(!0,s),this.addSkill(this.fonts_skill_headings),this.addSkill(new PgDmDesignSkillBackground(s,"BS")),this.addSkill(new PgDmDesignSkillBootstrapOptions(this.version))}getActiveFonts(){var s=[];return this.fonts_skill_main.getActiveFonts(s),this.fonts_skill_headings.getActiveFonts(s),s}getEngine(s){var t=this;this.engine?this.engine.isReady()?s(this.engine):t.on_engine_ready_funcs.push(s):this.engine=new PgDmEngineForBootstrap(function(e){t.on_engine_ready_funcs.forEach(function(s){s(e)}),t.on_engine_ready_funcs=[],s&&s(e)},this.framework)}destroyEngine(){this.engine&&this.engine.destroy(),this.engine=null}}class PgDmDesignProviderForBootstrap4 extends PgDmDesignProviderForBootstrap{constructor(s){super(s,"4")}}class PgDmDesignProviderForBootstrap5 extends PgDmDesignProviderForBootstrap{constructor(s){super(s,"5")}}class PgDmEngineForBootstrap extends PgDmEngine{constructor(s,e){super(s);function t(){i.is_ready=!0,i.with_outcs_func_list.forEach(function(s){s()}),i.with_outcs_func_list=[],s&&s(i),i.update()}var r,o,n,i=this,a=(this.css_mode="generate",require("path"),pinegrow.getCurrentProject());this.custom_cs_url=null,this.out_url=null,a?(o=isApp()?a.getAbsolutePath("bootstrap_theme/custom.scss"):null,isApp()&&crsaIsFileExist(o)?(this.css_mode="inject",this.custom_cs_url=crsaMakeUrlFromFile(o)):r=a.getAbsoluteUrl("bootstrap_theme/bootstrap.css")):(o=pinegrow.getSelectedPage(),r=require("url").resolve(o.url,"bootstrap_theme/bootstrap.css")),this.out_url=r,this.customCs=null,this.busy=!1,this.update_after_busy=!1,this.with_outcs_func_list=[];"generate"===this.css_mode?((o=this.outcs=PgCSSStylesheet()).fast=!1,o.loaded=!0,o.ignoreInSave=!0,o.usedByDesignPanel=!0,pinegrow.stylesheets.addCrsaStylesheet(o),o.setUrl(r),!crsaIsFileUrl(o.url)&&isApp()||(o.localFile=crsaMakeFileFromUrl(o.url),isApp()||!a||a.hasContentForUrl(r)||a.setContentOfUrl(r,""),o.load(o.url,function(){},!1,!0,!0)),(a=this.dummy_outcs=PgCSSStylesheet()).ignoreInSave=!0,a.usedByDesignPanel=!0,(n=this.cs=PgSCSSStylesheet()).includeSourceMap=!1,n.dontAddIds=!0,n.ignoreInSave=!0,n.usedByDesignPanel=!0,n.load(e.getResourceUrl("bootstrap_theme/custom.scss"),function(){i.customCs=n,t.call(i)},null,null,a),isApp()||(n.onMapImportRelativeUrl=function(s){return s="bootstrap/_bootstrap.scss"===s?"bootstrap/bootstrap.scss":s}),n.outFile=o.localFile):setTimeout(function(){t&&t()},10)}getStylesheetUrl(){return this.out_url}onGetCSS(s){var e,t="";return"init"!=s&&"import"!=s||(e={css:"",cs_url:this.out_url},pinegrow.dispatchEvent("on_dm_get_css",null,s,e),t+=e.css),"rules"==s&&(e={css:"",cs_url:this.out_url},pinegrow.dispatchEvent("on_dm_get_css",null,s,e),t+=e.css),t}whenOutCSIsAvailable(s){this.outcs?s():this.with_outcs_func_list.push(s)}activateOnPage(s,e){var r=this;"generate"===this.css_mode?this.whenOutCSIsAvailable(function(){var t=null;!s.sourceNode||s.stylesheets.has(r.outcs)?e&&e():(s.sourceNode.withoutEvents(function(){s.sourceNode.find("link").forEach(function(s){var e;"stylesheet"===s.getAttribute("rel")&&(e=s.getAttribute("href"))&&e.match(/bootstrap(\.min|)/i)&&(t=s)}),s.stylesheets.attachTo(r.outcs,null,function(){pinegrow.changeManager.didChange(null,"Add generated stylesheet",null,s),$("body").trigger("crsa-stylesheets-changed"),s.refresh(),e&&e()},t)}),s.setPageChanged(!0))}):e&&e()}update(t){var s,e,r,o,n=this;pinegrow.getSelectedPage()&&(this.customCs||"generate"!==this.css_mode)&&(this.busy?n.update_after_busy=!0:(s=this.onGetCSS("import"),s+=this.onGetCSS("init"),"generate"===this.css_mode&&(s+=`
@import "bootstrap/bootstrap";
`),e=this.onGetCSS("rules")||"","inject"!==this.css_mode&&(s+=e),r=null,"inject"===this.css_mode?(n.customCs=pinegrow.stylesheets.getByUrl(this.custom_cs_url,!1),n.customCs?(n.update_after_busy=!1,n.busy=!0,o=n.customCs.getSource(),o=pgUpdateGeneratedSectionContent(o,"Theme Init",s,"prepend"),o=pgUpdateGeneratedSectionContent(o,"Additional Rules",e,"append"),n.customCs.includeSourceMap=!1,(r=n.customCs.compiledStylesheets[0]).ignore_imports_in_apply=!0,n.customCs.setSource(o,function(){pinegrow.dispatchEvent("on_css_source_changed",null,{list:[n.customCs],ignore_in_undo:!0}),pinegrow.dispatchEvent("on_css_stylesheet_changed",null,r),n.busy=!1,n.update_after_busy?n.update(t):(pinegrow.refreshPageChangedStatusForAllPages(!0),t&&t())}),o=pgDmStore.design.fonts.getFontUrls(),n.addFontsToPageViews(r,o)):pinegrow.showQuickError(n.custom_cs_url+` is not loaded.`)):(n.update_after_busy=!1,n.busy=!0,r=this.outcs,n.customCs.setSource(s,function(){n.cs.regenerateCssFromCompilableSource(function(s,e){s?(console.log(s),n.busy=!1,n.update_after_busy?n.update(t):t&&t()):(r.resetError(),n.outcs.ignore_imports_in_apply=!0,n.outcs.setSource(e.css,function(){n.busy=!1,n.update_after_busy?n.update(t):(pinegrow.refreshPageChangedStatusForAllPages(!0),pinegrow.dispatchEvent("on_css_stylesheet_changed",null,r),t&&t())},null,null,!0))})},!1,!0),o=pgDmStore.design.fonts.getFontUrls(),n.addFontsToPageViews(r,o))))}saveCSS(){var s=crsaMakeFileFromUrl(this.out_url);"generate"===this.css_mode&&s&&(this.outcs.save(s),this.outcs.setChanged(!1))}destroy(){"generate"===this.css_mode&&(this.outcs.usedByDesignPanel=!1,this.outcs.remove(),pinegrow.stylesheets.removeStylesheetByKey(this.outcs.url),this.cs.usedByDesignPanel=!1,this.cs.remove(),pinegrow.stylesheets.removeStylesheetByKey(this.cs.url),this.dummy_outcs.usedByDesignPanel=!1,this.dummy_outcs.remove(),pinegrow.stylesheets.removeStylesheetByKey(this.dummy_outcs.url))}}