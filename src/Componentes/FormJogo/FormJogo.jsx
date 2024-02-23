import React, { useState } from "react";
import "./styles.css";

const FormJogo = ({ gameId, categorias, method }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: categorias && categorias.length > 0 ? categorias[0]._id : "",
    description: "",
    url: "",
    imageURL: "",
    videoURL: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("accessToken");

    let URL = "https://api-best-browser-games.vercel.app/games";

    if (method === "PUT") {
      URL = `https://api-best-browser-games.vercel.app/games/${gameId}`;
    }

    try {
      const response = await fetch(URL, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Dados enviados com sucesso!");
      } else {
        alert("Erro ao modificar categoria");
        throw new Error("Erro ao enviar dados");
      }

      setFormData({
        name: "",
        category: categorias.length > 0 ? categorias[0]._id : "",
        description: "",
        url: "",
        imageURL: "",
        videoURL: "",
      });
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar dados. Verifique o console para mais detalhes.");
    }
  };

  return (
    <form className="form-jogo" onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={formData.name}
          id="name"
          name="name"
          placeholder="Insira Nome"
          onChange={handleChange}
          rules={{ required: "Insira um nome" }}
        />
      </label>
      <label>
        Categoria:
        <select
          value={formData.category}
          id="category"
          name="category"
          onChange={handleChange}
          rules={{ required: "Escolha uma categoria" }}
        >
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Descrição:
        <textarea
          name="description"
          id="description"
          value={formData.description}
          placeholder="Insira uma descrição"
          minLength={3}
          maxLength={255}
          onChange={handleChange}
          rules={{ required: "Insira uma descrição" }}
        />
      </label>
      <label>
        URL de Acesso ao Jogo:
        <input
          type="text"
          name="url"
          id="url"
          value={formData.url}
          placeholder="Insira a URL"
          onChange={handleChange}
          rules={{ required: "Insira a URL do jogo" }}
        />
      </label>
      <label>
        URL da Imagem Ilustrativa:
        <input
          type="text"
          name="imageURL"
          id="imageURL"
          value={formData.imageURL}
          placeholder="Insira a URL da imagem"
          onChange={handleChange}
          rules={{ required: "Insira a URL da imagem" }}
        />
      </label>
      <label>
        URL do Vídeo de Demonstração:
        <input
          type="text"
          name="videoURL"
          id="videoURL"
          value={formData.videoURL}
          placeholder="Insira a URL do video (opcional)"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormJogo;
