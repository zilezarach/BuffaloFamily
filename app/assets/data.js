import img1 from "./blue.png";
import img2 from "./black.png";
import img3 from "./pink.png";
import img4 from "./white.png";
import img5 from "./note black.png";
import img6 from "./note grey.png";
import img7 from "./Hood.png";
import img8 from "./Tshirt.jpeg";
import img9 from "./Tshirt2.jpeg";
import img10 from "./Tshirt3.jpeg";
import img11 from "./Tshirt4.jpeg";
import img12 from "./Tshirt5.jpeg";
import img13 from "./Tshirt6.jpeg";
import img14 from "./Tshirt7.jpeg";
import img15 from "./hoodiesBlue.jpeg";
import img16 from "./hoodiesGrey.jpeg";
import img17 from "./hoodiesBlack.jpeg";
import img18 from "./hatRed.jpeg";
import img19 from "./hatBlue.jpeg";
import img20 from "./hatBlack.jpeg";
import img21 from "./marvin blue.jpeg";
import img22 from "./marvin black.jpeg";
import img23 from "./marvin white.jpeg";
import img24 from "./Bag.jpeg";
import albImg from "./NoLimit.png";
import blackModel from "./modelBlack.jpg";
import whiteModel from "./modelWhite.jpg";

const albums = [
  {
    id: 1,
    title: "No Limits",
    file: "/albums/NOLIMITS.zip",
    cover: albImg,
    youtube:
      "https://www.youtube.com/playlist?list=PLI4EsJo5y84Wr-1k5IW5f1Iv3HyVCXx27",
  },
];

const sliderModel = [
  {
    id: 1,
    title: "Model T-shirt white",
    modelImage: whiteModel,
    productImage: img4,
    price: 1400,
    productId: 4,
  },
  {
    id: 2,
    title: "Model T-shirt black",
    modelImage: blackModel,
    productImage: img3,
    price: 1400,
    productId: 3,
  },
];

const product = [
  {
    id: 1,
    name: "Buffa T-shirt (Blue)",
    price: 1400,
    image: img1,
    categories: "t-shirts",
  },

  {
    id: 2,
    name: "Buffa T-shirt (Pink)",
    price: 1400,
    image: img3,
    categories: "t-shirts",
  },

  {
    id: 3,
    name: "Buffa Shirt (Black)",
    price: 1400,
    image: img2,
    categories: "t-shirts",
  },

  {
    id: 4,
    name: "Buffa Shirt (White)",
    price: 1400,
    image: img4,
    categories: "t-shirts",
  },

  {
    id: 5,
    name: "Buffa notebook (Black)",
    price: 2000,
    image: img5,
    categories: "notebooks",
  },

  {
    id: 6,
    name: "Buffa notebook (Grey)",
    price: 2000,
    image: img6,
    categories: "notebooks",
  },
  {
    id: 7,
    name: "Buffa Hoodie",
    price: 3000,
    image: img7,
    categories: "hoodies",
  },
  {
    id: 8,
    name: " APD Anti Poverty Department (Pink)",
    price: 1200,
    image: img8,
    categories: "t-shirts",
  },
  {
    id: 9,
    name: " APD Anti Poverty Department (Yellow)",
    price: 1200,
    image: img9,
    categories: "t-shirts",
  },
  {
    id: 10,
    name: "APD Anti Poverty Department (Orange)",
    price: 1200,
    image: img10,
    categories: "t-shirts",
  },
  {
    id: 11,
    name: " APD Anti Poverty Department (Black)",
    price: 1200,
    image: img11,
    categories: "t-shirts",
  },
  {
    id: 12,
    name: " APD Anti Poverty Department (Blue)",
    price: 1200,
    image: img12,
    categories: "t-shirts",
  },
  {
    id: 13,
    name: "APD Anti Poverty Department(Grey)",
    price: 1200,
    image: img13,
    categories: "t-shirts",
  },
  {
    id: 14,
    name: " APD Anti Poverty Department (White)",
    price: 1200,
    image: img14,
    categories: "t-shirts",
  },
  {
    id: 15,
    name: "Buffalo hoodie (Blue)",
    price: 3000,
    image: img15,
    categories: "hoodies",
  },
  {
    id: 16,
    name: "Buffalo hoodies (Grey)",
    price: 3000,
    image: img16,
    categories: "hoodies",
  },
  {
    id: 17,
    name: "Buffalo hoodie (Black)",
    price: 3000,
    image: img17,
    categories: "hoodies",
  },
  {
    id: 18,
    name: "Buffalo hat (Red)",
    price: 500,
    image: img18,
  },
  {
    id: 19,
    name: "Buffalo hat (Blue)",
    price: 500,
    image: img19,
  },
  {
    id: 20,
    name: "Buffalo hat (Black)",
    price: 500,
    image: img20,
  },
  {
    id: 21,
    name: "Marvin Blue",
    price: 600,
    image: img21,
    categories: "accessories",
  },
  {
    id: 22,
    name: "Marvin Black",
    price: 600,
    image: img22,
    categories: "accessories",
  },
  {
    id: 23,
    name: "Marvin White",
    price: 600,
    image: img23,
    categories: "accessories",
  },
  {
    id: 24,
    name: "Tote Bag",
    price: 500,
    image: img24,
    categories: "accessories",
  },
];

export { sliderModel, product, albums };
export default product;
