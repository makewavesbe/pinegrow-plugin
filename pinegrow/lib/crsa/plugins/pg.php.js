$(function(){$("body").one("pinegrow-ready",function(e,n){var a,p,r,t,o,i,s;pgf.edit_server_side_scripts&&(a=new PgFramework("pg.php","Server-side Scripts"),n.addFramework(a),a.default=!1,a.show_in_manager=!0,a.no_type_maps=!0,require("fs"),require("path"),a.detect=function(e){var a=crsaGetExtFromUrl(e.url);return!!(p(e.sourceNode)||a&&e.localFile&&0<=["php","php5","asp","aspx"].indexOf(a.toLowerCase()))},p=function(e){var a=!1;return e.walk(function(e){return!e.script_info||(a=e.script_info,!1)}),a},a.on_set_inline_style=function(e,a){a.css+="php {display:none !important; }            html.crsa-php-mark-areas php {            display: inline-block !important;            background-color: #FFF9BA;            color: #555;            }"},n.resetEditableFileTypes(),a.on_get_editable_file_types=function(e,a){a.push(".php"),a.push(".php4"),a.push(".php5"),a.push(".ctp"),a.push(".asp"),a.push(".aspx"),a.push(".erb")},a.on_can_make_change=function(e,a,p,t){return e.getCurrentFrameworkHandlerReturnValue("on_can_make_change")?e.getCurrentFrameworkHandlerReturnValue("on_can_make_change"):a.script&&"insert_element"===p?new PgEditException("Script elements can't have nested elements."):null},o=$('<li class="dropdown phc-menu"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span>PHP, ASP, ERB</span></a>    <ul class="dropdown-menu with-checkboxes">        <li><a href="#" class="php-menu-mark"><i class="icon icon-check"></i>Show server-side code</a></li>    </ul></li>'),n.addPluginControlToTopbar(a,o),r=(s=o.find(".php-menu-mark")).find("i"),(t=function(t){$.each(n.getAllPages(),function(e,a){var p=a.get$Html();p&&(t?p.addClass("crsa-php-mark-areas"):p.removeClass("crsa-php-mark-areas"))}),t?r.show():r.hide()})("1"==n.getSetting("php-mark-areas","1")),s.on("click",function(e){e.preventDefault();var a="1"==n.getSetting("php-mark-areas","1");t(a=!a),n.setSetting("php-mark-areas",a?"1":"0")}),s=o.find(".php-menu-mark"),new PgPageViewHelper("Show server side code","php-mark-areas","crsa-php-mark-areas",s),a.on_page_loaded=function(e){t("1"==n.getSetting("php-mark-areas","1"));var a='<div class="col <?php echo $active;?>">\n    <p><?php echo $title;?></p>\n</div>',p='<?php if($active) {?>\n    <div class="col active">\n<?php } else { ?>\n    <div class="col">\n<?php } ?>\n    ...\n</div>',a="<p>Server-side tags editing mode is designed for editing <b>HTML code with PHP, ASP and ERB tags</b>, not for general server-side code editing.</p><p>For best results the HTML layout should be valid, with all tags properly closed.</p><p>For example, this is OK:</p><pre>"+escapeHtmlCode(a)+"</pre><p>...but code like this will NOT display nicely in Pinegrow and editing &amp; saving it might lead to unintended results:</p><pre>"+escapeHtmlCode(p)+"</pre><p>Use <b>PHP, ASP, ERB -&gt; Show server-side code</b> in the toolbar menu to toggle PHP code display in page view.</p>";e.sourceNode.validateTree().length?n.showAlert(a="<p><b>Looks like the HTML code has some tags that are not closed properly.</b></p>"+a,"About PHP, ASP and ERB editing"):n.showNotice(a,"About PHP, ASP and ERB editing","about-php-editing")},a.on_page_refreshed=function(e){t("1"==n.getSetting("php-mark-areas","1"))},(o=new PgComponentType("php.tag","PHP Tag")).selector="php",o.code="<?php mmmm ?>",o.get_name=function(e){return"asp"!==e.attr("data-pg-script-type")?"php":"&lt;%"},a.addComponentType(o),i=[],[["<?php","<?php //code ?>"],["<?=","<?= $variable ?>"],["<?","<? //code ?>"],["<%","<% //code %>"],["<%=","<%= //code %>"],["<%:","<%: //code %>"],["<%#","<%# //code %>"]].forEach(function(e,a){var p=new PgComponentType("php.tag."+1,escapeHtmlCode(e[0]));p.selector=null,p.code=e[1],p.preview=escapeHtmlCode(e[1]),i.push(p)}),(s=new PgFrameworkLibSection("php.tags","PHP, ASP, ERB")).setComponentTypes(i),a.addLibSection(s))})});