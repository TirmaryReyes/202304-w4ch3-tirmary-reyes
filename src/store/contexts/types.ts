export interface PhoneContextStructure {
  phoneNumber: string[];
  isCalling: boolean;
  emptyPhoneNumber: () => void;
  addDigit: (digit: string) => void;
  call: () => void;
  hangUp: () => void;
}
