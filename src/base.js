import Rebase from 're-base';
import firebase from 'firebase';


var firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyCIXdJh9j606UTwojei9hYFkvlSrCWjE7E",
   authDomain: "fish-of-the-day-21695.firebaseapp.com",
   databaseURL: "https://fish-of-the-day-21695.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

export default base;