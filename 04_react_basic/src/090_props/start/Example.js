import Child from "./components/Child";

const Example = () => {
  const hello = () => `Hello`;
  return (
    <>
      <Child color="red" num={123} faaa={hello} />
      {/* <Child color="blue" /> */}
    </>
  );
};

export default Example;
