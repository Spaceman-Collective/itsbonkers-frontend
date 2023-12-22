import { useQuery } from "@tanstack/react-query";
import { Connection, PublicKey } from "@solana/web3.js";
import { getWalletTokenBalance } from "@/utils";
import { useGameSettings } from "./useGameSettings";
import userStore from "@/stores/userStore";

export const useCurrentWalletBonkBalance = (
  walletAddress: PublicKey | null,
  connection: Connection
) => {
  const { globalGameId } = userStore();
  const { data: gameSettings } = useGameSettings(connection, globalGameId);
  return useQuery(
    ["walletBonkBalance", walletAddress?.toBase58()],
    () => {
      if (walletAddress) {
        return getWalletTokenBalance({
          walletAddress,
          connection,
          tokenMint: gameSettings!.coinMint,
        });
      }
      return BigInt(0);
    },
    {
      enabled: !!walletAddress && !!connection,
    }
  );
};
