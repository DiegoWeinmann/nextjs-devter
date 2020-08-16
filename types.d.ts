declare interface User {
  username: string
  email: string
  avatar: string
}

declare type Profile = {
  avatar_url: string
  blog: string
}

declare type Devit = {
  id: string
  avatar: string
  username: string
  message: string
}

declare type Timeline = Devit[]
