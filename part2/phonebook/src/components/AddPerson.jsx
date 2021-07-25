import React from "react";

const Addperson = (props) => {
  return (
    <form>
      <div>
        name: <input onChange={props.handleChangeName} />
      </div>
      <div>
        number: <input onChange={props.handleChangePhone} />
      </div>

      <div>
        <button type="submit" onClick={props.handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

export default Addperson;
