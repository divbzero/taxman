var plans = {
  '2017': '2017',
  '2018-house': '2018 (House Bill)',
  '2018-senate': '2018 (Senate Bill)',
  '2018-final': '2018 (Final Bill)',
};

var colors = {
  '2017': '#555',
  '2018-house': '#88f',
  '2018-senate': '#77e',
  '2018-final': '#00a',
};

var rates = {
  '2017': {
    single: {
      deduction: 6350,
      exemption: 4050,
      income: [
        {min:      0, max:     9325, rate: 0.10},
        {min:   9325, max:    37950, rate: 0.15},
        {min:  37950, max:    91900, rate: 0.25},
        {min:  91900, max:   191650, rate: 0.28},
        {min: 191650, max:   416700, rate: 0.33},
        {min: 416700, max:   418400, rate: 0.35},
        {min: 418400, max: Infinity, rate: 0.396},
      ],
    },
    joint: {
      deduction: 12700,
      exemption: 4050,
      income: [
        {min:      0, max:    18650, rate: 0.10},
        {min:  18650, max:    75900, rate: 0.15},
        {min:  75900, max:   153100, rate: 0.25},
        {min: 153100, max:   233350, rate: 0.28},
        {min: 233350, max:   416700, rate: 0.33},
        {min: 416700, max:   470700, rate: 0.35},
        {min: 470700, max: Infinity, rate: 0.396},
      ],
    },
    separate: {
      deduction: 6350,
      exemption: 4050,
      income: [
        {min:      0, max:     9325, rate: 0.10},
        {min:   9325, max:    37950, rate: 0.15},
        {min:  37950, max:    76550, rate: 0.25},
        {min:  76550, max:   116675, rate: 0.28},
        {min: 116675, max:   208350, rate: 0.33},
        {min: 208350, max:   235350, rate: 0.35},
        {min: 235350, max: Infinity, rate: 0.396},
      ],
    },
    household: {
      deduction: 9350,
      exemption: 4050,
      income: [
        {min:      0, max:    13350, rate: 0.10},
        {min:  13350, max:    50800, rate: 0.15},
        {min:  50800, max:   131200, rate: 0.25},
        {min: 131200, max:   212500, rate: 0.28},
        {min: 212500, max:   416700, rate: 0.33},
        {min: 416700, max:   444550, rate: 0.35},
        {min: 444550, max: Infinity, rate: 0.396},
      ],
    },
  },
  '2018': {
    single: {
      deduction: 6350,
      exemption: 4050,
      income: [
        {min:      0, max:     9525, rate: 0.10},
        {min:   9525, max:    38700, rate: 0.15},
        {min:  38700, max:    93700, rate: 0.25},
        {min:  93700, max:   195450, rate: 0.28},
        {min: 195450, max:   424950, rate: 0.33},
        {min: 424950, max:   426700, rate: 0.35},
        {min: 426700, max: Infinity, rate: 0.396},
      ],
    },
    joint: {
      deduction: 12700,
      exemption: 4050,
      income: [
        {min:      0, max:    19050, rate: 0.10},
        {min:  19050, max:    77400, rate: 0.15},
        {min:  77400, max:   156150, rate: 0.25},
        {min: 156150, max:   237950, rate: 0.28},
        {min: 237950, max:   424950, rate: 0.33},
        {min: 424950, max:   480050, rate: 0.35},
        {min: 480050, max: Infinity, rate: 0.396},
      ],
    },
    separate: {
      deduction: 6350,
      exemption: 4050,
      income: [
        {min:      0, max:     9525, rate: 0.10},
        {min:   9525, max:    38700, rate: 0.15},
        {min:  38700, max:    78075, rate: 0.25},
        {min:  78075, max:   118975, rate: 0.28},
        {min: 118975, max:   212475, rate: 0.33},
        {min: 212475, max:   240025, rate: 0.35},
        {min: 240025, max: Infinity, rate: 0.396},
      ],
    },
    household: {
      deduction: 9350,
      exemption: 4050,
      income: [
        {min:      0, max:    13600, rate: 0.10},
        {min:  13600, max:    51850, rate: 0.15},
        {min:  51850, max:   133850, rate: 0.25},
        {min: 133850, max:   216700, rate: 0.28},
        {min: 216700, max:   424950, rate: 0.33},
        {min: 424950, max:   453350, rate: 0.35},
        {min: 453350, max: Infinity, rate: 0.396},
      ],
    },
  },
  '2018-house': {
    single: {
      deduction: 12200,
      exemption: 0,
      income: [
        {min:      0, max:    45000, rate: 0.12},
        {min:  45000, max:   200000, rate: 0.25},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.396},
      ],
    },
    joint: {
      deduction: 24400,
      exemption: 0,
      income: [
        {min:       0, max:    90000, rate: 0.12},
        {min:   90000, max:   260000, rate: 0.25},
        {min:  260000, max:  1000000, rate: 0.35},
        {min: 1000000, max: Infinity, rate: 0.396},
      ],
    },
    separate: {
      deduction: 12200,
      exemption: 0,
      income: [
        {min:      0, max:    45000, rate: 0.12},
        {min:  45000, max:   130000, rate: 0.25},
        {min: 130000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.396},
      ],
    },
    household: {
      deduction: 18300,
      exemption: 0,
      income: [
        {min:      0, max:    67500, rate: 0.12},
        {min:  67500, max:   200000, rate: 0.25},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.396},
      ],
    },
  },
  '2018-senate': {
    single: {
      deduction: 12000,
      exemption: 0,
      income: [
        {min:      0, max:     9525, rate: 0.10},
        {min:   9525, max:    38700, rate: 0.12},
        {min:  38700, max:    70000, rate: 0.22},
        {min:  70000, max:   160000, rate: 0.24},
        {min: 160000, max:   200000, rate: 0.32},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.385},
      ],
    },
    joint: {
      deduction: 24000,
      exemption: 0,
      income: [
        {min:       0, max:    19050, rate: 0.10},
        {min:   19050, max:    77400, rate: 0.12},
        {min:   77400, max:   140000, rate: 0.22},
        {min:  140000, max:   320000, rate: 0.24},
        {min:  320000, max:   400000, rate: 0.32},
        {min:  400000, max:  1000000, rate: 0.35},
        {min: 1000000, max: Infinity, rate: 0.385},
      ],
    },
    separate: {
      deduction: 12000,
      exemption: 0,
      income: [
        {min:      0, max:     9525, rate: 0.10},
        {min:   9525, max:    38700, rate: 0.12},
        {min:  38700, max:    70000, rate: 0.22},
        {min:  70000, max:   160000, rate: 0.24},
        {min: 160000, max:   200000, rate: 0.32},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.385},
      ],
    },
    household: {
      deduction: 18000,
      exemption: 0,
      income: [
        {min:      0, max:    13600, rate: 0.10},
        {min:  13600, max:    51800, rate: 0.12},
        {min:  51800, max:    70000, rate: 0.22},
        {min:  70000, max:   160000, rate: 0.24},
        {min: 160000, max:   200000, rate: 0.32},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.385},
      ],
    },
  },
  '2018-final': {
    single: {
      deduction: 12000,
      exemption: 0,
      income: [
        {min:      0, max:     9525, rate: 0.10},
        {min:   9525, max:    38700, rate: 0.12},
        {min:  38700, max:    82500, rate: 0.22},
        {min:  82500, max:   157500, rate: 0.24},
        {min: 157500, max:   200000, rate: 0.32},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.37},
      ],
    },
    joint: {
      deduction: 24000,
      exemption: 0,
      income: [
        {min:      0, max:    19050, rate: 0.10},
        {min:  19050, max:    77400, rate: 0.12},
        {min:  77400, max:   165000, rate: 0.22},
        {min: 165000, max:   315000, rate: 0.24},
        {min: 315000, max:   400000, rate: 0.32},
        {min: 400000, max:   600000, rate: 0.35},
        {min: 600000, max: Infinity, rate: 0.37},
      ],
    },
    separate: {
      deduction: 12000,
      exemption: 0,
      income: [
        {min:      0, max:     9525, rate: 0.10},
        {min:   9525, max:    38700, rate: 0.12},
        {min:  38700, max:    82500, rate: 0.22},
        {min:  82500, max:   157500, rate: 0.24},
        {min: 157500, max:   200000, rate: 0.32},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.37},
      ],
    },
    household: {
      deduction: 18000,
      exemption: 0,
      income: [
        {min:      0, max:    13600, rate: 0.10},
        {min:  13600, max:    51800, rate: 0.12},
        {min:  51800, max:    82500, rate: 0.22},
        {min:  82500, max:   157500, rate: 0.24},
        {min: 157500, max:   200000, rate: 0.32},
        {min: 200000, max:   500000, rate: 0.35},
        {min: 500000, max: Infinity, rate: 0.37},
      ],
    },
  },
};

