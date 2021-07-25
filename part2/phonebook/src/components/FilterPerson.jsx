import React from "react";

const FilterPerson = (props) => {
  return (
    <div>
      filter shown with <input onChange={props.handleChangeFilter} />
    </div>
  );
};

export default FilterPerson;
