export function showTabLoader(duration) {
    if (!duration) return;

    var now = performance.now();
    // To avoid flickering, you need some big document
    // Please change this url in your script, wikimedia may not be happy with us.
    var url =
        'https://upload.wikimedia.org/wikipedia/commons/3/35/Viborg_Katedralskole_Symmetrical.jpg';

    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.onload = function () {
        if (performance.now() - now < +duration) {
            this.src = url + '?' + Math.random();
        }
    };
    var check = function (time) {
        if (time - now > +duration) {
            iframe.src = '';
            iframe.parentNode.removeChild(iframe);
            return;
        }
        requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
    iframe.src = url;
}
