import { createContext } from "react";

const defaultPerson = {
  name: "Naro",
  age: 12,
};

const PeopleContext = createContext<typeof defaultPerson>(defaultPerson);

export default PeopleContext;
