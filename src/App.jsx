import './App.css'
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
    </>
  )
}

export default App
