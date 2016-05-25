# holograph-webpack-plugin

Very simple webpack plugin to init and run [holograph](https://github.com/holography/holograph) on the 'done' step.

To use, install from npm and add the plugin to webpack config, passing any hologram options as required.

```
npm i holograph-webpack-plugin
```

```
var HolographPlugin = require('holograph-webpack-plugin');

module.exports = {
    plugins: [
        new HolographPlugin()
    ]
};
```
