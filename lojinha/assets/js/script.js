document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Painel Xit FF', price: 'R$ 50,00', image: 'https://via.placeholder.com/150' },
        { name: 'Seguidores', price: 'R$ 20,00', image: 'https://via.placeholder.com/150' },
        { name: 'CC INFO', price: 'R$ 100,00', image: 'https://via.placeholder.com/150' },
        { name: 'CC FULL', price: 'R$ 200,00', image: 'https://via.placeholder.com/150' },
        { name: 'Consul', price: 'R$ 150,00', image: 'https://via.placeholder.com/150' },
        { name: 'Painel Ban Whats', price: 'R$ 300,00', image: 'https://via.placeholder.com/150' },
        { name: 'Painel Ban Insta', price: 'R$ 400,00', image: 'https://via.placeholder.com/150' },
    ];

    const productsContainer = document.getElementById('products-container');
    const searchBar = document.getElementById('search-bar');

    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productCard.appendChild(productImage);

            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productCard.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;
            productCard.appendChild(productPrice);

            const buyButton = document.createElement('a');
            buyButton.classList.add('buy-button');
            buyButton.textContent = 'Comprar';
            buyButton.href = `https://api.whatsapp.com/send?phone=553497637882&text=Ol%C3%A1,%20tenho%20interesse%20em%20comprar%20o%20produto%20${product.name}`;
            buyButton.target = '_blank';
            productCard.appendChild(buyButton);

            productsContainer.appendChild(productCard);
        });
    }

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchString);
        });
        displayProducts(filteredProducts);
    });

    displayProducts(products);

    // Snowfall effect
    const snowfall = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 and 5 seconds
        snowflake.innerHTML = '❄️';
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    };

    setInterval(snowfall, 100);
});
