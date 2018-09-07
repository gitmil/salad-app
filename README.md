# salad-app
# Requirements. 
 User
  - Ability to register ( will need approval from admin )
  - Ability to Login with personal email - facebook etc 
  - Ability to check-in/uncheck-in and check out daily.(configurable to  M, W, T, F) 
  - Ability to set preferences (avoid certain ingredients ,  alergies, preferences ect )
  - Ability to pay for the weekly due via paypaly, venmo or other 
  - Ability to see payment history and check-in history 
  - Ability to receive notification for dues, check-in reminder. 
  Admin
  - Ability to Approve/Remove users
  - Ability to manage grocery list
  - Ability to predict future grocery purchase  ( using ML by google's tenserflow )
  - Ability to see payment history of all the users. 
  - Ability to configure the settings (?) 
  
  Tooling and more
  - Backend 
    - Firebase with GraphQL 
   - Frontend
      - (Redux && ( Redux-thunk || redux-saga )) || (Apollo Client && context-api)
      - React-router || react-navigator
      - Jest && Enzyme && JSON-Server && (Detox || Nightmare) 
      - Flow || TypeScript 
      
  Data Model 
    User -> Payments
         -> Preferences
        
    History -> Date -> List of checked-in 
    
  
  
  
  
