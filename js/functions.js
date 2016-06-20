// close footBar
function closeFoot() {
    var footBar = document.getElementById("footBar");
    footBar.className = "email-foot close-foot";
}

// headBar transition

$(window).on("scroll", function () {
    var headBar = document.getElementById("headBar");
    if ($(this).scrollTop() > 100) {
        headBar.className = "logo-head-scroll";
    }
    else {
        headBar.className = "logo-head-home";
    }
});

// //smooth scroll to top
//
// var t1=0;
// window.onscroll = scroll1;
//
// function scroll1()
// {
//     var scrollToTop = document.getElementById('scrollToTop');
//     window.scrollY>0 ? scrollToTop.style.opacity='100' :  scrollToTop.style.opacity='0';
// }
// function abcd()
// {
//     var y1 = window.scrollY;
//     y1 = y1-1000;
//     window.scrollTo(0,y1);
//     if(y1>0)
//     {
//         t1 = setTimeout("abcd()",100);
//     }
//     else
//     {
//         clearTimeout(t1);
//     }
// }
