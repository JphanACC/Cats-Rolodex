import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchbox.component';
import './App.css';

class App extends Component {

  constructor() {
    //inherit everything that it extends from
    super();
    //state is alwas a JSON object
    this.state = {
      cats: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      //then() makes it become a Promise
      //response is the callback 
      .then(
        response => response.json()
      )
      .then(
        (users) => this.setState(() => {
          return {cats: users}
        },
        () => {
          console.log('success response')
          console.log(this.state.cats)
        }
        )
      )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(()=> {
      return { searchField }
    });
  }

  render() {
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredCats = cats.filter( (cat) => {return cat.name.toLowerCase().includes(searchField);});

    return (
      <div className="App">
        <h1 className="app-title">Cats Rolodex</h1>
        <SearchBox 
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search cat name"
          />

        <CardList cats={filteredCats}/> 
      
    </div>
    )
  }
}

export default App;
