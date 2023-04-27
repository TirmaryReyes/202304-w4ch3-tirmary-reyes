interface InfoProps {
  isCalling: boolean;
}

const Info = ({ isCalling }: InfoProps): JSX.Element => {
  return (
    <span className={`{message ${isCalling} ? "" : "off"}`}>Calling...</span>
  );
};

export default Info;
