import React, { useState } from 'react';
import './App.css';
import TariffCard from './Tariff';

function App() {
  const tariffs = [
    {
      title: '300',
      price: '300',
      speed: 'до 10 Мбит/сек',
      data: 'Объем включенного трафика не ограничен',
      colorClass: 'blue',
    },
    {
      title: '450',
      price: '450',
      speed: 'до 50 Мбит/сек',
      data: 'Объем включенного трафика не ограничен',
      colorClass: 'green',
    },
    {
      title: '550',
      price: '550',
      speed: 'до 100 Мбит/сек',
      data: 'Объем включенного трафика не ограничен',
      colorClass: 'red',
    },
    {
      title: '1000',
      price: '1000',
      speed: 'до 200 Мбит/сек',
      data: 'Объем включенного трафика не ограничен',
      colorClass: 'gray',
    },
  ];

  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariff) => {
    setSelectedTariff(tariff);
  };

  return (
    <div className="App">
      <div className="tariff-container">
        {tariffs.map((tariff, index) => (
          <TariffCard key={index} {...tariff} onSelect={handleTariffSelect}/>
        ))}
      </div>
      {selectedTariff && (
        <div className="selected-tariff">
          <h2>Выбранный тариф:</h2>
          <p>{selectedTariff.title}</p>
          <p>{selectedTariff.price} в месяц</p>
          <p>{selectedTariff.speed}</p>
          <p>{selectedTariff.data}</p>
        </div>
      )}
    </div>
  );
}

export default App;