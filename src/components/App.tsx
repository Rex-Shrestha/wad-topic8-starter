export default function App() {
    return <h1>Rex</h1>;
}
import { useState, useEffect } from "react";

const [username , setUsername] = useState<string | null>(null);
const [inputUser, setInputUser] = useState("")
const [inputPass, setInputPass] = useState("")

const login = async () => {
  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    credentials: "include",
    body: JSON.stringify({
      username: inputUser,
      password: inputPass,
    }),
  });
  if (res.status === 200) {
    const data = await res.json();
    setUsername(data.username);
  } else {
    alert("Login failed");
    setUsername(null);
  }
};