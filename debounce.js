var btn = document.getElementById('debounceButton');
var btnPressCount = document.getElementById('buttonPressCount');
var triggerCount = document.getElementById('triggerCount');

var btnCount = 0;
var triggCount = 0;
const myDebounce = (callback, timeDelay) => {
    let timerId ;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback()
        }, timeDelay)        
    }
}
const debouncedCount = myDebounce(() => {
    triggerCount.innerHTML = ++triggCount

}, 500)
btn.addEventListener('click', () => {
    btnPressCount.innerHTML = ++btnCount
    // btnPressCount.innerHTML = btnCount++
    //post increment -- incrementing after value being used. 
    // in the above case after 1st click count is still 0
    // triggerCount.innerHTML = ++triggCount
    debouncedCount();
})