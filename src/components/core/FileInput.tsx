export type FileInputProps = {
  name: string;
  required?: boolean;
};

export default function FileInput(props: FileInputProps) {
  return (
    <input
      name={`${props.name}[]`}
      required={props.required}
      type="file"
      multiple
    />
  );
}
