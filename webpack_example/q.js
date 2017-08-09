// commonJS or nodeJS
var sosi = process.env.NODE_ENV !== "production";
if (sosi) {
    require('./m1.js');
}
require('./m2.js');  // synchronous


