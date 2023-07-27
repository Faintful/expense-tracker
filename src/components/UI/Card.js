import "./Card.css";

const Card = ({ className, children }) => {
  let classString = "card " + className;
  return <div className={classString}>{children}</div>;
};

export default Card;