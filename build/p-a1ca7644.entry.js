import{r as t,h as a,g as i}from"./p-34256658.js";const n=class{constructor(a){t(this,a),this.intlLoading="Loading",this.loading=!1}render(){const{el:t,loading:i,intlLoading:n}=this,e=t.innerHTML.trim().length>0,o=i?a("calcite-loader",{active:!0,label:n}):null,r=e?a("div",{class:"content"},a("slot",null)):null;return a("div",{class:"scrim"},o,r)}get el(){return i(this)}};n.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:absolute;z-index:50;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;top:0;right:0;bottom:0;left:0}@-webkit-keyframes calcite-scrim-fade-in{0%{--bg-opacity:0}100%{--text-opacity:1}}@keyframes calcite-scrim-fade-in{0%{--bg-opacity:0}100%{--text-opacity:1}}.scrim{display:-ms-flexbox;display:flex;position:absolute;overflow:hidden;top:0;right:0;bottom:0;left:0;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-webkit-animation:calcite-scrim-fade-in 250ms ease-in-out;animation:calcite-scrim-fade-in 250ms ease-in-out;background-color:var(--calcite-scrim-background)}.content{padding:1rem}";export{n as calcite_scrim}