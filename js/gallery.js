const galleryContainer = document.querySelector('.gallery');

const images = [];
let i = 1;
while (i<=11) {
images.push({
    preview: 'https://via.placeholder.com/150',
    original: 'https://via.placeholder.com/600',
    description: `Description ${i}`,
    })
    i++;
}


function createGalleryItem(image) {
return `
    <li>
        <img src="${image.preview}" data-source="${image.original}" alt="${image.description}">
    </li>
`;
}

function renderGallery(images) {
const galleryItems = images.map(createGalleryItem).join('');
galleryContainer.innerHTML = galleryItems;
}

renderGallery(images);

galleryContainer.addEventListener('click', e => {
if (e.target.tagName === 'IMG') {
    const largeImageURL = e.target.dataset.source;
    const alt = e.target.alt;

    const instance = basicLightbox.create(`
        <img src="${largeImageURL}" alt="${alt}">
    `);
    
    instance.show();
}
});
