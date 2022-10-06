import React from "react";

import { AppState as AddProps } from "../App";

interface AddListProps {
  people: AddProps["people"];
  setPeople: React.Dispatch<React.SetStateAction<AddProps["people"]>>;
}

const AddList: React.FC<AddListProps> = ({ people, setPeople }) => {
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    img: "",
    discription: "",
  });

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handelClick = () => {
    if (!input.name || !input.age || !input.img) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age), // make your string to number
        img: input.img,
        discription: input.discription,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      discription: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Add people name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handelChange}
      />

      <input
        type="number"
        placeholder="people age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handelChange}
      />

      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handelChange}
      />

      <textarea
        placeholder="Description"
        className="AddToList-input"
        value={input.discription}
        name="discription"
        onChange={handelChange}
      />

      <button className="AddToList-btn" onClick={handelClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddList;
