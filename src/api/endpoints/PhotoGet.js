import { useState } from "react";

const PhotoGet = () => {
  const [id, setId] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `https://dogsapi.origamid.dev/json/api/photo/${id}`
    );
    const result = await response.json();
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
