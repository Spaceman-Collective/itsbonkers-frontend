import { useQuery } from "@tanstack/react-query";
import { getCurrentSleighs } from "@/utils/solana";
import { Connection, PublicKey } from "@solana/web3.js";
import { useGameSettings } from "./useGameSettings";
import userStore from "@/stores/userStore";

export const useCurrentSleighs = (
  walletAddress: PublicKey | null,
  connection: Connection
) => {
  const { globalGameId } = userStore();
  const { data: gameSettings } = useGameSettings(connection, globalGameId);
  return useQuery(
    ["currentSleighs", walletAddress?.toBase58()],
    () => getCurrentSleighs(walletAddress, connection, gameSettings!.gameId),
    {
      enabled: !!walletAddress && !!connection,
    }
  );
};
