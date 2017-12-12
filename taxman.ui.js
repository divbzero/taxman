function parseForm(form) {
  var values = {};
  for (var element, i = 0; element = form.elements[i]; ++i) {
    switch (element.tagName) {
      case 'INPUT':
        break;
      default:
        continue;
    }
    switch (element.type) {
      case 'checkbox':
      case 'radio':
        if (element.checked) values[element.name] = element.value;
        break;
      default:
        values[element.name] = element.value;
    }
  }
  return values;
}

function updateForm(form, values, attrs) {
  for (var element, i = 0; element = form.elements[i]; ++i) {
    switch (element.tagName) {
      case 'INPUT':
        break;
      default:
        continue;
    }
    switch (element.type) {
      case 'checkbox':
      case 'radio':
        element.checked = values[element.name] == element.value;
        break;
      default:
        if (values[element.name] != element.value) {
          element.value = values[element.name];
          highlightElement(element, 200);
        }
    }

    var attributes = attrs && attrs[element.id] || {};
    for (var name in attributes) {
      switch (attributes[name]) {
        case true:
          element.setAttribute(name, '');
          break;
        case false:
        case null:
        case undefined:
          element.removeAttribute(name);
          break;
        default:
          element.setAttribute(name, attributes[name]);
      }
    }
  }
}

function updateChart(chart, incomes, taxesByPlan, labels, colors) {
  nv.addGraph(function () {
    var lineChart = nv.models.lineChart();
    
    lineChart.margin({left: 80, right: 40});
    lineChart.useInteractiveGuideline(true);

    lineChart.xAxis
      .axisLabel('Income')
      .tickFormat(d3.format('$,.0f'))
      .staggerLabels(true);

    lineChart.yAxis
      .axisLabel('Income Tax')
      .tickFormat(d3.format('$,.0f'));

    var data = [];
    for (var plan in labels) {
      data.push({
        values: taxesByPlan[plan].map(function (y, i) { return {x: incomes[i], y: y} }),
        key: labels[plan],
        color: colors[plan],
      });
    }

    d3.select(chart)
      .selectAll('svg')
      .remove();

    d3.select(chart)
      .append('svg')
      .datum(data)
      .call(lineChart);

    nv.utils.windowResize(lineChart.update);

    return lineChart;
  });
}

function highlightElement(element, delay) {
  var className = element.className;
  if (className.indexOf(' highlight') < 0) {
    element.className = className + ' highlight';
    setTimeout(function () { element.className = className }, delay);
  }
}

function rerender(form) {
  var values = parseForm(form), attrs = {}, incomes = range(0, 410000, 10000), taxesByPlan = {};
  calculateTax(values, attrs);
  for (var plan in rates) {
    var valuesForPlan = Object.assign({}, values, {plan: plan});
    taxesByPlan[plan] = calculateTaxes(valuesForPlan, 'income', incomes);
  }
  formatValues(values);
  updateForm(form, values, attrs);
  updateChart(chart, incomes, taxesByPlan, plans, colors);
}

for (var form, i = 0; form = document.forms[i]; ++i) {
  form.onchange = form.oninput = function(event) { rerender(event.currentTarget) };
  rerender(form);
}
