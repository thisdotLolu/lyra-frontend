TODO
====

@zdanl: I would respectfully request for the following items to be implemented:


[05/01/2023] @keo
- Make AvatarDropdown refresh or reload site after signOut() @keo
- Make Login work with Lyra-API
- Make Signup work with Lyra-API
- Create Custodial Wallet after Github OAuth Signin, Display Address
  in AvatarDropdown.tsx and WalletPage.tsx and Profile.tsx
- Remove the unloggedin Header component despite the connect button
  for performance of compilation
- Remove temporitarily by flag jsuglify from react-compile process
  for performance
- Fix contact page / Impressum
- Add EU cookies notice
- Implement Support Page Ticket System ./containers/PageSupport/PageSupport.tsx

[05/01/2023] Flows
-> Login -> Home

-> Signup -> Subscription -> Home

-> Signout -> Home

-> Wallet -> Withdrawal -> Get Verified -> Withdrawal + Modal-> Wallet
-> Wallet -> Withdrawal -> Modal -> API Request -> Wallet
-> Wallet -> Fund -> Modal -> API Request -> Wallet
-> Wallet -> Regenerate -> Modal -> API Request -> Wallet
