export type productRule = {
  name: string;
  rating: string;
  image: string;
  price: string;
};

export const products: productRule[] = [
  {
    name: "Pie Susu",
    rating: "4.8",
    image: "/images/pie.png",
    price: "3000",
  },
  {
    name: "Java Tea",
    rating: "4.8",
    image: "/images/javatea.jpg",
    price: "6000",
  },
];
