/* global artifacts */
require('dotenv').config({ path: '../.env' })
const HTSmashnado = artifacts.require('HTSmashnado')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, HT_AMOUNT_TT } = process.env
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await HTSmashnado.link(hasherContract, hasherInstance.address)
    const smashnado = await deployer.deploy(HTSmashnado, verifier.address, HT_AMOUNT_TT, MERKLE_TREE_HEIGHT, accounts[0])
    console.log('HT Smashnado\'s address ', smashnado.address)
  })
}