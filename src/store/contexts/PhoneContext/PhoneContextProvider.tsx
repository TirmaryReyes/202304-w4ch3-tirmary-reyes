import { PropsWithChildren, useState } from "react";
import PhoneContext from "./PhoneContext";
import { PhoneContextStructure } from "../types";

const PhoneContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);

  const [isCalling, setIsCalling] = useState<boolean>(false);

  const emptyPhoneNumber = () => {
    setPhoneNumber([]);
  };

  const addDigit = (digit: string) => {
    if (phoneNumber.length >= 9) {
      return;
    }

    setPhoneNumber((phoneNumber) => {
      return [...phoneNumber, digit];
    });
  };

  const call = () => {
    setIsCalling(true);
  };

  const hangUp = () => {
    setIsCalling(false);
  };

  const phoneStore: PhoneContextStructure = {
    phoneNumber,
    isCalling,
    emptyPhoneNumber,
    addDigit,
    call,
    hangUp,
  };

  return (
    <PhoneContext.Provider value={phoneStore}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
