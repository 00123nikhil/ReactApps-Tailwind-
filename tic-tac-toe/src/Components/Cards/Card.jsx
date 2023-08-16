import "./Card.css";
import Icon from "../Icons/Icon";

function Card({ player }) {
  let icon = <Icon />;

  if (player == "x") {
    icon = <Icon name="cross" />;
  } else if (player == "O") {
    icon = <Icon name="circle" />;
  }

  return <div className="card">{icon}</div>;
}

export default Card;
