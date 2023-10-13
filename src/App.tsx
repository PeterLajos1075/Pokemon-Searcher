import { Route, Routes } from 'react-router-dom';
import NavBar from './Project/Navigation/NavBar';
import SearchPokemon from './Project/SearchPage/SearchPokemon';
import SavedPoke from './Project/FavoritePage/SavedPokemons';

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/*'>
            <Route index element={<SearchPokemon/>}/>
            <Route path="Favorites" element={<SavedPoke/>}/>
          </Route>
        </Routes>
      </>
  )
}

export default App
