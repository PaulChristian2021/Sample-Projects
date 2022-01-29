import React, { useEffect, useState } from "react";
import c from "./BrowseSection.module.css";
import ProductCard from "./ProductCard";

const BrowseSection = (props) => {
  const [prod, setprod] = useState([]);

  useEffect(() => {
    fetch("./databasedummy.json", {
      "Content-Type": "application/json",
      Accept: "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setprod(data.products);
      });
  }, []);
// console.log(props)
  const productCards = prod.map((el) => (
    <ProductCard
      key={el.id}
      description={el.description}
      price={el.price}
      category={el.category}
      name={el.title}
      img={el.image}
    />
  ));

  return (
    <section className={c.section}>
      <ul>{productCards}</ul>
    </section>
  );
};

export default BrowseSection;
