import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";

const SelectForm = () => {
  //! state
  //! function
  //! render
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        ></Select>
      </FormControl>
    </div>
  );
};

export default SelectForm;
