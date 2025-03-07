// Code your solutions in this file
// let writeCards= (["Guadalupe", "Ollie", "Aki"], "surprise")
// for (let writeCard Of writeCards){
    // return `Thank you, ${writecards}, for the wonderful surprise gift!`
// }
function writeCards(names=["Guadalupe", "Ollie", "Aki"],event= "surprise"){
    return names.map(name =>  `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  function countDown(number= 10) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }