import React from "react";
// import FeatureCard from "../../../Components/Card/FeatureCard";
// import SectionHeading from "../../../Components/Text/SectionHeading";
// import SectionText from "../../../Components/Text/SectionText";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscFileCode } from "react-icons/vsc";
import { VscLayers } from "react-icons/vsc";
import SectionTitle from "../../Components/Text/SectionTitle";
import FeatureCard from "../../Components/Card/FeatureCard";

const Features = () => {
  const items = [
    {
      icon: <VscWorkspaceTrusted />,
      title: "Fully Secured",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: <VscLayers />,
      title: "Well Organized",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: <VscFileCode />,
      title: "Clean coding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div id="feature" className="py-5 md:py-10 min-h-screen bg-slate-100">
      <SectionTitle title="Awesome Apps Features" />
      <p className="py-5">
        A Private Limited is the most popular type of partnership Malta. The
        limited liability is, in fact, the only type of company allowed by
        Companies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto my-10">
        {items.map((item, i) => (
          <FeatureCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
