import { getApps, getApp, initializeApp } from "firebase/app";
import { getReactNativePersistence,initializeAuth,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { onSnapshot,getFirestore,doc,setDoc,getDoc,getDocs,collection,initializeFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyD7lbVBUtOeciOaU19DSngj7ozSffsSYpc",
  authDomain: "prac-15222.firebaseapp.com",
  projectId: "prac-15222",
  storageBucket: "prac-15222.appspot.com",
  messagingSenderId: "98385335221",
  appId: "1:98385335221:web:99c2c0f39f51e2c38f7ffc"
};

  const app_length=getApps().length>0;
  const app=app_length?getApp():initializeApp(firebaseConfig);

  const auth=app.length?
  getAuth(app):
  initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
  })

  export const db=app_length? 
  getFirestore(app):
  initializeFirestore(app,{experimentalForceLongPolling:true});

  export const checkSignIn=()=>getAuth(app).currentUser;

  export const signin=async({email,password})=>{
    const userCredential=await signInWithEmailAndPassword(auth,email,password);
    const user=userCredential?.user;
    const docRef=doc(db,"users",user.uid);
    const docSnap=await getDoc(docRef);
    const userData=docSnap?.data();
    return{uid:user?.uid,accessToken:user?.accessToken,email,...userData}
  }

  export const singup=async({ name, email, password })=>{
    const userCredential=await createUserWithEmailAndPassword(auth,email,password);
    const user = userCredential?.user;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef,{
      name,email,password
    });
    return {  uid: user?.uid, accessToken: user?.accessToken, name, email};
  }

  export const signout=async()=>{
    await auth.signOut();
  }

  export const getActs = async()=>{
    const actsRef=collection(db,"activities");
    const DocsSnap=await getDocs(actsRef);
    const actsData=DocsSnap.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return actsData;
  }
  
