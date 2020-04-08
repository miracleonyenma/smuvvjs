//init smuvv
// //using es6 object destructuring to pass default values to parameters
// //also pass an empty object by default, for when the function is called without any object
const smuvvInit = ({linkEl = ".smuvvLink", dur = 800, ease = easing} = {})=>{
    console.log(linkEl);
    document.addEventListener("readystatechange", e => {
        console.log((e.target as HTMLDocument).readyState);
        
        if ((e.target as HTMLDocument).readyState === "complete") {

            const el = document.querySelectorAll(linkEl);
            console.log(el);
            for (let i = 0; i < el.length; i++) {
                el[i].addEventListener("click", e =>{
                    console.log(e.target);
                    console.log("click");
                    e.preventDefault();
                    smoothScroll((e.target as HTMLElement).getAttribute("href"), dur);
                });
            }

        }
    });
    //smuvv has been initialized!
    smuvvd = true;
};

//default easing
const easing = (t, b, c, d) => {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
};

//smooth scroll func for links
const smoothScroll = (e, dur) => {
    let eElement = document.querySelector(e),
    ePos = eElement.getBoundingClientRect().top,
    startPos = window.pageYOffset,
    d = ePos,
    startTime = null;
    
    const animation = (currentTime)=>{
        if(startTime === null) startTime = currentTime;
        let elapsed = currentTime - startTime,
        run = easing(elapsed, startPos, d, dur);
        window.scrollTo(0, run);
        if(elapsed < dur) requestAnimationFrame(animation);
    };
    
    requestAnimationFrame(animation);
};

window.addEventListener('load', ()=>{smuvvd ? smuvvd = true : console.log("smuvv Tip: For smuvv to work on your site, you need to initialize it:\n \n <script> \n   smuvvInit(); \n </script>");})
//boolean for smuvv to check if it's been initialized 
let smuvvd = false;
