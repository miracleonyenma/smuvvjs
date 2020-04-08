//init smuvv
// //using es6 object destructuring to pass default values to parameters
// //also pass an empty object by default, for when the function is called without any object
var smuvvInit = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.linkEl, linkEl = _c === void 0 ? ".smuvvLink" : _c, _d = _b.dur, dur = _d === void 0 ? 800 : _d, _e = _b.ease, ease = _e === void 0 ? easing : _e;
    console.log(linkEl);
    document.addEventListener("readystatechange", function (e) {
        console.log(e.target.readyState);
        if (e.target.readyState === "complete") {
            var el = document.querySelectorAll(linkEl);
            console.log(el);
            for (var i = 0; i < el.length; i++) {
                el[i].addEventListener("click", function (e) {
                    console.log(e.target);
                    console.log("click");
                    e.preventDefault();
                    smoothScroll(e.target.getAttribute("href"), dur);
                });
            }
        }
    });
    //smuvv has been initialized!
    smuvvd = true;
};
//default easing
var easing = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
};
//smooth scroll func for links
var smoothScroll = function (e, dur) {
    var eElement = document.querySelector(e), ePos = eElement.getBoundingClientRect().top, startPos = window.pageYOffset, d = ePos, startTime = null;
    var animation = function (currentTime) {
        if (startTime === null)
            startTime = currentTime;
        var elapsed = currentTime - startTime, run = easing(elapsed, startPos, d, dur);
        window.scrollTo(0, run);
        if (elapsed < dur)
            requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
};
window.addEventListener('load', function () { smuvvd ? smuvvd = true : console.log("smuvv Tip: For smuvv to work on your site, you need to initialize it:\n \n <script> \n   smuvvInit(); \n </script>"); });
//boolean for smuvv to check if it's been initialized 
var smuvvd = false;
