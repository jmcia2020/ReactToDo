import { useContext, useState } from 'react';

export const AuthContext = React.createContext();
export function AuthProvider(props) {
  const [state, setState] = useState({
      user: { name: 'Jean' },
  });

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