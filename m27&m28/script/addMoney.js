// console.log('add money')
// alert()


document.getElementById("add-money").addEventListener("click", function(event){
    event.preventDefault(); // default behavior ta bad dibe arthat form er vitore reload dibe oita r dibe na.
    const amount = document.getElementById("amount").value;
    // console.log(amount);
    // console.log(typeof amount) // string tai number a convert kore nibo.

    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    // 4500 ke dhorte hobe
    const mainBalance = document.getElementById("main-balance").innerText; // element er vitorer taxt neoyar jonno innerText nite hobe r input er text ba number neoyaar jonno value ite hoi.
    // console.log(mainBalance)
    // console.log(typeof mainBalance) // string
    const convertMainBalance = parseFloat(mainBalance);



    if(convertedPin===1234){
        console.log('add kora jabe')
        const sum = convertMainBalance + convertedAmount;
        // console.log(sum)
        document.getElementById("main-balance").innerText = sum

    }
    else {
        console.log('pin shothik na')
    }

})