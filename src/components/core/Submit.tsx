export type SubmitProps = {
  value: string;
  disabled?: boolean;
};
export default function Submit(props: SubmitProps) {
  return (
    <input
      className="hover:bg-text p-3 enabled:bg-text enabled:text-white hover:text-white font-bold rounded cursor-pointer text-text bg-white border border-text"
      type="submit"
      disabled={props.disabled}
      value={props.value}
    />
  );
}
