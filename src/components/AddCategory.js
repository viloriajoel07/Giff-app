import { useState } from "react";
import { Icon } from "@iconify/react";

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    window.location.href = "#anchor";
    setInputValue("");
    onAddCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} className="w-full md:w-64">
      <div className="border border-gray-300 px-4 py-2 rounded-xl flex items-center relative">
        <input
          type="text"
          className="outline-none px-2 text-white w-full bg-transparent"
          placeholder="Buscar Gif"
          name="searches"
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
        <button className="absolute right-4 text-white text-xl" type="submit">
          <Icon icon="bx:search" />
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
