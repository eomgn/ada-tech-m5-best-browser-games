export default function InputBar(props) {
  const { type, placeholder } = props;
  return <input type={type} placeholder={placeholder} />;
}
