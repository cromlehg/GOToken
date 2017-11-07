<p align="center">
  <h1> GO Token</h1>
  <img src="./logo.png">
</p>


* _Standart_        : ERC20
* _Name_            : GO Token
* _Ticket_          : GO
* _Decimals_        : 18
* _Emission_        : Mintable
* _Crowdsales_      : 1
* _Fiat dependency_ : No
* _Tokens locked_   : No

## Smart-contracts description

Contract mint bounty, advisors and founders tokens after each stage finished. 
Crowdsale contracts have special function to retrieve transferred in errors tokens.

### Contracts contains
1. _GOToken_ 
2. _GOTokenCrowdsale_

### How to manage contract
To start working with contract you should follow next steps:
1. Compile it in Remix with enamble optimization flag and compiler 0.4.18
2. Deploy bytecode with MyEtherWallet. 

After crowdsale contract manager must call finishMinting. 

### How to invest
To purchase tokens investor should send ETH (more than minimum 0.1 EHT) to corresponding crowdsale contract.
Recommended GAS: 150000, GAS PRICE - 21 Gwei.

### Wallets with ERC20 support
1. MyEtherWallet - https://www.myetherwallet.com/
2. Parity 
3. Mist/Ethereum wallet

EXODUS not support ERC20, but have way to export key into MyEtherWallet - http://support.exodus.io/article/128-how-do-i-receive-unsupported-erc20-tokens

Investor must not use other wallets, coinmarkets or stocks. Can lose money.

## Main network configuration

* _Base price_                 : 800 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### ICO
* _Hardcap_                    : 700000 ETH
* _Bounty_                     : 5% of total tokens
* _Founders_                   : 15% of total tokens
* _Start_                      : Sun, 26 Nov 2017 13:00:00 GMT 
* _End_                        : 
* _Founders tokens wallet_     : 
* _Bounty tokens wallet_       : 
* _Contract manager_           : 
* _ETH Wallets_                : 

_Milestones_

1. 30 days                     : discount 30%
2. 30 days                     : discount 20%
3. 30 days                     : discount 10%
3. 30 days                     : no discount


