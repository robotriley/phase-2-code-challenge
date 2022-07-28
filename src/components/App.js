import React, { useState, useEffect } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([])
  
  useEffect(() => {
    const getPlaneteers = async () => {
      let req = await fetch('http://localhost:8003/planeteers')
      let res = await req.json()
      setPlaneteers(res)
    }
    getPlaneteers()
  }, [])
  // console.log(planeteers)
  return (
    <div>
      <Header />
      <SearchBar planeteers={planeteers} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteers} />
    </div>
  );
}

export default App;
