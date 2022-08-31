const sliders = document.querySelectorAll("input[type='input']");

sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
    });

    const billInput = document.getElementById("bill")
    billInput.addEventListener("change", calculateTip);
    

    function calculateTip(){
       

        let bill = parseFloat( billInput.value);
       
        let tipPercent = document.getElementById("tip").value;
        if(tipPercent<1){
            return(tipPercent==0);
        }
        let noOfPeople = document.getElementById("no-of-people").value;
        if(noOfPeople<1){
            return(noOfPeople==0);
        }
       
        

        billInput.value= bill.toFixed(2);
        
        let totalTip= parseFloat((bill * (tipPercent/100)).toFixed(2));
        let total = parseFloat((bill + totalTip).toFixed(2));

        let tipPerPerson= (totalTip/noOfPeople).toFixed(2);
        let totalPerPerson = (total / noOfPeople).toFixed(2);
        if(bill < 1){
            return(bill =="0");
            
        }
        
       
        document.getElementById("tip-amt").
        textContent = `\$ ${totalTip}`;
        document.getElementById("total-amt").
        textContent = `\$ ${total}`;
        document.getElementById("tip-percent").
        textContent = `$ ${tipPercent}%`;
        document.getElementById("split-num").
        textContent = noOfPeople;
        document.getElementById("tip-per-person").
        textContent = `\$ ${tipPerPerson}`;
        document.getElementById("total-per-person").
        textContent = `\$ ${totalPerPerson}`;


 
    }
    calculateTip();