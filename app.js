let typeText = document.querySelector('.typeText');
let textToType = "Front-end Developer from Virginia";
let index = 0, isAdding = true;

function playAnim() {
  setTimeout(function (){
    // set text of typeText to textToType using index
    typeText.innerText = textToType.slice(0, index)
    if (isAdding) {
      // adds text
      if(index > textToType.length){
        // stops adding text
        isAdding = false;
        // break: wait 2s before playing again
        setTimeout( function () {
          playAnim()
        }, 1800)
        return;
      } else {
        // increment index by 1
        index++;
      }
    } else {
      // remove text
      if(index === 0) {
        // no more text to remove
        isAdding = true
      } else {
        // decrement index by 1
        index--;
      }
    }
    // call function to run
    playAnim();
  }, 150)
}

//start animation
playAnim();