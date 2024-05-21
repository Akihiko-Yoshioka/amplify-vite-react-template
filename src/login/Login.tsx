import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import App from "./App.tsx";

const client = generateClient<Schema>();

function Login() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  return (    
    <Authenticator>
      {({ signOut, user }) => (
      <main>
        <h1>My todoList</h1>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>
        <App />
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
    </Authenticator>
  );
}

export default Login;
