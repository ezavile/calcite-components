var __awaiter=this&&this.__awaiter||function(e,t,n,i){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i["throw"](e))}catch(e){r(e)}}function c(e){e.done?n(e.value):a(e.value).then(o,l)}c((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,a,r,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return c([e,t])}}function c(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){n.label=o[1];break}if(o[0]===6&&n.label<r[1]){n.label=r[1];r=o;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(o);break}if(r[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e];a=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-25e908b3.system.js","./p-e3fd77ce.system.js","./p-88b91ce9.system.js","./p-d53c2d2e.system.js","./p-2c235db8.system.js"],(function(e){"use strict";var t,n,i,a,r,o,l,c,s,d;return{setters:[function(e){t=e.r;n=e.c;i=e.h;a=e.F;r=e.g},function(e){o=e.g;l=e.a;c=e.C},function(e){s=e.C},function(e){d=e.S},function(){}],execute:function(){var h={backButton:"back-button",container:"container",header:"header",heading:"heading",summary:"summary",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentContainer:"content-container",fabContainer:"fab-container",footer:"footer",menuContainer:"menu-container",menuButton:"menu-button",menu:"menu",menuOpen:"menu--open"};var m={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right"};var u={headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"};var f={back:"Back",close:"Close",open:"Open",options:"Options"};var p=3;var b="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;position:relative;width:100%;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:justify;align-content:space-between;color:var(--calcite-ui-text-2);}.heading{font-weight:var(--calcite-font-weight-medium);margin:0;padding:0}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);width:100%;padding:0;margin:0;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, width 150ms ease-in-out;transition:max-height 150ms ease-in-out, width 150ms ease-in-out}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 12vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 300px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 150px)}:host([width-scale=m]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 20vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 420px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 240px)}:host([width-scale=l]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 45vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 680px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 340px)}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{border-bottom:1px solid;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex-pack:start;justify-content:flex-start;position:-webkit-sticky;position:sticky;top:0;border-bottom-color:var(--calcite-ui-border-2);width:100%;-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;z-index:2}.header-content{display:block;overflow:hidden;margin-right:auto;padding:1rem}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis}.header-content .heading{font-weight:var(--calcite-font-weight-medium);margin-top:0;margin-left:0;margin-right:0;margin-bottom:0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);line-height:1rem}.back-button{border-color:var(--calcite-ui-border-2);border-style:solid;border-width:0;border-right-width:1px}.calcite--rtl .back-button{border-right-width:0;border-left-width:1px}.header-actions{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.header-actions--end{margin-left:auto}.menu-container:only-child{margin-left:auto}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:10rem;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:column;flex-direction:column}.footer{border-top:1px solid;background-color:var(--calcite-ui-foreground-1);border-top-color:var(--calcite-ui-border-3);display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:-webkit-sticky;position:sticky;bottom:0;width:100%;-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;padding:0.5rem}.calcite--rtl .header-content{margin-left:auto;margin-right:unset}.calcite--rtl .header-actions--end{margin-right:auto;margin-left:unset}.calcite--rtl .menu-container:only-child{margin-right:auto;margin-left:unset}.fab-container{display:inline-block;position:-webkit-sticky;position:sticky;margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0.5rem;bottom:0;left:0;right:0;z-index:1}";var g=e("calcite_panel",function(){function e(e){var i=this;t(this,e);this.calcitePanelDismissedChange=n(this,"calcitePanelDismissedChange",7);this.calcitePanelScroll=n(this,"calcitePanelScroll",7);this.calcitePanelBackClick=n(this,"calcitePanelBackClick",7);this.dismissed=false;this.disabled=false;this.dismissible=false;this.showBackButton=false;this.loading=false;this.menuOpen=false;this.setContainerRef=function(e){i.containerEl=e};this.setDismissRef=function(e){i.dismissButtonEl=e};this.setBackRef=function(e){i.backButtonEl=e};this.panelKeyUpHandler=function(e){if(e.key==="Escape"){i.dismiss()}};this.dismiss=function(){i.dismissed=true};this.panelScrollHandler=function(){i.calcitePanelScroll.emit()};this.backButtonClick=function(){i.calcitePanelBackClick.emit()}}e.prototype.dismissedHandler=function(){this.calcitePanelDismissedChange.emit()};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(a){if(e==="dismiss-button"){(t=this.dismissButtonEl)===null||t===void 0?void 0:t.setFocus();return[2]}if(e==="back-button"){(n=this.backButtonEl)===null||n===void 0?void 0:n.setFocus();return[2]}(i=this.containerEl)===null||i===void 0?void 0:i.focus();return[2]}))}))};e.prototype.renderBackButton=function(){var e=this.el;var t=o(e)==="rtl";var n=this,a=n.showBackButton,r=n.intlBack,l=n.backButtonClick;var c=r||f.back;var s=t?m.backRight:m.backLeft;return a?i("calcite-action",{"aria-label":c,class:h.backButton,icon:s,key:"back-button",onClick:l,ref:this.setBackRef,scale:"s",slot:u.headerActionsStart,text:c}):null};e.prototype.renderHeaderContent=function(){var e=this,t=e.heading,n=e.headingLevel,a=e.summary;var r=t?i(s,{class:h.heading,level:n||p},t):null;var o=a?i("span",{class:h.summary},a):null;return r||o?i("div",{class:h.headerContent,key:"header-content"},r,o):null};e.prototype.renderHeaderSlottedContent=function(){return i("div",{class:h.headerContent,key:"header-content"},i("slot",{name:u.headerContent}))};e.prototype.renderHeaderStartActions=function(){var e;var t=this.el;var n=l(t,u.headerActionsStart);return n?i("div",{class:(e={},e[h.headerActionsStart]=true,e[h.headerActions]=true,e),key:"header-actions-start"},i("slot",{name:u.headerActionsStart})):null};e.prototype.renderHeaderActionsEnd=function(){var e;var t=this,n=t.dismiss,a=t.dismissible,r=t.el,o=t.intlClose;var c=o||f.close;var s=a?i("calcite-action",{"aria-label":c,icon:m.close,onClick:n,ref:this.setDismissRef,text:c}):null;var d=i("slot",{name:u.headerActionsEnd});var p=l(r,u.headerActionsEnd);return p||s?i("div",{class:(e={},e[h.headerActionsEnd]=true,e[h.headerActions]=true,e),key:"header-actions-end"},d,s):null};e.prototype.renderMenu=function(){var e=this,t=e.el,n=e.intlOptions,a=e.menuOpen;var r=l(t,u.headerMenuActions);return r?i("calcite-action-menu",{flipPlacements:["top","bottom"],label:n||f.options,open:a,placement:"bottom-end"},i("calcite-action",{icon:m.menu,slot:d.trigger,text:n||f.options}),i("slot",{name:u.headerMenuActions})):null};e.prototype.renderHeaderNode=function(){var e=this,t=e.el,n=e.showBackButton;var a=this.renderBackButton();var r=l(t,u.headerContent);var o=r?this.renderHeaderSlottedContent():this.renderHeaderContent();var c=this.renderHeaderStartActions();var s=this.renderHeaderActionsEnd();var d=this.renderMenu();return c||o||s||d||n?i("header",{class:h.header},a,c,o,s,d):null};e.prototype.renderFooterSlottedContent=function(){var e=this.el;var t=l(e,u.footer);return t?i("footer",{class:h.footer},i("slot",{name:u.footer})):null};e.prototype.renderFooterActions=function(){var e=this.el;var t=l(e,u.footerActions);return t?i("footer",{class:h.footer},i("slot",{name:u.footerActions})):null};e.prototype.renderContent=function(){return i("section",{class:h.contentContainer,onScroll:this.panelScrollHandler,tabIndex:0},i("slot",null),this.renderFab())};e.prototype.renderFab=function(){var e=this.el;var t=l(e,u.fab);return t?i("div",{class:h.fabContainer},i("slot",{name:u.fab})):null};e.prototype.render=function(){var e;var t=this,n=t.dismissed,r=t.disabled,l=t.dismissible,s=t.el,d=t.loading,m=t.panelKeyUpHandler;var u=o(s)==="rtl";var f=i("article",{"aria-busy":d.toString(),class:(e={},e[h.container]=true,e[c.rtl]=u,e),hidden:l&&n,onKeyUp:m,ref:this.setContainerRef,tabIndex:l?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterSlottedContent()||this.renderFooterActions());return i(a,null,d||r?i("calcite-scrim",{loading:d}):null,f)};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{dismissed:["dismissedHandler"]}},enumerable:false,configurable:true});return e}());g.style=b}}}));