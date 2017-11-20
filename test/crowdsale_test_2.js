
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

contract('Crowdsale', function(wallets) {

  const owner = wallets[0]

  const value1 = ether(1)

  const value2 = ether(2)

  const value3 = ether(3)

  const serviceAddressIndex = 10

  const manualInvestorsLength = 3

  const manualInvestorsStartIndex = serviceAddressIndex

  const transferInvestorsLength = 3

  const transferInvestorsStartIndex = manualInvestorsStartIndex + manualInvestorsLength

  const investorIndex = transferInvestorsStartIndex + transferInvestorsLength

  const investorIndex1 = investorIndex

  const investorIndex2 = 20

  const investorIndex3 = 30

  const investorsCount = 50

  const changeBonusIndex = investorIndex2 + 6

  const investorTransferFromIndex = investorIndex

  const day = 60 * 60 * 24;
 
  const nextBonusDiffTime = 30 * day

  const DIVIDER = ether(1)

  before(async function() {
    await advanceBlock()
  })
  
  beforeEach(async function () {
    this.crowdsale = await Crowdsale.new()
    this.token = Token.at(await this.crowdsale.token())
    this.price = await this.crowdsale.price()
    this.PERCENT_RATE = await this.crowdsale.PERCENT_RATE()
  })	 
  
  describe('Test crowdsale', function () {

    it('should accept payments after start for purchaser', async function () {

      console.log('Set new wallet: ' + owner)
      // set wallet
      await this.crowdsale.setWallet(owner).should.be.fulfilled

      // increase time to start crowdsale
      console.log('Increase time to start crowdsale')
      let start = await this.crowdsale.start()
      await increaseTimeTo(start)

      console.log('Initialize investors.')
      // initialize investors properties
      var discount = await this.crowdsale.getDiscount()
      console.log('Discount ' + discount + '%')
      var investors = {}
      var summaryTokensMinted = new BigNumber(0)
      var summaryInvested = new BigNumber(0)


     // var changeBonusInvestor;
      for (var i = investorIndex; i < investorIndex + investorsCount; i++) {
        var investedValue = 0
        if(i > investorIndex3) {
          investedValue = value3
        } else if(i > investorIndex2) {
          investedValue = value2
        } else {
          investedValue = value1
        }

        if(i == changeBonusIndex) {
          console.log('Increase time to second bonus...')
          await increaseTimeTo(start.toNumber() + nextBonusDiffTime)
          discount = await this.crowdsale.getDiscount() 
          console.log('New discount is ' + discount + '%')
        }

        let tokensWithBonus = investedValue.mul(this.price.mul(this.PERCENT_RATE)).div(this.PERCENT_RATE.sub(discount)).div(DIVIDER).round(0);

        await this.crowdsale.sendTransaction({from: wallets[i], value: investedValue}).should.be.fulfilled
        //console.log(wallets[i] + ' invested ' + investedValue)

        investors[wallets[i]] = {'invested': investedValue, 'balance': tokensWithBonus}
        summaryTokensMinted = summaryTokensMinted.add(tokensWithBonus)
        summaryInvested = summaryInvested.add(investedValue)
      }


      console.log('Initialized investors ' +  Object.keys(investors).length)
      const crowdsale = this.crowdsale


      console.log('Check balances')
      // check balances
      const token = this.token
      await Promise.all(Object.keys(investors).map(async (investor) => {
        let balance = investors[investor]['balance']
        let balanceFrom = await token.balanceOf(investor)
        console.log('Investor ' + investor + ' have balance ' + balanceFrom + ' but should have ' + balance)
        balanceFrom.should.be.bignumber.equal(balance)
      }))


      console.log('Check total minted 1')
      // check total minted
      let totalSupply1 = await token.totalSupply()
      totalSupply1.should.be.bignumber.equal(summaryTokensMinted)
      console.log('Total minted ' + totalSupply1)

      console.log('Create tokens manually...')
      // invest manually 
     
      for(var i = manualInvestorsStartIndex; i < manualInvestorsStartIndex + manualInvestorsLength; i++) {
        let directMintValue = ether(2)
        let investor = wallets[i]
        console.log('Create tokens tokens manually for ' + investor + " with " + directMintValue + " wei")
        await crowdsale.directMint(investor, directMintValue).should.be.fulfilled
        let tokens = await token.balanceOf(investor)
        let totalOnce = await token.totalSupply()
        investors[investor] = {'invested': ether(0), 'balance': tokens}
        summaryTokensMinted = summaryTokensMinted.add(tokens)  
        console.log("Minted " + tokens + ", summary minted " + summaryTokensMinted + ", from tokne " + totalOnce)
      }

      console.log('Token holders after manually operations ' +  Object.keys(investors).length)

      // finish crowdsale
      console.log('Finish crowdsale')
      await this.crowdsale.finishMinting().should.be.fulfilled
 
      console.log('Check balances')
      // check balances
      await Promise.all(Object.keys(investors).map(async (investor) => {
        let balance = investors[investor]['balance']
        let balanceFrom = await token.balanceOf(investor)
        balanceFrom.should.be.bignumber.equal(balance)
      }))

 
      console.log('Check total minted')

      //totalSupply.mul(extendedTokensPercent).div(PERCENT_RATE.sub(extendedTokensPercent));
      let extended = summaryTokensMinted.mul(new BigNumber(20)).div(this.PERCENT_RATE.sub(new BigNumber(20)))
      console.log("extended " + extended)
      // check total minted
      summaryTokensMinted = summaryTokensMinted.add(extended).round(0)
      let totalSupply = await token.totalSupply()
      totalSupply.should.be.bignumber.equal(summaryTokensMinted)
      console.log('Total minted ' + totalSupply)
     

      console.log('Transfer to increase token holders. ')
     
      const startTransferPercent = new BigNumber(50)
      for(var i = 0; i < transferInvestorsLength; i++) {
        let investorFrom = wallets[investorTransferFromIndex + i]
        let investorFromBalance = investors[investorFrom]['balance']
        let investorTo = wallets[transferInvestorsStartIndex+ i]
        let percent = startTransferPercent.add(i).div(100)
        let transferredValue = investorFromBalance.mul(percent)
        let remainingValue = investorFromBalance.sub(transferredValue)
        console.log('Transfer amount ' + percent.mul(100) + '% or ' + transferredValue + ' tokens from ' + investorFrom + ' to' + investorTo)
        await token.transfer(investorTo, transferredValue, {from: investorFrom}).should.be.fulfilled
        investors[investorFrom]['balance'] = remainingValue
        investors[investorTo] = {'invested': ether(0), 'balance': transferredValue}
      }

      console.log('Check balances')
      // check balances
/*      await Promise.all(Object.keys(investors).map(async (investor) => {
        let balance = investors[investor]['balance']
        let balanceFrom = await token.balanceOf(investor)
        balanceFrom.should.be.bignumber.equal(balance)
      }))*/

/*      console.log('Token holders after first transfer operations ' +  Object.keys(investors).length)

      console.log('Check invested ETH')
      const totalInvested = await this.token.invested()
      totalInvested.should.be.bignumber.equal(summaryInvested)
      console.log('Invested ' + summaryInvested)

      // take initial investors size
      var initInvestorsSize = Object.keys(investors).length   
      console.log('Env investors count ' + initInvestorsSize)*/
 

    })

  })


})
