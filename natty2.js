let day = "Friday"; 
let isMember = true;

switch (day) {

  case "Monday":
    console.log("Monday Special: 50% off Espresso!");
    break;

  case "Wednesday":
    console.log("Wednesday Special: Buy one pastry, get one free!");
    break;

  case "Friday":
    console.log("Friday Special: Free cookie with every latte!");
    
    if (isMember === true) {
      console.log("Bonus for members: Double loyalty points!");
    }
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend Special: All-day Brunch Menu!");
    break;

  default:
    console.log("Just our regular delicious menu today!");
}