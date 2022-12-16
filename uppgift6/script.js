const result = document.getElementById("resultat");

function returnNumber(inputValue){
    let n = inputValue.value;
    let p = document.createElement("p");
    if (!isNaN(n))
    {
       p.innerText = n*n;
       result.appendChild(p);
    } 
    else 
    {
        p.innerText = "input is not number";
        result.appendChild(p);
    }
}