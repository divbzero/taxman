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

function highlightElement(element, delay) {
  var className = element.className;
  if (className.indexOf(' highlight') < 0) {
    element.className = className + ' highlight';
    setTimeout(function () { element.className = className }, delay);
  }
}

function rerender(form) {
  var values = parseForm(form), attrs = {}, incomes = range(0, 400000, 10000), taxesByPlan = {};
  calculateTax(values, attrs);
  for (var plan in rates) {
    var valuesForPlan = Object.assign({}, values, {plan: plan});
    taxesByPlan[plan] = calculateTaxes(valuesForPlan, 'income', incomes);
  }
  formatValues(values);
  updateForm(form, values, attrs);
}

for (var form, i = 0; form = document.forms[i]; ++i) {
  form.onchange = form.oninput = function(event) { rerender(event.currentTarget) };
}
