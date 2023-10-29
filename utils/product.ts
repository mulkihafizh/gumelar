export type productRule = {
  name: string;
  rating: string;
  image: string;
  price: string;
  message:string;
};

export const products: productRule[] = [
  {
    name: "Pie Susu",
    rating: "4.8",
    image: "/images/pie.png",
    price: "3000",
    message: "https://wa.me/6283892147931?text=beli%20pie",
  },
  {
    name: "Java Tea",
    rating: "4.8",
    image: "/images/javatea.jpg",
    price: "6000",
    message:"https://wa.me/6283892147931?text=beli%20java%20tea",
  },
];
