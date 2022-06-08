import "../css/Drink.css";

const Drink = ({ data: { title, imgSrc } }) => {
  return (
    <div className="drink grid-item">
      <img className="drink img" src={imgSrc} alt="beverage image" />
      <div className="drink drink-title">{title}</div>
    </div>
  );
};

export default Drink;
