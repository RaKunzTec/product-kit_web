// SPDX-License-Identifier: MIT
// © Daimler TSS GmbH
import { MDCCheckbox } from '@material/checkbox';
import { MDCDialog } from '@material/dialog';
import { MDCIconButtonToggle } from '@material/icon-button';
import { MDCLinearProgress } from '@material/linear-progress';
import { MDCCircularProgress } from '@material/circular-progress';
import { MDCList } from '@material/list';
import { MDCMenu } from '@material/menu';
import { MDCRadio } from '@material/radio';
import { MDCRipple } from '@material/ripple/index';
import { MDCSelect } from '@material/select';
import { MDCSlider } from '@material/slider';
import { MDCSnackbar } from '@material/snackbar';
import { MDCSwitch } from '@material/switch';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCDataTable } from '@material/data-table';
import { MDCChipSet } from '@material/chips';
import {MDCTabScroller} from '@material/tab-scroller';

//
// Instantiate all components in the main content
//

const mainEl = document.querySelector('.main-content');

// Button
const buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));
buttonEls.forEach((el) => new MDCRipple(el));

// Drawer
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;

// Icon button toggle
const iconToggleEl = mainEl.querySelector('#icon-toggle-button');
const iconToggle = new MDCIconButtonToggle(iconToggleEl);
iconToggle.unbounded = true;

// Card
const cardPrimaryActionEls = Array.from(mainEl.querySelectorAll('.mdc-card__primary-action'));
cardPrimaryActionEls.forEach((el) => new MDCRipple(el));

// Chips
const chipSetEls = Array.from(mainEl.querySelectorAll('.mdc-chip-set'));
chipSetEls.forEach((el) => new MDCChipSet(el));

// Text field
const textFieldEls = Array.from(mainEl.querySelectorAll('.mdc-text-field'));
textFieldEls.forEach((el) => {
  let textField = new MDCTextField(el);
  if (el.classList.contains('error')) {
    textField.value = 'There is an error';
    textField.valid = false;
  } else if (el.classList.contains('mdc-text-field--textarea')) {
    textField.value = 'Subtitle 1';
  }
});
const helperTextEls = Array.from(mainEl.querySelectorAll('.mdc-text-field-helper-text'));
helperTextEls.forEach((el) => new MDCTextFieldHelperText(el));

// Linear progress
const linearProgressEl = Array.from(mainEl.querySelectorAll('.mdc-linear-progress'));
linearProgressEl.forEach((el) => {
  let linearProgress = new MDCLinearProgress(el);
  linearProgress.progress = 0.5;
  linearProgress.buffer = 0.7;
})

// Circular progress
const circularProgressEl = Array.from(mainEl.querySelectorAll('.mdc-circular-progress'));
circularProgressEl.forEach((el) => {
  let circularProgress = new MDCCircularProgress(el);
  circularProgress.progress = 0.7;
})

// FAB
const fabEls = Array.from(mainEl.querySelectorAll('.mdc-fab'));
fabEls.forEach((el) => new MDCRipple(el));

// Checkbox
const checkboxEls = Array.from(mainEl.querySelectorAll('.mdc-checkbox'));
checkboxEls.forEach((el) => {
  let checkbox = new MDCCheckbox(el);
  if (el.classList.contains('indeterminate-checkbox')) {
    checkbox.indeterminate = true;
  }
});

// Radio
const radioEls = Array.from(mainEl.querySelectorAll('.mdc-radio'));
radioEls.forEach((el) => new MDCRadio(el));

// Switch
const switchEls = Array.from(mainEl.querySelectorAll('.mdc-switch'));
switchEls.forEach((el) => new MDCSwitch(el));

// Top app bar
const topAppBarEls = Array.from(mainEl.querySelectorAll('.mdc-top-app-bar'));
topAppBarEls.forEach((el) => new MDCTopAppBar(el));

// List
const listEls = Array.from(mainEl.querySelectorAll('.mdc-list--avatar-list'));
listEls.forEach((el) => {
  let list = new MDCList(el);
  list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  list.singleSelection = true;
});

const listGroupedEls = Array.from(mainEl.querySelectorAll('.mdc-list-group'));
listGroupedEls.forEach((el) => {
  let list = new MDCList(el);
  list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  list.singleSelection = false;
});

// Select
const selectEls = Array.from(mainEl.querySelectorAll('.mdc-select'));
selectEls.forEach((el) => {
  const select = new MDCSelect(el)
  if (el.classList.contains('invalid')) {
    select.valid = false;
  }
  
});

// Snackbar
const snackbarEl = mainEl.querySelector('.mdc-snackbar');
new MDCSnackbar(snackbarEl);

// Dialog
const dialogEls = Array.from(mainEl.querySelectorAll('.mdc-dialog'));
dialogEls.forEach((el) => new MDCDialog(el));

// Slider
const sliderEl = mainEl.querySelector('.mdc-slider');
const slider = new MDCSlider(sliderEl);
slider.value = 5;

// Menu
const menuEl = mainEl.querySelector('.mdc-menu');
const menu = new MDCMenu(menuEl);
menu.open = true;
// Focus first component when menu is done opening if not in an iframe
if (window.top === window) {
  menuEl.addEventListener('MDCMenuSurface:opened', () => document.querySelector('.mdc-button').focus());
}

// Tabs
[...document.querySelectorAll('.mdc-tab-scroller')].forEach((elem) => {
  new MDCTabScroller(elem);
});

[...document.querySelectorAll('.mdc-tab-bar')].forEach((elem) => {
  new MDCTabBar(elem);
});

// Data Table
const dataTableEls = Array.from(document.querySelectorAll('.mdc-data-table'));
dataTableEls.forEach((el) => new MDCDataTable(el));