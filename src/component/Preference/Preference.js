import { useState } from "react";
import "./preference.scss";

const Preference = ({ setShowPref }) => {
  const [preference, setPreference] = useState({ pet: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPreference((prev) => ({ ...prev, [name]: value }));
  };

  const cancelHandler = () => {
    setShowPref(false);
  };

  return (
    <form className="preferenceform">
      <h2 className="preferenceform__title">Preference</h2>
      <div>
        <label>Pet</label>
        <input
          placeholder="pet"
          name="pet"
          value={preference.pet}
          onChange={onChangeHandler}
        ></input>
      </div>

      <button type="submit">Submit</button>
      <button type="button" onClick={cancelHandler}>
        Cancel
      </button>
    </form>
  );
};

export default Preference;
