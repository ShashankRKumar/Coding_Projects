const clock = document.querySelector('#clock')
const city =  'Austin'
setInterval(function() {
    let date = new Date;
    clock.innerHTML = `${city}:<br> 
    ${date.toLocaleTimeString()}`;
}, 1000);