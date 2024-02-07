import DropdownOption from "./DropdownOption";

export default function Dropdown(props) {
  const { name, id } = props;
  return (
    <select name={name} id={id}>
      <DropdownOption value="RPG" />
      <DropdownOption value="Shooter" />
      <DropdownOption value="Sport" />
    </select>
  );
}
