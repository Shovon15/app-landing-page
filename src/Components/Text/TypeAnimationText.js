import { TypeAnimation } from "react-type-animation";

const TypeAnimationText = () => {
  return (
    <span
      className="font-bold text-3xl md:text-5xl break-words"
      // style={{
      //   fontSize: "2rem",
      //   fontWeight: "bold",
      //   wordWrap: "break-word",
      // }}
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
            // console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: "inline-block", color: "#3949AB" }}
      />
    </span>
  );
};
export default TypeAnimationText;
