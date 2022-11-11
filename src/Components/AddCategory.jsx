import { useState } from "react";

function AddCategory({onNewcategory}) {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length<=1) return;
   onNewcategory(inputValue)
    setInputValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
}

export default AddCategory;
