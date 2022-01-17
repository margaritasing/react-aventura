import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Search() {
  return (
    <div className="search">
      <Autocomplete
        id="combo-box-demo"
        options={top100Country}
        getOptionLabel={(option) => option.nombre}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Pais" variant="outlined" />
        )}
      />
    </div>
  );
}

const top100Country = [
  { nombre: "Argentina" },
  { nombre: "Venezuela" },
  { nombre: "Colombia" },
  { nombre: "Chile" },
  { nombre: "Brasil" },
  { nombre: "Uruguay" },
  { nombre: "Paraguay" },
  { nombre: "Ecuador" },
];
