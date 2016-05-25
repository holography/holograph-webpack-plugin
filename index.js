function HolographPlugin() {
  this.holograph = require('holograph');
}

HolographPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('done', function() {
    self.holograph.run();
  });
};

module.exports = HolographPlugin;
