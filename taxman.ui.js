function adjustForm(form) {
  // adjust deduction
  var deduction = form.elements['deduction'];
  var deductionType = form.elements['deduction-type'].value;
  if (deductionType === 'standard') {
    deduction.type = 'text';
    deduction.min = '';
    deduction.step = '';
    deduction.disabled = true;
  } else {
    deduction.type = 'number';
    deduction.min = '0';
    deduction.step = '1000';
    deduction.disabled = false;
  }
  // adjust dependents
  var dependents = form.elements['dependents'];
  var currentStatus = form.elements['status'].value;
  var previousStatus = form.getAttribute('data-status');
  if (currentStatus === 'joint' && previousStatus !== 'joint') {
    dependents.min = 2;
    dependents.value = Number(dependents.value) + 1;
  } else if (currentStatus !== 'joint' && previousStatus === 'joint') {
    dependents.min = 1;
    dependents.value = Number(dependents.value) - 1;
  }
  form.setAttribute('data-status', currentStatus);
}

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

function updateForm(form, values) {
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
  }
}

function updateChart(chart, incomes, taxesByPlan, labels, colors) {
  nv.addGraph(function () {
    var lineChart = nv.models.lineChart();
    
    lineChart.margin({left: 80, right: 40});
    lineChart.useInteractiveGuideline(true);

    lineChart.xAxis
      .axisLabel('Income')
      .showMaxMin(false)
      .tickFormat(d3.format('$,.0f'));

    lineChart.yAxis
      .axisLabel('Income Tax')
      .showMaxMin(false)
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
  adjustForm(form);
  var values = parseForm(form), incomes = range(0, 410000, 10000), taxesByPlan = {};
  calculateTax(values);
  for (var plan in rates) {
    var valuesForPlan = Object.assign({}, values, {plan: plan});
    taxesByPlan[plan] = calculateTaxes(valuesForPlan, 'income', incomes);
  }
  formatValues(values);
  updateForm(form, values);
  updateChart(chart, incomes, taxesByPlan, plans, colors);
}

for (var form, i = 0; form = document.forms[i]; ++i) {
  form.onchange = form.oninput = function(event) { rerender(event.currentTarget) };
  rerender(form);
}
