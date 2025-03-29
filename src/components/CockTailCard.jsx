import React from "react";
import { NavLink } from "react-router-dom"
function CockTailCard({image,name,info,id,glass}) {

  return (
    <div className="w-[32%] h-auto shadow-lg bg-white max-sm:w-[100%]">
      <img src={image} alt={name} className="w-[100%] h-auto" />
      <div className="p-5">
        <h4 className="text-lg font-bold">{name}</h4>
        <h3 className="tracking-widest">{glass}</h3>
        <h3 className="tracking-widest">{info}</h3>
        <NavLink to={`/Cocktail/${id}`} className="bg-green-800 rounded tracking-widest text-white w-18 mt-2 block text-center p-1">
          Details
        </NavLink>
      </div>
    </div>
  );
}
export default React.memo(CockTailCard)