import { useState } from "react";
import "./styles.css";
import FormJogo from "../FormJogo/FormJogo";

const ItensListaAdm = (props) => {
  const { categories, content, tab } = props;

  const [editingItemId, setEditingItemId] = useState(null);
  const [categoryInput, setCategoryInput] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleDeleteItem = async (itemId) => {
    const token = sessionStorage.getItem("accessToken");

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

    const token = sessionStorage.getItem("accessToken");

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

  const handleDeleteGame = async (itemId) => {
    const token = sessionStorage.getItem("accessToken");

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `https://api-best-browser-games.vercel.app/games/${itemId}`,
        requestOptions
      );
      if (response.ok) {
        alert("Game excluído com sucesso!");
      } else {
        alert("Erro ao excluir game:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao excluir game:", error);
    }
  };

  const renderedCategory = content.map((item) => (
    <div key={item._id} className="item-lista">
      <span className="item-lista-nome">{item.name}</span>
      {tab === "category" ? (
        <div>
          <button
            className="item-adm-botao"
            onClick={() => handleEditarClick(item._id, item.name)}
          >
            Editar
          </button>
          <button
            className="item-adm-botao"
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
      ) : (
        <div>
          <button
            className="item-adm-botao"
            onClick={() => {
              setShowForm(item._id);
            }}
          >
            Editar
          </button>
          <button
            className="item-adm-botao"
            onClick={() => handleDeleteGame(item._id)}
          >
            Excluir
          </button>
          <div>
            {showForm === item._id && (
              <FormJogo
                gameId={item._id}
                categorias={categories}
                method="PUT"
              />
            )}
          </div>
        </div>
      )}
    </div>
  ));
  return <div className="item-lista-container">{renderedCategory}</div>;
};

export default ItensListaAdm;
