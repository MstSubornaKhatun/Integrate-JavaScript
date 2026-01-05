// console.log('login')
// alert()


// step-1: id k dhorechi getElementById
document.getElementById("login-btn")
    // click ==> event
    .addEventListener("click", function (event) {
        // console.log('hello')
        // console.log(event) 
        event.preventDefault(); // ata korle form fill kore login btn a click korle r refresh hobe na. arthat default behavior ta bondho kore dibe.


        // number access
        const mobileNumber = document.getElementById("mobile-number").value;
        console.log(mobileNumber)

        // pin access
        const pin = document.getElementById("pin").value;
        console.log(pin)
        const convertedPin = parseInt(pin)


        // mobile number er digit 11 ta ba er beshi hote hobe.
        // console.log(mobileNumber.length)
        if (mobileNumber.length===11){
            // console.log(typeof pin) //string ==> parseInt(pin) avabe string theke number a convert kore nibo.
            if(convertedPin===1234){
                // console.log('pin valid')
                // window.location.href="./main.html"
                window.location.href="./main.html"
            }
            else{
                alert('need valid pin')
            }
            // alert('valid number')
        }
        else{
            console.log('need valid mobile number')
        }

    })


