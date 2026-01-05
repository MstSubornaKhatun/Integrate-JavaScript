// default
//  document.getElementById("addMoney").style.display = "block"
document.getElementById("cashOutMoney").style.display = "none"

document.getElementById("add-money-box").addEventListener("click", function(){
    document.getElementById("addMoney").style.display = "block"
    document.getElementById("cashOutMoney").style.display = "none"
})


document.getElementById("cash-out-box").addEventListener("click", function(){
    document.getElementById("cashOutMoney").style.display = "block"
    document.getElementById("addMoney").style.display = "none"
})


