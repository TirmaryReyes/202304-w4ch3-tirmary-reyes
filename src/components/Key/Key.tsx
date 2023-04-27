interface KeyProps {
  text: string;
  isBig: boolean;
  isDisabled: boolean;
  actionOnClick: () => void;
}

const Key = ({
  text,
  isBig,
  isDisabled,
  actionOnClick,
}: KeyProps): JSX.Element => {
  return (
    <button
      className={`key ${isBig ? "big" : ""}`}
      onClick={actionOnClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Key;
