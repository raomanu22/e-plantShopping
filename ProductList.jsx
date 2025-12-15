import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const plantData = {
  Indoor: [
    { id: 1, name: 'Aloe Vera', price: 200 },
    { id: 2, name: 'Money Plant', price: 150 },
    { id: 3, name: 'Cactus', price: 100 },
    { id: 4, name: 'Peace Lily', price: 220 },
    { id: 5, name: 'Snake Plant', price: 180 },
    { id: 6, name: 'Spider Plant', price: 130 }
  ],
  Outdoor: [
    { id: 7, name: 'Rose', price: 120 },
    { id: 8, name: 'Tulip', price: 180 },
    { id: 9, name: 'Orchid', price: 250 },
    { id: 10, name: 'Marigold', price: 90 },
    { id: 11, name: 'Hibiscus', price: 200 },
    { id: 12, name: 'Sunflower', price: 150 }
  ],
  Succulents: [
    { id: 13, name: 'Echeveria', price: 170 },
    { id: 14, name: 'Sedum', price: 140 },
    { id: 15, name: 'Crassula', price: 160 },
    { id: 16, name: 'Kalanchoe', price: 190 },
    { id: 17, name: 'Aeonium', price: 210 },
    { id: 18, name: 'Lithops', price: 230 }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const [addedIds, setAddedIds] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedIds([...addedIds, plant.id]);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/ProductList">Plants</Link>
        <Link to="/Cart">Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</Link>
      </nav>

      {Object.keys(plantData).map(category => (
        <div key={category}>
          <h2>{category} Plants</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {plantData[category].map(plant => (
              <div key={plant.id} style={{ border: '1px solid gray', padding: '10px' }}>
                <h3>{plant.name}</h3>
                <p>Price: ₹{plant.price}</p>
                <button onClick={() => handleAdd(plant)} disabled={addedIds.includes(plant.id)}>
                  {addedIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
