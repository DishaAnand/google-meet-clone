const {useState, useEffect, useRef} = require("react")

const usePeer = () =>{
  const [peer, setPeer] = useState(null)
  const [myId, setmyId] = useState('')
  const isPeerState = useRef(false)

  useEffect(() =>{
    //  if statement prevents the action from being performed multiple times. 
    // want to ensure that certain initialization or side effect code runs only once during the component's lifecycle.
    if(isPeerState.current)return;
    isPeerState.current  = true
    (async function initPeer(){
      //importing here coz we get navigator eeor as nextjs is server based and client side code there is no browser environment
      const myPeer = new (await import('peerjs')).default()
      setPeer(myPeer)

      myPeer.on('open',(id)=>{
        console.log(`your peer id is ${id}`)
        setmyId(id)
      })
    })()
  },[])
  return {peer,myId}
}
export default usePeer;