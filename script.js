let currentPhotoIndex = 0;

let photoSource = [ 
"photo_01.jpg",
"photo_02.jpg",
"photo_03.png",
"photo_04.jpg",
"photo_05.jpg",
"photo_06.jpg",
"photo_07.jpg",
"photo_08.jpg",
"photo_09.jpg",
"photo_10.jpg",
"photo_11.jpg",
"photo_12.jpg"
];

function renderPhoto() {
    let gallery = document.getElementById('photo_gallery');
        gallery.innerHTML = "";
    for (let i = 0; i < photoSource.length; i++) {
        gallery.innerHTML += createPhoto(i);
    }
    initDialog();
}

function createPhoto(i) {
       return `
        <div class="photo">
            <img
                src="./assets/images/${photoSource[i]}" alt="Photo ${i + 1}"
                onclick="openDialog(${i})">
        </div>
    `;
}

function openDialog(i) {
    currentPhotoIndex = i;
    updateDialog();
    document.getElementById('photo_dialog').showModal();
    }
  
function updateDialog() {    
    document.getElementById('dialog_image').src =
        `./assets/images/${photoSource[currentPhotoIndex]}`;
    document.getElementById('dialog_title').innerText = photoSource[currentPhotoIndex];    
    document.getElementById('photo_counter').innerText = `${currentPhotoIndex + 1} / ${photoSource.length}` ;
}

function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photoSource.length) {
        currentPhotoIndex = 0;
    }
    updateDialog();
}

function previousPhoto() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photoSource.length - 1;
    }
    updateDialog();
}

function closeDialog() {

    document.getElementById('photo_dialog').close();
}

function initDialog() {
    const dialog = document.getElementById('photo_dialog');
    dialog.addEventListener('click', (event) => {
        const dialogDimensions = dialog.getBoundingClientRect();
        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            dialog.close();
        }
    });
}