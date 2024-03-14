const innerTags = document.querySelector(".inner");
const el = innerTags.querySelectorAll("div");


el.forEach(element => {
    let tick = 1;
    let val = element.offsetLeft;
    let speed = element.dataset['speed'];
    console.log(speed);
    tick = parseFloat(speed);


    const ticker = function() {
        element.style.visibility = true;
        val += tick;
        element.style.left = val+"px";
        if(val>window.innerWidth){
            val=-element.clientWidth;

        }

        
        // innerTags.children[0].clientWidth
        requestAnimationFrame(ticker);
    };
    ticker();
});

const W = window.screen.width;
const H = window.screen.height;
function perTow(a){
    return (a/100)*W;    
}


const mountains = document.querySelectorAll(".mount");

let n = 0;
if(W<H){
    mountains[0].style.marginLeft = "-18.68vw"; 
    mountains[1].style.marginLeft = "-35.43vw";
    mountains[2].style.marginLeft = "-20.5vw";
    mountains[3].style.marginLeft = "36vw";
    
}

let x = 1;
for(let mountain of mountains){
    console.log(mountain.offsetWidth)
    // mountain.style.marginLeft = `-${x}px`;
    if(W<H){
        mountain.style.position = "absolute";
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