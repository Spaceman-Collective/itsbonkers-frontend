export type Bonkers = {
  "version": "0.1.0",
  "name": "bonkers",
  "instructions": [
    {
      "name": "initBonkers",
      "docs": [
        "* Creates the Roll account for the game\n     * Creates Setting account for the game\n     *  Set the start time for stage 1 and roll interval and end time for stage 1\n     * ~~ (Done with init script)~~ Create the Bonk ATA for the GameSettings PDA"
      ],
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "init",
          "type": {
            "defined": "GameSettings"
          }
        }
      ]
    },
    {
      "name": "stage1Roll",
      "docs": [
        "* Anyone can call this function if enough time has passed since the last call\n     * maxes out at 1250 rolls"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createSleigh",
      "docs": [
        "* Create a stake account that's an unconfirmed sleigh\n     * Transfers bonk to the Bonk ATA for the GameSettingsPDA\n     * Tracks the Roll Index at which it was created, cannot claim any levels from before that index\n     * CHECK; stake_amt < current min mint price, if so just throw error\n     * CANNOT BE WITHDRAWN UNTIL STAGE 2"
      ],
      "accounts": [
        {
          "name": "sleighOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sleigh",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameTokenAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sleighOwnerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sleighId",
          "type": "u64"
        },
        {
          "name": "stakeAmt",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimLevels",
      "docs": [
        "* Pass in Roll Indexes since last claim (do the calculations off chain) that earn levels\n     * Can only be called by stake account otherwise someone could skip claims\n     * Can no longer claim levels if game is on stage 2\n     * If they have claims, but their stake amount is less than current mint cost (sleighs built + multiplier), they have to wait and recover the account in stage 2\n     * Basically they're SOL for not confirming sooner\n     * CHECK: How many levels you can claim per transaction due to compute limit"
      ],
      "accounts": [
        {
          "name": "sleighOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sleigh",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rollIdxs",
          "type": {
            "vec": "u64"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "highestCurrentStake",
            "type": "u64"
          },
          {
            "name": "stage1Start",
            "type": "u64"
          },
          {
            "name": "stage1End",
            "type": "u64"
          },
          {
            "name": "lastRolled",
            "type": "u64"
          },
          {
            "name": "rollInterval",
            "type": "u64"
          },
          {
            "name": "coinMint",
            "type": "publicKey"
          },
          {
            "name": "coinDecimals",
            "type": "u8"
          },
          {
            "name": "sleighsBuilt",
            "type": "u64"
          },
          {
            "name": "totalSpoils",
            "type": "u64"
          },
          {
            "name": "mintCostMultiplier",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "gameRolls",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rolls",
            "type": {
              "vec": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "sleigh",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "level",
            "type": "u8"
          },
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "builtIndex",
            "type": "u64"
          },
          {
            "name": "mintCost",
            "type": "u64"
          },
          {
            "name": "stakeAmt",
            "type": "u64"
          },
          {
            "name": "broken",
            "type": "bool"
          },
          {
            "name": "stakedAfterRoll",
            "type": "u64"
          },
          {
            "name": "lastCheckedRoll",
            "type": "u64"
          },
          {
            "name": "propulsionStatus",
            "type": "bool"
          },
          {
            "name": "propulsionRepaired",
            "type": "u8"
          },
          {
            "name": "landingGearStatus",
            "type": "bool"
          },
          {
            "name": "landingGearRepaired",
            "type": "u8"
          },
          {
            "name": "navigationStatus",
            "type": "bool"
          },
          {
            "name": "navigationRepaired",
            "type": "u8"
          },
          {
            "name": "presentsBagStatus",
            "type": "bool"
          },
          {
            "name": "presentsBagRepaired",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GameNotStarted",
      "msg": ""
    },
    {
      "code": 6001,
      "name": "Stage1Ended",
      "msg": ""
    },
    {
      "code": 6002,
      "name": "RollTimerCooldown",
      "msg": ""
    },
    {
      "code": 6003,
      "name": "StakeAmtBelowCurrentMintCost",
      "msg": ""
    },
    {
      "code": 6004,
      "name": "InvalidRollForClaim",
      "msg": ""
    }
  ]
};

export const IDL: Bonkers = {
  "version": "0.1.0",
  "name": "bonkers",
  "instructions": [
    {
      "name": "initBonkers",
      "docs": [
        "* Creates the Roll account for the game\n     * Creates Setting account for the game\n     *  Set the start time for stage 1 and roll interval and end time for stage 1\n     * ~~ (Done with init script)~~ Create the Bonk ATA for the GameSettings PDA"
      ],
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "init",
          "type": {
            "defined": "GameSettings"
          }
        }
      ]
    },
    {
      "name": "stage1Roll",
      "docs": [
        "* Anyone can call this function if enough time has passed since the last call\n     * maxes out at 1250 rolls"
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createSleigh",
      "docs": [
        "* Create a stake account that's an unconfirmed sleigh\n     * Transfers bonk to the Bonk ATA for the GameSettingsPDA\n     * Tracks the Roll Index at which it was created, cannot claim any levels from before that index\n     * CHECK; stake_amt < current min mint price, if so just throw error\n     * CANNOT BE WITHDRAWN UNTIL STAGE 2"
      ],
      "accounts": [
        {
          "name": "sleighOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sleigh",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameTokenAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sleighOwnerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coinMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sleighId",
          "type": "u64"
        },
        {
          "name": "stakeAmt",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimLevels",
      "docs": [
        "* Pass in Roll Indexes since last claim (do the calculations off chain) that earn levels\n     * Can only be called by stake account otherwise someone could skip claims\n     * Can no longer claim levels if game is on stage 2\n     * If they have claims, but their stake amount is less than current mint cost (sleighs built + multiplier), they have to wait and recover the account in stage 2\n     * Basically they're SOL for not confirming sooner\n     * CHECK: How many levels you can claim per transaction due to compute limit"
      ],
      "accounts": [
        {
          "name": "sleighOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "gameSettings",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameRolls",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sleigh",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rollIdxs",
          "type": {
            "vec": "u64"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "highestCurrentStake",
            "type": "u64"
          },
          {
            "name": "stage1Start",
            "type": "u64"
          },
          {
            "name": "stage1End",
            "type": "u64"
          },
          {
            "name": "lastRolled",
            "type": "u64"
          },
          {
            "name": "rollInterval",
            "type": "u64"
          },
          {
            "name": "coinMint",
            "type": "publicKey"
          },
          {
            "name": "coinDecimals",
            "type": "u8"
          },
          {
            "name": "sleighsBuilt",
            "type": "u64"
          },
          {
            "name": "totalSpoils",
            "type": "u64"
          },
          {
            "name": "mintCostMultiplier",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "gameRolls",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rolls",
            "type": {
              "vec": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "sleigh",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "level",
            "type": "u8"
          },
          {
            "name": "gameId",
            "type": "u64"
          },
          {
            "name": "builtIndex",
            "type": "u64"
          },
          {
            "name": "mintCost",
            "type": "u64"
          },
          {
            "name": "stakeAmt",
            "type": "u64"
          },
          {
            "name": "broken",
            "type": "bool"
          },
          {
            "name": "stakedAfterRoll",
            "type": "u64"
          },
          {
            "name": "lastCheckedRoll",
            "type": "u64"
          },
          {
            "name": "propulsionStatus",
            "type": "bool"
          },
          {
            "name": "propulsionRepaired",
            "type": "u8"
          },
          {
            "name": "landingGearStatus",
            "type": "bool"
          },
          {
            "name": "landingGearRepaired",
            "type": "u8"
          },
          {
            "name": "navigationStatus",
            "type": "bool"
          },
          {
            "name": "navigationRepaired",
            "type": "u8"
          },
          {
            "name": "presentsBagStatus",
            "type": "bool"
          },
          {
            "name": "presentsBagRepaired",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GameNotStarted",
      "msg": ""
    },
    {
      "code": 6001,
      "name": "Stage1Ended",
      "msg": ""
    },
    {
      "code": 6002,
      "name": "RollTimerCooldown",
      "msg": ""
    },
    {
      "code": 6003,
      "name": "StakeAmtBelowCurrentMintCost",
      "msg": ""
    },
    {
      "code": 6004,
      "name": "InvalidRollForClaim",
      "msg": ""
    }
  ]
};
