import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading:true,
 fetchUserInfo:async(uid)=>{
    if(!uid) return({currentUser:null,isLoading:false});

    try {
        const docRef=doc(db,"users",uid);
        const docSnap= await getDoc(docRef);

        if(docSnap.exists()){
            set({currentUser:docSnap.data(),isLoading:false});
        }else{
            set({currentUser:null,isLoading:false})
    console.log({currentUser});


        }
    } catch (error) {
        console.log(error);
        return({currentUser:null,isLoading:false})
    }
 },
   setCurrentUser: (user) => set({ currentUser: user }),
}))
