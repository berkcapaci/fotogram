const photoSources = [ 

]

function renderPhoto() {
    for (let i = 1; i <= 12; i++) {
        console.log(i);
        document.getElementById('photo_gallery').innerHTML += createPhoto(i)
    }
}

function createPhoto(i) {
    return ` <div id= "photo ${i}"> ${i} </div> `
}
