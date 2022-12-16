let result = document.getElementById("resultat");

function generateList() // genererar listan, if satsen gör att listan byts ut vid varje knapp tryck istället för att nya skapas på varandra
{
    
    if(result.innerHTML === "")
    {
        let oList = document.createElement("ol"); //skapa ol
        let list = {}; //skapa array
        let number = 0;
        let randomNumber = 1 + Math.floor(Math.random() * 10); //storleken på array
        for(let i = 0; i < randomNumber; i++){
            list[i] = Math.floor(Math.random() * 101); //arrayen fylls med slumpmässiga tal för varje iteration
            number = list[i]; 
            console.log(number);
            let listItem = document.createElement("li"); // skapa list taggen i html och populera med talen
            listItem.innerText = number;
            oList.appendChild(listItem);
        }

        result.appendChild(oList); //hämta ol till diven
    }
    else
    {   
        result.innerText = "";
        let oList = document.createElement("ol");

        let list = {};
        let number = 0;
        let randomNumber = 1 + Math.floor(Math.random() * 10);
        for(let i = 0; i < randomNumber; i++){
            list[i] = Math.floor(Math.random() * 101);
            number = list[i];
            console.log(number);
            let listItem = document.createElement("li");
            listItem.innerText = number;
            oList.appendChild(listItem);
        }

        result.appendChild(oList);
    }
    
}