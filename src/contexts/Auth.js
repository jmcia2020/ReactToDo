import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('You forgot AuthProvider!');
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
      //user: { name: 'jmcia' },
      user: null,

      login,
  });

  function login(username, password) {
    console.log({username, password});

    setUser({ name: username });
}

function setUser(user) {
    setState(prevState => ({
        ...prevState, // spread operator
        user,
    }));
}

  return (
      <AuthContext.Provider value={state}>
          {props.children}
      </AuthContext.Provider>
  );
} 

/*
async function login(username, password){
  console.log({username, password}),

  const result = await fetch ('${userAPI}/Login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
  });

  const resultBody = await result.json();

  if (result.ok) {
    return setUser(resultBody);
  }

  // TODO: process validation errors

  logout();
  return false;
}
*/