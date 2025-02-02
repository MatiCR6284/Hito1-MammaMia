import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">🍕 Nuestras Pizzas 🍕</h2>
        <div className="row g-4"> {/* 🔥 Espaciado entre tarjetas */}
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="./img/Napo.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Romana"
              price={6950}
              ingredients={["jamón", "setas", "aceitunas", "mozzarella", "cebolla"]}
              img="./img/Romano.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Deep Dish"
              price={7990}
              ingredients={["estilo Chicago", "pepperoni", "salchica italiana", "mozzarella"]}
              img="./img/Deep.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Hawaiana"
              price={9990}
              ingredients={["mozzarella", "jamón cocido", "piña o ananá"]}
              img="./img/Hawai.jpeg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Cuatro Quesos"
              price={12500}
              ingredients={["queso ricota", "queso mantecoso", "queso roquefort", "queso mozzarella"]}
              img="./img/Cuatro.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Vegetariana"
              price={5990}
              ingredients={["tomate", "albahaca", "pimentón", "berenjena", "aceituna"]}
              img="./img/Veggie.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
