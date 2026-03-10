document.getElementById("btn")
.addEventListener('click', function(event){
    window.location.href="index.html";
});

document.getElementById("add")
.addEventListener('click', function(event){
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("mainbalance").innerText;
    const convertedBalance = parseFloat(mainBalance);
    const pin = document.getElementById("pin").value;
    const cenvertedPin = parseInt(pin);
    if(cenvertedPin === 1234){
        const sum = convertedAmount + convertedBalance;
        document.getElementById("mainbalance").innerText=sum;
    }
    else{
        console.log("thik nai");
    }
});

document.getElementById("cash-out").style.display= "none";
document.getElementById("card-one")
.addEventListener('click', function(event){
document.getElementById("add-money").style.display="block";
document.getElementById("cash-out").style.display="none";
});
document.getElementById("card-two")
.addEventListener('click', function(event){
document.getElementById("add-money").style.display="none";
document.getElementById("cash-out").style.display="block";
});



document.getElementById("out")
.addEventListener('click', function(event){
    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("mainbalance").innerText;
    const convertedBalance = parseFloat(mainBalance);
    const pin = document.getElementById("cashout-pin").value;
    const cenvertedPin = parseInt(pin);
    if(cenvertedPin === 1234){
        const sum = convertedBalance - convertedAmount;
        document.getElementById("mainbalance").innerText=sum;
    }
    else{
        console.log("thik nai");
    }
});