import { Avatar } from 'components/Avatar'

interface DevitProps {
  devit: Devit
}

export const Devit = ({ devit }: React.PropsWithChildren<DevitProps>) => (
  <>
    <article>
      <div>
        <Avatar alt={devit.username} src={devit.avatar} />
      </div>
      <div>
        <strong>{devit.username}</strong>
        <p>{devit.message}</p>
      </div>
    </article>
    <style jsx>{`
      article {
        border-bottom: 2px solid #eaf7ff;
        display: flex;
        padding: 10px 15px;
      }

      div {
        padding-right: 10px;
      }

      p {
        line-height: 1.315;
        margin: 0;
      }
    `}</style>
  </>
)