function calculateTax(values) {
  var rate = rates[values['plan']][values['status']];

  // deduction
  if (values['deduction-type'] === 'standard') {
    values['deduction'] = rate['deduction'];
  }

  // exemption
  values['exemption'] = values['dependents'] * rate['exemption'];

  // taxable income
  values['taxable-income'] = values['income'];
  values['taxable-income'] -= values['deduction'];
  values['taxable-income'] -= values['exemption'];
  values['taxable-income'] = Math.max(0, values['taxable-income']);

  // tax
  values['tax'] = 0;
  values['marginal-tax-rate'] = 0;
  for (var bracket, i = 0; bracket = rate['income'][i]; ++i) {
    if (values['taxable-income'] > bracket.max) {
      values['tax'] += (bracket.max - bracket.min) * bracket.rate;
      values['marginal-tax-rate'] = bracket.rate;
    } else {
      values['tax'] += (values['taxable-income'] - bracket.min) * bracket.rate;
      values['marginal-tax-rate'] = bracket.rate;
      break;
    }
  }
  values['overall-tax-rate'] = values['tax'] / values['income'];

  // preformat
  values['tax'] = Math.round(values['tax']);
  values['marginal-tax-rate'] = (100 * values['marginal-tax-rate']).toFixed(1);
  values['overall-tax-rate'] = (100 * values['overall-tax-rate']).toFixed(1);
}

function calculateTaxes(values, propname, propvalues) {
  var taxes = [];
  values = Object.assign({}, values);
  for (var i = 0; i < propvalues.length; ++i) {
    values[propname] = propvalues[i];
    calculateTax(values);
    taxes.push(values['tax']);
  }
  return taxes;
}

function range(start, stop, step) {
  switch (arguments.length) {
    case 0:
      start = stop = 0;
    case 1:
      stop = start;
      start = 0;
    case 2:
      step = 1
  }
  var array = [];
  if (step > 0) {
    for (i = start; i < stop; i += step) array.push(i);
  } else if (step < 0) {
    for (i = start; i > stop; i += step) array.push(i);
  }
  return array;
}

function formatValues(values) {
  for (var name in values) {
    if (typeof values[name] === 'number') {
      values[name] = values[name].toFixed();
    } else {
      values[name] = values[name] || '';
    }
  }
}
