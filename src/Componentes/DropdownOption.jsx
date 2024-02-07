export default function DropdownOption(props) {
  const { value } = props;
  return <option value={value}>{value}</option>;
}
