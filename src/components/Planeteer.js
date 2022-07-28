import React, { useState } from "react";

function Planeteer({ planeteer }) {
  const [toggle, setToggle] = useState(true)

  const { name, fromUsa, bio, quote, pictureUrl, twitter } = planeteer

  const checkUsa = () => {
    return (fromUsa ? 'USA-based' : 'Working Overseas')
  }

  const handleClick = () => {
    const toggleBio = () => {
      setToggle((toggle) => !toggle)
      alert(quote)
  }
  toggleBio()
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={ pictureUrl }
          alt={ name }
          className="card__image"
          onClick={ handleClick }
        />
        <div className="card__content">
          <div className="card__title">{ name }</div>
          <p className="card__text">{ bio }</p>
          <div className="card__detail">
            <p>{ twitter }</p>
            <p>
            { checkUsa(fromUsa) }  
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
