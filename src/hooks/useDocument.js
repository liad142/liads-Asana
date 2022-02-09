import {useState, useEffect} from "react";
import {projectFirestore} from "../firebase/config";

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)

      const unsubscribe =  ref.onSnapshot((snapshot) => {
          if(snapshot.data()){
              //getting the data from the snapshot with .data() (name of project , assigned users and etc)
              setDocument({...snapshot.data(), id: snapshot.id})
              setError(null)
          }else {
              setError('No document exist')
          }
        },(err) => {
            console.log(err.message, )
            setError('failed to get document,this err message from useDocument hook')
        })
        return () => unsubscribe()



    }, [collection, id])

    return {document,error}
}
