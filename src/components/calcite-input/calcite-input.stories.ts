import { select, text, number } from "@storybook/addon-knobs";
import { boolean, iconNames } from "../../../.storybook/helpers";
import { themesDarkDefault } from "../../../.storybook/utils";
import readme from "./readme.md";
import { html } from "../../tests/utils";

export default {
  title: "Components/Controls/Input",
  parameters: {
    notes: readme
  }
};

export const WithLabel = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;">
    <calcite-label
      status="${select("status", ["idle", "valid", "invalid"], "idle")}"
      scale="${select("scale", ["s", "m", "l"], "m")}"
      for="input-with-label"
    >
      ${text("label text", "My great label")}
      <calcite-input
        id="input-with-label"
        type="${select(
          "type",
          ["text", "textarea", "email", "password", "tel", "number", "search", "file", "time", "date"],
          "text"
        )}"
        status="${select("status", ["idle", "invalid", "valid"], "idle")}"
        alignment="${select("alignment", ["start", "end"], "start")}"
        number-button-type="${select("number-button-type", ["none", "horizontal", "vertical"], "horizontal")}"
        min="${number("min", 0)}"
        max="${number("max", 100)}"
        step="${number("step", 1)}"
        prefix-text="${text("prefix-text", "")}"
        suffix-text="${text("suffix-text", "")}"
        ${boolean("loading", false)}
        ${boolean("clearable", false)}
        ${boolean("disabled", false)}
        value="${text("value", "")}"
        placeholder="${text("placeholder", "Placeholder text")}"
      >
      </calcite-input>
      <calcite-input-message
        ${boolean("input-message-active", false)}
        status="${select("input message status", ["idle", "valid", "invalid"], "idle")}"
        >${text("input message text", "My great input message")}</calcite-input-message
      >
    </calcite-label>
  </div>
`;

export const WithLabelAndInputMessage = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;">
    <calcite-label
      status="${select("status", ["idle", "valid", "invalid"], "idle", "Label")}"
      alignment="${select("alignment", ["start", "center", "end"], "start", "Label")}"
      scale="${select("scale", ["s", "m", "l"], "m", "Label")}"
      layout="${select("layout", ["default", "inline", "inline-space-between"], "default", "Label")}"
      for="input-with-label-and-input-message"
    >
      ${text("label text", "My great label", "Label")}
      <calcite-input
        id="input-with-label-and-input-message"
        type="${select(
          "type",
          ["text", "textarea", "email", "password", "tel", "number", "search", "file", "time", "date"],
          "text",
          "Input"
        )}"
        status="${select("status", ["idle", "invalid", "valid"], "idle", "Input")}"
        alignment="${select("alignment", ["start", "end"], "start", "Input")}"
        number-button-type="${select("number-button-type", ["none", "horizontal", "vertical"], "horizontal", "Input")}"
        min="${number("min", 0)}"
        max="${number("max", 100)}"
        step="${number("step", 1)}"
        prefix-text="${text("prefix-text", "", "Input")}"
        suffix-text="${text("suffix-text", "", "Input")}"
        ${boolean("loading", false)}
        ${boolean("autofocus", false)}
        ${boolean("required", false)}
        value="${text("value", "", "Input")}"
        placeholder="${text("placeholder", "Placeholder text", "Input")}"
      >
      </calcite-input>
      <calcite-input-message
        ${boolean("active", true)}
        ${boolean("icon", false)}
        icon="${select("icon", iconNames, "", "Input Message")}"
        >${text("input message text", "My great input message", "Input Message")}</calcite-input-message
      >
    </calcite-label>
  </div>
`;

WithLabelAndInputMessage.story = {
  name: "With Label and Input Message"
};

export const WithoutLabel = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;">
    <calcite-input
      scale="${select("scale", ["s", "m", "l"], "m")}"
      status="${select("status", ["idle", "valid", "invalid"], "idle")}"
      type="${select(
        "type",
        ["text", "textarea", "email", "password", "tel", "number", "search", "file", "time", "date"],
        "text"
      )}"
      status="${select("status", ["idle", "invalid", "valid"], "idle")}"
      alignment="${select("alignment", ["start", "end"], "start")}"
      number-button-type="${select("number-button-type", ["none", "horizontal", "vertical"], "horizontal")}"
      min="${number("min", 0)}"
      max="${number("max", 100)}"
      step="${number("step", 1)}"
      prefix-text="${text("prefix-text", "")}"
      suffix-text="${text("suffix-text", "")}"
      ${boolean("loading", false)}
      ${boolean("clearable", false)}
      ${boolean("disabled", false)}
      value="${text("value", "")}"
      placeholder="${text("placeholder", "Placeholder text")}"
    >
    </calcite-input>
  </div>
