window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 1500) {
        document.getElementById('btnScrollUp').style.display = 'block';
    } else {
        document.getElementById('btnScrollUp').style.display = 'none';
    }
};

