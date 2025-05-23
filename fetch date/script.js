let cardContainer = document.querySelector(".cardContainer");

let data = [
    {
        title: "iPhone 13",
        description: "Latest model from Apple with A15 chip.",
        price: 999,
        rating: 4.8,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=iPhone+13",
        availabilityStatus: "In Stock"
    },
    {
        title: "Samsung Galaxy S21",
        description: "Flagship phone from Samsung.",
        price: 899,
        rating: 4.5,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Galaxy+S21",
        availabilityStatus: "Out of Stock"
    },
    {
        title: "OnePlus 9 Pro",
        description: "Smooth performance with Hasselblad camera.",
        price: 749,
        rating: 4.6,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=OnePlus+9+Pro",
        availabilityStatus: "Limited Stock"
    },
    {
        title: "Google Pixel 6",
        description: "Google's flagship smartphone with excellent camera.",
        price: 699,
        rating: 4.4,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Pixel+6",
        availabilityStatus: "In Stock"
    },
    {
        title: "Sony WH-1000XM4",
        description: "Industry leading noise canceling headphones.",
        price: 349,
        rating: 4.7,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Sony+Headphones",
        availabilityStatus: "In Stock"
    },
    {
        title: "MacBook Pro 16\"",
        description: "Powerful laptop from Apple for professionals.",
        price: 2499,
        rating: 4.9,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=MacBook+Pro+16",
        availabilityStatus: "Limited Stock"
    },
    {
        title: "Dell XPS 13",
        description: "Compact and powerful ultrabook laptop.",
        price: 1199,
        rating: 4.5,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Dell+XPS+13",
        availabilityStatus: "In Stock"
    },
    {
        title: "Amazon Echo Dot",
        description: "Smart speaker with Alexa.",
        price: 49,
        rating: 4.3,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Echo+Dot",
        availabilityStatus: "In Stock"
    },
    {
        title: "Nintendo Switch",
        description: "Portable and home gaming console.",
        price: 299,
        rating: 4.6,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Nintendo+Switch",
        availabilityStatus: "Out of Stock"
    },
    {
        title: "Fitbit Charge 5",
        description: "Advanced fitness and health tracker.",
        price: 179,
        rating: 4.2,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Fitbit+Charge+5",
        availabilityStatus: "In Stock"
    },
    {
        title: "GoPro HERO10",
        description: "Action camera with stunning video quality.",
        price: 399,
        rating: 4.7,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=GoPro+HERO10",
        availabilityStatus: "Limited Stock"
    },
    {
        title: "Apple Watch Series 7",
        description: "Smartwatch with health monitoring features.",
        price: 399,
        rating: 4.8,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Apple+Watch+7",
        availabilityStatus: "In Stock"
    },
    {
        title: "Logitech MX Master 3",
        description: "Advanced wireless mouse for productivity.",
        price: 99,
        rating: 4.9,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Logitech+MX+Master+3",
        availabilityStatus: "In Stock"
    },
    {
        title: "Kindle Paperwhite",
        description: "E-reader with a high-resolution display.",
        price: 129,
        rating: 4.7,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=Kindle+Paperwhite",
        availabilityStatus: "In Stock"
    },
    {
        title: "JBL Flip 5",
        description: "Portable Bluetooth speaker with rich sound.",
        price: 119,
        rating: 4.5,
        thumbnail: "https://dummyimage.com/300x200/000/fff&text=JBL+Flip+5",
        availabilityStatus: "In Stock"
    }
];

function fetchData() {
    cardContainer.innerHTML = `
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`;

    setTimeout(() => {
        cardContainer.innerHTML = '';
        renderData();
    }, 500);
}

fetchData();

function renderData() {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        cardContainer.innerHTML += (`<div class="card">
            <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p>${item.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $${item.price}</li>
                <li class="list-group-item">Rating: ${item.rating}</li>
                <li class="list-group-item">${item.availabilityStatus}</li>
            </ul>
        </div>`);
    }
}
