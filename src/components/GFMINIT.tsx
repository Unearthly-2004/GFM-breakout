import { useEffect, useState } from "react";
import { initializeGFM } from "@/lib/gfm"; 

const GFMInit = () => {
  const [status, setStatus] = useState("Initializing GFM SDK...");

  useEffect(() => {
    const init = async () => {
      try {
        const sdk = await initializeGFM();
        console.log("✅ GFM SDK Initialized", sdk);
        setStatus("GFM SDK Initialized ✅");
      } catch (error) {
        console.error("❌ GFM SDK Initialization Failed", error);
        setStatus("GFM SDK Initialization Failed ❌");
      }
    };

    init();
  }, []);

  return <div>{status}</div>;
};

export default GFMInit;
