const b2 = document.getElementsByClassName('.hamburger-menu');
if(b2) {
    b2[0].addEventListener('click', clickHandler, false);
}
function clickHandler(event) {
alert('Clicked '+event.target.innerHTML+'. Thanks!');
}