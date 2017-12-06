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
* _Tokens locked_   : Yes

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

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH
* _Maximum non-verified insvested limit_  : 25 ETH

### Links
* _Token_ - 
* _ITO_ -

### ITO
* _Hardcap_                    : 114000 ETH
* _Invested limit to KYC lock  : 20 ETH
* _Bounty_                     : 5% of total tokens
* _Founders_                   : 15% of total tokens
* _Start_                      : 15 Dec 2017 13:00:00 GMT 
* _Founders tokens wallet_     : 0x76A13d4F571107f363FF253E80706DAcE889aDED
* _Bounty tokens wallet_       : 0x38e4f2A7625A391bFE59D6ac74b26D8556d6361E
* _Contract manager_           : 0xC4ecaF5986c88C752bf6E73C1b48b251c2125700
* _ETH Wallets_                : 0x727436A7E7B836f3AB8d1caF475fAfEaeb25Ff27

_Milestones_

1. 30 days                     : discount 30%
2. 30 days                     : discount 20%
3. 30 days                     : discount 10%
3. 30 days                     : no discount

## Ropsten network configuration 1

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### Links
* _Token_ - https://ropsten.etherscan.io/token/0x438fad0f5e8cde6145376dfb7bdee699eb07e9c7
* _ITO_ - https://ropsten.etherscan.io/address/0x003fcf22b4e267493ce5b9cc830a8b19f979167a

### ITO
* _Hardcap_                    : 114000 ETH
* _Invested limit to KYC lock  : 1 ETH
* _Bounty_                     : 5% of total tokens
* _Founders_                   : 15% of total tokens
* _Start_                      : Tue, 04 Dec 2017 13:00:00 GMT
* _Founders tokens wallet_     : 0x54a67F1507dEb1BFc58ba3ffa94B59fC50EB74BC
* _Bounty tokens wallet_       : 0xD1BC33B2c89C93E65b0D476B8b50BFee82594847
* _Contract manager_           : 0x25803D4325EbC33CCF779FF16a23d6CF9543e559
* _ETH Wallets_                : 0x6507628aE29E89666cA9df7fabB532480be0Ce79

_Milestones_

1. 1 days                     : discount 30%
2. 1 days                     : discount 20%
3. 1 days                     : discount 10%
3. 1 days                     : no discount

### Test audit

#### Investors
*  0.1 ether => ~  714 tokens, discount 30%, gas = 128702 : https://ropsten.etherscan.io/tx/0xfc5a3d71b52f46dc6a7f197ad0ccd5227f1b222971194b39473158f846e7db36
*  1.2 ether => ~ 8571 tokens, discount 30%, gas =  97184 : https://ropsten.etherscan.io/tx/0x95de28d940d1a0da53128f15eda07b0611154c709bb086e45ca8792905133f65
* 1.08 ether => ~ 7714 tokens, discount 30%, gas =  97184 : https://ropsten.etherscan.io/tx/0x238b4b25a5ca87218354c5f35305705c28d1eec4c013b573cd9f237f0c620319
* 0.1  ether => ~  625 tokens, discount 20%, gas =  74271 : https://ropsten.etherscan.io/tx/0xc144131b515c5d05ff4cac1c32e9d1d6fbfce79ae4390d89782ecc95edb20d74
* 0.1  ether => ~  625 tokens, discount 20%, gas =  74271 : https://ropsten.etherscan.io/tx/0xc33e7baadcd95ce565957511b1d77687f674e9d0c8811c304d7eb581a0f406ac

##### ITO

##### Service operations
* ITO finishMinting:

#### Transfer tokens transactions
* Reject transfer tokens during ITO: https://ropsten.etherscan.io/tx/0x3490bd9779afa19484a4076c9134aca900321bd45109d5c9024cfee0fc2939e2

## Ropsten network configuration 2

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### Links
* _Token_ - https://ropsten.etherscan.io/token/0x208db9db6a0bf8587bffd70c1fda66079d8f94d8
* _ITO_ - https://ropsten.etherscan.io/address/0x88a6506b6953ac11105954400171e202aad3360c

### ITO
* _Hardcap_                    : 114000 ETH
* _Invested limit to KYC lock  : 1 ETH
* _Bounty_                     : 5% of total tokens
* _Founders_                   : 15% of total tokens
* _Start_                      : 06 Dec 2017 13:00:00 GMT
* _Founders tokens wallet_     : 0x54a67F1507dEb1BFc58ba3ffa94B59fC50EB74BC
* _Bounty tokens wallet_       : 0xD1BC33B2c89C93E65b0D476B8b50BFee82594847
* _Contract manager_           : 0x25803D4325EbC33CCF779FF16a23d6CF9543e559
* _ETH Wallets_                : 0x6507628aE29E89666cA9df7fabB532480be0Ce79

_Milestones_

1. 1 days                     : no discount

### Test audit

#### Investors
*  0.1 ether => ~  500 tokens, discount 0%, gas = 101344 : https://ropsten.etherscan.io/tx/0xbe89dcd6cc16916eb4b76f3ba89440604ad4bf4a21406316cb6817dba3bc6591
*  1.1 ether => ~ 5500 tokens, discount 0%, gas =  94826 : https://ropsten.etherscan.io/tx/0xe45172046b797c6165bec6b93d7e554ea809ff6df87cc54720c022ae48866a5a

##### ITO

##### Service operations
* ITO finishMinting, gas 110559: https://ropsten.etherscan.io/tx/0xbc32351d825918a8334630a4a0b0b975a8d932ba1774522dcd015abbea2e4a2d
* Unlock address 0x58d68B183eE257fFc8C9EC85F138f0D204eeF303, gas 28727: https://ropsten.etherscan.io/tx/0x49a1a0aaae5509e70dea7056386e695f7a17febad13f392645fa196071b25c87

#### Transfer tokens transactions
* Transfer from locked address rejected, gas limit 200 000: https://ropsten.etherscan.io/tx/0x9ec56ba928e06e129ffe273b0c9d4ca8e812b40bdde0e37b277d3a2977721105
* Transfer from not locked address, gas 53303: https://ropsten.etherscan.io/tx/0xb73fb0d6443d7f283efc3e9f8bb273bc9ddfb4108d842b43b0204c4ac31e1654
* Transfer after unlock, gas 38 303: https://ropsten.etherscan.io/tx/0x3cc577509ef88991db0ab3c7155ff34fb96091dce15632d3c908a1b8cb2fdf74


