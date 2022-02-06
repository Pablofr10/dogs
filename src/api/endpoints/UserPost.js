import React, { useState } from "react";

const UserPost = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const dadosLogin = { username, email, password };

    const postUsuario = await fetch(
      "https://dogsapi.origamid.dev/json/api/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosLogin),
      }
    );

    const response = await postUsuario.json();

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        required
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        required
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
