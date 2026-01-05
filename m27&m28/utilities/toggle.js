document.getElementById("cashOutMoney").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function(){
    handleToggle("addMoney", "block")
    handleToggle("cashOutMoney", "none")
    handleToggle("transaction-history", "none")

    // document.getElementById("addMoney").style.display = "block"
    // document.getElementById("cashOutMoney").style.display = "none"
})

document.getElementById("cash-out-box").addEventListener("click", function(){
    handleToggle("addMoney", "none")
    handleToggle("cashOutMoney", "block")
    handleToggle("transaction-history", "none")
})






