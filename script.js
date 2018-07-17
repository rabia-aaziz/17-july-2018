let shoppinglist = [""]

function addItems(){
    
   let item = document.querySelector("input").value;
    shoppinglist.push (item);
}

function showItems(){

    let listElem = document.querySelector("ul");
    listElem.innerHTML="";
    for (let i = 0 ; i <= shoppinglist.length ; i++)
    {
        listElem.innerHTML +="<li>" + shoppinglist[i] + "</li>";
       
    }

}

function clearList(){

    let listElem = document.querySelector("ul");
    listElem.innerHTML = "";
}