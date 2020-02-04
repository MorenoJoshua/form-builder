import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCqkPeOqY3sYDB-6hV3OWoWJt5BTJLhEoQ",
  authDomain: "autoayuda-b8aa6.firebaseapp.com",
  databaseURL: "https://autoayuda-b8aa6.firebaseio.com",
  projectId: "autoayuda-b8aa6",
  storageBucket: "autoayuda-b8aa6.appspot.com",
  messagingSenderId: "156295260661",
  appId: "1:156295260661:web:ce15e2782c1575163d58bc"
};
const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

const submitForm = async formData => {
  return firestore
    .collection("mail")
    .doc()
    .set({
      to: ["joshua200128@gmail.com"],
      message: {
        subject: `Solicitud ${formData.nombre}, - \$${formData['work.ingreso']}`,
        text: JSON.stringify(formData, null, 2),
        html: `<pre>${JSON.stringify(formData, null, 2)}</pre>`
      }
    });
};

export {
  submitForm
}