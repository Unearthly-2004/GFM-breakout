import { createThirdwebClient } from "thirdweb";
import { metamaskWallet, phantomWallet, embeddedWallet } from "@thirdweb-dev/react";

export const client = createThirdwebClient({
  clientId: "6d9d73f1a545c3599f35e8b8a297212c", // your Thirdweb clientId
});

export const wallets = [
  embeddedWallet({
    auth: {
      options: ["google"],
    },
  }),
  metamaskWallet(),
  phantomWallet(),
];
