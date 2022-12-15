import React from 'react';
import AdminShop from './components/AdminShop';
import Cart from './components/Cart';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
        <AdminShop></AdminShop>
        <Shop/>
        <Cart></Cart>
    </div>
  );
}

export default App;
