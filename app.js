let about = document.getElementsByClassName('about');

document.getElementsByClassName('btn')[0].style = "border-bottom: 2px solid #FF7474; color: #FF7474;"
function show(index) {
    for (let i = 0; i < about.length; i++) {
        if (i == index) {
            about[i].style.display = 'flex'
            document.getElementsByClassName('btn')[i].style = "border-bottom: 2px solid #FF7474; color: #FF7474;"
        }
        else {
            about[i].style.display = 'none'
            document.getElementsByClassName('btn')[i].style = "border: none; color: black;"
        }
    }
}
