function HolographyPlugin() {
  this.hologram = require('holography');
}

HolographyPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('done', function() {
    self.hologram.run();
  });
};

module.exports = HolographPlugin;
