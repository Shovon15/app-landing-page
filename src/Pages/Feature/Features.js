import React from "react";
// import FeatureCard from "../../../Components/Card/FeatureCard";
// import SectionHeading from "../../../Components/Text/SectionHeading";
// import SectionText from "../../../Components/Text/SectionText";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscFileCode } from "react-icons/vsc";
import { VscLayers } from "react-icons/vsc";
import { MdOutlineSpeed } from "react-icons/md";
import SectionTitle from "../../Components/Text/SectionTitle";
import FeatureCard from "../../Components/Card/FeatureCard";
import SectionText from "../../Components/Text/SectionText";
import featureImg from "../../assets/section icons/features.png";
import { Typography } from "@material-tailwind/react";

const Features = () => {
  const items = [
    {
      icon: <VscWorkspaceTrusted />,
      color: "green",
      title: "Fully Secured",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscLayers />,
      color: "indigo",
      title: "Well Organized",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscFileCode />,
      color: "teal",
      title: "Clean coding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <MdOutlineSpeed />,
      color: "cyan",
      title: "Hi speedy app",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  return (
    // <div id="feature" className="py-5 md:py-10 min-h-screen bg-slate-100">
    //   <SectionTitle title="Awesome Apps Features" />

    //   <SectionText
    //     title="A Private Limited is the most popular type of partnership Malta. The
    //     limited liability is, in fact, the only type of company allowed by
    //     Companies."
    //   />

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto my-10">
    //     {items.map((item, i) => (
    //       <FeatureCard key={i} item={item} />
    //     ))}
    //   </div>
    // </div>
    <div id="feature" className="flex min-h-screen  ">
      <div className="w-5/12 p-6">
        <img src={featureImg} alt="..." className="w-20 m-1" />
        <Typography className="text-start text-indigo-600 pb-2" variant="h3">
          Awesome Apps Features
        </Typography>
        <Typography className="text-start" variant="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </div>
      <div className="w-7/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 mx-auto my-10">
          {items.map((item, i) => (
            <FeatureCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
