"use strict";(("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps=("undefined"!=typeof self?self:this).webpackChunk_polkadot_apps||[]).push([[9065],{69413:(e,t,r)=>{const s=r(31493);e.exports=f;const i=function(){function e(e){return void 0!==e&&e}try{return"undefined"!=typeof globalThis||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{},n={mapHttpRequest:p,mapHttpResponse:p,wrapRequestSerializer:m,wrapResponseSerializer:m,wrapErrorSerializer:m,req:p,res:p,err:d,errWithCause:d};function l(e,t){return"silent"===e?1/0:t.levels.values[e]}const o=Symbol("pino.logFuncs"),a=Symbol("pino.hierarchy"),c={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function u(e,t){const r={logger:t,parent:e[a]};t[a]=r}function f(e){(e=e||{}).browser=e.browser||{};const t=e.browser.transmit;if(t&&"function"!=typeof t.send)throw Error("pino: transmit option must have a send function");const r=e.browser.write||i;e.browser.write&&(e.browser.asObject=!0);const s=e.serializers||{},n=function(e,t){return Array.isArray(e)?e.filter((function(e){return"!stdSerializers.err"!==e})):!0===e&&Object.keys(t)}(e.browser.serialize,s);let a=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(a=!1);const d=Object.keys(e.customLevels||{}),p=["error","fatal","warn","info","debug","trace"].concat(d);"function"==typeof r&&p.forEach((function(e){r[e]=r})),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");const m=e.level||"info",y=Object.create(r);y.log||(y.log=w),function(e,t,r){const s={};t.forEach((e=>{s[e]=r[e]?r[e]:i[e]||i[c[e]||"log"]||w})),e[o]=s}(y,p,r),u({},y),Object.defineProperty(y,"levelVal",{get:function(){return l(this.level,this)}}),Object.defineProperty(y,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,v(this,z,y,"error"),v(this,z,y,"fatal"),v(this,z,y,"warn"),v(this,z,y,"info"),v(this,z,y,"debug"),v(this,z,y,"trace"),d.forEach((e=>{v(this,z,y,e)}))}});const z={transmit:t,serialize:n,asObject:e.browser.asObject,formatters:e.browser.formatters,levels:p,timestamp:g(e)};return y.levels=function(e){const t=e.customLevels||{};return{values:Object.assign({},f.levels.values,t),labels:Object.assign({},f.levels.labels,function(e){const t={};return Object.keys(e).forEach((function(r){t[e[r]]=r})),t}(t))}}(e),y.level=m,y.setMaxListeners=y.getMaxListeners=y.emit=y.addListener=y.on=y.prependListener=y.once=y.prependOnceListener=y.removeListener=y.removeAllListeners=y.listeners=y.listenerCount=y.eventNames=y.write=y.flush=w,y.serializers=s,y._serialize=n,y._stdErrSerialize=a,y.child=function(r,i){if(!r)throw new Error("missing bindings for child Pino");i=i||{},n&&r.serializers&&(i.serializers=r.serializers);const l=i.serializers;if(n&&l){var o=Object.assign({},s,l),a=!0===e.browser.serialize?Object.keys(o):n;delete r.serializers,h([r],a,o,this._stdErrSerialize)}function c(e){this._childLevel=1+(0|e._childLevel),this.bindings=r,o&&(this.serializers=o,this._serialize=a),t&&(this._logEvent=b([].concat(e._logEvent.bindings,r)))}c.prototype=this;const f=new c(this);return u(this,f),f.level=this.level,f},t&&(y._logEvent=b()),y}function v(e,t,r,n){if(Object.defineProperty(e,n,{value:l(e.level,r)>l(n,r)?w:r[o][n],writable:!0,enumerable:!0,configurable:!0}),!t.transmit&&e[n]===w)return;e[n]=function(e,t,r,n){return a=e[o][n],function(){const o=t.timestamp(),c=new Array(arguments.length),u=Object.getPrototypeOf&&Object.getPrototypeOf(this)===i?i:this;for(var f=0;f<c.length;f++)c[f]=arguments[f];if(t.serialize&&!t.asObject&&h(c,this._serialize,this.serializers,this._stdErrSerialize),t.asObject||t.formatters?a.call(u,function(e,t,r,i,n={}){const{level:l=(()=>e.levels.values[t]),log:o=(e=>e)}=n;e._serialize&&h(r,e._serialize,e.serializers,e._stdErrSerialize);const a=r.slice();let c=a[0];const u={};i&&(u.time=i),u.level=l(t,e.levels.values[t]);let f=1+(0|e._childLevel);if(f<1&&(f=1),null!==c&&"object"==typeof c){for(;f--&&"object"==typeof a[0];)Object.assign(u,a.shift());c=a.length?s(a.shift(),a):void 0}else"string"==typeof c&&(c=s(a.shift(),a));return void 0!==c&&(u.msg=c),o(u)}(this,n,c,o,t.formatters)):a.apply(u,c),t.transmit){const s=t.transmit.level||e._level,i=r.levels.values[s],a=r.levels.values[n];if(a<i)return;!function(e,t,r){const s=t.send,i=t.ts,n=t.methodLevel,l=t.methodValue,o=t.val,a=e._logEvent.bindings;h(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=i,e._logEvent.messages=r.filter((function(e){return-1===a.indexOf(e)})),e._logEvent.level.label=n,e._logEvent.level.value=l,s(n,e._logEvent,o),e._logEvent=b(a)}(this,{ts:o,methodLevel:n,methodValue:a,transmitLevel:s,transmitValue:r.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:l(e._level,r)},c)}};var a}(e,t,r,n);const c=function(e){const t=[];e.bindings&&t.push(e.bindings);let r=e[a];for(;r.parent;)r=r.parent,r.logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==c.length&&(e[n]=function(e,t){return function(){return t.apply(this,[...e,...arguments])}}(c,e[n]))}function h(e,t,r,s){for(const i in e)if(s&&e[i]instanceof Error)e[i]=f.stdSerializers.err(e[i]);else if("object"==typeof e[i]&&!Array.isArray(e[i]))for(const s in e[i])t&&t.indexOf(s)>-1&&s in r&&(e[i][s]=r[s](e[i][s]))}function b(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function d(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)void 0===t[r]&&(t[r]=e[r]);return t}function g(e){return"function"==typeof e.timestamp?e.timestamp:!1===e.timestamp?y:z}function p(){return{}}function m(e){return e}function w(){}function y(){return!1}function z(){return Date.now()}f.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},f.stdSerializers=n,f.stdTimeFunctions=Object.assign({},{nullTime:y,epochTime:z,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),e.exports.default=f,e.exports.pino=f}}]);