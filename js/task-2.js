const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const gallery = document.querySelector(".gallery");

const listGallery1 = document.createElement("li")
listGallery1.classList = ("gallery-list");
const imgCats = document.createElement("img");
imgCats.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
imgCats.alt = "White and Black Long Fur Cat";
imgCats.width = 320;
listGallery1.append(imgCats);

const listGallery2 = document.createElement("li");
listGallery2.classList = ("gallery-list");
const imgFish = document.createElement("img");
imgFish.classList = ("gallery-image");
imgFish.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
imgFish.alt = "Orange and White Koi Fish Near Yellow Koi Fish";
imgFish.width = 320;
listGallery2.append(imgFish);

const listGallery3 = document.createElement("li");
listGallery3.classList = ("gallery-list");
const imgHorses = document.createElement("img");
imgHorses.classList = ("gallery-image");
imgHorses.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
imgHorses.alt = "Group of Horses Running";
imgHorses.width = 320;
listGallery3.append(imgHorses);

const listGallery4 = document.createElement("li");
listGallery4.classList = ("gallery-list");
const imgElephants = document.createElement("img");
imgElephants.classList = ("gallery-image");
imgElephants.src = "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
imgElephants.alt = "Elephant Beside on Baby Elephant";
imgElephants.width = 320;
listGallery4.append(imgElephants);

const listGallery5 = document.createElement("li");
listGallery5.classList = ("gallery-list");
const imgParrots = document.createElement("img");
imgParrots.classList = ("gallery-image");
imgParrots.src = "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
imgParrots.alt = "Blue Geeen and Orange Parrot";
imgParrots.width = 320;
listGallery5.append(imgParrots);
      
const listGallery6 = document.createElement("li");
listGallery6.classList = ("gallery-list");
const imgZebras = document.createElement("img");
imgZebras.classList = ("gallery-image");
imgZebras.src = "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
imgZebras.alt = "Zebras on Zebra";
imgZebras.width = 320;
listGallery6.append(imgZebras);

gallery.append(listGallery1, listGallery2, listGallery3, listGallery4, listGallery5, listGallery6);

