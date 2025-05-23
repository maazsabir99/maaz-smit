let Container = document.querySelector(".Container");

let data = [];

async function fetchData() {
    try {
        let url = await fetch("https://dummyjson.com/products");
        let res = await url.json();
        data = res.products;
        renderData();

    } catch (error) {
        console.log(error);
    }
}

fetchData()

function renderData() {
    for (let i = 0; i < data.length; i++) {
        const product = data[i];
        Container.innerHTML += (`<div class="card" style="width: 18rem;">
            <img src=${product.thumbnail} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p>${product.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-product">Price: ${product.price}</li>
                <li class="list-group-product">Rating: ${product.rating}</li>
                <li class="list-group-product">${product.availabilityStatus}</li>
            </ul>
        </div>`)

    }
}
