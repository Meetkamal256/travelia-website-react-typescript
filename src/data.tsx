import icon1 from "./assets/service-icon-1.svg";
import icon2 from "./assets/service-icon-2.svg";
import icon3 from "./assets/service-icon-3.svg";

import image1 from "./assets/destination-1.jpg";
import image2 from "./assets/destination-2.jpg";
import image3 from "./assets/destination-3.jpg";
import image4 from "./assets/destination-4.jpg";
import image5 from "./assets/destination-5.jpg";
import image6 from "./assets/destination-6.jpg";

export const pageLinks = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "#about",
    text: "About",
  },
  {
    id: 3,
    path: "#services",
    text: "Services",
  },
  {
    id: 4,
    path: "#pricing",
    text: "Pricing",
  },
  {
    id: 5,
    path: "#contact",
    text: "#Contact",
  },
];

export const serviceList = [
  {
    id: 1,
    icon: icon1,
    title: "Lots Of Choices",
    text: "Total 460+ destinations that we work with.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Best Tour Guide",
    text: "Our tour guide with 15+ years of experience.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Easy Booking",
    text: "With an easy and fast ticket purchase process.",
  },
];

export const destinationList = [
  {
    id: 1,
    image: image1,
    price: "$340",
    title: "Enjoy the Beauty of the del Pincio",
    address: "Rome, Italy",
    rating: 4.7,
    review: "(11.1k Review)",
  },
  {
    id: 2,
    image: image2,
    price: "$500",
    title: "Enjoy the Beauty of the Pakistan Monument",
    address: "Islamabad, Pakistan",
    rating: 4.6,
    review: "(16.9k Review)",
  },
  {
    id: 3,
    image: image3,
    price: "$750",
    title: "Enjoy the Beauty of the Burj Khalifa",
    address: "Skyscraper in Dubai",
    rating: 4.7,
    review: "(120k Review)",
  },
  {
    id: 4,
    image: image4,
    price: "$950",
    title: "Enjoy the Beauty of the Milaidhoo",
    address: "Island in the Maldives",
    rating: 4.7,
    review: "(70k Review)",
  },
  {
    id: 5,
    image: image5,
    price: "$850",
    title: "Enjoy the Beauty of the Ko Tao",
    address: "Island in the Gulf of Thailand",
    rating: 4.5,
    review: "(985 Review)",
  },
  {
    id: 6,
    image: image6,
    price: "$1000",
    title: "Enjoy the Beauty of the Grand Mecidiye Mosque",
    address: "Mosque in Istanbul, Türkiye",
    rating: 4.8,
    review: "(29.6k Review)",
  },
];
