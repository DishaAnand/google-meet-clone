import { useContext, useEffect,useState,createContext } from "react"
import {io} from "socket.io-client"


const SocketContext = createContext(null)

export const useSocket =() =>{
  //When you pass SocketContext to useContext, React knows which context to look for in the component tree.
  //identifier that links the provider and consumer of the context value. 
  const socket = useContext(SocketContext)
  //The hook takes the context object as an argument and returns the current context valu
  return socket
}

export const SocketProvider = (props) =>{
  const {children} = props
  const[socket,setSocket] = useState(null)

  useEffect(()=>{
    //initialise web socket connection using the io function from the socket-io-client
    const connection = io()
    //: Once the connection is established and configured, the setSocket function is
    // called to update the state variable socket with the WebSocket instance
    setSocket(connection)
  },[])

  socket?.on('connect_error', async(err)=>{
    console.log("error establishin connection",err)
    await fetch('api/socket')
  })
  return (
    //provider component created by createContext and makes socket accessible to all components
    <SocketContext.Provider value = {socket}>{children}</SocketContext.Provider>
  )
}
