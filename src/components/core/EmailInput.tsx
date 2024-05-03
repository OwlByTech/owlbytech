export type EmailInputProps = {
  placeholder: string;
  label?: string;
  name: string;
  required?: boolean;
};

export default function EmailInput(props: EmailInputProps) {
  return (
    <input
      type="email"
      className="p-3 border border-text rounded-md"
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}
