Lyra && Connect-Wallet3
=======================

This is the Lyra SDK Hook for ReactJS and a modified version of connet-wallet2.

The purpose of this coding challenge is to exploit MobileSafari and Chrome on
iOS, Chrome and Samsung Browser on respectively, on Android, to provide an 
easier interface to Coinbase Wallet or MetaMask, or any other Wallet App. 
The Brave Browser is also in scope, the mobile version. It is very likely
that the Brave team would work together with us on this, as they have announced
support for the .crypto domain many years ago, but didn't hold their promise.

As to desktop browsers, the support of window.ethereum injected by any Chrome
derivat such as Microsoft Edge, Brave Browser, Google Chrome should be given.
This is to be tested. There are automatic suites for CrossBrowserTestiing. 
We have used those at Whiteops LLC. 

As to the Lyra SDK ReactJS Hook, Context and AuthenticationProvider, we simply
start with a Global<State> isAuthenticated, and userType as well as sessionID
and accountBalance. 


