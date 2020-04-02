
//initialize suave
function suaveInit({linkEl, dur, ease}){
    //run code when the dom is interactive - complete
    document.addEventListener('readystatechange', function(e){
        if(e.target.readyState === "interactive"){
            console.log("init");
            console.log(e.target.readyState);
        }
        
        if(e.target.readyState === "complete"){
            suaved ? suaved = true : console.log("Suave Tip: For suave to work on your site, you need to initialize it:\n \n <script> \n   suaveInit(); \n </script>");
            


            console.log(linkEl, dur, ease);
            // check if the function parameters have values
            // if not, assign default values
            linkEl == undefined ? linkEl = document.querySelectorAll(".suaveLink") : linkEl = document.querySelectorAll(linkEl)
            dur == undefined ? dur = 800 : dur = dur;
            ease == undefined ? ease = easing : ease = ease;
            
            for(i = 0; i < linkEl.length; i++){
                linkEl[i].addEventListener("click", function(e){
                    e.preventDefault();
                    smoothScroll(e.target.getAttribute("href"), dur);
                });
            };    
            console.log(linkEl, dur, ease);
            //suave has been initialized!
            suaved = true;
        
        }
    });
}

//default easing
function easing (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};

//smooth scroll func for links
function smoothScroll(e, dur){
    var e = document.querySelector(e),
    ePos = e.getBoundingClientRect().top,
    startPos = window.pageYOffset,
    d = ePos,
    startTime = null;
    
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var elapsed = currentTime - startTime,
        run = easing(elapsed, startPos, d, dur);
        window.scrollTo(0, run);
        if(elapsed < dur) requestAnimationFrame(animation);
    };
    
    requestAnimationFrame(animation);
};

//boolean for suave to check if it's been initialized 
let suaved = false;