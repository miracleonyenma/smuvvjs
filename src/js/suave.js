
function ease (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};


function smoothScroll(e, dur){
    var e = document.querySelector(e),
        ePos = e.getBoundingClientRect().top,
        startPos = window.pageYOffset,
        d = ePos,
        startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var elapsed = currentTime - startTime,
            run = ease(elapsed, startPos, d, dur);
        window.scrollTo(0, run);
        if(elapsed < dur) requestAnimationFrame(animation);
    };
            
    requestAnimationFrame(animation);
};
    

//run code when the dom is interactive - complete
document.addEventListener('readystatechange', function(e){
	if(e.target.readyState === "interactive"){
        console.log("init");
        console.log(e.target.readyState);
    }
    
	if(e.target.readyState === "complete"){
        const suaveLinks = document.querySelectorAll(".suaveLinks"),
        linkTarget = [];   
        
        for(i = 0; i < suaveLinks.length; i++){
            suaveLinks[i].addEventListener("click", function(e){
                e.preventDefault();
                smoothScroll(e.target.getAttribute("href"), 2000);
            });
        };        
	}
});
