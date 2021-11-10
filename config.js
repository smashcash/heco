require('dotenv').config()

module.exports = {
  deployments: {
    netId128: {
      ht: {
        instanceAddress: {
          '1': '',
          '1000': '',
          '10000': '',
          '100000': ''
        },
        symbol: 'HT',
        decimals: 18
      }
    }
    // ,
    // netId1666700000: {
    //   eth: {
    //     instanceAddress: {
    //       '10': '',
    //       '100': '',
    //       '1000': '',
    //       '10000': '',
    //       '100000': '',
    //     },
    //     symbol: 'ONE',
    //     decimals: 18
    //   }
    // }
  }
}
