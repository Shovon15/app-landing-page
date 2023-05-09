import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SectionTitle from "../../Components/Text/SectionTitle";
import faqImg from "../../assets/section icons/faq.png";

export default function Faq() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-45 " : ""
        } h-7 w-7 transition duration-500 transform`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    );
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div id="faq" className="min-h-max my-10 px-5 md:px-10 ">
      <img src={faqImg} alt="..." className="w-20 m-1 mx-auto" />
      <SectionTitle title="FAQ!" />

      <Fragment>
        <Accordion
          open={open === 1}
          animate={customAnimation}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            What should I include in App?
          </AccordionHeader>
          <AccordionBody className="text-xl text-start">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          animate={customAnimation}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            How does the Moodle app work?
          </AccordionHeader>
          <AccordionBody className="text-xl text-start">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          animate={customAnimation}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            Can users choose to install the app?
          </AccordionHeader>
          <AccordionBody className="text-xl text-start">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          animate={customAnimation}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(4)}>
            How do I disable installed apps?
          </AccordionHeader>
          <AccordionBody className="text-xl text-start">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
