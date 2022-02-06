import { useState } from "react";

const TokenPost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const dadosLogin = { username, password };

    const postUsuario = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosLogin),
      }
    );

    const response = await postUsuario.json();

    if (response.token) setToken(response.token);
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
      <button>Enviar</button>
    </form>
  );
};

export default TokenPost;
