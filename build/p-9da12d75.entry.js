import{r as t,c as i,h as e,H as c,g as n}from"./p-34256658.js";import{T as a,s,c as l,d as r,g as o,C as u}from"./p-39c9b962.js";import{g as p,n as h}from"./p-cebd4de5.js";import{c as d,d as m,g as b}from"./p-9c6146b8.js";import{d as f,g,l as _}from"./p-ea51eaaa.js";import{h as x}from"./p-18a62b5e.js";import{i as w,p as v,a as y,s as k}from"./p-d858b7ab.js";import"./p-a4e6e35b.js";const z={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},j=class{constructor(e){t(this,e),this.calciteInputFocus=i(this,"calciteInputFocus",7),this.calciteInputBlur=i(this,"calciteInputBlur",7),this.calciteInputInput=i(this,"calciteInputInput",7),this.calciteInputChange=i(this,"calciteInputChange",7),this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.groupSeparator=!1,this.intlLoading=a.loading,this.iconFlipRtl=!1,this.loading=!1,this.locale=document.documentElement.lang||"en",this.localeFormat=!1,this.numberButtonType="vertical",this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.type="text",this.childElType="input",this.onLabelClick=()=>{this.setFocus()},this.clearInputValue=t=>{this.setValue(null,t,!0)},this.inputBlurHandler=()=>{"number"===this.type&&this.setLocalizedValue(this.value),this.calciteInputBlur.emit({element:this.childEl,value:this.value}),this.preFocusValue!==this.value&&this.calciteInputChange.emit()},this.inputFocusHandler=t=>{t.target!==this.slottedActionEl&&this.setFocus(),this.calciteInputFocus.emit({element:this.childEl,value:this.value}),this.preFocusValue=this.value},this.inputInputHandler=t=>{this.disabled||this.readOnly||this.setValue(t.target.value,t)},this.inputKeyDownHandler=t=>{this.disabled||this.readOnly||"Enter"===t.key&&this.calciteInputChange.emit()},this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly)return;const i=t.target.value,e=f(i,this.locale);"insertFromPaste"===t.inputType?(w(e)||t.preventDefault(),this.setValue(v(e),t),this.childNumberEl.value=this.localizedValue):this.setValue(f(i,this.locale),t)},this.inputNumberKeyDownHandler=t=>{if("number"!==this.type||this.disabled||this.readOnly)return;if("ArrowUp"===t.key)return void this.nudgeNumberValue("up",t);if("ArrowDown"===t.key)return void this.nudgeNumberValue("down",t);const i=[...h,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab","-"];if(t.altKey||t.ctrlKey||t.metaKey)return;const e=t.shiftKey&&"Tab"===t.key;if(i.includes(t.key)&&(!t.shiftKey||e)&&(0!==parseInt(this.value)||"0"!==p(t.key)))return void("Enter"===t.key&&this.calciteInputChange.emit());const c=g(this.locale);if(t.key===c&&("any"===this.step||this.step&&y(this.step))){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&-1===this.childNumberEl.value.indexOf(c))return}t.preventDefault()},this.nudgeNumberValue=(t,i)=>{var e,c;if("number"!==this.type)return;const n=this.value,a=(null===(c=null===(e=this.step)||void 0===e?void 0:e.toString().split(".")[1])||void 0===c?void 0:c.length)||0,s=this.maxString?parseFloat(this.maxString):null,l=this.minString?parseFloat(this.minString):null,r="any"===this.step?1:Math.abs(this.step||1),o=n&&""!==n?a?parseFloat(n):parseInt(n):0;let u=n;"up"===t&&(!s&&0!==s||o<s)&&(u=(o+r).toFixed(a)),"down"===t&&(!l&&0!==l||o>l)&&(u=(o-r).toFixed(a)),this.setValue(u,i,!0)},this.numberButtonClickHandler=t=>{t.preventDefault(),this.nudgeNumberValue(t.target.dataset.adjustment,t)},this.reset=t=>{"number"===this.type&&t.preventDefault(),this.setValue(this.defaultValue,t)},this.setChildElRef=t=>{this.childEl=t},this.setChildNumberElRef=t=>{this.childNumberEl=t},this.setLocalizedValue=t=>{this.localizedValue=_(t,this.locale,this.groupSeparator)},this.setValue=(t,i,e=!1)=>{const c=this.value;if(this.value="number"===this.type?k(t):t,"number"===this.type&&this.setLocalizedValue(this.value),i){if("number"===this.type&&(null==t?void 0:t.endsWith(".")))return;this.calciteInputInput.emit({element:this.childEl,nativeEvent:i,value:t}).defaultPrevented?(this.value=c,this.setLocalizedValue(c)):e&&this.calciteInputChange.emit()}}}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=(null===(t=this.max)||void 0===t?void 0:t.toString())||null}minWatcher(){var t;this.minString=(null===(t=this.min)||void 0===t?void 0:t.toString())||null}valueWatcher(t){"number"===this.type&&this.localizedValue!==_(t,this.locale)?this.setLocalizedValue(t):this.childEl&&this.childEl.value!==t&&(this.childEl.value=t)}updateRequestedIcon(){this.requestedIcon=s(z,this.icon,this.type)}get isClearable(){var t;return!this.isTextarea&&(this.clearable||"search"===this.type)&&(null===(t=this.value)||void 0===t?void 0:t.length)>0}get isTextarea(){return"textarea"===this.childElType}connectedCallback(){var t;this.form=l(this.el,"form"),null===(t=this.form)||void 0===t||t.addEventListener("reset",this.reset),this.scale=r(this.el,"scale",this.scale),this.status=r(this.el,"status",this.status),"number"===this.type&&this.value&&(w(this.value)?this.localizedValue=_(this.value,this.locale,this.groupSeparator):this.value=void 0),d(this)}disconnectedCallback(){var t;null===(t=this.form)||void 0===t||t.removeEventListener("reset",this.reset),m(this)}componentWillLoad(){var t,i;this.childElType="textarea"===this.type?"textarea":"input",this.defaultValue=this.value,this.maxString=null===(t=this.max)||void 0===t?void 0:t.toString(),this.minString=null===(i=this.min)||void 0===i?void 0:i.toString(),this.requestedIcon=s(z,this.icon,this.type)}componentDidLoad(){this.slottedActionEl=this.el.querySelector("[slot=action]"),this.setDisabledAction(),"number"===this.type&&this.childEl&&(this.childEl.style.cssText=x)}componentShouldUpdate(t,i,e){return!("number"===this.type&&"value"===e&&t&&!w(t)&&(this.value=i,1))}keyDownHandler(t){this.readOnly||this.disabled||this.isClearable&&"Escape"===p(t.key)&&(this.clearInputValue(t),t.preventDefault())}async setFocus(){var t,i;"number"===this.type?null===(t=this.childNumberEl)||void 0===t||t.focus():null===(i=this.childEl)||void 0===i||i.focus()}setDisabledAction(){if(!this.slottedActionEl)return;const t=this.slottedActionEl;this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")}render(){const t=o(this.el),i=e("div",{class:"calcite-input__loader"},e("calcite-progress",{label:this.intlLoading,type:"indeterminate"})),n=e("button",{class:"calcite-input__clear-button",disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:this.disabled?-1:0,type:"button"},e("calcite-icon",{icon:"x",scale:"s"})),a=e("calcite-icon",{class:"calcite-input__icon",dir:t,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"s"}),s="horizontal"===this.numberButtonType,l=e("button",{class:{"calcite-input__number-button-item":!0,"calcite-input__number-button-item--horizontal":s},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onClick:this.numberButtonClickHandler,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"chevron-up",scale:"s"})),r=e("button",{class:{"calcite-input__number-button-item":!0,"calcite-input__number-button-item--horizontal":s},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onClick:this.numberButtonClickHandler,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"chevron-down",scale:"s"})),p=e("div",{class:"calcite-input__number-button-wrapper"},l,r),h=e("div",{class:"calcite-input__prefix"},this.prefixText),d=e("div",{class:"calcite-input__suffix"},this.suffixText),m="number"===this.type?e("input",{"aria-label":b(this),autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,tabIndex:this.disabled?-1:0,type:"text",value:this.localizedValue}):null,f=[e(this.childElType,{"aria-label":b(this),autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,name:this.name,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,step:this.step,tabIndex:this.disabled||"number"===this.type?-1:null,type:this.type,value:this.value}),this.isTextarea?e("div",{class:"calcite-input__resize-icon-wrapper"},e("calcite-icon",{icon:"chevron-down",scale:"s"})):null];return e(c,{onClick:this.inputFocusHandler},e("div",{class:{"calcite-input__wrapper":!0,[u.rtl]:"rtl"===t},dir:t},"number"===this.type&&"horizontal"===this.numberButtonType?r:null,this.prefixText?h:null,e("div",{class:"calcite-input__element-wrapper"},m,f,this.isClearable?n:null,this.requestedIcon?a:null,this.loading?i:null),e("div",{class:"calcite-input__action-wrapper"},e("slot",{name:"action"})),"number"===this.type&&"vertical"===this.numberButtonType?p:null,this.suffixText?d:null,"number"===this.type&&"horizontal"===this.numberButtonType?l:null))}get el(){return n(this)}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"]}}};j.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-input:root{--calcite-animation-timing:300ms}.calcite-animate.sc-calcite-input{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in.sc-calcite-input{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down.sc-calcite-input{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up.sc-calcite-input{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale.sc-calcite-input{-webkit-animation-name:in-scale;animation-name:in-scale}.sc-calcite-input:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-input-h{display:none}[scale=s].sc-calcite-input-h input.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size--2);line-height:1rem;padding:0.5rem;height:1.5rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{height:1.5rem;min-height:1.5rem}[scale=s].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:1.5rem}[scale=s].sc-calcite-input-h input[type=file].sc-calcite-input{height:1.5rem}[scale=s].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:1.5rem;min-width:1.5rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;height:auto}[scale=m].sc-calcite-input-h input.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size--1);line-height:1rem;padding:0.75rem;height:2rem}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{min-height:2rem}[scale=m].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2rem}[scale=m].sc-calcite-input-h input[type=file].sc-calcite-input{height:2rem}[scale=m].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:2rem;min-width:2rem}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;height:auto}[scale=l].sc-calcite-input-h input.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding:1rem;height:2.75rem}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{min-height:2.75rem}[scale=l].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2.75rem}[scale=l].sc-calcite-input-h input[type=file].sc-calcite-input{height:2.75rem}[scale=l].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:2.75rem;min-width:2.75rem}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;height:auto}[disabled].sc-calcite-input-h{pointer-events:none}[disabled].sc-calcite-input-h .calcite-input__wrapper.sc-calcite-input{pointer-events:none;--text-opacity:var(--calcite-ui-opacity-disabled)}[disabled].sc-calcite-input-h button.sc-calcite-input,[disabled].sc-calcite-input-h textarea.sc-calcite-input,[disabled].sc-calcite-input-h input.sc-calcite-input{pointer-events:none}[disabled].sc-calcite-input-h textarea.sc-calcite-input{resize:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-appearance:none;width:100%;border-radius:0;position:relative;max-height:100%;max-width:100%;margin:0;font-weight:var(--calcite-font-weight-normal);font-family:inherit;-ms-flex:1 1 0%;flex:1 1 0%;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-1);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1)}.sc-calcite-input-h input[type=search].sc-calcite-input::-webkit-search-decoration{-webkit-appearance:none}.sc-calcite-input-h input.sc-calcite-input,.sc-calcite-input-h textarea.sc-calcite-input{color:var(--calcite-ui-text-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input)}.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input::placeholder,.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input:focus,.sc-calcite-input-h textarea.sc-calcite-input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}.sc-calcite-input-h input[readonly].sc-calcite-input,.sc-calcite-input-h textarea[readonly].sc-calcite-input{background-color:var(--calcite-ui-background)}.sc-calcite-input-h input[readonly].sc-calcite-input:focus,.sc-calcite-input-h textarea[readonly].sc-calcite-input:focus{color:var(--calcite-ui-text-1)}.sc-calcite-input-h calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-3)}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.sc-calcite-input-h textarea.sc-calcite-input:focus,.sc-calcite-input-h input.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}[status=invalid].sc-calcite-input-h input.sc-calcite-input,[status=invalid].sc-calcite-input-h textarea.sc-calcite-input{border-color:var(--calcite-ui-danger)}[status=invalid].sc-calcite-input-h input.sc-calcite-input:focus,[status=invalid].sc-calcite-input-h textarea.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}[scale=s].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:0.5rem}[scale=s].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:0.5rem}[scale=m].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:0.75rem}[scale=m].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:0.75rem}[scale=l].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:1rem}[scale=l].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:1rem}[icon][scale=s].sc-calcite-input-h input.sc-calcite-input{padding-left:2rem}[icon][scale=s].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:2rem;padding-left:0.5rem}[icon][scale=m].sc-calcite-input-h input.sc-calcite-input{padding-left:2.5rem}[icon][scale=m].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:2.5rem;padding-left:0.5rem}[icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-left:3rem}[icon][scale=l].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:3rem;padding-left:0.5rem}.calcite-input__element-wrapper.sc-calcite-input{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%;position:relative;-ms-flex-order:3;order:3}.calcite-input__icon.sc-calcite-input{display:block;position:absolute;pointer-events:none;z-index:10;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}input[type=text].sc-calcite-input::-ms-clear,input[type=text].sc-calcite-input::-ms-reveal{display:none;width:0;height:0}input[type=search].sc-calcite-input::-webkit-search-decoration,input[type=search].sc-calcite-input::-webkit-search-cancel-button,input[type=search].sc-calcite-input::-webkit-search-results-button,input[type=search].sc-calcite-input::-webkit-search-results-decoration,input[type=date].sc-calcite-input::-webkit-clear-button,input[type=time].sc-calcite-input::-webkit-clear-button{display:none}.calcite-input__clear-button.sc-calcite-input{pointer-events:initial;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-ms-flex-order:4;order:4;margin:0}.calcite-input__clear-button.sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__clear-button.sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__clear-button.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}.calcite-input__clear-button.sc-calcite-input:active calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__clear-button.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-input__clear-button.sc-calcite-input:disabled{opacity:var(--calcite-ui-opacity-disabled)}.calcite--rtl.sc-calcite-input .calcite-input__clear-button.sc-calcite-input{border-left-color:var(--calcite-ui-border-input);border-width:1px;border-right-width:0}.calcite-input__loader.sc-calcite-input{top:1px;left:1px;right:1px;display:block;pointer-events:none;position:absolute}.calcite-input__action-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.calcite-input__prefix.sc-calcite-input,.calcite-input__suffix.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:var(--calcite-font-weight-medium);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1;word-wrap:break-word;overflow-wrap:break-word}.calcite-input__prefix.sc-calcite-input{-ms-flex-order:2;order:2;border-right-width:0}.calcite-input__suffix.sc-calcite-input{-ms-flex-order:5;order:5;border-left-width:0}.calcite--rtl.sc-calcite-input .calcite-input__prefix.sc-calcite-input{border-right-width:1px;border-left-width:0}.calcite--rtl.sc-calcite-input .calcite-input__suffix.sc-calcite-input{border-left-width:1px;border-right-width:0}[alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:left}[alignment=start].sc-calcite-input-h .calcite--rtl.sc-calcite-input textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{text-align:right}[alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:right}[alignment=end].sc-calcite-input-h .calcite--rtl.sc-calcite-input textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{text-align:left}.sc-calcite-input-h input[type=number].sc-calcite-input{-moz-appearance:textfield}.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-inner-spin-button,.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.calcite-input__number-button-wrapper.sc-calcite-input{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:none;-ms-flex-order:6;order:6;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}[number-button-type=vertical].sc-calcite-input-h .calcite-input__wrapper.sc-calcite-input{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}[number-button-type=vertical].sc-calcite-input-h input.sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h textarea.sc-calcite-input{-ms-flex-order:2;order:2}[number-button-type=horizontal].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}[number-button-type=horizontal].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input,.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:stretch;align-self:stretch}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input,.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{-ms-flex-order:5;order:5}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite--rtl.sc-calcite-input .calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input{border-width:1px;border-left-width:0;border-color:var(--calcite-ui-border-input)}.calcite--rtl.sc-calcite-input .calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{border-width:1px;border-right-width:0;border-color:var(--calcite-ui-border-input)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input{border-top-width:0}.calcite-input__number-button-item.sc-calcite-input{max-height:50%;min-height:50%;pointer-events:initial;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;padding-top:0;padding-bottom:0;padding-left:0.5rem;padding-right:0.5rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;margin:0}.calcite-input__number-button-item.sc-calcite-input calcite-icon.sc-calcite-input{pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__number-button-item.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.sc-calcite-input:focus calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__number-button-item.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}[number-button-type=vertical].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item.sc-calcite-input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.calcite-input__wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;position:relative}.sc-calcite-input-h input.sc-calcite-input::-webkit-calendar-picker-indicator{display:none}.sc-calcite-input-h input[type=date].sc-calcite-input::-webkit-input-placeholder{visibility:hidden !important}.sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input__resize-icon-wrapper.sc-calcite-input{display:none}}.calcite-input__resize-icon-wrapper.sc-calcite-input{bottom:2px;right:2px;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:10;pointer-events:none;width:0.75rem;height:0.75rem}.calcite-input__resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.calcite--rtl.sc-calcite-input textarea.sc-calcite-input::-webkit-resizer{right:unset;left:0}.calcite--rtl.sc-calcite-input .calcite-input__resize-icon-wrapper.sc-calcite-input{left:2px;right:unset}.calcite--rtl.sc-calcite-input .calcite-input__resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[type=color].sc-calcite-input-h input.sc-calcite-input{padding:0.25rem}[type=file].sc-calcite-input-h input.sc-calcite-input{background-color:var(--calcite-ui-foreground-1);cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);text-align:center}[type=file][scale=s].sc-calcite-input-h input.sc-calcite-input{padding-top:1px;padding-bottom:1px;padding-left:0.5rem;padding-right:0.5rem}[type=file][scale=m].sc-calcite-input-h input.sc-calcite-input{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem}[type=file][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}.no-bottom-border.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-bottom-width:0}.border-t-color-1.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-top-color:var(--calcite-ui-border-1)}";export{j as calcite_input}