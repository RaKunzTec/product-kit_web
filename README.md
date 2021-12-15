<!-- SPDX-License-Identifier: MIT --->
<!-- © Daimler TSS GmbH --->
![Product Kit Web Logo](https://github.com/Daimler/product-kit_web/raw/main/docs/images/productkit_web_github_logo.png)
[![license](https://img.shields.io/badge/license-MIT-38de03e?style=flat)](LICENSE)
[![npm](https://img.shields.io/npm/v/@daimler/productkit-web)](https://www.npmjs.com/package/@daimler/productkit-web)
![material-components-web](https://img.shields.io/badge/material--components--web-v10.0.0-046AAE?&style=flat)

Product Kit for Web provides components for Daimler TSS web frontends based on Material Web Components.

Feel free to open an [issue](https://github.com/Daimler/product-kit_web/issues) or provide a pull request with the desired modifications.

## Examples
![Component Overview](https://github.com/Daimler/product-kit_web/raw/main/docs/images/component-overview-teaser.png)

## Installation

*Note that you must have node (and npm) installed.*

Install the npm package from the root directory through:
```
npm install @daimler/productkit-web
```

Import `styles.scss` inside your App.scss or similar root styling scss file:
```scss
@import "@daimler/productkit-react/src/theme/scss/styles";
```

Your Material components should now be styled accordingly to the styleguide of Daimler TSS!

## Usage

Add a component like for instance a button as stated in the Material [documentation/examples](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-button):
```html
<button class="mdc-button">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label">Text Button</span>
</button>
```

You don't need to import any styling as Product Kit does all the styling for you!

Add ripple effect or other modifications in your App.js:
```javascript
import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
```

Please look up other components in the [Material documentation](https://github.com/material-components/material-components-web/tree/v10.0.0/packages).

If you need help or something isn't working as expected feel free to open an [issue](https://github.com/Daimler/product-kit_web/issues).

## Contributing

We welcome any contributions.
If you want to contribute to this project, please read the [contributing guide](CONTRIBUTING.md).

## Code of Conduct

Please read our [Code of Conduct](https://github.com/Daimler/daimler-foss/blob/master/CODE_OF_CONDUCT.md) as it is our base for interaction.

## License

This project is licensed under the [MIT LICENSE](LICENSE).

## Provider Information

Please visit <https://www.daimler-tss.com/en/imprint/> for information on the provider.

Notice: Before you use the program in productive use, please take all necessary precautions,
e.g. testing and verifying the program with regard to your specific use.
The program was tested solely for our own use cases, which might differ from yours.