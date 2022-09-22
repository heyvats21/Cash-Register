const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkBtn = document.querySelector("#btnCheck");
const errorMsg = document.querySelector("#error-message");
const amountQuantity = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];



function validateReturnAmount() {
    const billAmt = Number(billAmount.value);
    const cashAmt = Number(cashAmount.value);

    if ((billAmt > 0) && (cashAmt > 0)) {
        if (cashAmt < billAmt) {
            showErrorMessage('You seems broke, go and wash plates..')
        } else if (cashAmt === billAmt) {
            showErrorMessage('Bill is been paid, No change left, thanks')
        } else {
            showErrorMessage('');
            let balance = cashAmt - billAmt;
            calculateReturnChange(balance)
        }
    } else {
        showErrorMessage('You need to enter both the fields...');
    }
}



function calculateReturnChange(balance) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noteQuantity = Math.trunc(balance / availableNotes[i]);
        balance = balance % availableNotes[i];
        amountQuantity[i].innerText = noteQuantity;
    }
}

function showErrorMessage(msg) {
    errorMsg.innerText = msg;
}

checkBtn.addEventListener("click", validateReturnAmount);




















// // input


// // taking input from html world to javascript world
// const billAmount = document.querySelector("#bill-amount");
// const cashGiven = document.querySelector("#cash-given");
// const checkButton = document.querySelector("#check-button"); //check button
// const message=document.querySelector("#error-message");
// const noOfNotes=document.querySelectorAll(".no-of-notes");

// const availableNotes=[2000,500,100,20,10,5,1];

// checkButton.addEventListener("click",function validateBillAndCashAmount(){
//   hideMessage();
//   if(billAmount.value>0){
//     if(cashGiven.value>=billAmount.value){
//       const amountToBeReturned=cashGiven.value-billAmount.value;
//       calculateChange(amountToBeReturned);

//     }else{
//       showMessage("Do you wanna wash plates?");

//     }

//   }else{
//     showMessage("Invalid Bill Amount");
//   }
// })

// function calculateChange(amountToBeReturned){
//   for(let i=0;i<availableNotes.length;i++){
//     const numberofNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
//     amountToBeReturned %=availableNotes[i] ;
//     noOfNotes[i].innerText=numberofNotes;

//   }
// }


// function hideMessage(){
//   message.style.display="none";
// }


// function showMessage(msg){  //use different name apart from message bcz it will overwrite it and gennerate a promblem
//   message.style.display="block";
//   message.innerText=msg;
// }





// //to check value in console  use addEventListener
// // checkButton.addEventListener("click", () => {
// //   // console.log(billAmount.value);  //consoling billamount value
// //   // console.log(cashGiven.value);
// //   console.log("Checked")
// // });