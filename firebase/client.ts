import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDh8IdLpQoaN2Cu3IK9qkDxqvbUyl2rj24',
  authDomain: 'vue-chat-7bde2.firebaseapp.com',
  databaseURL: 'https://vue-chat-7bde2.firebaseio.com',
  projectId: 'vue-chat-7bde2',
  storageBucket: 'vue-chat-7bde2.appspot.com',
  messagingSenderId: '578255115304',
  appId: '1:578255115304:web:5de28c8340401cd38fd11d',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUser = (user: firebase.User): User => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange: (user: User) => void) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const mappedUser = mapUser(user);
    onChange(mappedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
