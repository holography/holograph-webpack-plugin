# holography-webpack-plugin

Very simple webpack plugin to init and run [holography](https://github.com/holography/holography) on the 'done' step.

To use, install from npm and add the plugin to webpack config, passing any hologram options as required.

```
npm i holography-webpack-plugin
```

```
var HolographyPlugin = require('holography-webpack-plugin');

module.exports = {
    plugins: [
        new HolographyPlugin()
    ]
};
```
