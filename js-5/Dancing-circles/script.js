function changeStyle(){

    let circle = document.querySelector("div");
    
    let newSize = parseInt(Math.random() * 300);
    circle.style.color = "orange";
    circle.style.height= "300px";
    circle.style.width= "300px";
    // circle.style.fontSize= "100px";
    circle.style.fontSize= "100px";
    
    circle.style.borderColor = "orange";
    circle.style.border = "dotted";
      
    circle.innerHTML = "20";

    circle.marginLeft = "100";
    
}