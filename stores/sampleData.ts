// import { Sleigh } from "@/types/types";
// import { GameSettings } from "@/types/types";

// export const sampleGameSettings: GameSettings[] = [
//   {
//     gameId: new BN(1,
//     highestCurrentStake: 5000000,
//     stage1Start: 2,
//     stage1End: 6,
//     lastRolled: 15000,
//     rollInterval: 1000,
//     coinMint: "3dM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     coinDecimals: 6,
//     sleighsBuilt: 10,
//     sleighsRetired: 2,
//     mintCostMultiplier: 1.5,
//     propulsionPartsMint: "5dM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     landingGearPartsMint: "6dM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     navigationPartsMint: "7dM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     presentsBagPartsMint: "8dM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     prizePool: 100000000,
//   },
//   {
//     gameId: 2,
//     highestCurrentStake: 4000000,
//     stage1Start: 4,
//     stage1End: 3,
//     lastRolled: 16000,
//     rollInterval: 1200,
//     coinMint: "9dM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     coinDecimals: 6,
//     sleighsBuilt: 15,
//     sleighsRetired: 3,
//     mintCostMultiplier: 1.2,
//     propulsionPartsMint: "AdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     landingGearPartsMint: "BdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     navigationPartsMint: "CdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     presentsBagPartsMint: "DdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     prizePool: 150000000,
//   },
//   {
//     gameId: 3,
//     highestCurrentStake: 6000000,
//     stage1Start: 2,
//     stage1End: 2,
//     lastRolled: 17000,
//     rollInterval: 1100,
//     coinMint: "EdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     coinDecimals: 6,
//     sleighsBuilt: 20,
//     sleighsRetired: 5,
//     mintCostMultiplier: 1.3,
//     propulsionPartsMint: "FdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     landingGearPartsMint: "GdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     navigationPartsMint: "HdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     presentsBagPartsMint: "IdM9K8G6YkLmfq2ZqPp6D6xjXGZC9BQMxQw9BbL5FdWo",
//     prizePool: 200000000,
//   },
// ];

// export const sampleSleighs: Sleigh[] = [
//   {
//     // sleighId: "Merry Chariot",
//     sleighId: "5074990488829321914",
//     owner: "owner_pubkey_1",
//     level: 2,
//     gameId: 1234567890,
//     builtIndex: 1,
//     mintCost: 1000000,
//     stakeAmt: 20000000,
//     broken: false,
//     stakedAfterRoll: 5,
//     lastClaimedRoll: 10,
//     lastDeliveryRoll: 15,
//     propulsionHp: 210,
//     landingGearHp: 255,
//     navigationHp: 180,
//     presentsBagHp: 9,
//   },
//   {
//     // sleighId: "Evergreen Cruiser",
//     sleighId: "2981433157044867956",
//     owner: "owner_pubkey_2",
//     level: 8,
//     gameId: 1,
//     builtIndex: 2,
//     mintCost: 800000,
//     stakeAmt: 16000000,
//     broken: false,
//     stakedAfterRoll: 3,
//     lastClaimedRoll: 8,
//     lastDeliveryRoll: 13,
//     propulsionHp: 95,
//     landingGearHp: 160,
//     navigationHp: 15,
//     presentsBagHp: 235,
//   },
//   {
//     // sleighId: "Elder Blitzkreig",
//     sleighId: "1389637892559324191",
//     owner: "owner_pubkey_3",
//     level: 9,
//     gameId: 1,
//     builtIndex: 3,
//     mintCost: 900000,
//     stakeAmt: 18000000,
//     broken: true,
//     stakedAfterRoll: 4,
//     lastClaimedRoll: 9,
//     lastDeliveryRoll: 14,
//     propulsionHp: 18,
//     landingGearHp: 110,
//     navigationHp: 140,
//     presentsBagHp: 234,
//   },
//   {
//     // sleighId: "Elder Speeder",
//     sleighId: "1389637892559324193",
//     owner: "owner_pubkey_4",
//     level: 0,
//     gameId: 1,
//     builtIndex: 0,
//     mintCost: 900000,
//     stakeAmt: 18000000,
//     broken: false,
//     stakedAfterRoll: 4,
//     lastClaimedRoll: 9,
//     lastDeliveryRoll: 14,
//     propulsionHp: 18,
//     landingGearHp: 110,
//     navigationHp: 140,
//     presentsBagHp: 234,
//   },
// ];
