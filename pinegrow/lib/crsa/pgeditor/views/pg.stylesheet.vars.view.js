var PgStylesheetVarsView=function(e){function a(){pgRemoveSpectrum(v),pgRemoveFilePicker(v),pgRemoveMultiselects(v);for(var e,n,a=r.scrollTop(),s=(v.html(""),0);s<o.length;s++)e=o[s],n=void 0,e.varsPane&&(e.varsPane.remove(),e.varsPane=null),n=$("<div/>").appendTo(v),e.varsPane=new PgStylesheetVars(e,n),e.varsPane.show();r.scrollTop(a)}var r=$('<div class="crsa-stylesheet-vars"></div>'),s=new PgUIView(r),o=[],v=(this.view=s,$('<div class="var-content-container"></div>').appendTo(r));s.whenVisible(function(){a()}),s.onResize=function(){for(var e=0;e<o.length;e++){var n=o[e];n.varsPane&&n.varsPane.updateLayout()}},s.on("crsa-stylesheets-changed",function(e,n){s.whenVisible(function(){n&&"vars"==n.by||a()})}),s.onDestroy=function(){for(var e=0;e<o.length;e++)o[e].varsPane.remove(),o[e].varsPane=null;o=[]}};