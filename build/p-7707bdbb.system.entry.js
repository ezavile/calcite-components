var __awaiter=this&&this.__awaiter||function(t,e,i,o){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function r(t){try{l(o.next(t))}catch(t){n(t)}}function s(t){try{l(o["throw"](t))}catch(t){n(t)}}function l(t){t.done?i(t.value):a(t.value).then(r,s)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,a,n,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,a&&(n=r[0]&2?a["return"]:r[0]?a["throw"]||((n=a["return"])&&n.call(a),0):a.next)&&!(n=n.call(a,r[1])).done)return n;if(a=0,n)r=[r[0]&2,n.value];switch(r[0]){case 0:case 1:n=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;a=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!n||r[1]>n[0]&&r[1]<n[3])){i.label=r[1];break}if(r[0]===6&&i.label<n[1]){i.label=n[1];n=r;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(r);break}if(n[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t];a=0}finally{o=n=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-25e908b3.system.js","./p-2c235db8.system.js","./p-4d1cae73.system.js","./p-e3fd77ce.system.js","./p-95dfb659.system.js"],(function(t){"use strict";var e,i,o,a,n,r,s,l,c,p,f;return{setters:[function(t){e=t.r;i=t.h;o=t.H;a=t.g},function(t){n=t.g},function(t){r=t.d;s=t.u;l=t.c;c=t.C},function(t){p=t.q},function(t){f=t.g}],execute:function(){var m={container:"container",arrow:"arrow"};var u=500;var d="data-calcite-tooltip-reference";var h="aria-describedby";var b='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;overflow:hidden;font-size:var(--calcite-font-size--2);line-height:1.375;border-radius:0.25rem;max-width:20rem;max-height:20rem}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';var y=t("calcite_tooltip",function(){function t(t){var i=this;e(this,t);this.offsetDistance=r;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.guid="calcite-tooltip-"+n();this.setUpReferenceElement=function(){i.removeReferences();i.effectiveReferenceElement=i.getReferenceElement();var t=i,e=t.el,o=t.referenceElement,a=t.effectiveReferenceElement;if(o&&!a){console.warn(e.tagName+': reference-element id "'+o+'" was not found.',{el:e})}i.addReferences();i.createPopper()};this.getId=function(){return i.el.id||i.guid};this.addReferences=function(){var t=i.effectiveReferenceElement;if(!t){return}var e=i.getId();t.setAttribute(d,e);t.setAttribute(h,e)};this.removeReferences=function(){var t=i.effectiveReferenceElement;if(!t){return}t.removeAttribute(d);t.removeAttribute(h)};this.show=function(){i.open=true};this.hide=function(){i.open=false}}t.prototype.offsetDistanceOffsetHandler=function(){this.reposition()};t.prototype.offsetSkiddingHandler=function(){this.reposition()};t.prototype.openHandler=function(){this.reposition()};t.prototype.placementHandler=function(){this.reposition()};t.prototype.referenceElementHandler=function(){this.setUpReferenceElement()};t.prototype.componentWillLoad=function(){this.setUpReferenceElement()};t.prototype.componentDidLoad=function(){this.reposition()};t.prototype.disconnectedCallback=function(){this.removeReferences();this.destroyPopper()};t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,o,a;return __generator(this,(function(n){t=this,e=t.popper,i=t.el,o=t.placement;a=this.getModifiers();e?s({el:i,modifiers:a,placement:o,popper:e}):this.createPopper();return[2]}))}))};t.prototype.getReferenceElement=function(){var t=this,e=t.referenceElement,i=t.el;return(typeof e==="string"?p(i,"#"+e):e)||null};t.prototype.getModifiers=function(){var t=this,e=t.arrowEl,i=t.offsetDistance,o=t.offsetSkidding;var a={name:"arrow",enabled:true,options:{element:e}};var n={name:"offset",enabled:true,options:{offset:[o,i]}};return[a,n]};t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.el,i=t.placement,o=t.effectiveReferenceElement,a=t.overlayPositioning;var n=this.getModifiers();this.popper=l({el:e,modifiers:n,placement:i,overlayPositioning:a,referenceEl:o})};t.prototype.destroyPopper=function(){var t=this.popper;if(t){t.destroy()}this.popper=null};t.prototype.render=function(){var t;var e=this;var a=this,n=a.effectiveReferenceElement,r=a.label,s=a.open;var l=n&&s;var p=!l;return i(o,{"aria-hidden":p.toString(),"aria-label":r,"calcite-hydrated-hidden":p,id:this.getId(),role:"tooltip"},i("div",{class:(t={},t[c.animation]=true,t[c.animationActive]=l,t)},i("div",{class:m.arrow,ref:function(t){return e.arrowEl=t}}),i("div",{class:m.container},i("slot",null))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:false,configurable:true});return t}());y.style=b;var v="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}";var w=t("calcite_tooltip_manager",function(){function t(t){var i=this;e(this,t);this.hoverTimeouts=new WeakMap;this.selector="["+d+"]";this.queryTooltip=function(t){var e;var o=i,a=o.selector,n=o.el;var r=(e=t.closest(a))===null||e===void 0?void 0:e.getAttribute(d);return p(n,"#"+r)};this.clearHoverTimeout=function(t){var e=i.hoverTimeouts;if(e.has(t)){window.clearTimeout(e.get(t));e.delete(t)}};this.closeExistingTooltip=function(){var t=i.tooltipEl;if(t){i.toggleTooltip(t,false)}};this.focusTooltip=function(t){var e=t.tooltip,o=t.value;i.closeExistingTooltip();if(o){i.clearHoverTimeout(e)}i.toggleTooltip(e,o)};this.toggleTooltip=function(t,e){t.open=e;if(e){i.tooltipEl=t}};this.hoverToggle=function(t){var e=t.tooltip,o=t.value;var a=i.hoverTimeouts;a.delete(e);if(o){i.closeExistingTooltip()}i.toggleTooltip(e,o)};this.hoverTooltip=function(t){var e=t.tooltip,o=t.value;i.clearHoverTimeout(e);var a=i.hoverTimeouts;var n=window.setTimeout((function(){return i.hoverToggle({tooltip:e,value:o})}),u);a.set(e,n)};this.activeTooltipHover=function(t){var e=i,o=e.tooltipEl,a=e.hoverTimeouts;if(!o){return}if(t.composedPath().includes(o)){i.clearHoverTimeout(o)}else if(!a.has(o)){i.hoverTooltip({tooltip:o,value:false})}};this.hoverEvent=function(t,e){var o=i.queryTooltip(t.target);i.activeTooltipHover(t);if(!o){return}i.hoverTooltip({tooltip:o,value:e})};this.focusEvent=function(t,e){var o=i.queryTooltip(t.target);if(!o||o===i.clickedTooltip){i.clickedTooltip=null;return}i.focusTooltip({tooltip:o,value:e})}}t.prototype.render=function(){return i("slot",null)};t.prototype.keyUpHandler=function(t){if(f(t.key)==="Escape"){var e=this.tooltipEl;if(e){this.clearHoverTimeout(e);this.toggleTooltip(e,false)}}};t.prototype.mouseEnterShow=function(t){this.hoverEvent(t,true)};t.prototype.mouseLeaveHide=function(t){this.hoverEvent(t,false)};t.prototype.clickHandler=function(t){var e=this.queryTooltip(t.target);this.clickedTooltip=e;if(e){this.toggleTooltip(e,false)}};t.prototype.focusShow=function(t){this.focusEvent(t,true)};t.prototype.blurHide=function(t){this.focusEvent(t,false)};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());w.style=v}}}));