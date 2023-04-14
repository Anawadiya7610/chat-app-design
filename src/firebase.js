import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5hRpOokL9h9HWTyctlBS0phxf11JMQa4",
  authDomain: "chat-18951.firebaseapp.com",
  projectId: "chat-18951",
  storageBucket: "chat-18951.appspot.com",
  messagingSenderId: "616404955207",
  appId: "1:616404955207:web:f1dc8202b146136d4dc162"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();