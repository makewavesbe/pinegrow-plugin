var PgVarsView=function(){function e(){f(),a.whenVisible(function(){g()})}function n(){_()}function t(e,n){l&&(n&&n.stylesheet_changed&&f(),g())}function i(e){a.whenVisible(function(){g()})}var o=$('<div class="crsa-stylesheet-vars"></div>'),a=new PgUIView(o),s={},r=null,l=!1,c=(this.view=a,""),v=$('<div class="alert alert-info alert-panel-notice"></div>').appendTo(o),d=($('<div class="custom-stylesheet-container"></div>').appendTo(o),$('<div class="var-content-container"></div>').appendTo(o)),u=function(){(0<o.find(".pg-ui-section").length?pg$Hide:(l?pinegrow.getSelectedElement()?v.html("There is no variables."):v.html("Element is not selected."):0<c.length&&v.html("There is no variables."),pg$Show))(v)},g=function(){var e,n,t,i=o.scrollTop();pgRemoveSpectrum(d),pgRemoveMultiselects(d),d[0].innerHTML="";for(e in s)n=s[e],t=void 0,r&&r.getUniqueName()==n.getUniqueName()||(n.varsPane&&(n.varsPane.remove(),n.varsPane=null),0<n.varGroups.length&&(t=$("<div/>").appendTo(d),n.varsPane=new PgStylesheetVars(n,t,{customStylesheet:r}),n.varsPane.filter=c,n.varsPane.showActiveOnly=l,n.varsPane.show()));o.scrollTop(i),u()},p=function(){function o(e){"custom.scss"==e.name&&(r=e),s[e.getUniqueName()]=e}function t(e){function i(e){for(var n=0;n<e.length;n++){var t=e[n];o(t),0<t.importedFiles.length&&i(t.importedFiles)}}i(e.importedFiles)}pinegrow.stylesheets&&$.each(pinegrow.stylesheets.getAllCrsaStylesheets(),function(e,n){if(n.inline||n.ignore)return!0;(n=n.compiledFile?n.sourceStylesheet:n).compiledStylesheets.forEach(function(e){o(e),t(e)})})},h=function(){for(var e in s){e=s[e];e.varsPane&&(e.varsPane.remove(),e.varsPane=null)}s={},r=null},f=function(){h(),p()},_=function(){f(),g()};pinegrow.addEventHandler("on_page_stylesheets_loaded",e),pinegrow.addEventHandler("on_page_closed",n),pinegrow.addEventHandler("on_css_active_rule_changed",t),pinegrow.addEventHandler("on_css_active_var_changed",t),pinegrow.addEventHandler("on_css_source_changed",i),a.whenVisible(function(){_()}),a.on("crsa-var-search",function(e){a.whenVisible(function(){c="bg12",g()})}),a.onResize=function(){for(var e in s){e=s[e];e.varsPane&&e.varsPane.updateLayout()}},a.onDestroy=function(){h(),pinegrow.removeEventHandler("on_page_stylesheets_loaded",e),pinegrow.removeEventHandler("on_page_closed",n),pinegrow.removeEventHandler("on_css_active_rule_changed",t),pinegrow.removeEventHandler("on_css_active_var_changed",t),pinegrow.removeEventHandler("on_css_source_changed",i)}},PgVarDialogView=function(e){var n=null,t=$('<div class="pg-var-dialog"></div>'),i=this.view=new PgUIView(t);t.append(e),this.setStylesheetVar=function(e){n=e},i.onDestroy=function(){n&&n.remove(),n=null}};