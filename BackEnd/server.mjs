import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

const cars = [
  {
    id: 1,
    brand: "Toyota",
    fuel: 50,
    seats: 5,
    price: 30000,
  },
  {
    id: 2,
    brand: "Honda",
    fuel: 45,
    seats: 5,
    price: 28000,
  },
  {
    id: 3,
    brand: "BMW",
    fuel: 60,
    seats: 4,
    price: 50000,
  },
  {
    id: 4,
    brand: "Audi",
    fuel: 55,
    seats: 4,
    price: 45000,
  },
  {
    id: 5,
    brand: "Mercedes",
    fuel: 70,
    seats: 5,
    price: 60000,
  },
  {
    id: 6,
    brand: "Ford",
    fuel: 50,
    seats: 5,
    price: 25000,
  },
  {
    id: 7,
    brand: "Chevrolet",
    fuel: 65,
    seats: 5,
    price: 32000,
  },
  {
    id: 8,
    brand: "Nissan",
    fuel: 55,
    seats: 5,
    price: 28000,
  },
  {
    id: 9,
    brand: "Tesla",
    fuel: 0,
    seats: 5,
    price: 70000,
  },
  {
    id: 10,
    brand: "Hyundai",
    fuel: 45,
    seats: 5,
    price: 27000,
  },
  {
    id: 11,
    brand: "Tesla",
    fuel: 5,
    seats: 5,
    price: 23000,
  },
  {
    id: 12,
    brand: "Chevrolet",
    fuel: 52,
    seats: 6,
    price: 77000,
  },
];

app.get("/cars", (req, res) => {
  res.status(200).json(cars);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
