import { useState } from "react";

const Tour = ({ tour, setTours, tours }) => {
  const { id, image, info, price, name } = tour;

  const [read, setRead] = useState(false);

  const deleteHandler = (id) => {
    setTours(tours.filter((t) => t.id !== id));
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setRead(!read)}>
            {read ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteHandler(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
