import './App.css'
import Cards from './components/Cards/Cards'
import Category from './components/Category/Category'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <Main />
      <Category />
      <Cards />
    </>
  )
}

export default App
