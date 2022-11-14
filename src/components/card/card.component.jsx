import "./card.styles.css";
import { Link } from "react-router-dom";

const Card = ({ monster }) => {
  const { id, name, description, link } = monster;

  return (
    <div className="card-container">
      <Link to={`/${link}`}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Card;
