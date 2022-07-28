import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers } ) {
  return (
    <ul className="cards">
      {
        planeteers.map((planeteer) => {
          // console.log(planeteer.name)
          return (
            <Planeteer planeteer={planeteer} key={planeteer.id} />
          )
        } )}
    </ul>
  );
}

export default PlaneteersContainer;
