
const cards = [
    {
        id: 1,
        name: "Серябраное колье",
        imgUrl: "https://pandora.kz/upload/resize_cache/iblock/460/249_249_2/460b9e5c8f89349ae0fb270377947603.png",
        price: "16 900",
    },

    {
        id: 1,
        name: "Браслет Moments Логомания",
        imgUrl: "https://pandora.kz/upload/resize_cache/iblock/286/249_249_2/286a43f01edf096b4f16ac0aed124a3d.png",
        price: "16 450",
    },
    
    {
        id: 1,
        name: "Плетение",
        imgUrl: "https://pandora.kz/upload/resize_cache/iblock/0c3/249_249_2/0c336b8bfd24342a3352789004c32a67.png",
        price: "34 950",
    },

    {
        id: 1,
        name: "Серябранный браслет Moments с застежкой-шармом",
        imgUrl: "https://pandora.kz/upload/resize_cache/iblock/e05/249_249_2/e05979a9787bd906db5bb6e862308a18.png",
        price: "34 900",
    }
];

// function CreateCard(product) {
//     const {id, name, price, imgUrl } = product;

//     const cardTop = document.createElement("div");
//     cardTop.classList.add("cart-top");

//     const img = document.createElement("img");
//     img.src = imgUrl;
//     img.alt = "";

//     const nameText = document.createElement("h4");
//     nameText.textContent = name;

//     const priceNum = document.createElement("p");
//     priceNum.textContent = price + "₸";

//     const byeBtn = document.createElement("div");
//     byeBtn.classList.add("bye-btn");

//     const btnNav = document.createElement("a");
    


//     cardTop.appendChild(img);
//     cardTop.appendChild(nameText);
//     cardTop.appendChild(priceNum);
//     return cardTop;

// }
// const cardsContainer = document.querySelector(".cards-container");

// cards.forEach(product => {
//     cardsContainer.appendChild(CreateCard(product));
// });


// Variables
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.carousel-img');
let dots = document.querySelectorAll('.dot');
let captions = document.querySelectorAll('.carousel-caption')
let totalImgs = imgs.length;
let imgPosition = 0;

// Event Listeners
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

// Update Position
function updatePosition (){
//   Images
  for(let img of imgs){
    img.classList.remove('visible');
    img.classList.add('hidden');
  }
  imgs[imgPosition].classList.remove('hidden');
  imgs[imgPosition].classList.add('visible')
//   Dots
  for (let dot of dots) {
     dot.className = dot.className.replace(" active", "");
  }
    dots[imgPosition].classList.add('active');
//   Captions
  for (let caption of captions) {
      caption.classList.remove('visible');
      caption.classList.add('hidden');
  }
    captions[imgPosition].classList.remove('hidden');
    captions[imgPosition].classList.add('visible')
}

// Next Img
function nextImg(){
  if (imgPosition === totalImgs -1){
        imgPosition = 0;
    } else{
        imgPosition++;
    }
    updatePosition();
}
//Previous Image
function prevImg(){
  if (imgPosition === 0){
        imgPosition = totalImgs-1;
    } else{
        imgPosition--;
    }
    updatePosition();
}

// Dot Position
dots.forEach((dot, dotPosition) => {
  dot.addEventListener("click", () => {
    imgPosition = dotPosition
    updatePosition(dotPosition)
  })
})

