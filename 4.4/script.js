

function totalCost() {

    let costOfApple = 10;
    let costOfBanana = 15;
    let costOfMango = 8;

    let noOfApples = parseInt(document.querySelector("#apples").value);
    let noOfBananas = parseInt(document.querySelector("#bananas").value);
    let noOfMnagoes = parseInt(document.querySelector("#mangoes").value);
   
    let calculateAmount = (noOfApples * costOfApple) + (noOfBananas * costOfBanana) + (noOfMnagoes * costOfMango);
     let bodyPrint = document.querySelector("body");
     bodyPrint.innerHTML -= "<p>" + "" + "</p>";
     
     bodyPrint.innerHTML += "<p>" + "your total cost is " + calculateAmount + "</p>";
}
