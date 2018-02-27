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

After crowdsale contract manager must call:
1. finishITO 
2. Process mint extended tokens (setExtendedPercent, payExtraTokens)
3. Finish token operations

### How to purchase
To purchase tokens purchaser should send ETH (more than minimum 0.1 ETH) to corresponding crowdsale contract.
Recommended GAS: 250000, GAS PRICE - 40 Gwei.

### Wallets with ERC20 support
1. MyEtherWallet - https://www.myetherwallet.com/
2. Parity 
3. Mist/Ethereum wallet

EXODUS not support ERC20, but have way to export key into MyEtherWallet - http://support.exodus.io/article/128-how-do-i-receive-unsupported-erc20-tokens

Purchaser must not use other wallets, coinmarkets or stocks. Can lose money.

## Main network configuration

* _Base price_                 : 50000 GO per ETH
* _Minimal insvested limit_    : 1 ETH
* _Maximum non-locked tokens purchase limit_  : 10 ETH

### Links
* _Token_ - https://etherscan.io/token/0x849de371420b4e1002418b93d7dca95472ba04b6
* _ITO_ - https://etherscan.io/address/0x90374ebf6a15e4fdf99d00e9e783cb6183b44272

### ITO
* _Hardcap_                    : 54000 ETH
* _Bounty_                     : 5% of total tokens
* _Founders_                   : 15% of total tokens
* _Start_                      : 06.03.2018 13:00:00 GMT 
* _Founders tokens wallet_     : 0x76A13d4F571107f363FF253E80706DAcE889aDED
* _Bounty tokens wallet_       : 0x38e4f2A7625A391bFE59D6ac74b26D8556d6361E
* _Contract manager_           : 0xC4ecaF5986c88C752bf6E73C1b48b251c2125700
* _ETH Wallets_                : 0x727436A7E7B836f3AB8d1caF475fAfEaeb25Ff27

_Milestones_

1. 7 days                     : discount 30%
2. 21 days                     : discount 15%
3. 56 days                     : discount 0%

## Ropsten network configuration 1 (old code, lock/unclock actually test)

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### Links
* _Token_ - https://ropsten.etherscan.io/token/0x208db9db6a0bf8587bffd70c1fda66079d8f94d8
* _ITO_ - https://ropsten.etherscan.io/address/0x88a6506b6953ac11105954400171e202aad3360c

### ITO
* _Hardcap_                    : 114000 ETH
* _Purchased limit to KYC lock_  : 1 ETH
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

#### Purchasers
*  0.1 ether => ~  500 tokens, discount 0%, gas = 101344 : https://ropsten.etherscan.io/tx/0xbe89dcd6cc16916eb4b76f3ba89440604ad4bf4a21406316cb6817dba3bc6591
*  1.1 ether => ~ 5500 tokens, discount 0%, gas =  94826 : https://ropsten.etherscan.io/tx/0xe45172046b797c6165bec6b93d7e554ea809ff6df87cc54720c022ae48866a5a

##### Service operations
* ITO finishMinting, gas 110559: https://ropsten.etherscan.io/tx/0xbc32351d825918a8334630a4a0b0b975a8d932ba1774522dcd015abbea2e4a2d
* Unlock address 0x58d68B183eE257fFc8C9EC85F138f0D204eeF303, gas 28727: https://ropsten.etherscan.io/tx/0x49a1a0aaae5509e70dea7056386e695f7a17febad13f392645fa196071b25c87
* Set extra tokens 50%: https://ropsten.etherscan.io/tx/0xb01c495be2543739dc68d6f47673f6e1f2f07f9121df8c13ce73100a5de611e8

#### Transfer tokens transactions
* Transfer from locked address rejected, gas limit 200 000: https://ropsten.etherscan.io/tx/0x9ec56ba928e06e129ffe273b0c9d4ca8e812b40bdde0e37b277d3a2977721105
* Transfer from not locked address, gas 53303: https://ropsten.etherscan.io/tx/0xb73fb0d6443d7f283efc3e9f8bb273bc9ddfb4108d842b43b0204c4ac31e1654
* Transfer after unlock, gas 38 303: https://ropsten.etherscan.io/tx/0x3cc577509ef88991db0ab3c7155ff34fb96091dce15632d3c908a1b8cb2fdf74

