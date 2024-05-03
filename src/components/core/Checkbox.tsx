export type CheckboxProps = {
  name: string;
  value: string;
  required?: boolean;
};
export default function Checkbox(props: CheckboxProps) {
  return (
    <div className="flex gap-3">
      <input name={props.name} type="checkbox" required={props.required} />
      <span>{props.value}</span>
    </div>
  );
}
