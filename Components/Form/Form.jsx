import { useState } from "react";


export default function Form({ setNumberofDogs }) {
  // How can we manage the number of dogs?

  const [inputText, setInputText] = useState("");

  function handleOnChange(event){
      setInputText(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    setNumberofDogs(parseInt(inputText));
  }

  return (
    <form>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={handleOnChange}
          type="text"
          className="form-control"
        />
      </div>
      <div className="d-grid">
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          WOOF!
        </button>
      </div>
    </form>
  );
}
