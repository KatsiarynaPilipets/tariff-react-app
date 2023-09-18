import React from 'react';
import './App.css';

function TariffCard({ title, price, speed, data, colorClass }) {
  return (
    <div className="tariff-card">
      <div className="tariff-item">
        <h3 className={colorClass}>Безлимитный {title}</h3>
      </div>
      <div className="tariff-item">
      <h3 className={colorClass}><span className="upperline"> руб</span> { price }<span className="underline">/мес</span></h3>
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

  return (
    <div className="App">
      <div className="tariff-container">
        {tariffs.map((tariff, index) => (
          <TariffCard key={index} {...tariff} />
        ))}
      </div>
    </div>
  );
}

export default App;