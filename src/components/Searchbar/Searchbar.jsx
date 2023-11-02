
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "./Searchbar.css";

function Searchbar(props) {
  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        placeholder="Search for your favorite characters"
        type="text"
        onChange={props.searchInputFunction}
      />
    </div>
  );
}

// Define prop types for the Searchbar component
Searchbar.propTypes = {
  searchInputFunction: PropTypes.func.isRequired,
};

export default Searchbar;
