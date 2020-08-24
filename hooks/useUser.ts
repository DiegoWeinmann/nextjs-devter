import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/client'

export const USER_STATES: UserStates = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser(): User | null {
  const [user, setUser] = useState<User | null | undefined>(
    USER_STATES.NOT_LOGGED
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser)
    return () => {
      unsubscribe()
    }
  }, [])

  return user
}
