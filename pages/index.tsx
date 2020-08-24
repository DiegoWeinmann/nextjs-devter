import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaGithub } from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import { AppLayout } from 'components/AppLayout'
import { DevterIcon } from 'components/Icons/DevterIcon'
import { Button } from 'components/Button'
import { colors } from 'styles/theme'

import { loginWithGithub } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'

export default function Home() {
  const user = useUser()
  const router = useRouter()
  const handleClick = () => {
    loginWithGithub()
  }
  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  return (
    <>
      <AppLayout>
        <section>
          <DevterIcon fill={colors.primary} width='300' />
          <h1>devter</h1>
          <h2>Talk about development with developers 🙂🙂</h2>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <FaGithub color='#fff' />
              Login with Github
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && (
            <Loader type='ThreeDots' color={colors.primary} height={80} />
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
          font-size: 2rem;
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
