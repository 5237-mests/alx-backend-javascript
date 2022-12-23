import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

// expected output
// Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
// [object SFO]