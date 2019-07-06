import {logs} from "./logs";

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: logs.fireBaseAPIKey,
    authDomain: "motr-plateform.firebaseapp.com",
    databaseURL: "https://motr-plateform.firebaseio.com",
    projectId: "motr-plateform",
    storageBucket: "",
    messagingSenderId: "637030443066",
    appId: "1:637030443066:web:c57d5c67a138c2da"
  }
};
