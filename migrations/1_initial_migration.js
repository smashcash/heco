/* global artifacts */
const Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  if(deployer.network === 'ht') {
    return
  }
  deployer.deploy(Migrations)
}
