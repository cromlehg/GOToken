
import ether from './helpers/ether'
import {advanceBlock} from './helpers/advanceToBlock'
import {increaseTimeTo, duration} from './helpers/increaseTime'
import latestTime from './helpers/latestTime'
import EVMThrow from './helpers/EVMThrow'

const BigNumber = web3.BigNumber

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

const Crowdsale = artifacts.require('GOTokenCrowdsale')

const Token = artifacts.require('GOToken')

contract('Crowdsale', function([owner, investor, externalInvestor, _]) {

  const value = ether(3)
  
  before(async function() {
    await advanceBlock()
  })
  
  beforeEach(async function () {
    this.crowdsale = await Crowdsale.new()
    this.token = Token.at(await this.crowdsale.token())
  })	 
  
  describe('accepting payments', function () {

    it('should reject payments before start for purchaser', async function () {
      await this.crowdsale.sendTransaction({from: investor, value: value}).should.be.rejectedWith(EVMThrow)
    })

    it('should reject payments before start for owner', async function () {
      await this.crowdsale.sendTransaction({from: owner, value: value}).should.be.rejectedWith(EVMThrow)
      await this.crowdsale.directMint(externalInvestor, value, {from: owner}).should.be.rejectedWith(EVMThrow)
    })

    it('should accept payments after start for purchaser', async function () {
      let start = await this.crowdsale.start()
      await increaseTimeTo(start)
      await this.crowdsale.sendTransaction({from: investor, value: value}).should.be.fulfilled
      let minted = await this.token.balanceOf(investor)
      console.log(minted)
    })

    it('should accept payments after start for owner', async function () {
      await this.crowdsale.sendTransaction({from: owner, value: value}).should.be.fulfilled
      await this.crowdsale.directMint(externalInvestor, value, {from: owner}).should.be.fulfilled
    })

    it('should reject payments after end for purchaser', async function () {
      let end = await this.crowdsale.end()
      await increaseTimeTo(end)
      await this.crowdsale.sendTransaction({from: investor, value: value}).should.be.rejectedWith(EVMThrow)
    })

    it('should reject payments after end for owner', async function () {
      await this.crowdsale.sendTransaction({from: owner, value: value}).should.be.rejectedWith(EVMThrow)
      await this.crowdsale.directMint(externalInvestor, value, {from: owner}).should.be.rejectedWith(EVMThrow)
    })

  })


})
