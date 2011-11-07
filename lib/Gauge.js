module.exports = Gauge;
function Gauge(name, fn) {
  this.name = name;
  this._fn = fn;
}

// This is sync for now, but maybe async gauges would be useful as well?
Gauge.prototype.toJSON = function() {
  return {
    value: this._fn(),
  };
};