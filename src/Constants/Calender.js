export const Months = {
  "01" : "Jan",
  "02" : "Feb",
  "03" : "Mar",
  "04" : "Apr"
}


export const generateRandomNumbers = (n) => {
  var numbers = [];
  for (var i = 0; i < n; i++) {
    var randomNumber = Math.floor(Math.random() * 1001);
    numbers.push(randomNumber);
  }
  return numbers;
}


export const cityScale = {
  'Delhi' : -50, 
  'Mumbai' : -21, 
  'Hyderabad' : -90, 
  'Bangalore' : 44,
  'Chennai' : -50, 
  'Pune' : 62, 
  'Noida' : -71, 
  'Gujrat' : 80, 
  'Agra' : -100, 
  'Indore' : -10
};