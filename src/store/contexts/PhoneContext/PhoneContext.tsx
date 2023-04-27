import { createContext } from "react";
import { PhoneContextStructure } from "../types";

const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default PhoneContext;
