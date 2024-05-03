export type TextInputProps = {
  placeholder: string;
  label?: string;
  name: string;
  required?: boolean;
};

export default function TextInput(props: TextInputProps) {
  return (
    <input
      className="p-3 border border-text rounded-md"
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}
