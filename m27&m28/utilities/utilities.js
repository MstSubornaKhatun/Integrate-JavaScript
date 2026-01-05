function getInputValueByID(id){
    // console.log("hello boss");
    // return "hello boss"
    // console.log(id)

    const value = document.getElementById(id).value;
    // console.log(value)
    const convertedValue = parseFloat(value);
    // console.log(convertedValue)
    return convertedValue;

}

// function call kora jabe other js file a



function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id, value){
    // console.log(id, value)
    document.getElementById(id).innerText = value;
}

// function
function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}
