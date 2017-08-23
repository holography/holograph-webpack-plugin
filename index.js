'use strict';

var extend = require('extend');

function HolographPlugin(options) {
  this.holograph = require('holograph');
  this.options = extend({
      source: './scss',
      destination: './holograph',
      documentation_assets: './node_modules/holograph/assets',
      dependencies: [
        'css'
      ],
      css_include: [
        'css/example.css'
      ],
      index: 'basics',
      exit_on_warnings: false,
      global_title: 'Holograph stylesheet'
  }, options)
}

HolographPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('done', function() {
    self.holograph.holograph(self.options, function(err, result) {
        if (err) {
            console.log(err);
            return(err);
        }

        console.log('Holograph build successful!');
    });
  });
};

module.exports = HolographPlugin;
