const iconRoot = './assets/icon';

const products = [
    {
        name: 'Kelas Malam',
        description: 'Cerita seram dan horror dari kampus-kampus seperti UI, ITB, BINUS, STAN, dsb. Cerita dihimpun dari berbagai sumber di internet, sehingga kalian dapat menikmatinya langsung dari aplikasi ini. Daftar cerita akan terus diupdate (pastikan nyalakan auto-update untuk aplikasi ini ketika sudah install).',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.mandiri.kelasmalam',
        iconSrc: iconRoot + '/kelasmalam_icon.png'
    },
    {
        name: 'Common Counter',
        description: 'This app provides counting tool which each item has complete attributes: name, count, unit, note, and category.',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.common.commoncounter',
        iconSrc: iconRoot + '/commoncounter_icon.png'
    }
];


let productListContainer = document.getElementById('product-list-container');


let newDiv;

products.forEach(p => {
    newDiv = document.createElement('div');
    newDiv.className = 'product-item-container';
    newDiv.innerHTML = `
        <div class="product-item-label-value-container">
            <p class="product-item-label">Name</p>
            <p class="product-item-value">${p.name}</p>
            <p class="product-item-label">Description</p>
            <p class="product-item-value">${p.description}</p>
            <p class="product-item-label">Download</p>
            <p class="product-item-value"><a href="${p.playStoreLink}" target="_blank">Play Store</a></p>
        </div>
        <div class="product-item-icon-container">
            <img class="product-item-icon" src="${p.iconSrc}">
        </div>
    `;

    productListContainer.appendChild(newDiv);
});
