import React from "react";
import c from "./ProjectTile.module.css";

const ProjectTile = (props) => {
  const p = props.project;
  const badges = p.tools.map((badge) => {
    return (
      <span key={badge} className={`${c.badge} ${c[badge]}`}>
        {badge}
      </span>
    );
  });
  const images = p.images.map(image=>{
    if(p.images.length === 1){
      return <img src={image} alt='' key={image}/>  
    }else{
      return <img src={image} className={c.dual} alt='' key={image}/>  
    }
    
  })

  return (
    <a href={p.url} className={c.a} rel="noopener noreferrer" target='_blank'>
      <li className={c.li}>
        <span className={c.badges}>{badges}</span>
        <div className={c.imgs}>
          {images}
        </div>
        <p className={c.p}>{p.name}</p>
      </li>
    </a>
  );
};

export default ProjectTile;
