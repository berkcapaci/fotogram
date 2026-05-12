let photoSource = [ 
"photo_01.jpg"
"photo_02.jpg"
"photo_03.png"
"photo_04.jpg"
"photo_05.jpg"
"photo_06.jpg"
"photo_07.jpg"
"photo_08.jpg"
"photo_09.jpg"
"photo_10.jpg"
"photo_11.jpg"
"photo_12.jpg"
];

function renderPhoto() {
    for (let i = 1; i <= 12; i++) {
        console.log(i);
        document.getElementById('photo_gallery').innerHTML += createPhoto(i)
    }
}

function createPhoto(i) {
    return ` <div id= "photo ${i}"> ${i} </div> `
}
