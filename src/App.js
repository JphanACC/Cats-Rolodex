//import {Component} from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchbox.component';
import './App.css';

const App = () => {
  const [cats, setCats ] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats); //[value, setValue]
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [title, setTitle] = useState(''); 

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  }
  console.log('effect is firing')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        response => response.json()
      )
      .then(
        (users) => setCats(users)
      )
  }, [])
  useEffect(() => {
    const newfilteredCats = cats.filter( (cat) => {return cat.name.toLowerCase().includes(searchField);});
    setFilteredCats(newfilteredCats);
    
    //either the cat array changes, or whatever the search field changes
  }, [cats, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Cats Rolodex</h1>
      <h5 className="app-title">{title}</h5>
      <SearchBox 
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search cat name"
        />
        <br />
      <SearchBox 
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="set Title"
        />
      <CardList cats={filteredCats}/> 
    
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     //inherit everything that it extends from
//     super();
//     //state is alwas a JSON object
//     this.state = {
//       cats: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       //then() makes it become a Promise
//       //response is the callback 
//       .then(
//         response => response.json()
//       )
//       .then(
//         (users) => this.setState(() => {
//           return {cats: users}
//         },
//         () => {
//           console.log('success response')
//           console.log(this.state.cats)
//         }
//         )
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(()=> {
//       return { searchField }
//     });
//   }

//   render() {
//     const { cats, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredCats = cats.filter( (cat) => {return cat.name.toLowerCase().includes(searchField);});

//     return (
//       <div className="App">
//         <h1 className="app-title">Cats Rolodex</h1>
//         <SearchBox 
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search cat name"
//           />

//         <CardList cats={filteredCats}/> 
      
//     </div>
//     )
//   }
// }

export default App;
