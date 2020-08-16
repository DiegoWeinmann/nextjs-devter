import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AppLayout } from 'components/AppLayout'
import { DevterIcon } from 'components/Icons/DevterIcon'
import { Button } from 'components/Button'
import { colors } from 'styles/theme'

import { loginWithGithub, onAuthStateChanged } from 'firebase/client'
import { Avatar } from 'components/Avatar'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const handleClick = () => {
    loginWithGithub()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user => {
      setUser(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <AppLayout>
        <section>
          <DevterIcon />
          <h1>devter</h1>
          <h2>Talk about development with developers 🙂🙂</h2>
          {!user && (
            <Button onClick={handleClick}>
              <FaGithub color='#fff' />
              Login with Github
            </Button>
          )}
          {user && user.avatar && (
            <div className='avatar'>
              <Avatar
                src={user.avatar}
                alt={user.username}
                text={user.email}
                withText
              />
            </div>
          )}
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 18px;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}
