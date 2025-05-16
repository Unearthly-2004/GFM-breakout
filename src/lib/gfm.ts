import { Connection } from "@solana/web3.js";
import { initGoFundMemeSDK } from "@gofundmeme/sdk";


const connection = new Connection(import.meta.env.VITE_SOLANA_RPC as string);


export const initializeGFM = async () => {
  const gfmSDK = await initGoFundMemeSDK({ connection });
  return gfmSDK;
};
