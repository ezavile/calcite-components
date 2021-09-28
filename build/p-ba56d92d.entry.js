import{r as t,c as a,h as e,g as i,F as n}from"./p-34256658.js";import{c as r}from"./p-43a9faca.js";import{f as s,C as o,g as c}from"./p-39c9b962.js";import{c as l,d as m}from"./p-9c6146b8.js";import"./p-a4e6e35b.js";const p=class{constructor(e){t(this,e),this.calciteOptionChange=a(this,"calciteOptionChange",7),this.disabled=!1,this.mutationObserver=r("mutation",(()=>{this.ensureTextContentDependentProps(),this.calciteOptionChange.emit()}))}handlePropChange(t,a,e){"label"!==e&&"value"!==e||this.ensureTextContentDependentProps(),this.calciteOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:t}}=this;this.label&&this.label!==this.internallySetLabel||(this.label=t,this.internallySetLabel=t),this.value&&this.value!==this.internallySetValue||(this.value=t,this.internallySetValue=t)}connectedCallback(){var t;this.ensureTextContentDependentProps(),null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,attributeFilter:["label","value"]})}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}render(){return e("slot",null,this.label)}get el(){return i(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}";const h=class{constructor(e){t(this,e),this.calciteOptionGroupChange=a(this,"calciteOptionGroupChange",7),this.disabled=!1}handlePropChange(){this.calciteOptionGroupChange.emit()}render(){return e(n,null,e("div",null,this.label),e("slot",null))}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}";function d(t){return"CALCITE-OPTION"===t.tagName}const f=class{constructor(e){t(this,e),this.calciteSelectChange=a(this,"calciteSelectChange",7),this.disabled=!1,this.scale="m",this.width="auto",this.componentToNativeEl=new Map,this.mutationObserver=r("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{this.selectFromNativeOption(this.selectEl.selectedOptions[0]),requestAnimationFrame((()=>this.emitChangeEvent()))},this.onLabelClick=()=>{this.setFocus()},this.populateInternalSelect=()=>{const t=Array.from(this.el.children);this.clearInternalSelect(),t.forEach((t=>{var a;return null===(a=this.selectEl)||void 0===a?void 0:a.append(this.toNativeElement(t))}))},this.storeSelectRef=t=>{this.selectEl=t,this.populateInternalSelect(),this.selectFromNativeOption(this.selectEl.selectedOptions[0])},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()}}connectedCallback(){var t;const{el:a}=this;null===(t=this.mutationObserver)||void 0===t||t.observe(a,{subtree:!0,childList:!0}),l(this)}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),m(this)}async setFocus(){s(this.selectEl)}handleOptionOrGroupChange(t){t.stopPropagation();const a=t.target,e=this.componentToNativeEl.get(a);e&&(this.updateNativeElement(a,e),d(a)&&a.selected&&this.deselectAllExcept(a))}updateNativeElement(t,a){if(a.disabled=t.disabled,a.label=t.label,d(t)){const e=a;e.selected=t.selected,e.value=t.value,e.innerText=t.label}}clearInternalSelect(){this.componentToNativeEl.forEach((t=>t.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(t){if(!t)return;let a;this.componentToNativeEl.forEach(((e,i)=>{d(i)&&e===t&&(i.selected=!0,a=i,this.deselectAllExcept(i))})),a&&requestAnimationFrame((()=>this.selectedOption=a))}toNativeElement(t){if(d(t)){const a=document.createElement("option");return this.updateNativeElement(t,a),this.componentToNativeEl.set(t,a),a}if(function(t){return"CALCITE-OPTION-GROUP"===t.tagName}(t)){const a=document.createElement("optgroup");return this.updateNativeElement(t,a),Array.from(t.children).forEach((e=>{const i=this.toNativeElement(e);a.append(i),this.componentToNativeEl.set(t,i)})),this.componentToNativeEl.set(t,a),a}throw new Error("unsupported element child provided")}deselectAllExcept(t){this.el.querySelectorAll("calcite-option").forEach((a=>{a!==t&&(a.selected=!1)}))}renderChevron(t){return e("div",{class:{"icon-container":!0,[o.rtl]:"rtl"===t}},e("calcite-icon",{class:"icon",icon:"chevron-down",scale:"s"}))}render(){const t=c(this.el);return e(n,null,e("select",{"aria-label":this.label,class:{select:!0,[o.rtl]:"rtl"===t},disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},e("slot",null)),this.renderChevron(t))}get el(){return i(this)}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;position:relative;width:var(--select-width)}:host([scale=s]){height:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing:0 2rem 0 0.5rem;--calcite-select-spacing-rtl:0 0.5rem 0 2rem}:host([scale=s]) .icon-container{padding-left:0.5rem;padding-right:0.5rem}:host([scale=m]){height:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing:0 2.5rem 0 0.75rem;--calcite-select-spacing-rtl:0 0.75rem 0 2.5rem}:host([scale=m]) .icon-container{padding-left:0.75rem;padding-right:0.75rem}:host([scale=l]){height:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing:0 3rem 0 1rem;--calcite-select-spacing-rtl:0 1rem 0 3rem}:host([scale=l]) .icon-container{padding-left:1rem;padding-right:1rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}.select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-style:solid;border-right-width:0;background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-border-input);border-radius:0;color:var(--calcite-ui-text-2);cursor:pointer;font-family:inherit;margin:0;width:100%;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-select-font-size);padding:var(--calcite-select-spacing)}.select:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}.select.calcite--rtl{border-width:1px;border-color:var(--calcite-ui-border-input);padding:var(--calcite-select-spacing-rtl)}select:disabled{border-color:var(--calcite-ui-border-input);--bg-opacity:1}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.icon-container{-ms-flex-align:center;align-items:center;background-color:transparent;border-width:0;border-right-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-left-width:0;color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;pointer-events:none;position:absolute;right:0;top:0;bottom:0}.icon-container.calcite--rtl{border-left-width:1px;border-right-width:0;left:0;right:unset}.select:focus~.icon-container{border-color:transparent}";export{p as calcite_option,h as calcite_option_group,f as calcite_select}