import { useState } from "react";
import ApiKebabContext from "./ApiKebabContext";

const ApiKebabContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [imageImput, setImageImput] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ApiKebabContext.Provider
      value={{
        name,
        setName,
        imageImput,
        setImageImput,
        description,
        setDescription,
      }}
    >
      {children}
    </ApiKebabContext.Provider>
  );
};
export default ApiKebabContextProvider;
