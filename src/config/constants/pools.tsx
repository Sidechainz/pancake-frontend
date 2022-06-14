import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.vvs,
    earningToken: serializedTokens.vvs,
    contractAddress: {
      25: process.env.NEXT_PUBLIC_CRAFTSMAN_ADDRESS_MAINNET,
      338: process.env.NEXT_PUBLIC_CRAFTSMAN_ADDRESS_TESTNET, // FIXME: env var master chef
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: process.env.NEXT_PUBLIC_TOKEN_PER_BLOCK, // FIXME pool tokenPerBlock
    sortOrder: 1,
    isFinished: false,
  },
].filter((p) => !!p.contractAddress[CHAIN_ID])

export default pools
