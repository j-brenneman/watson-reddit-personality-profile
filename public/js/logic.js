function personParse(input) {
  var result = {};
  var personality = input.children[0].children[0].children[0].children;
  var name_array = [];
  var percent_array = [];
  for (var i = 0; i < personality.length; i++) {
    name_array.push(personality[i].name);
    percent_array.push(personality[i].percentage);
  }
  result.names = name_array;
  result.percent = percent_array;
  return result;
  console.log(result);
};
