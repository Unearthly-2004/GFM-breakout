import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./background-blur.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { wallets } from "./thirdweb/thirdwebClient.ts";
import GFMInit from "@/components/GFMINIT.tsx";

function Navbar() {
  return (
    <nav>
      {/* ...other navbar content... */}
      <ConnectWallet />
    </nav>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="ethereum"
      supportedWallets={wallets}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

export default App;
