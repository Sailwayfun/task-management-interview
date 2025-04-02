import PeopleContext from "./PeopleContext";
import { useState } from "react";

export default function PeopleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);

  return (
    //setName and setAge can be passed down too, if needed
    <PeopleContext.Provider value={{ name, age }}>
      {children}
    </PeopleContext.Provider>
  );
}
