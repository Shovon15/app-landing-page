import { TypeAnimation } from "react-type-animation";

const TypeAnimationText = () => {
  return (
    <span
      style={{
        fontSize: "4em",

        fontWeight: "bold",
        wordWrap: "break-word",
      }}
    >
      <span>
        The new website for <br />
      </span>
      <TypeAnimation
        sequence={[
          2000,
          "app landing", // Types 'One'
          2000, // Waits 1s
          "showcase", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "screenshoot", // Types 'Three' without deleting 'Two'
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: "inline-block", color: "#2196F3" }}
      />
    </span>
  );
};
export default TypeAnimationText;
