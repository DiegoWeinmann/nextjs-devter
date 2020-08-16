import { useState, useEffect } from 'react'
import { AppLayout } from 'components/AppLayout'
import { Avatar } from 'components/Avatar'

export default function Home() {
  const [timeline, setTimeline] = useState<Timeline>([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then(res => res.json())
      .then(setTimeline)
      .catch(err => {
        alert(err.message)
      })
  }, [])

  return (
    <>
      <AppLayout>
        <div>
          <header>
            <h2>Inicio</h2>
          </header>
          <section>
            {timeline.map(devit => (
              <article key={devit.id}>
                <Avatar alt={devit.username} src={devit.avatar} />
              </article>
            ))}
          </section>
          <nav></nav>
        </div>
      </AppLayout>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          height: 49px;
          position: fixed;
          top: 0;
          border-bottom: 1px solid #ccc;
          width: 100%;
        }

        h2 {
          font-size: 20px;
          font-weight: 800;
        }

        nav {
          height: 49px;
          position: fixed;
          bottom: 0;
          border-top: 1px solid #ccc;
          width: 100%;
        }
      `}</style>
    </>
  )
}
