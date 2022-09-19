import Button from "./Button";
import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import WhatWeDo from "./WhatWeDo";

export default function HeroSection() {
  return (
    <div
      className={`h-[1000px] flex justify-center items-center  bg-cover`}
    >
      <ContentContainer cls={`mt-10 w-9/12`}>
        <BoldFonts cls={`text-6xl text-white`}>Web 3.0 Music</BoldFonts>
        <BoldFonts cls={`text-white w-[500px] my-8`}>
          Your full service music distribution platform to to launch and grow
          your community on any blockchain or streaming platform.
        </BoldFonts>
        <Button cls={`w-fit mb-48`}>Sign up</Button>
        <WhatWeDo/>
      </ContentContainer>
    </div>
  );
}
