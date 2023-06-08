const products = [
    {
      id: 1,
      Image: "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
      name: "Air Pods Max",
      price: "1000",
      category: "Accessories",
      quantity: 5,
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/sX0LYcgN/frank-septillion-Qrspubmx6k-E-unsplash.jpg",
      name: "Beats by Dr Dre",
      price: "400",
      category: "Accessories",
      quantity: 3,
    },
    {
      id: 3,
      Image: "https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
      name: "Beats by Dr Dre",
      price: "600",
      category: "Accessories",
      quantity: 5,
    },
    {
      id: 4,
      Image: "https://i.postimg.cc/BbDDnSLn/auguras-pipiras-4xnuc-Ld-UPt-A-unsplash.jpg",
      name: "iPhone 20W Adapter",
      price: "100",
      category: "Accessories",
      quantity: 5,
    },
    {
      id: 5,
      Image: "https://i.postimg.cc/Xq2QSKh0/charlesdeluvio-JWydjix-Dw1-M-unsplash.jpg",
      name: "MobiDisk USB Stick",
      price: "50",
      category: "Accessories",
      quantity: 10,
    },
    {
      id: 6,
      Image: "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
      name: `MacBook Pro`,
      price: `1200`,
      category: "Laptop",
      quantity: 5,
    },
    {
      id: 7,
      Image: "https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
      name: `MacBook Air`,
      price: `700`,
      category: "Laptop",
      quantity: 7,
    },
    {
      id: 8,
      Image: "https://i.postimg.cc/jSZMfL7L/joshua-woroniecki-lzh3h-Pt-Jz9c-unsplash.jpg",
      name: `Acer Aspire 3`,
      price: `800`,
      category: "Laptop",
      quantity: 3,
    },
    {
      id: 9,
      Image: "https://i.postimg.cc/NM94HD60/nordwood-themes-sg8n-Xmp-WDM-unsplash.jpg",
      name: `HP - 15 Ryzen 3`,
      price: `640`,
      category: "Laptop",
      quantity: 2,
    },
    {
      id: 10,
      Image: "https://i.postimg.cc/CMPzn0vm/erick-cerritos-i5-UV2-Hp-ITYA-unsplash.jpg",
      name: `Dell - Inspiron 3511`,
      price: `750`,
      category: "Laptop",
      quantity: 5,
    },
    {
      id: 11,
      Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
      name: `iPhone 11`,
      price: `500`,
      category: "Phones",
      quantity: 5,
    },
    {
      id: 12,
      Image: "https://i.postimg.cc/Kz6mbqJG/thom-bradley-1-NZcjdo2h-KQ-unsplash1.jpg",
      name: `iPhone 11 Pro`,
      price: `800`,
      category: "Phones",
      quantity: 5,
    },
    {
      id: 13,
      Image: "https://i.postimg.cc/7P2nWfTJ/lorenzo-rui-J7xr-BW-o-YJc-unsplash.jpg",
      name: `iPhone 6`,
      price: `200`,
      category: "Phones",
      quantity: 2,
    },
    {
      id: 14,
      Image: "https://i.postimg.cc/nV40LXcb/anh-nhat-u-Cq-Ma-s-JDg-unsplash.jpg",
      name: `Samsung Galaxy S21 Ultra`,
      price: `650`,
      category: "Phones",
      quantity: 1,
    },
    {
      id: 15,
      Image: "https://i.postimg.cc/YqKr7yDq/xingye-jiang-t-Xl-Wnz-BX2ys-unsplash.jpg",
      name: `Xiaomi 11 Ultra`,
      price: `250`,
      quantity: 3,
    },
  ];
  
  function displayProducts() {
    const ourProducts = document.getElementById("products");
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
        <img src="${product.Image}" alt="${product.name}" id="product-imgs">
        <h3>${product.name}</h3>
        <p>$ ${product.price}</p>        
        <button onclick="addToCart(${product.id})" class="addbtn">Add to cart</button>`;
      ourProducts.appendChild(productElement);
    });
  }
  
  let cart = JSON.parse(localStorage.getItem("Products")) || [];
  
  function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
    }
  }
  
  function removeFromCart(index) {
    let removedProduct = cart.splice(index, 1)[0];
    removedProduct.quantity++;
    updateCart();
  }
  
  function updateCart() {
    const cartContainer = document.getElementById("cart-body");
    localStorage.setItem("Products", JSON.stringify(cart));
    cartContainer.innerHTML = "";
    cart.forEach((product, index) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <span>${product.name}</span>
        <span>${product.price}</span>
        <input type="number" placeholder="1" min="1" width="50px" height="40px">
        <p>Total $ ${product.price}</p>
        <button onclick="removeFromCart(${index})" class="rembutton">✖</button>
      `;
      cartContainer.appendChild(cartItem);
    });
      calculateTotal();
  }
  
  function calculateTotal() {
    let totalElement = document.getElementById("total");
    let total = 0 
    cart.forEach(item => {
      total +=  eval(item.price)
    })
    // let total = cart.reduce((accumulate, product) => {
    //   let price = Number(product.price.replace("$", ""));
    //   return accumulate = price * quantity;
    // }, 0);
    totalElement.textContent = `$${total}`;
  }
  
  displayProducts();
  
  updateCart();