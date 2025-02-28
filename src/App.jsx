import './App.css'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {

  const employees = [{ employeeName: "James King", jobTitle: "President and CEO"}];

  return (
    <>
      <Header text="Employee Directory"/>
      <Header text="Employee"/>
      <SearchBar />
    </>
  )
}

export default App
