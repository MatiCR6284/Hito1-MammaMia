import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card p-3 shadow-sm rounded-4" style={{ width: '100%', marginBottom: '20px' }}>
      <img
        src={img}
        className="card-img-top rounded-4"
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
        </p>
        <h6 className="fw-bold text-danger">💰 ${price.toLocaleString()}</h6>
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary">Añadir al Carrito 🛒</button>
          <button className="btn btn-outline-secondary">Ver Más 🔍</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
