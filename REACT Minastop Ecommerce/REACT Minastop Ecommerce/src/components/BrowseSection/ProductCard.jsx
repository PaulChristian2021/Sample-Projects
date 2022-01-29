import React from "react";
import { Link } from "react-router-dom";

import { MdOutlineAdd } from "react-icons/md";
import IconButton from "../../components/ui/IconButton";
import c from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <li className={c.li} title={props.description}>
      <Link to={`/products/${props.category}/${props.name.toLowerCase().trim()}`}>
        <p className={c.category}>{props.category}</p>
        <img src={props.img} alt={props.name} />
        <p className={c.name}>{props.name}</p>
      </Link>
      <div className={c.div}>
        <IconButton className={c.addCartBtn}>
          Add <MdOutlineAdd />
        </IconButton>
        <span className={c.price}>$ {props.price}</span>
      </div>
    </li>
  );
};

export default ProductCard;
