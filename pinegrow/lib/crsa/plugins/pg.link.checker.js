class PgLinkChecker{constructor(){var t=this;this.errors=[],pinegrow.addEventHandler("on_page_menu",function(r,e){return e.push({label:"Check for broken links...",kbd:null,action:function(){t.checkLinksAndDisplayErrors(r.sourceNode)}}),e})}addError(r,e,t,o){this.errors.push({pgel:r,attr:t,url:o,error:e})}elementSelector(r){return'<b data-pg-id="'+r.getId()+'">'+r.getName({short:!0})+"</b>"}validate(r,e,t){var o=this,n=(this.errors=[],r.getPage()),s=[],l=pinegrow.getCurrentProject(),i=(r.goThroughAllUrls(function(r,e,t){try{var o;r.startsWith("javascript:")||r.startsWith("#")||r.startsWith("mailto:")||r.startsWith("tel:")||(o=null,r.startsWith("/")?l&&(o=l.makeUrlAbsolute(r)):o=new URL(r,n.url).toString(),o&&s.push({pgel:t,attr:e,url:o,rel_url:r}))}catch(r){}return r}),s.length),a=(e&&e(0,i),function(r){setTimeout(function(){e&&e(i-s.length,i),s.length?c():t&&t()},r)}),c=function(){var r,e=s.shift();crsaIsFileUrl(e.url)?(r=crsaMakeFileFromUrl(e.url),crsaIsFileExist(r)||o.addError(e.pgel,`File <code>${e.rel_url}</code> not found.`,e.attr,e.rel_url),a(50)):fetch(e.url,{}).then(r=>{r.ok||o.addError(e.pgel,`URL <code>${e.rel_url}</code> not found.`,e.attr,e.rel_url),a(0)}).catch(r=>{console.log("Error getting remote file "+e.url,r),o.addError(e.pgel,`URL <code>${e.rel_url}</code> error.`,e.attr,e.rel_url),a(0)})};a(0)}hasErrors(){return 0<this.errors.length}describeErrors(){var t="";return 0===this.errors.length?t+="<li>No errors found.</li>":this.errors.forEach(function(r){var e=crsaGetSummaryStr(r.pgel.text(null,!0)||"",10,!0);t+='<li data-pg-id="'+r.pgel.getId()+'"><span>'+r.pgel.getName({short:!0})+(e.length?` | <span style="opacity:0.65;">${e}</span>`:"")+"</span> - "+r.error+"</li>"}),t}checkLinksAndDisplayErrors(o){var n=this,s=(n.hasErrors(),'<p class="status"></p><p>Broken links:</p><ul style="user-select: text;">'),r=(s+="</ul>",o.getPage());PgQuickDialog("Broken links in "+r.getName(),function(t){s=s+'<p class="help">Click on the element on the above list to select it. If you can\'t see the element in the tree, switch to Source code <i class="icon icon-KODA"></i> tree mode.'+"</p>";function r(r,e){t.find("ul").html(n.describeErrors()),t.find("p.status").html(`Checking... ${r} of ${e} done.`)}function e(){n.validate(o,r,function(){pinegrow.showQuickMessage("Done."),t.find("ul").html(n.hasErrors()?n.describeErrors():"<li>No errors found.</li>"),t.find("p.status").html(`Done.`)})}t.addClass("pg-code-validator-results"),t.on("click","[data-pg-id]",function(r){r.preventDefault();var e=$(this).attr("data-pg-id"),t=getPgNodeByPgId(e);t&&(t.scrollTo(),setTimeout(function(){pinegrow.selectElement(t),pinegrow.showQuickMessage(t.getName({short:!0})+" was selected.")},100))}),s+='<button class="pg-button pg-button-primary refresh">Refresh</button>';return t.on("click","button.refresh",function(r){r.preventDefault(),e()}),e(),s},{width:480})}}$(function(){pgf.edit_html&&$("body").one("pinegrow-ready",function(r,e){new PgLinkChecker})});