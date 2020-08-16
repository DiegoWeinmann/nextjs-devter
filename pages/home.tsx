import { useState, useEffect } from 'react'
import { AppLayout } from 'components/AppLayout'
import { Devit } from 'components/Devit'

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
              <Devit key={devit.id} devit={devit} />
            ))}
          </section>
          <nav></nav>
        </div>
      </AppLayout>
      <style jsx>{`
        div {
          padding-top: 49px;
          padding-bottom: 49px;
          height: 100%;
        }

        header {
          display: flex;
          align-items: center;
          height: 49px;
          position: sticky;
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
          position: absolute;
          bottom: 0;
          border-top: 1px solid #ccc;
          width: 100%;
        }
      `}</style>
    </>
  )
}
