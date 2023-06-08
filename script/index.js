let featured = [
    {
      id: 1,
      Image:
        "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
      name: `Air Pods Max`,
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
      name: `iPhone 11`,
    },
    {
      id: 3,
      Image: "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
      name: `MacBook Pro`,
    },
  ];
  function appear(event){
  }
  let featureGroup = document.querySelector(".featured-products");
  featured.forEach((data) => {
    featureGroup.innerHTML += `<div class="card" style="width:380px;   ">
      <img class="card-img-top" src="${data.Image}" alt="Card image" style="width:300px;>
      <div class="card-body">
        <h4 class="card-title">${data.name}</h4>
        <a href="../pages/products.html" class="btn btn-outline-danger">Find Out More</a>
      </div>`;
  });