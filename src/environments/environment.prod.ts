import { UserRole } from "../app/service/auth.roles";
export const environment = {
  production: true,
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
