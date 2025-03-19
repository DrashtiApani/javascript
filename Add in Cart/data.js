const record = [
    {
        id: 1,
        name: 'Mechanical Analogue watch',
        qty: 1,
        price: 4100,
        image: 'https://images-static.nykaa.com/media/catalog/product/1/a/1a94a80TITAN-90110QM01_12.jpg'
    },
    {
        id: 2,
        name: 'Analogue watch',
        qty: 1,
        price: 8580,
        image: 'https://tse3.mm.bing.net/th?id=OIP.1a94MPDY7ZSDGALnEbDHTAHaEo&pid=Api&P=0&h=180'
    },
    {
        id: 3,
        name: 'Multifunctional Analogue watch',
        qty: 1,
        price: 6900,
        image: 'https://images-static.nykaa.com/media/catalog/product/8/b/8b65ce390145WL01_1.jpg'
    },
    {
        id: 4,
        name: 'Ceramic Fusion Analogue watch',
        qty: 1,
        price: 4500,
        image: 'https://tse2.mm.bing.net/th?id=OIP.Fj93jOt_Ge6cERgfL4iDZgAAAA&pid=Api&P=0&h=180'
    },
    {
        id: 5,
        name: 'Wedding Edit Analogue watch',
        qty: 1,
        price: 7500,
        image: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/10052037/2022/4/21/d73e6c56-8fee-4584-b1fa-b5c69d7b6bec1650542493115-Titan-Women-Purple-Analogue-Watch-2480WM02-2301650542492836-1.jpg'
    },
    {
        id: 6,
        name: 'Edge slim golden dial Analogue watch',
        qty: 1,
        price: 7000,
        image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw61a1f583/images/Titan/Catalog/1595YM01_1.jpg?sw=800&sh=800'
    },
    {
        id: 7,
        name: 'Edge slim golden dial Analogue watch',
        qty: 1,
        price: 7900,
        image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc434a89b/images/Fastrack/Catalog/FV60053WM01W_1.jpg?sw=360&sh=360'
    },
    {
        id: 8,
        name: 'Poze Quartz Analogue watch',
        qty: 1,
        price: 4600,
        image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8fce9d49/images/Sonata/Catalog/SP80085WM01W_1.jpg?sw=360&sh=360'
    }
    ,
    {
        id: 9,
        name: 'Meo Multifunction Analogue watch',
        qty: 1,
        price: 9000,
        image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw87e2f0c9/images/Sonata/Catalog/SP80078WM01WF_1.jpg?sw=360&sh=360'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

// header ma add to cart na num++ karva
const updateCartCount = () => {
    document.getElementById('count').innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

const viewProduct = () => {
    let tbl = "";
    record.forEach((val) => {
        tbl += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${val.image}" class="card-img-top" alt="${val.name}">
                    <div class="card-body">
                        <h5 class="card-title">${val.name}</h5>
                        <p class="card-text">${val.price}</p>
                        <a onclick="addToCart(${val.id})" class="btn btn-success btn-sm">Add to Cart</a>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('records').innerHTML = tbl;
}

// item add to cart
const addToCart = (id) => {
    const product = record.find(item => item.id === id);
    if (product) {
        cart.push(product);
        updateCartCount(); 
        alert("Product added to cart");
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// login and login button mte
const handleLoginLogout = () => {
    if (isLoggedIn) {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
    } else {
        document.getElementById('login-btn').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'none';
    }
};

//   logout mate
const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';  
};

// jo login hoy to j cart na page ma jai
const goToCart = () => {
    if (isLoggedIn) {
        window.location.href = 'cart.html';  
    } else {
        alert('Please log in to view your cart');
        window.location.href = 'login.html';  
    }
};

viewProduct();
updateCartCount();
handleLoginLogout();