import InputBar from "./InputBar";
import Dropdown from "./Dropdown";
import Button from "./Button";

export default function SearchSortBar() {
  return (
    <>
      <InputBar type="text" placeholder="Pesquisa" />
      <Dropdown name="category" id="game-category" />
      <Button name="Pesquisar" />
    </>
  );
}
