import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import LightFonts from "./fonts/LightFonts";

export default function BodySection() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <ContentContainer cls={`w-9/12 my-24`}>
        <TitleSubTitle
          content1={`RADIO VAULTS PLATFORM`}
          content2={`Our technology is what Web 3.0 and Music have been waiting for!`}
        />
        <Body
          content1={
            <LightFonts cls={`text-justified`}>
              Quickly and easily distribute your music directly from your Radio
              Vault(s) to launch NFT campaigns for your community on any
              blockchain.
              With our technology, streams will be accounted for any
              time the music is being listened to. This means when someone is
              listening to an NFT a stream for licensing purposes is happening.

              Permission your music to be streamed into the metaverse or
              performed live in metaverse(s) directly from your user dashboard.
              You are in complete control and ownership of the distribution of
              your music as a Radio Vault owner.
            </LightFonts>
          }
          content2=<img src="/assets/asset2.svg" alt="" />
        />
      </ContentContainer>
      <ContentContainer cls={`w-9/12 my-24`}>
        <TitleSubTitle
          content1={`Launch Music NFT Campaigns at Scale`}
          content2={`Provide your community with ownership of your music!`}
        />
        <Body
          content2={
            <LightFonts cls={`text-justified`}>
              With our infrastructure, you can be assured that you own and control access to your music and its data. This will allow for you to know where streams are coming from on the blockchain.
              Include all web 2.0 & web 3.0 music metadata & DSPs for any particular song by an artist or record-label owned music. This will allow you to distribute and license your music on the blockchain and off-chain.

              The biggest problem the blockchain and music space currently faces is how to properly license NFT technology/web 3.0 systems. With this infrastructure we solve that problem.
              Vaults are totally controlled by the individual or entity that owns permissions to license music. This will invite thousands of musicians to the blockchain whether they are an individual artist or with a record label!

            </LightFonts>
          }
          content1=<img src="/assets/Group1.svg" alt="" />
        />
      </ContentContainer>
      <ContentContainer cls={`w-9/12 my-24`}>
        <TitleSubTitle
          content1={`COMMUNITY`}
          content2={`Join our community of committed professionals!`}
        />
        <Body
          content1={
            <LightFonts cls={`text-justified`}>
              We are committed to ensuring copyright.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam feugiat et vitae risus, feugiat id lobortis ipsum mauris. Magna sed sit leo, mi velit non viverra libero sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam feugiat et vitae risus, feugiat id lobortis ipsum mauris. Magna sed sit leo, mi velit non viverra libero sodales.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam feugiat et vitae risus, feugiat id lobortis ipsum mauris. Magna sed sit leo, mi velit non viverra libero sodales.
            </LightFonts>
          }
          content2=<img src="/assets/Group2.svg" alt="" />
        />
      </ContentContainer>
    </div>
  );
}

function TitleSubTitle({ content1, content2 }) {
  return (
    <ContentContainer>
      <BoldFonts cls={`text-4xl text-center`}>{content1}</BoldFonts>
      <LightFonts cls={`text-xl text-center my-10`}>{content2}</LightFonts>
    </ContentContainer>
  );
}

function Body({ content1, content2 }) {
  return (
    <div className={`grid grid-cols-2 gap-5 mt-20 px-10`}>
      <ContentContainer cls={`mx-auto`}>{content1}</ContentContainer>
      <ContentContainer cls={`mx-auto`}>{content2}</ContentContainer>
    </div>
  );
}
