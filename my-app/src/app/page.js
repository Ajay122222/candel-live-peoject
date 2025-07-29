import LocationLink from "@/Alllogosection/LocationLink";
import AboutSection from "@/components/Aboutsection";
import Eightsection from "@/components/Eightsection";
import Feedbacksection from "@/components/Feedbacksection";
import Fivesection from "@/components/Fivesection";
import Footerpage from "@/components/Footerpage";
import Foursection from "@/components/Foursection";
import Headerpage from "@/components/Headerpage";
import Herosection from "@/components/Herosection";
import Logosection from "@/components/Logosection";
import FeatureSection from "@/components/FeatureSection";

import Secondsection from "@/components/Secondsection";
import Sixesection from "@/components/Sixesection";
import Subsericotionsection from "@/components/Subsericotionsection";
import Therdsection from "@/components/Therdsection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Headerpage />
      <Herosection />
      <Therdsection />
      <Foursection />
      <AboutSection />
      <FeatureSection />
      <Fivesection />
      <Sixesection />
      <Feedbacksection />
      <Subsericotionsection />
      <Eightsection />
      <Footerpage />

      {/* <Secondsection/> */}
      {/* <Logosection /> */}
      {/* <LocationLink/> */}
    </>
  );
}
