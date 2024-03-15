const W = window.innerWidth;
const H = window.innerHeight;
function perTow(a){
    return (a/100)*W;    
}


const mountains = document.querySelectorAll(".mount");

let n = 0;
if(W<H){
    // mountains[0].style.marginLeft = "-18.68vw";
    // mountains[1].style.marginLeft = "-35.43vw";
    // mountains[2].style.marginLeft = "-20.5vw";
    // mountains[3].style.marginLeft = "36vw";
    // mountains[0].style.marginLeft = "-18.68vw";
    // mountains[1].style.marginLeft = `${-48.54+18.68-35.43}vw`;
    // mountains[2].style.marginLeft = `${-104.36+35.43-20.5}vw`;
    // mountains[3].style.marginLeft = `${-155.33+20.5+36}vw`;
    
    mountains[0].style.marginLeft = `${-77}px`;
    mountains[1].style.marginLeft = `${-200+77-146}px`;
    mountains[2].style.marginLeft = `${-430+146-84.5}px`;
    mountains[3].style.marginLeft = `${-640+84.5+149}px`;

    
}

let x = 1;
for(let mountain of mountains){
    console.log(mountain.offsetWidth)
    // mountain.style.marginLeft = `-${x}px`;
    if(W<H){
        // mountain.style.position = "absolute";
        mountain.style.align = "left";        
    }
    else{
        mountain.style.marginLeft = `-${perTow(x)}px`; 
        // x = mountain.offsetWidth/2;
        x += 10;
    }
    n++;
}
console.log(mountains)

for(let mountain of mountains){
    console.log(mountain.offsetLeft)
 }





const innerTags = document.querySelector(".inner");
const el = innerTags.querySelectorAll("div");


el.forEach(element => {
    let tick = 1;
    let val = element.offsetLeft;
    let speed = element.dataset['speed'];
    console.log(speed);
    tick = parseFloat(speed);


    const ticker = function() {
        val += tick;
        element.style.left = val+"px";
        if(val+element.clientWidth>W){
            val=-element.clientWidth;

        }

        
        // innerTags.children[0].clientWidth
        requestAnimationFrame(ticker);
    };
    ticker();
});

console.log(W, H);