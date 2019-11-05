import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import SimpleTable from './components/Table';
import Button from './components/Button';
import { func } from 'prop-types';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function handleClick() {
  console.log("!!!")
}

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleTable rows={rows}/>
      <Button onClick={handleClick} / >
      <Footer />
    </div>
  );
}

export default App;
