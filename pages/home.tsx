import { useState, useEffect } from 'react'
import { AppLayout } from 'components/AppLayout'
import { Devit } from 'components/Devit'
import useUser from 'hooks/useUser'

export default function Home() {
  const [timeline, setTimeline] = useState<Timeline>([])
  const user = useUser()

  useEffect(() => {
    user &&
      fetch('/api/statuses/home_timeline')
        .then(res => res.json())
        .then(setTimeline)
        .catch(err => {
          alert(err.message)
        })
  }, [user])

  return (
    <>
      <AppLayout>
        <div>
          <header>
            <h2>Inicio</h2>
          </header>
          <section>
            {timeline.map(devit => (
              <Devit key={devit.id} devit={devit} />
            ))}
          </section>
          <nav></nav>
        </div>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 20px;
          font-weight: 800;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}