## Ropsten network configuration 2 (old code)

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### Links
* _Token_ - https://ropsten.etherscan.io/token/0x438fad0f5e8cde6145376dfb7bdee699eb07e9c7
* _ITO_ - https://ropsten.etherscan.io/address/0x003fcf22b4e267493ce5b9cc830a8b19f979167a

### ITO
* _Hardcap_                    : 114000 ETH
* _Purchased limit to KYC lock_ : 1 ETH
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

#### Purchasers
*  0.1 ether => ~  714 tokens, discount 30%, gas = 128702 : https://ropsten.etherscan.io/tx/0xfc5a3d71b52f46dc6a7f197ad0ccd5227f1b222971194b39473158f846e7db36
*  1.2 ether => ~ 8571 tokens, discount 30%, gas =  97184 : https://ropsten.etherscan.io/tx/0x95de28d940d1a0da53128f15eda07b0611154c709bb086e45ca8792905133f65
* 1.08 ether => ~ 7714 tokens, discount 30%, gas =  97184 : https://ropsten.etherscan.io/tx/0x238b4b25a5ca87218354c5f35305705c28d1eec4c013b573cd9f237f0c620319
* 0.1  ether => ~  625 tokens, discount 20%, gas =  74271 : https://ropsten.etherscan.io/tx/0xc144131b515c5d05ff4cac1c32e9d1d6fbfce79ae4390d89782ecc95edb20d74
* 0.1  ether => ~  625 tokens, discount 20%, gas =  74271 : https://ropsten.etherscan.io/tx/0xc33e7baadcd95ce565957511b1d77687f674e9d0c8811c304d7eb581a0f406ac

#### Service operations
* ITO finishMinting:

#### Transfer tokens transactions
* Reject transfer tokens during ITO: https://ropsten.etherscan.io/tx/0x3490bd9779afa19484a4076c9134aca900321bd45109d5c9024cfee0fc2939e2

## Ropsten network configuration 3

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### Links
* _Token_ - https://ropsten.etherscan.io/token/0x208db9db6a0bf8587bffd70c1fda66079d8f94d8
* _ITO_ - https://ropsten.etherscan.io/address/0x88a6506b6953ac11105954400171e202aad3360c

### ITO
* _Hardcap_                    : 114000 ETH
* _Purchased limit to KYC lock_ : 1 ETH
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

#### Purchasers
*  0.1 ether => ~  500 tokens, discount 0%, gas = 101344 : https://ropsten.etherscan.io/tx/0xbe89dcd6cc16916eb4b76f3ba89440604ad4bf4a21406316cb6817dba3bc6591
*  1.1 ether => ~ 5500 tokens, discount 0%, gas =  94826 : https://ropsten.etherscan.io/tx/0xe45172046b797c6165bec6b93d7e554ea809ff6df87cc54720c022ae48866a5a

#### Service operations
* ITO finishMinting, gas 110559: https://ropsten.etherscan.io/tx/0xbc32351d825918a8334630a4a0b0b975a8d932ba1774522dcd015abbea2e4a2d
* Unlock address 0x58d68B183eE257fFc8C9EC85F138f0D204eeF303, gas 28727: https://ropsten.etherscan.io/tx/0x49a1a0aaae5509e70dea7056386e695f7a17febad13f392645fa196071b25c87
* Set extra tokens 50%: https://ropsten.etherscan.io/tx/0xb01c495be2543739dc68d6f47673f6e1f2f07f9121df8c13ce73100a5de611e8

