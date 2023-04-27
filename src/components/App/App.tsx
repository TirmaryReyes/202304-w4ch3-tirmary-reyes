import Info from "../Info/Info";
import Key from "../Key/Key";

const App = (): JSX.Element => {
  const isCalling = true;
  return (
    <>
      <Info isCalling={isCalling} />
      <Key
        text={"1"}
        isBig={false}
        isDisabled={false}
        actionOnClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Key>
    </>
  );
};

export default App;
