import "../css/Drink.css";

const Drink = ({ data: { sn, title, imgSrc } }) => {
  return (
    <div className="drink grid-item">
      <img className="drink img" src={imgSrc} />
      <div className="drink drink-title">{title}</div>
    </div>
  );
};

export default Drink;
