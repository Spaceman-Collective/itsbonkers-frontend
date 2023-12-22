import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getGameSettings } from "@/utils/solana";
import { Connection } from "@solana/web3.js";
import { GameSettings } from "@/types/types";
import { BN } from "@coral-xyz/anchor";

export const useGameSettings = (
  connection: Connection,
  gameId: BN
): UseQueryResult<GameSettings | undefined, unknown> => {
  return useQuery(["gameSettings"], () => getGameSettings(connection, gameId), {
    enabled: !!connection,
  });
};
