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
})