`;

export const WithSlottedAction = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;">
    <calcite-label
      status="${select("status", ["idle", "valid", "invalid"], "idle")}"
      scale="${select("scale", ["s", "m", "l"], "m")}"
      for="input-with-slotted-action"
    >
      ${text("label text", "My great label")}
      <calcite-input
        id="input-with-slotted-action"
        type="${select(
          "type",
          ["text", "textarea", "email", "password", "tel", "number", "search", "file", "time", "date"],
          "text"
        )}"
        status="${select("status", ["idle", "invalid", "valid"], "idle")}"
        alignment="${select("alignment", ["start", "end"], "start")}"
        number-button-type="${select("number-button-type", ["none", "horizontal", "vertical"], "horizontal")}"
        min="${number("min", 0)}"
        max="${number("max", 100)}"
        step="${number("step", 1)}"
        prefix-text="${text("prefix-text", "")}"
        suffix-text="${text("suffix-text", "")}"
        ${boolean("loading", false)}
        ${boolean("clearable", false)}
        ${boolean("disabled", false)}
        value="${text("value", "")}"
        placeholder="${text("placeholder", "Placeholder text")}"
      >
        <calcite-button slot="action">${text("action button text", "Go")}</calcite-button>
      </calcite-input>
      <calcite-input-message
        ${boolean("input-message-active", false)}
        status="${select("input message status", ["idle", "valid", "invalid"], "idle")}"
        >${text("input message text", "My great input message")}</calcite-input-message
      >
    </calcite-label>
  </div>
`;

export const Textarea = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;">
    <calcite-label status="${select("status", ["idle", "valid", "invalid"], "idle")}" for="input-with-text-area">
      ${text("label text", "My great label")}
      <calcite-input
        id="input-with-text-area"
        type="textarea"
        ${boolean("loading", false)}
        ${boolean("clearable", false)}
        ${boolean("disabled", false)}
        value="${text("value", "")}"
        placeholder="${text("placeholder", "Placeholder text")}"
      >
      </calcite-input>
      <calcite-input-message
        ${boolean("input-message-active", false)}
        status="${select("input message status", ["idle", "valid", "invalid"], "idle")}"
        >${text("input message text", "My great input message")}</calcite-input-message
      >
    </calcite-label>
  </div>
`;

export const SimpleDarkMode = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;">
    <calcite-label
      class="calcite-theme-dark"
      status="${select("status", ["idle", "valid", "invalid"], "idle")}"
      for="input-dark-theme"
    >
      ${text("label text", "My great label")}
      <calcite-input
        id="input-dark-theme"
        type="${select(
          "type",
          ["text", "textarea", "email", "password", "tel", "number", "search", "file", "time", "date"],
          "text"
        )}"
        status="${select("status", ["idle", "invalid", "valid"], "idle")}"
        alignment="${select("alignment", ["start", "end"], "start")}"
        number-button-type="${select("number-button-type", ["none", "horizontal", "vertical"], "horizontal")}"
        min="${number("min", 0)}"
        max="${number("max", 100)}"
        step="${number("step", 1)}"
        prefix-text="${text("prefix-text", "")}"
        suffix-text="${text("suffix-text", "")}"
        ${boolean("loading", false)}
        ${boolean("clearable", false)}
        ${boolean("disabled", false)}
        value="${text("value", "")}"
        placeholder="${text("placeholder", "Placeholder text")}"
      >
      </calcite-input>
      <calcite-input-message
        ${boolean("calcite-input-message-active", false)}
        status="${select("input message status", ["idle", "valid", "invalid"], "idle")}"
        >${text("input message text", "My great input message")}</calcite-input-message
      >
    </calcite-label>
  </div>
`;

SimpleDarkMode.story = {
  name: "Simple - Dark mode",
  parameters: { themes: themesDarkDefault }
};

export const WithLabelAndInputMessageRTL = (): string => html`
  <div style="width:300px;max-width:100%;text-align:center;" dir="rtl">
    <calcite-label
      status="${select("status", ["idle", "valid", "invalid"], "idle", "Label")}"
      alignment="${select("alignment", ["start", "center", "end"], "start", "Label")}"
      scale="${select("scale", ["s", "m", "l"], "m", "Label")}"
      layout="${select("layout", ["default", "inline", "inline-space-between"], "default", "Label")}"
      for="input-with-label-and-input-message-rtl"
    >
      ${text("label text", "My great label", "Label")}
      <calcite-input
        id="input-with-label-and-input-message-rtl"
        type="${select(
          "type",
          ["text", "textarea", "email", "password", "tel", "number", "search", "file", "time", "date"],
          "text",
          "Input"
        )}"
        status="${select("status", ["idle", "invalid", "valid"], "idle", "Input")}"
        alignment="${select("alignment", ["start", "end"], "start", "Input")}"
        number-button-type="${select("number-button-type", ["none", "horizontal", "vertical"], "horizontal", "Input")}"
        min="${number("min", 0)}"
        max="${number("max", 100)}"
        step="${number("step", 1)}"
        prefix-text="${text("prefix-text", "", "Input")}"
        suffix-text="${text("suffix-text", "", "Input")}"
        ${boolean("loading", false)}
        ${boolean("autofocus", false)}
        ${boolean("required", false)}
        value="${text("value", "", "Input")}"
        placeholder="${text("placeholder", "Placeholder text", "Input")}"
      >
      </calcite-input>
      <calcite-input-message
        ${boolean("active", true)}
        ${boolean("icon", false)}
        icon="${select("icon", iconNames, "", "Input Message")}"
        >${text("input message text", "My great input message", "Input Message")}</calcite-input-message
      >
    </calcite-label>
  </div>
`;
