export type SubmitProps = {
  value: string;
};
export default function Submit(props: SubmitProps) {
  return (
    <input
      className="hover:bg-text p-3 hover:text-white font-bold rounded cursor-pointer text-text bg-white border border-text"
      type="submit"
      value={props.value}
    />
  );
}
