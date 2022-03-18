let startNum = 1;
let endNum;
let randomNum = 0;
let haveIt = [];

const randomDisplay = document.querySelector(".show");
const button = document.querySelector(".continue")


// window.addEventListener("keydown", handleKeyPress);
// function handleKeyPress(e){
//   e.preventDefault();
//   if (e.key === " " || e.key ==="Enter"){
//       randomIt(startNum, endNum);
//   }
// }

function ask(){
    startNum = prompt("This is random Number generator, Please type your starting Number", 1);
    endNum = prompt("Please type your ending Number", 10);
    check(startNum, endNum);
}
function check(startNum, endNum){
    if (startNum > 0 && endNum < 1000 && endNum > startNum){
        startNum = Math.floor(startNum);
        endNum = Math.floor(endNum);
        randomIt(startNum, endNum);
    }else{
        alert("Starting Number should be a number greater than 0, Ending Number should be less than 1000");
        ask();
    }
}
 function randomIt(startNum, endNum){
    let totalEle = endNum - startNum + 1;
    randomNum = Math.round(Math.random() * totalEle + startNum) + 1;
    ///alert("The random number is " + randomNum);
    if(!haveIt.includes(randomNum)) {
        if (endNum >= randomNum && startNum <= randomNum){
        haveIt.push(randomNum);
        console.log(haveIt);
        }else{
            randomIt(startNum, endNum);
        }
    }else if (randomNum === 0){
        randomIt(startNum, endNum);
    }else{
        randomIt(startNum, endNum);
    }
    randomDisplay.textContent = randomNum;
 }





 button.addEventListener("click", () => randomIt(startNum, endNum));

//randomIt(1, 10);
ask();