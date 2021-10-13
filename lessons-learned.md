In order to use a local JSON file, require it and assign to variable:
  let airfields = require('../data/airfields.json');
  console.log(airfields[0].airportName);
https://stackoverflow.com/questions/52177298/import-json-file-in-react-with-data-format-error

filtering returns an array, even of only 1 element. need to select [0]


State should not be defined in a component, unless it's ONLY going to be used there.
  State should be passed down, changes passed up

When using text input, to input with 'Enter', wrap the text input field in a form
  you can then access the value of the input with e.target.{'name' property of input}.value