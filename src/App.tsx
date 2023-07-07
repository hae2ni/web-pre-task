import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
import "./firebase-messaging-sw.js";
// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDNyoLsnDzmay7XS2uB_CIIwuKGx26ZeRk",
//   authDomain: "pre-gwasuoneshot.firebaseapp.com",
//   projectId: "pre-gwasuoneshot",
//   storageBucket: "pre-gwasuoneshot.appspot.com",
//   messagingSenderId: "137792399262",
//   appId: "1:137792399262:web:9674770e2ca7cb6212988f",
//   measurementId: "G-T2QDBQ3LHT",
// };

// const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}
