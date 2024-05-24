/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile,GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import app from './../../firebase.config';



export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

     
    // create an account
    const createUser=(email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
     }


// 4. Google Signin
const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
 //6. Login with Password
 const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //   2. Update Name
  const updateUserProfile = (name, photoURL) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
  }


  const logout =() => {
    setLoading(true)
    // await removeToken
    return signOut(auth)
  }

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log("current user---->",currentUser);
      setUser(currentUser)
    //  if(currentUser){
    //     const userInfo ={email: currentUser.email}
    //     axios.post('https://sodium-cafe-mongoose.onrender.com/jwt',userInfo)
    //     .then( (response)=> {
    //     //   console.log(response.data.token);
    //       if(response.data.token){
    //         localStorage.setItem("access-token", response.data.token)
    //       }
    //     })
        
    //  }
    //  else{
    //     localStorage.removeItem("access-token")
    //  }
      setLoading(false)
    })

    return () => {
        //this part will execute once the component is unmounted.
       return unsubscribe()
      }
    }, [auth])









  const authInfo={
    user,
    loading,
    setLoading,
    createUser,
    signin,
    logout,
    updateUserProfile,
    signInWithGoogle,
 
   
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider