import { useState } from "react";
import "./styles.css";

const ItensListaAdm = (props) => {
  const { content } = props;

  const [editingItemId, setEditingItemId] = useState(null);
  const [categoryInput, setCategoryInput] = useState("");

  const handleDeleteItem = async (itemId) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZjNWZjMGU5MjdiODI4MzJjZTczMSIsIm5hbWUiOiJUZXN0ZSBEb3plIiwiZW1haWwiOiJ0ZXN0ZTEyQGdtYWlsLmNvbSIsImJpcnRoRGF0ZSI6IjE5NzAtMDEtMDFUMDg6Mzg6NDEuOTc5WiIsImNvdW50cnkiOiJCcmFzaWwiLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE3MDg1NzA4MjIsImV4cCI6MTcwODY1NzIyMn0.zzMAaCajzPSvuOSu8Wrs6SiQbWGK4YRcbQ4v-8qUa6U";

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `https://api-best-browser-games.vercel.app/categories/${itemId}`,
        requestOptions
      );
      if (response.ok) {
        alert("Categoria excluída com sucesso!");
      } else {
        alert("Erro ao excluir categoria:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
    }
  };

  const handleEditarClick = (itemId, itemName) => {
    setEditingItemId(itemId);
    setCategoryInput(itemName);
  };

  const handleInputCategory = (event) => {
    setCategoryInput(event.target.value);
  };

  const handleSubmit = async (itemId, event) => {
    event.preventDefault();

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2ZjNWZjMGU5MjdiODI4MzJjZTczMSIsIm5hbWUiOiJUZXN0ZSBEb3plIiwiZW1haWwiOiJ0ZXN0ZTEyQGdtYWlsLmNvbSIsImJpcnRoRGF0ZSI6IjE5NzAtMDEtMDFUMDg6Mzg6NDEuOTc5WiIsImNvdW50cnkiOiJCcmFzaWwiLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE3MDg1NzA4MjIsImV4cCI6MTcwODY1NzIyMn0.zzMAaCajzPSvuOSu8Wrs6SiQbWGK4YRcbQ4v-8qUa6U";

    const data = {
      name: categoryInput,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        `https://api-best-browser-games.vercel.app/categories/${itemId}`,
        requestOptions
      );

      if (response.ok) {
        alert("Categoria modificada com sucesso");
      } else {
        alert("Erro ao modificar categoria");
      }
    } catch (error) {
      console.error("Erro ao modificar categoria", error);
    }

    setEditingItemId(null);
    setCategoryInput("");
  };

  const renderedCategory = content.map((item) => (
    <div key={item._id} className="item-lista">
      <span className="item-lista-nome">{item.name}</span>
      <div>
        <button
          className="item-excluir-botao"
          onClick={() => handleEditarClick(item._id, item.name)}
        >
          Editar
        </button>
        <button
          className="item-excluir-botao"
          onClick={() => handleDeleteItem(item._id)}
        >
          Excluir
        </button>
        <div>
          {editingItemId === item._id && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log(event);
                handleSubmit(item._id, event);
              }}
            >
              <input
                type="text"
                value={categoryInput}
                id="category"
                name="category"
                placeholder="Insira Categoria"
                onChange={handleInputCategory}
                rules={{ required: "Insira uma categoria" }}
              />
              <button type="submit">Alterar</button>
            </form>
          )}
        </div>
      </div>
    </div>
  ));
  return <div className="item-lista-container">{renderedCategory}</div>;
};

export default ItensListaAdm;
