var CrsaHttpServer=function(r){function b(e){var t=(e=crsaRemoveUrlParameters(e)).lastIndexOf("."),r={".bmp":"image/bmp",".css":"text/css",".gif":"image/gif",".ico":"image/x-icon",".htm":"text/html",".html":"text/html",".php":"application/x-php",".php5":"text/html",".asp":"text/html",".aspx":"text/html",".cfm":"text/html",".cfml":"text/html",".cfc":"text/html",".shtml":"text/html",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".js":"application/javascript",".ts":"application/typescript",".cshtml":"text/x-cshtml",".razor":"text/x-cshtml",".xml":"application/xml",".pgml":"application/xml",".json":"application/json",".otf":"font/opentype",".woff":"application/font-woff",".woff2":"application/font-woff",".ttf":"application/x-font-ttf",".svg":"image/svg+xml",".png":"image/png",".text":"text/plain",".txt":"text/plain",".mp3":"audio/mpeg",".mp4":"video/mp4",".webm":"video/webm",".ogv":"video/ogg",".ogg":"audio/ogg",".less":"text/x-less",".scss":"text/x-scss",default:null};return t=!(t=r[(-1===t?"default":e.substr(t)).toLowerCase()]||r["default"])&&pinegrow.isFileEditable(e)?"text/html":t}var n,o,t,v={directory:"",port:parseInt(process.env[pgf.product+"_WEBSERVER_PORT"]||pinegrow.getSetting("webserver-port","40000")),host:process.env[pgf.product+"_WEBSERVER_HOST"]||pinegrow.getSetting("webserver-host","localhost")},y={http:require("http"),url:require("url"),fs:require("fs"),path:require("path")},P=this,i=(this.serverStarted=!1,this.url="http://"+$.trim(v.host)+":"+v.port,this.encodeUrl=function(e){return e},this.decodeUrl=function(e){return e},this.makeUrl=function(e){if(!pgf.use_server)return e;if(pgf.root_urls){var t=pinegrow.getCurrentProject();if(t){t=t.getRelativeUrl(e);if(!crsaIsAbsoluteUrl(t))return this.url+"/"+t}}return(e=0===e.indexOf("file://")?this.encodeUrl(e):e).replace("file://",this.url+"/file://")},this.getOriginalUrl=function(e){if(e&&0==e.indexOf(this.url+"/")){if(e=e.replace(this.url+"/",""),pgf.root_urls&&e.indexOf("://")<0){var t=pinegrow.getCurrentProject();if(t)return t.getAbsoluteUrl(e)}(e=this.decodeUrl(e)).indexOf("://")<0&&(e="file://"+e)}return e},this.makeProxyUrl=function(e,t){return null==e?"":(0===e.indexOf("file://")?e=this.makeUrl(e):crsaIsAbsoluteUrl(e)&&0!=e.indexOf(this.url)&&(e=this.url+"/"+this.encodeUrl(e)),e)},this.getUrlWithoutPinegrowParameters=function(e){return e=e&&(e=e.replace(/[\&]*(pgedit|pglive|pgid|pgids|pgnoids|pgpvid)=[a-z0-9]+/g,"")).replace(/\?$/,"")},this.getMimeType=b,this.testServer=function(t){var r,n;r=5e3,n=fetch(this.url+"/pginternal/detect"),new Promise(function(e,t){setTimeout(function(){t(new Error("The request is taking too long."))},r),n.then(e,t)}).then(function(e){if(e.ok)return e;throw Error(e.statusText)}).then(function(e){return e.text()}).then(function(e){0<=e.indexOf("<h1>OK</h1>")?t("OK"):t("ANOTHER_SERVER","<p><b>Another server is already running</b> on network ports selected for Pinegrow (<b>"+v.port+" to "+(v.port+10)+"</b>).</p><p>Stop the app that is using these ports or go to <b>Support -&gt; Settings</b> and change the value of the <b>Internal webserver port</b> setting.</p><p>Note: Pinegrow needs its own internal webserver during editing. Other webservers like Apache, Nginx etc will not do.</p>")}).catch(function(e){console.error(e),t("NOT_ACCESSIBLE","<p><b>The internal webserver is not accessible at "+this.url+".</b> Error received: <code>"+(e||"")+"</code></p><p>The most likely reason is that your firewall or anti-virus software is blocking Pinegrow from accessing the network. In that case add a firewall rule that will allow Pinegrow to listen to the incoming network connections on port range <b>"+v.port+" to "+(v.port+10)+"</b>.</p>")})},this.releaseRequestContextForPage=pgCurrentRequestContext.releaseRequestContextForPage,this.setCurrentRequestContext=pgCurrentRequestContext.setCurrentRequestContext,this.createProxyUrlNodeOutputFilter=pgCurrentRequestContext.createProxyUrlNodeOutputFilter,this.readRemoteUrl=function(n,o){var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onreadystatechange=function(e){var t,r;4==i.readyState&&(200==i.status?(t=i.response)&&(t=new Buffer(new Uint8Array(t)),r=(r=i.getResponseHeader("content-type"))&&r.split(";")[0],o(null,t,r)):o("Error "+i.status+": Not found or can't get remote file: "+n))},i.onerror=function(e){o("Not found or can't get remote file: "+n+"Error: "+e.toString())};try{i.send(null)}catch(e){o("Not found or can't get remote file: "+n+"Error: "+e.toString())}},0),a={},s=null;this.destroy=function(e){var t;s?(console.log("Stopping internal server..."),t=new CrsaProfile("stopInternalServer"),Object.keys(a).forEach(function(e){a[e].destroy()}),s.close(function(){console.log("Internal server stopped."),t.show("Stopped"),e&&e()}),s=null):e&&e()};try{pgf.use_server&&(s=y.http.createServer(function(m,w){function e(){var t=y.url.parse(m.url,!0),e=null;try{"/"===(e=decodeURIComponent(t.pathname))&&(e+="index.html");var r={};if(r["/pginternal/detect"]=function(e,t,r){r.writeHead(200,{"content-type":"text/html","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"}),r.write("<h1>OK</h1>"),r.end()},e in r)return r[e](e,m,w);var o,s,n=null,i=null,l=("referer"in m.headers&&(n=(i=n=P.getOriginalUrl(m.headers.referer)).replace(/[\?\#].*/g,"")),e.match(/https?\:\/\/pinegrow\.com\/placeholders/)?(h=e.match(/img.*$/))&&(e=decodeURIComponent(crsaMakeUrlFromFile(crsaGetAppDir())+"placeholders/"+h[0])):0<=e.indexOf(pinegrow.thumbnailMaker.host)?e=decodeURIComponent(pinegrow.thumbnailMaker.getStoredThumbnailFilePath(e)):pgf.root_urls&&(p=pinegrow.getCurrentProject())&&e.startsWith("/")&&e.indexOf("://")<0&&(e=decodeURIComponent(p.getAbsoluteUrl(e))),(0<=e.indexOf("://")||0==e.indexOf("///")||n&&0<=n.indexOf("://")&&n.indexOf("file://")<0)&&e.indexOf("file://")<0);if(l){try{o=decodeURIComponent(t.path.substr(1))}catch(e){o=t.path.substr(1)}s=P.getUrlWithoutPinegrowParameters(o)}else{for(o=y.path.join(v.directory,e.replace("file://",""));1<o.length&&"\\"==o.charAt(0);)o=o.substr(1);"\\"!=y.path.sep||o.match(/^[a-z]\:/i)||(o="\\\\"+o),s=crsaIsFileUrl(o)?o:crsaMakeUrlFromFile(o)}}catch(e){return x(500,"Malformed url")}function a(e,t){var r,n=t||b(o);(n=pinegrow.isFileEditable(o)?"text/html":n)||(r=pinegrow.getCurrentProject())&&r.isFileInProject(o)&&(n="application/octet-stream"),n?((0<=["image/gif","image/jpeg","image/png","application/octet-stream"].indexOf(n)||n.startsWith("image"))&&l?w.writeHead(200,{"content-type":n,"Cache-Control":"max-age=60000, public","Content-Length":Buffer.byteLength(e)}):w.writeHead(200,{"content-type":n,"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0","Content-Length":Buffer.byteLength(e)}),w.write(e),w.end()):x(403,"Type not allowed")}var c=!1,r=t.query.pgpagelib&&"1"==t.query.pgpagelib,p=null,u=pinegrow.getCrsaPageByUrl(s),g=(u&&!r||(u=pinegrow.pageLibManager.get(crsaRemoveUrlParameters(s))),!1),d=(t.query.pglive&&(c=!0),t.query.pgnoids&&"1"==t.query.pgnoids&&(g=!0),t.query.pgpvid&&(p=parseInt(t.query.pgpvid)),m.headers["user-agent"]&&m.headers["user-agent"].indexOf("PinegrowInternal")<0&&(g=c=!0),m.headers["user-agent"]&&0<=m.headers["user-agent"].indexOf("PinegrowPageLib")&&0,null);if(u)p&&(d=u.getPageViewById(p)),u.whenParsed(function(i,a){try{function n(e){var t=new pgParser,r=(t.replaceExistingIds=!0,new CrsaProfile(!0)),n=e.toString("utf8"),o=pinegrow.getCurrentProject();o&&(o=o.getBackgroundPageForUrl(s))&&(n=o.getCode()),t.parse(n),i.sourceNode=t.rootNode,i.onSourceParsed&&i.onSourceParsed(i),i.handleWrapperOnPageLoad(a),r.show("HTML parse")}var e,t;l?(e=pinegrow.getMappedRemoteFileForUrl(o,"html"))&&crsaIsFileExist(e)?(t=y.fs.readFileSync(e),n(t)):(u.forceReload&&(o=crsaAppendQueryToUrl(o,[`pgz=`+(new Date).getTime()])),P.readRemoteUrl(o,function(e,t,r){e?a("error",e):n(t)})):(u.original_new_url&&(o=crsaMakeFileFromUrl(u.original_new_url)),t=y.fs.readFileSync(o),n(t))}catch(e){console.log("File "+o+" can not be read by Pinegrow: "+e),a("error",e)}},function(e){e.callGlobalFrameworkHandler("on_page_parsed_in_proxy",e.sourceNode,e.url,c);var t,r,n,o=e.javascriptEnabled;c&&(e.javascriptEnabled=!0),pgCurrentRequestContext.setCurrentRequestContext(s,e.sourceNode,c,e,d),t=!g||e.forcePgIds?e.sourceNode.toStringWithIds(!0,null,pgCurrentRequestContext.createProxyUrlNodeOutputFilter):e.sourceNode.toStringOriginal(!0,null,pgCurrentRequestContext.createProxyUrlNodeOutputFilter),e.javascriptEnabled=o,r=t,e=e.sourceNode,n=function(e){var t=new Buffer(e);w.writeHead(200,{"content-type":"text/html","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0","Content-Length":Buffer.byteLength(t)}),w.write(t),w.end()},u?u.wrapper_url?(o=e.clone(!0,!0),n(r=(o=u.getHTMLNodeForBrowserWithSupportForWrapper(o)).toStringWithIds(!0,{indent:"    ",php_ids:!1,assign_missing_ids:!1,remove_collapsed:!1,remove_hidden:!1},pgCurrentRequestContext.createProxyUrlNodeOutputFilter))):e.findIncludingSelf("body",!0)?n(r):n(r='<body data-pg-id="'+e.getId()+'">'+r+"</body>"):n(r)},function(e,t){x(404,"File "+o+" can not be read by Pinegrow: "+t)});else{if(n){y.url.parse(n,!0);if((h=i.match(/[&\?]pgpvid=([0-9]+)/))&&(p=parseInt(h[1]),d=pinegrow.getPageViewById(p))&&(referedPage=d.getPage()),n.match(/[&\?]pglive=1/)&&(c=!0),s.match(/\.css($|[^a-z])/g)){e=pinegrow.stylesheets.findCrsaStylesheetForUrl(s,!1,!0),r=0<e.length?e[0]:null;if(r&&r.loaded)return r.getCssSource(function(e){e=e||"",e=pgAddProxyLinksToStyleAttribute(e),d&&(e=d.emulateCSSFeatures(e));var t=new Buffer(e);a(t,"text/css")},!0!==r.ignore)}}if(l){"referer"in m.headers?(t=P.getOriginalUrl(m.headers.referer).replace(/^[a-z]+:\/\//i,"").split(/[//\?\#]/)).length&&(i=t[0],0===o.indexOf("//")?((t=document.createElement("a")).href=m.headers.referer,o=t.protocol+o):o.indexOf("://")<0&&(o="http://"+i+"/"+o)):0===o.indexOf("//")&&(o="http:"+o);var f=pinegrow.getMappedRemoteFileForUrl(o,null);if(f&&crsaIsFileExist(f))y.fs.readFile(f,function(e,t){e?(x(404,"Not found - File "+f+" can not be read by Pinegrow: "+e),console.log("File "+f+" can not be read by Pinegrow: "+e)):a(t)});else{if(u){var h=u.getAsset(o);if(null!==h)return!1===h.data?x(404,"Not found or can't get remote file"):a(h.data,h.mime)}P.readRemoteUrl(o,function(e,t,r){e?(x(404,e),u&&u.addAsset(o,!1,r)):(u&&u.addAsset(o,t,r),a(t,r))})}}else y.fs.readFile(o,function(e,t){e?(x(404,"Not found - File "+o+" can not be read by Pinegrow: "+e),console.log("File "+o+" can not be read by Pinegrow: "+e)):a(t)})}}var t,x=function(e,t){w.writeHead(e,{"content-type":"text/html"}),w.write("<h1>"+e+" - "+escapeHtmlCode(t)+"</h1>"),w.end()};m.client.localAddress==m.client.remoteAddress?e():(t=m.client.remoteAddress,o[t]?(x(403,"Connection not allowed"),pinegrow.showQuickMessage("Connection from <b>"+t+"</b> was blocked. Restart Pinegrow to flush blocked list.",4e3,!0)):n[t]?e():pinegrow.showAlert(`<p>Should Pinegrow accept network connections from <b>${t}</b>?</p><p>Local connections are always allowed. Restart Pinegrow to flush the allowed and the blocked lists.</p>`,"Allow network connection?","Block","Allow",function(){o[t]=!0,x(403,"Connection not allowed")},function(){n[t]=!0,e()}))}),n={},o={},t=0,s.keepAliveTimeout=0,s.maxConnections=100,s.on("listening",function(e){P.testServer(function(e,t){r&&r(e,t,P)}),pinegrow.dispatchEvent("on_server_created")}),s.on("error",function(e){console.log("Could not start internal http server."),t<20?(t+=2,P.url="http://"+$.trim(v.host)+":"+(v.port+t),P.port=v.port+t,s.listen(v.port+t)):r&&r("NOT_STARTED","<p><b>Could not start the internal webserver</b> on any of the ports in range <b>"+v.port+" to "+(v.port+10)+"</b>.</p><p>The most likely reasons are:</p><ul><li> Another app is using these ports. Go to <b>Support -&gt; Settings</b> and change the value of the <b>Internal webserver port</b> setting.</li><li>Your firewall or anti-virus software is blocking Pinegrow from using these ports. In that case add a firewall rule that will allow Pinegrow to use the network port.</li></ul>",P)}),s.on("connection",function(e){var t=++i;(a[t]=e).on("close",function(){delete a[t]})}),P.port=v.port+t,s.listen(v.port+t))}catch(e){}},PgApiServer=function(n){var r;pgf.editor_sync&&(r=require("socket.io")(n,{allowEIO3:!0,maxHttpBufferSize:1e8}),this.addEndPoint=function(e,t){return r.of("/"+e).on("connection",function(e){t(e)}).on("error",function(e){console.log("Socket error "+e)}).on("connect_error",function(e){console.log(`connect_error due to `+e.message)}).on("disconnect",function(e,t){console.log(t.context.status),console.log(t.context.responseText)})},this.addEndPoint("core",function(e){var t="Pinegrow",r=pinegrow.getCurrentProject();r&&(t=r.getName()),e.emit("introduceInstance",{name:t,port:n})}))};