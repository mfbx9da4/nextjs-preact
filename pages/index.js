import { h } from "preact";

export default () => {
  const count = 1;
  return (
    <div>
      Click to Increment: <button>{count}</button>
    </div>
  );
};
