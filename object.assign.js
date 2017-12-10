Object.assign = Object.assign || function assign(target) {
   for (var i = 1; i < arguments.length; ++i) {
     var source = arguments[i];
     for (var name in source) {
       target[name] = source[name];
     }
   }
   return target;
};
