import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";

import Button from "./Button";
import ContentContainer from "./ContentContainer";
import BoldFonts from "./fonts/BoldFonts";
import LightFonts from "./fonts/LightFonts";

export default function Navbar() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new WalletConnectConnector({
        options: {
          qrcode: true,
        },
      }),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "content-type": "application/json",
      },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  return (
    <div className={`w-screen flex justify-center items-center`}>
      <ContentContainer cls={`w-9/12 py-4 flex justify-between items-center`}>
        <div className={`flex items-center`}>
          <BoldFonts cls={`text-3xl`}>
            RADIO<span className={`text-red-600`}>VAULTS</span>
          </BoldFonts>
          <LightFonts cls={`mx-5`}>Services</LightFonts>
          <LightFonts cls={``}>Signup</LightFonts>
        </div>
        <Button cls={``} onClick={() => handleAuth()}>
          connect wallet
        </Button>
      </ContentContainer>
    </div>
  );
}
