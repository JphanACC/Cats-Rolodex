import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    //inherit everything that it extends from
    super();
    console.log('1. constructor');
    //state is alwas a JSON object
    this.state = {
      cats: [],
      searchField: '',
    }
  }

  componentDidMount() {
    console.log('3. componentDidMount')
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
    console.log('2. render');
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;

    //This depends on the state
    const filteredCats = cats.filter( (cat) => {return cat.name.toLowerCase().includes(searchField);});

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search cats' 
          onChange={onSearchChange}/>
      <header className="App-header">
        <h1>List of Cat Names</h1>
        {filteredCats.map( (cat) => {
          return (
            <div key={cat.id}> 
              <h1>{cat.name}</h1>
            </div>
          )
        })}
        
      </header>
    </div>
    )
  }
}

export default App;
