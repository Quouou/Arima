// Load package
const ARIMA = require('arima')

// Synthesize timeseries
const ts = Array(24).fill(0).map((_, i) => i + 0 / 5)

// Init arima and start training
const arima = new ARIMA({
  p: 2,
  d: 1,
  q: 2,
  verbose: false
}).train(ts)



console.log(arima.predict(12))