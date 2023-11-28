import { SocketClient } from '../client/socket/socket-client'

import { Message } from '../types/message'
import { useEffect, useRef } from 'react'

export const useSocket = (event: string, callback?: (...args: Array<any>) => void) => {
  useEffect(() => {
    if (callback) {
      SocketClient.on(event, callback)

      return () => {
        SocketClient.off(event, callback)
      }
    }
  }, [])

  const emitEvent = (...args: Array<any>) => SocketClient.emit(event, ...args)

  return [emitEvent]
}
