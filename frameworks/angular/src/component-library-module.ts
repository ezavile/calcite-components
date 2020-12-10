import { ModuleWithProviders, NgModule } from '@angular/core';
import { defineCustomElements } from '@esri/calcite-components/dist/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import {
  CalciteAccordion,
  CalciteAccordionItem,
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteActionPad,
  CalciteAlert,
  CalciteAvatar,
  CalciteBlock,
  CalciteBlockSection,
  CalciteButton,
  CalciteCard,
  CalciteCheckbox,
  CalciteChip,
  CalciteColor,
  CalciteColorHexInput,
  CalciteColorSwatch,
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteDate,
  CalciteDateDay,
  CalciteDateMonth,
  CalciteDateMonthHeader,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteFab,
  CalciteFilter,
  CalciteFlow,
  CalciteGraph,
  CalciteHandle,
  CalciteIcon,
  CalciteInlineEditable,
  CalciteInput,
  CalciteInputMessage,
  CalciteLabel,
  CalciteLink,
  CalciteLoader,
  CalciteModal,
  CalciteNotice,
  CalciteOption,
  CalciteOptionGroup,
  CalcitePagination,
  CalcitePanel,
  CalcitePickList,
  CalcitePickListGroup,
  CalcitePickListItem,
  CalcitePopover,
  CalcitePopoverManager,
  CalciteProgress,
  CalciteRadio,
  CalciteRadioButton,
  CalciteRadioButtonGroup,
  CalciteRadioGroup,
  CalciteRadioGroupItem,
  CalciteRating,
  CalciteScrim,
  CalciteSelect,
  CalciteShell,
  CalciteShellCenterRow,
  CalciteShellPanel,
  CalciteSlider,
  CalciteSortableList,
  CalciteSplitButton,
  CalciteStepper,
  CalciteStepperItem,
  CalciteSwitch,
  CalciteTab,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTabs,
  CalciteTile,
  CalciteTileSelect,
  CalciteTileSelectGroup,
  CalciteTip,
  CalciteTipGroup,
  CalciteTipManager,
  CalciteTooltip,
  CalciteTooltipManager,
  CalciteTree,
  CalciteTreeItem,
  CalciteValueList,
  CalciteValueListItem
} from './directives/proxies';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  CalciteAccordion,
  CalciteAccordionItem,
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteActionPad,
  CalciteAlert,
  CalciteAvatar,
  CalciteBlock,
  CalciteBlockSection,
  CalciteButton,
  CalciteCard,
  CalciteCheckbox,
  CalciteChip,
  CalciteColor,
  CalciteColorHexInput,
  CalciteColorSwatch,
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteDate,
  CalciteDateDay,
  CalciteDateMonth,
  CalciteDateMonthHeader,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteFab,
  CalciteFilter,
  CalciteFlow,
  CalciteGraph,
  CalciteHandle,
  CalciteIcon,
  CalciteInlineEditable,
  CalciteInput,
  CalciteInputMessage,
  CalciteLabel,
  CalciteLink,
  CalciteLoader,
  CalciteModal,
  CalciteNotice,
  CalciteOption,
  CalciteOptionGroup,
  CalcitePagination,
  CalcitePanel,
  CalcitePickList,
  CalcitePickListGroup,
  CalcitePickListItem,
  CalcitePopover,
  CalcitePopoverManager,
  CalciteProgress,
  CalciteRadio,
  CalciteRadioButton,
  CalciteRadioButtonGroup,
  CalciteRadioGroup,
  CalciteRadioGroupItem,
  CalciteRating,
  CalciteScrim,
  CalciteSelect,
  CalciteShell,
  CalciteShellCenterRow,
  CalciteShellPanel,
  CalciteSlider,
  CalciteSortableList,
  CalciteSplitButton,
  CalciteStepper,
  CalciteStepperItem,
  CalciteSwitch,
  CalciteTab,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTabs,
  CalciteTile,
  CalciteTileSelect,
  CalciteTileSelectGroup,
  CalciteTip,
  CalciteTipGroup,
  CalciteTipManager,
  CalciteTooltip,
  CalciteTooltipManager,
  CalciteTree,
  CalciteTreeItem,
  CalciteValueList,
  CalciteValueListItem,

  // Value Accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor
];
@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class ComponentLibraryModule {
  static forRoot(config: any): ModuleWithProviders<ComponentLibraryModule> {
    return {
      ngModule: ComponentLibraryModule,
      providers: [
        {provide: ComponentLibraryModule, useValue: config }
      ]
    };
  }
}
