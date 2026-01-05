document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account").value;

    const amount = getInputValueByID("cashout-amount");
    // console.log(amount)
    const pinNumber = getInputValueByID("cashout-pin");
const mainBalance = getInnerTextByID("main-balance");

if(amount>mainBalance){
    alert("invalid amount")
    return;
}

    if(accountNumber.length ===11){
        if(pinNumber===1234){
            const sum = mainBalance - amount;
            setInnerTextByIDandValue("main-balance", sum)


// transaction-history
const container = document.getElementById("transaction-container")
const p = document.createElement("p");
p.innerText = `
cashout ${amount} from this ${accountNumber}
`
console.log(p)

container.appendChild(p)


        }
        else{
            console.log('pin not valid')
        }
    }
    else{
        console.log('account number not valid')
    }

})