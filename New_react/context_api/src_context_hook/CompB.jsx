//Context_api
import CompC from "./CompC";
import { FirstName, LastName } from "./App";
import { useContext } from "react";

const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      my name is {fname} {lname}
    </h1>
  );
};
export default CompB;
