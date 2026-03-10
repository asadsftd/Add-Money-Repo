document.getElementById("btn")
.addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account").value;
    const pinNumber = document.getElementById("pin").value;
    const convert= parseInt(pinNumber);
    if(accountNumber.length === 11){
        if(convert === 1234){
            window.location.href="index2.html";
        }
        else{
            alert("Plz current Pin");
        }
    }
    else{
        alert("Plz Valid Number");
    }
   
});