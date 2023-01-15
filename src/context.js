import React,{useContext,useEffect, useState} from "react"
const AppContext = React.createContext()
export  const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
// now need provider
const AppProvider = ({children})=>{
    const [isLoading,setIsloading] =useState(true)
    const [movie,setMovie] =useState([])
    const[iserror, setIserror] = useState({
        show:true,msg:""
    })
    const [query, setQuery] = useState("avengers")


const getMovies=  async(url)=>{
    setIsloading(true)
    try{
        const res= await fetch(url)
        const data =await res.json()
        console.log(data);
        if(data.Response==="True"){
            setIsloading(false)
            setIserror({
                show:false,
                msg:""
            })
            setMovie(data.Search)
        }
        else{
            setIserror({
                show:true,
                msg:data.Error
            })
        }
        
    }
    catch (error){
        console.log(error);
    }
}
useEffect(() => {
  let timerOut =  setTimeout(()=>{
        getMovies(`${API_URL}&s=${query}`)
    },800)
    return ()=>clearTimeout(timerOut)
}, [query])


    return<AppContext.Provider value={{isLoading,iserror,movie,query, setQuery}}>
        {children}
    </AppContext.Provider>
}
// Global Custome 
const useGlobalContext = ()=>{
    return  useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}