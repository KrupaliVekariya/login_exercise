// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { UserRole } from "../app/service/auth.roles";
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCWkxjEyr8j4CycFmaMN2y8kwqbMzQFpDY",
    authDomain: "groceryshop-d8a87.firebaseapp.com",
    databaseURL: "https://groceryshop-d8a87-default-rtdb.firebaseio.com",
    projectId: "groceryshop-d8a87",
    storageBucket: "groceryshop-d8a87.appspot.com",
    messagingSenderId: "933359522781",
    appId: "1:933359522781:web:241db4be6b22a5f1b69c34"
  },
  adminRoot: '/admin',
  ownerRoot: '/owner',
  customerRoot:'/customer',
  isAuthGuardActive: true,
  defaultRole:  sessionStorage.getItem('role') != 'admin' ? UserRole.owner : sessionStorage.getItem('role')!= 'owner' ? UserRole.customer:UserRole.admin, 

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
