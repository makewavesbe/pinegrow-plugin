var PgCSSActiveRulesView=function(){function n(e){e=e||pinegrow.getSelectedElement(),c&&c.ready&&c.remove(),(c=new PgCSSActiveRulesEditor(e,s)).ready&&c.show()}var s=$('<div id="crsa-css-active-rules" class="crsa-css-active-rules rule-list crsa-stylesheets"></div>'),i=new PgUIView(s),c=null;this.view=i;i.on("crsa-element-selected",function(e,s){i.whenVisible(function(){n(s)})}),pinegrow.addEventHandler("on_css_source_changed",function(e,s){i.whenVisible(function(){s&&"active_css"==s.by||n()})}),i.on("crsa-stylesheets-changed",function(e,s){i.whenVisible(function(){s&&"active_css"==s.by||n()})})};