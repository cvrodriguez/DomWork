const button1 = document.querySelector('#buttonID-section-1');
const button2 = document.querySelector('#buttonID2-section-1');
const section1 = document.querySelector('#sectionID-1')


button1.onclick = function (event) {
    const id = document.querySelector('#button-1Id')
    if (id) {
        section1.removeChild(id)
    } else {
        button1.insertAdjacentElement('afterend', buttonCreation('button-1Id',"We think our students are awesome!!!" ));
    }
}

button2.onclick = function (event) {
    const id = document.querySelector('#button2Id')
    if (id) {
        section1.removeChild(id)
    } else {
        button2.insertAdjacentElement('afterend', buttonCreation('button2Id',"We think our students are amazing too!!!" ));
    }
}



function buttonCreation(id, title) {
    const button = document.createElement('button');
    button.innerText = title;
    button.id = id
    button.className = "button-section-1"
    return button
}