import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer saludo = "Bienvenidos a nuestra tienda Online"/>
      <Main/>
    </>
  );
}

export default App;
