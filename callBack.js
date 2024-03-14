function changeColor(element, index) {
    element.style.color = 'red';
    console.log(index);

}

const ele = document.getElementById("parentDiv");

Object.values(ele.children).map((item, index) => {
    item.addEventListener('click', (e) => {
        
        changeColor(item, index)
    });
});
