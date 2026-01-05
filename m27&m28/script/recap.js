document.getElementById("add-money").addEventListener("click", function(event){
    event.preventDefault();
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);


    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);

    if(amount && pin){

        if(convertedPin===1234){
            // console.log('okk')
            const sum = convertMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
            // console.log(sum)

        }
        else{
            console.log('enter valid pin')
        }
    }
    else{
        console.log('enter amount')
    }

})