document.getElementById("add-money").addEventListener("click", function(event){
    event.preventDefault();
    // getInputValueByID();
    // const value = getInputValueID();
    // console.log(value); //
    const amount = getInputValueByID("amount");
    //  console.log(amount)
    const pin = getInputValueByID("pin");
    //    console.log(pin)
    const account = document.getElementById("account").value;
    const mainBalance = getInnerTextByID("main-balance")
// console.log(mainBalance)
const selectedBank = document.getElementById("allbank").value;
console.log(selectedBank)

if(amount<0){
    alert("bhai eita kono kotha positive number dite hobe.")
    return; // return na korle -ve value kaj kobe.
}

    if(account.length===11){
        if(pin===1234){
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText=sum; --->setInnerTextByIDandValue use this function

            setInnerTextByIDandValue("main-balance", sum)

// transaction-history

const container = document.getElementById("transaction-container")
/*
const p = document.createElement("p");
p.innerText = `
added ${amount} from ${account}
`
console.log(p)

container.appendChild(p)

ata aro vinno vabe korte pari
*/ 

const div = document.createElement("div");
div.classList.add("bg-red-400")

div.innerHTML=`
<h1 class="text-yellow-300">Added Money form ${selectedBank}</h1>
<h3>${amount}</h3>
<p>Account Number: ${account}</p>

`
container.appendChild(div)





        }
        else{
            console.log('pin thik nai')
        }
    }
    else{
        console.log("accont number thik nai");
    }

   
 

    


});

