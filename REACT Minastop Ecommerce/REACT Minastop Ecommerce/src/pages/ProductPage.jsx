import React, { useRef } from "react";
import c from "./ProductPage.module.css";
import SearchCategoriesNav from '../components/SearchCategoriesNav/SearchCategoriesNav'
import SearchBar from "../components/SearchBar/SearchBar";
import BrowseCategory from "../components/BrowseCategory/BrowseCategory";
import IconButton from "../components/ui/IconButton";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { BsCartPlus } from "react-icons/bs";

const prod = {
  id: 1,
  name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
  stock: 10,
};

const ProductPage = () => {
  const numberRef = useRef(1);

  function setAddNumber(isAdding) {
    if (isAdding) numberRef.current.value++;
    if (!isAdding && numberRef.current.value > 1) numberRef.current.value--;
    else return;
    console.log(numberRef.current.value);
  }
  function typeAddNumber(num) {
    numberRef.current.value = num;
  }
  return (
    <section className={`section`}>
      <SearchCategoriesNav className={c.nav}>
        <SearchBar placeholder="Find Products" />
        <BrowseCategory />
      </SearchCategoriesNav>
      <header className={c.header}>
        <h2>{prod.name}</h2>
        <sub>{prod.category}</sub>
      </header>
      <div className={c.div}>
        <img src={prod.img} alt={prod.name} />
        <form
          className={c.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <IconButton onClick={() => setAddNumber(false)} className={c.operator}>
              <AiOutlineMinus />
            </IconButton>
            <input
              type="number"
              min={1}
              value={1}
              ref={numberRef}
              onChange={(e) => typeAddNumber(e.target.value)}
            />
            <IconButton onClick={() => setAddNumber(true)} className={c.operator}>
              <AiOutlinePlus />
            </IconButton>
          </fieldset>
          <IconButton className={c.addToCart}>Add To Cart</IconButton>
        </form>
      </div>
    </section>
  );
};

export default ProductPage;
