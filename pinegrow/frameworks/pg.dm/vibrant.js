!function i(n,e,a){function h(o,t){if(!e[o]){if(!n[o]){var r="function"==typeof require&&require;if(!t&&r)return r(o,!0);if(s)return s(o,!0);r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}r=e[o]={exports:{}};n[o][0].call(r.exports,function(t){var r=n[o][1][t];return h(r||t)},r,r.exports,i,n,e,a)}return e[o].exports}for(var s="function"==typeof require&&require,t=0;t<a.length;t++)h(a[t]);return h}({1:[function(t,r,o){var w,y,R,S,I=I||{map:function(t,o){var i={};return o?t.map(function(t,r){return i.index=r,o.call(i,t)}):t.slice()},naturalOrder:function(t,r){return t<r?-1:r<t?1:0},sum:function(t,i){var n={};return t.reduce(i?function(t,r,o){return n.index=o,t+i.call(n,r)}:function(t,r){return t+r},0)},max:function(t,r){return Math.max.apply(null,r?I.map(t,r):t)}},i=(y=8-(w=5),R=1e3,S=.75,N.prototype={volume:function(t){var r=this;return r._volume&&!t||(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(t){var r=this,o=r.histo;if(!r._count_set||t){for(var i,n,e=0,a=r.r1;a<=r.r2;a++)for(i=r.g1;i<=r.g2;i++)for(n=r.b1;n<=r.b2;n++)e+=o[U(a,i,n)]||0;r._count=e,r._count_set=!0}return r._count},copy:function(){var t=this;return new N(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(t){var r=this,o=r.histo;if(!r._avg||t){for(var i,n,e,a=0,h=1<<8-w,s=0,u=0,c=0,p=r.r1;p<=r.r2;p++)for(n=r.g1;n<=r.g2;n++)for(e=r.b1;e<=r.b2;e++)a+=i=o[U(p,n,e)]||0,s+=i*(p+.5)*h,u+=i*(n+.5)*h,c+=i*(e+.5)*h;r._avg=a?[~~(s/a),~~(u/a),~~(c/a)]:[~~(h*(r.r1+r.r2+1)/2),~~(h*(r.g1+r.g2+1)/2),~~(h*(r.b1+r.b2+1)/2)]}return r._avg},contains:function(t){var r=this,o=t[0]>>y;return gval=t[1]>>y,bval=t[2]>>y,o>=r.r1&&o<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}},x.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,o=0;o<r.size();o++)if(r.peek(o).vbox.contains(t))return r.peek(o).color;return this.nearest(t)},nearest:function(t){for(var r,o,i,n=this.vboxes,e=0;e<n.size();e++)((o=Math.sqrt(Math.pow(t[0]-n.peek(e).color[0],2)+Math.pow(t[1]-n.peek(e).color[1],2)+Math.pow(t[2]-n.peek(e).color[2],2)))<r||void 0===r)&&(r=o,i=n.peek(e).color);return i},forcebw:function(){var t=this.vboxes,r=(t.sort(function(t,r){return I.naturalOrder(I.sum(t.color),I.sum(r.color))}),t[0].color),r=(r[0]<5&&r[1]<5&&r[2]<5&&(t[0].color=[0,0,0]),t.length-1),o=t[r].color;251<o[0]&&251<o[1]&&251<o[2]&&(t[r].color=[255,255,255])}},{quantize:function(t,r){if(!t.length||r<2||256<r)return!1;a=t,e=new Array(1<<3*w),a.forEach(function(t){o=t[0]>>y,i=t[1]>>y,n=t[2]>>y,o=U(o,i,n),e[o]=(e[o]||0)+1});var o,i,n,e,a,h,s,u,c,p,f,A,l,T,g=e,v=(g.forEach(function(){0}),a=g,l=f=c=1e6,T=A=p=0,t.forEach(function(t){h=t[0]>>y,s=t[1]>>y,u=t[2]>>y,h<c?c=h:p<h&&(p=h),s<f?f=s:A<s&&(A=s),u<l?l=u:T<u&&(T=u)}),new N(c,p,f,A,l,T,a)),_=new L(function(t,r){return I.naturalOrder(t.count(),r.count())});function M(t,r){for(var o,i=1,n=0;n<R;)if((o=t.pop()).count()){var e=function(t,u){if(u.count()){var r=u.r2-u.r1+1,o=u.g2-u.g1+1,i=u.b2-u.b1+1,i=I.max([r,o,i]);if(1==u.count())return[u.copy()];var c,n,e,a,p=0,f=[],A=[];if(i==r)for(c=u.r1;c<=u.r2;c++){for(a=0,n=u.g1;n<=u.g2;n++)for(e=u.b1;e<=u.b2;e++)a+=t[U(c,n,e)]||0;p+=a,f[c]=p}else if(i==o)for(c=u.g1;c<=u.g2;c++){for(a=0,n=u.r1;n<=u.r2;n++)for(e=u.b1;e<=u.b2;e++)a+=t[U(n,c,e)]||0;p+=a,f[c]=p}else for(c=u.b1;c<=u.b2;c++){for(a=0,n=u.r1;n<=u.r2;n++)for(e=u.g1;e<=u.g2;e++)a+=t[U(n,e,c)]||0;p+=a,f[c]=p}return f.forEach(function(t,r){A[r]=p-t}),h(i==r?"r":i==o?"g":"b")}function h(t){var r,o,i,n,e,a=t+"1",h=t+"2",s=0;for(c=u[a];c<=u[h];c++)if(p/2<f[c]){for(i=u.copy(),n=u.copy(),e=(r=c-u[a])<=(o=u[h]-c)?Math.min(u[h]-1,~~(c+o/2)):Math.max(u[a],~~(c-1-r/2));!f[e];)e++;for(s=A[e];!s&&f[e-1];)s=A[--e];return i[h]=e,n[a]=i[h]+1,[i,n]}}}(g,o),a=e[0],e=e[1];if(!a)return;if(t.push(a),e&&(t.push(e),i++),r<=i)return;if(n++>R)return}else t.push(o),n++}_.push(v),M(_,S*r);for(var b=new L(function(t,r){return I.naturalOrder(t.count()*t.volume(),r.count()*r.volume())});_.size();)b.push(_.pop());M(b,r-b.size());for(var d=new x;b.size();)d.push(b.pop());return d}});function U(t,r,o){return(t<<2*w)+(r<<w)+o}function L(t){var r=[],o=!1;function i(){r.sort(t),o=!0}return{push:function(t){r.push(t),o=!1},peek:function(t){return o||i(),r[t=void 0===t?r.length-1:t]},pop:function(){return o||i(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return o||i(),r}}}function N(t,r,o,i,n,e,a){var h=this;h.r1=t,h.r2=r,h.g1=o,h.g2=i,h.b1=n,h.b2=e,h.histo=a}function x(){this.vboxes=new L(function(t,r){return I.naturalOrder(t.vbox.count()*t.vbox.volume(),r.vbox.count()*r.vbox.volume())})}r.exports=i.quantize},{}],2:[function(n,t,r){!(function(){var T,g,t,e=[].slice;function r(t,r){this.rgb=t,this.population=r}function o(t,r,o){var i,n,e,a,h,s,u,c,p,f,A,l;this.swatches=(i=this.swatches,n=this,function(){return i.apply(n,arguments)}),void 0===r&&(r=64),void 0===o&&(o=5),c=new T(t);try{for(A=c.getImageData().data,f=c.getPixelCount(),e=[],u=0;u<f;)l=A[(p=4*u)+0],s=A[p+1],a=A[p+2],125<=A[p+3]&&(250<l&&250<s&&250<a||e.push([l,s,a])),u+=o;h=this.quantize(e,r),this._swatches=h.vboxes.map(function(t){return new g(t.color,t.vbox.count())}),this.maxPopulation=this.findMaxPopulation,this.generateVarationColors(),this.generateEmptySwatches()}finally{c.removeCanvas()}}function i(t){this.canvas=t,this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width,this.height=this.canvas.height}window.Swatch=(r.prototype.hsl=void 0,r.prototype.rgb=void 0,r.prototype.population=1,r.yiq=0,r.prototype.getHsl=function(){return this.hsl||(this.hsl=t.rgbToHsl(this.rgb[0],this.rgb[1],this.rgb[2]))},r.prototype.getPopulation=function(){return this.population},r.prototype.getRgb=function(){return this.rgb},r.prototype.getHex=function(){return"#"+((1<<24)+(this.rgb[0]<<16)+(this.rgb[1]<<8)+this.rgb[2]).toString(16).slice(1,7)},r.prototype.getTitleTextColor=function(){return this._ensureTextColors(),this.yiq<200?"#fff":"#000"},r.prototype.getBodyTextColor=function(){return this._ensureTextColors(),this.yiq<150?"#fff":"#000"},r.prototype._ensureTextColors=function(){if(!this.yiq)return this.yiq=(299*this.rgb[0]+587*this.rgb[1]+114*this.rgb[2])/1e3},g=r),window.Vibrant=(o.prototype.quantize=n("quantize"),o.prototype._swatches=[],o.prototype.TARGET_DARK_LUMA=.26,o.prototype.MAX_DARK_LUMA=.45,o.prototype.MIN_LIGHT_LUMA=.55,o.prototype.TARGET_LIGHT_LUMA=.74,o.prototype.MIN_NORMAL_LUMA=.3,o.prototype.TARGET_NORMAL_LUMA=.5,o.prototype.MAX_NORMAL_LUMA=.7,o.prototype.TARGET_MUTED_SATURATION=.3,o.prototype.MAX_MUTED_SATURATION=.4,o.prototype.TARGET_VIBRANT_SATURATION=1,o.prototype.MIN_VIBRANT_SATURATION=.35,o.prototype.WEIGHT_SATURATION=3,o.prototype.WEIGHT_LUMA=6,o.prototype.WEIGHT_POPULATION=1,o.prototype.VibrantSwatch=void 0,o.prototype.MutedSwatch=void 0,o.prototype.DarkVibrantSwatch=void 0,o.prototype.DarkMutedSwatch=void 0,o.prototype.LightVibrantSwatch=void 0,o.prototype.LightMutedSwatch=void 0,o.prototype.HighestPopulation=0,o.prototype.generateVarationColors=function(){return this.VibrantSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.LightVibrantSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.DarkVibrantSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.MutedSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.LightMutedSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.DarkMutedSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION)},o.prototype.generateEmptySwatches=function(){var t;if(void 0===this.VibrantSwatch&&void 0!==this.DarkVibrantSwatch&&((t=this.DarkVibrantSwatch.getHsl())[2]=this.TARGET_NORMAL_LUMA,this.VibrantSwatch=new g(o.hslToRgb(t[0],t[1],t[2]),0)),void 0===this.DarkVibrantSwatch&&void 0!==this.VibrantSwatch)return(t=this.VibrantSwatch.getHsl())[2]=this.TARGET_DARK_LUMA,this.DarkVibrantSwatch=new g(o.hslToRgb(t[0],t[1],t[2]),0)},o.prototype.findMaxPopulation=function(){for(var t,r=0,o=this._swatches,i=0,n=o.length;i<n;i++)t=o[i],r=Math.max(r,t.getPopulation());return r},o.prototype.findColorVariation=function(t,r,o,i,n,e){for(var a,h,s,u=void 0,c=0,p=this._swatches,f=0,A=p.length;f<A;f++)s=(h=p[f]).getHsl()[1],a=h.getHsl()[2],n<=s&&s<=e&&r<=a&&a<=o&&!this.isAlreadySelected(h)&&(s=this.createComparisonValue(s,i,a,t,h.getPopulation(),this.HighestPopulation),void 0===u||c<s)&&(u=h,c=s);return u},o.prototype.createComparisonValue=function(t,r,o,i,n,e){return this.weightedMean(this.invertDiff(t,r),this.WEIGHT_SATURATION,this.invertDiff(o,i),this.WEIGHT_LUMA,n/e,this.WEIGHT_POPULATION)},o.prototype.invertDiff=function(t,r){return 1-Math.abs(t-r)},o.prototype.weightedMean=function(){for(var t,r=1<=arguments.length?e.call(arguments,0):[],o=0,i=0,n=0;n<r.length;)o+=r[n]*(t=r[n+1]),i+=t,n+=2;return o/i},o.prototype.swatches=function(){return{Vibrant:this.VibrantSwatch,Muted:this.MutedSwatch,DarkVibrant:this.DarkVibrantSwatch,DarkMuted:this.DarkMutedSwatch,LightVibrant:this.LightVibrantSwatch,LightMuted:this.LightMutedSwatch}},o.prototype.isAlreadySelected=function(t){return this.VibrantSwatch===t||this.DarkVibrantSwatch===t||this.LightVibrantSwatch===t||this.MutedSwatch===t||this.DarkMutedSwatch===t||this.LightMutedSwatch===t},o.rgbToHsl=function(t,r,o){var i,n,e,a,h,s;if(t/=255,r/=255,o/=255,s=n=void 0,e=((a=Math.max(t,r,o))+(h=Math.min(t,r,o)))/2,a===h)n=s=0;else{switch(i=a-h,s=.5<e?i/(2-a-h):i/(a+h),a){case t:n=(r-o)/i+(r<o?6:0);break;case r:n=(o-t)/i+2;break;case o:n=(t-r)/i+4}n/=6}return[n,s,e]},o.hslToRgb=function(t,r,o){var i,n,e=void 0,a=void 0,h=void 0,s=function(t,r,o){return o<0&&(o+=1),1<o&&--o,o<1/6?t+6*(r-t)*o:o<1/2?r:o<2/3?t+(r-t)*(2/3-o)*6:t};return 0===r?e=a=h=o:(e=s(i=2*o-(n=o<.5?o*(1+r):o+r-o*r),n,t+1/3),a=s(i,n,t),h=s(i,n,t-1/3)),[255*e,255*a,255*h]},t=o),window.CanvasImage=(i.prototype.clear=function(){return this.context.clearRect(0,0,this.width,this.height)},i.prototype.update=function(t){return this.context.putImageData(t,0,0)},i.prototype.getPixelCount=function(){return this.width*this.height},i.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},i.prototype.removeCanvas=function(){return this.canvas.parentNode.removeChild(this.canvas)},T=i)}).call(this)},{quantize:1}]},{},[2]);