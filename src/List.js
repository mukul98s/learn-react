import React from "react";

const List = ({ person, setPerson }) => {
  const deleteHandler = (id) => {
    setPerson(
      person.filter((people) => {
        return people.id !== id;
      })
    );
  };

  const completeHandler = (id) => {
    setPerson(
      person.map((people) => {
        if (people.id === id) return { ...people, wished: !people.wished };

        return people;
      })
    );
  };

  return (
    <>
      {person.map((people) => {
        const { id, name, age, image } = people;
        return (
          <div className={`person ${people.wished ? "wished" : ""}`} key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
              <i
                className="far fa-check-circle"
                onClick={() => completeHandler(id)}
              ></i>
              <i
                onClick={() => deleteHandler(id)}
                className="far fa-times-circle"
              ></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
