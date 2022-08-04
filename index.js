
function countDown() {
    for (let countDown = 0; countDown < 11; countDown++) {
      console.log(countDown);
    }
  }
  const newArr = [];
  function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
      newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      debugger;
    }
    return newArr;
  }