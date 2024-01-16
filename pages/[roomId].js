import { useEffect } from 'react'

import { useSocket } from '@/context/socket'
import usePeer from '@/hook/usePeer'

const Room = () =>{
  const socket = useSocket()
  const {peer,myId} = usePeer()
}

export default Room