#### Transfer tokens transactions
* Transfer from locked address rejected, gas limit 200 000: https://ropsten.etherscan.io/tx/0x9ec56ba928e06e129ffe273b0c9d4ca8e812b40bdde0e37b277d3a2977721105
* Transfer from not locked address, gas 53303: https://ropsten.etherscan.io/tx/0xb73fb0d6443d7f283efc3e9f8bb273bc9ddfb4108d842b43b0204c4ac31e1654
* Transfer after unlock, gas 38 303: https://ropsten.etherscan.io/tx/0x3cc577509ef88991db0ab3c7155ff34fb96091dce15632d3c908a1b8cb2fdf74

## Ropsten network configuration 3 (base code for production)

* _Base price_                 : 5000 GO per ETH
* _Minimal insvested limit_    : 0.1 ETH

### Links
* _Token_ - https://ropsten.etherscan.io/token/0x305a625034771caef331193e59bbcbec53b9f89f
* _ITO_ - https://ropsten.etherscan.io/address/0xca9efde2de35001c8465df5b5bd3cc4151fce4ba

### ITO
* _Hardcap_                    : 114000 ETH
* _Purchased limit to KYC lock_ : 1 ETH
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

#### Purchasers
* 0.2 ETH, 145104 gas, 1000 GO - https://ropsten.etherscan.io/tx/0x2bdf66a2c6fd2edda9459b53c773bb27eaa48b09079a1960872c28afc43590f3
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0x4d10a9378c33a5b3340ea4231d0d985dad26c95cdd3d1aba7c09b02c9851e29b
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0x1676928bf428682895f7162b82434b18628bc132c7e5dad904e47b447eb96540
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0x38ea9ced418b7fe6d0203ba8b3b32da95494a4cc7930b77d169efc51defc0d16
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0xb3ab4b215a3551e1871275d06c2d7c94f121b01b3643e19447b06ddde57053a9
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0x284c8942f14139118eea8a74eb26b9e0f7d721de43e72ac4c641aeeba6cf0dca
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0x8543d00e6cdaf578e1e2fe728f7c9c140d4ac799eae564b7277107eef7b73bd3
* 0.1 ETH, 100281 gas,  500 GO - https://ropsten.etherscan.io/tx/0x2fbc903cc62261391db1b4eb27f3df8f5c590bc4cbca015f283f42f3d0c89e45

#### Service operations
* finish ITO, 169508 gas - https://ropsten.etherscan.io/tx/0xb4b76adc7dec851344d62a0c12c4f7503ea4cdc18bec4c403ec9553a4ec55c5e
* set extra tokens percent, 42762 gas - https://ropsten.etherscan.io/tx/0xb88d30c5f36889a2f9c6ccaec2aaefb29208c080e335ba3ef9b9e366699be64f
* pay extra tokens 1 (5 token holders), 331026 gas - https://ropsten.etherscan.io/tx/0x41039a59279cc2b5287fe4429fc43fba417c092c7d0d6daf0a9c3ac3710ad078
* pay extra tokens 2 (4 token holders, actually 5), 257574 gas - https://ropsten.etherscan.io/tx/0x3ef106947fc7ace787e7486c13a557b41da712bf3975b97bc33b64eb8da20461
* pay extra tokens 3 (3 token holders, actually 1), 257574 gas - https://ropsten.etherscan.io/tx/0x23f78c7b407b23cf0af289f2bcd0f88f21a3852cd6a7c72b3594496925f8e7f1
* Reject pay extra tokens (already payed to all) - https://ropsten.etherscan.io/tx/0x9a1a1293d03861cc312415e951a26e36af034c058af3b623992ccdd5e79512e3
* Reject finish ITO (already finished and extra tokens payed) - https://ropsten.etherscan.io/tx/0x76640fdb0e42d2ba938711b3ea29598330c2a9d7a410a7ed3e0377c98ba396f2
* Finish token operations, 41535 gas - https://ropsten.etherscan.io/tx/0x61a46fff40020fee9e4f87be749bd1f18cdfd4800a5a3a5ad3fb638b71a4bbff

#### Transfer tokens transactions
* 53239 gas, https://ropsten.etherscan.io/tx/0xcb5b55b3d421f48108bb3304436c497153826655a688c08fef13a791c8b439aa


