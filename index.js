import * as preact from "preact";
import { useState } from "preact/hooks";
import register from "preact-custom-element";

const Greeting = ({ name = "World" }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Hello, {name}!</p>
      <button
        type="button"
        onClick={() => {
          console.log("Hello", name);
        }}
      >
        I will log out the name
      </button>
      <br />
      <br />
      Count: {count}
      <button
        type="button"
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={(e) => {
          const event = new CustomEvent("magicgreet", {
            bubbles: true,
            detail: { count },
          });
          e.target.dispatchEvent(event);
        }}
      >
        I will dispatch an event called magic greet that has the count
      </button>
    </div>
  );
};

register(Greeting, "x-greeting", ["name"]);
