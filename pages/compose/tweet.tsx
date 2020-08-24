import { AppLayout } from 'components/AppLayout'
import { Button } from 'components/Button'
import useUser from 'hooks/useUser'
import { useState } from 'react'

export default function ComposeTweet() {
  const user = useUser()
  const [message, setMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <span>{user?.email}</span>
          <textarea
            placeholder='¿Qué está pasando?'
            onChange={handleChange}
            value={message}
          ></textarea>
          <div>
            <Button disabled={message.length === 0}>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }

        textarea {
          box-sizing: border-box;
          border: 0;
          font-size: 21px;
          min-height: 200px;
          padding: 15px;
          outline: 0;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}
