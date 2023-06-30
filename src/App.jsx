import './App.css'
import Cards from './components/Cards/Cards'
import Category from './components/Category/Category'
import Facilities from './components/Facilities/Facilities'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Register from './components/Register/Register'
import Rodape from './components/Rodape/Rodape'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <Main />
      <Category />
      <Cards />
      <Facilities />
      <Register />
      <Rodape />
    </>
  )
}

export default App
