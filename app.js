var toggle = document.getElementById("check");
const prices = document.querySelectorAll(".price");
const priceMonthly = ["&dollar;<span>19.99</span>","&dollar;<span>24.99</span>","&dollar;<span>39.99</span>"]
const priceYearly = ["&dollar;<span>199.99</span>","&dollar;<span>249.99</span>","&dollar;<span>399.99</span>"]

function togglerFunc(){
    for (var i = 0; i < prices.length; i++) {
        if(toggle.checked==true){
            prices[i].innerHTML=priceMonthly[i];
            gsap.fromTo(prices[i],{
                duration:2,
                opacity:0,
                x:50,
                ease:Power2.easeOut
            },{
                opacity:1,
                x:0
            })
        }
        else{
            prices[i].innerHTML=priceYearly[i];
            gsap.fromTo(prices[i],{
                duration:1,
                opacity:0,
                x:50,
                ease:Power2.easeOut
            },{
                opacity:1,
                x:0
            })
        }
        
    }
}

