import React from "react";
import axios from "axios";
import Character from "../../components/Character/Character";
import Searchbar from "../../components/Searchbar/Searchbar";
import './CharacterList.css';

class CharacterList extends React.Component {
  state = {
    characters: [], // Initialize state to hold the list of characters
  };

  componentDidMount() {
    this.getCharacters(); // Fetch characters when the component mounts
  }

  // Function to fetch all Star Wars characters
  getCharacters = () => {
    axios
      .get("https://swapi.dev/api/people/") // Make a GET request to the SWAPI people endpoint
      .then((response) => this.setState({ characters: response.data.results })); // Update state with character data
  };

  // Function to search for Star Wars characters by name
  searchCharacters = (event) => {
    const searchValue = event.target.value; // Get the search input value

    axios
      .get(`https://swapi.dev/api/people/?search=${searchValue}`) // Make a GET request to search for characters
      .then((response) => this.setState({ characters: response.data.results })); // Update state with search results
  };



  render() {
    return (
      <div>
        <Searchbar searchInputFunction={this.searchCharacters} />{" "}
        {/* Render the search bar component */}
        <div className="characterlist-row">
          {this.state.characters.map((character) => (
            <Character {...character} key={character.url} /> // Render the Character component for each character in the state
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterList;
