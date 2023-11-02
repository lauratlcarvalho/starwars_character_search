
import PropTypes from "prop-types";
import './Character.css'

function Character(props) {
    return (
      <div className="card m-2 character-card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <strong>Height:</strong> {props.height} cm
          </p>
          <p className="card-text">
            <strong>Mass:</strong> {props.mass} kg
          </p>
          <p className="card-text">
            <strong>Hair Color:</strong> {props.hair_color}
          </p>
          <p className="card-text">
            <strong>Skin Color:</strong> {props.skin_color}
          </p>
          <p className="card-text">
            <strong>Eye Color:</strong> {props.eye_color}
          </p>
          <p className="card-text">
            <strong>Birth Year:</strong> {props.birth_year}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {props.gender}
          </p>
        </div>
      </div>
    );
  }


Character.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default Character;
