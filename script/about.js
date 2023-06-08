let team = [
    {
      id: 1,
      img: "https://i.postimg.cc/nr5SNxdq/meezaan.jpg",
      name: "Meezaan Davids",
      role: "Project Manager",
      desc: "I was in charge of overseeing the project. I also confirmed that the project has met the quality standards that I expect from my amazing team.",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/XY8BH0sB/C12-Okuhle-Gwotiwe-1.jpg",
      name: "Okuhle Gxotiwe",
      role: "Team Leader",
      desc: "I delegated tasks to each team member and was also in charge of completing cart page.",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/1ts3jCbs/C12-Cheslyn-Herman-1.jpg",
      name: "Cheslyn Herman",
      role: "Styling Team",
      desc: "I worked on the styling and content on the about page, footer and also contributed to button styling and animations.",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/yd963mqg/C12-C1-Ethan-Lesar-3.jpg",
      name: "Ethan Lesar",
      role: "Script Team",
      desc: "I was doing the functionality of the the products page and was assigned local storage I contributed to the overall cart and creating a modal cart.",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/R0tWmqfW/C12-C1-Caryn-Lodewyk-2.jpg",
      name: "Caryn Jane Lodeweyk",
      role: "Styling Team",
      desc: "I was given the task of styling the Nav Bar and the styling of the products page.",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/PJxtKBFh/C12-Ayesha-Galant-Class1-1.jpg",
      name: "Ayesha Galant",
      role: "Script Team",
      desc: "My contribution was to work on the functionality of the cart, assisting the rest where possible.",
    },
    {
      id: 7,
      img: "https://i.postimg.cc/8PqFx1RN/C12-Taahirah-Ismail-1.jpg",
      name: "Taahirah Ismail",
      role: "Styling Team",
      desc: "I did the styling of the home page and contact form. Also chosen the colour scheme that we had gone for.",
    },
    {
      id: 8,
      img: "https://i.postimg.cc/prrHK4sj/C12-C2-Lyle-Kepky-1.jpg",
      name: "Lyle Kepkey",
      role: "Script Team",
      desc: "What did I do I corrected the (removeFromCart(index)) function and tried to add the accumulative amount.",
    },
    {
      id: 9,
      img: "https://i.postimg.cc/Nj5KQPY5/Waydin-Jochem-C12-C1-25-Apr23-2.jpg",
      name: "Wayden Jochem",
      role: "Script Team",
      desc: "Adding quantity value in the cart display, using JavaScript by using a function that would call the input value.",
    },
  ];
  let teamPlayers = document.getElementById("team-players");
  team.forEach((data) => {
    teamPlayers.innerHTML += `
      <div class="card" style="width: 20rem;">
    <img src="${data.img}" class="card-img-top">
    <div class="card-body">
      <h2 class="card-title">${data.name}</h2>
      <h4 class="card-title">${data.role}</h4>
      <p class="card-text">${data.desc}</p>
    </div>
  </div>
      `;
  });