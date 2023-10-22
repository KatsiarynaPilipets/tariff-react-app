import React from "react";

function TariffCard({ title, price, speed, data, colorClass, onSelect }) {
  const handleClick = () => {
    onSelect({ title, price, speed, data });
  };

  return (
    <div className={`tariff-card ${colorClass}`} onClick={handleClick}>
      <div className="tariff-item">
        <h3 className={colorClass}>Безлимитный {title}</h3>
      </div>
      <div className="tariff-item">
        <h3 className={colorClass}>
          <span className="upperline"> руб</span> {price}
          <span className="underline">/мес</span>
        </h3>
      </div>
      <div className="tariff-item">
        <p>{speed}</p>
      </div>
      <div className="tariff-item">
        <p>{data}</p>
      </div>
    </div>
  );
}

export default TariffCard;