export type TextAreaProps = {
    placeholder: string;
    name: string;
}
export default function TextArea (props: TextAreaProps){
  return (
    <textarea 
    className="border h-24 border-text rounded resize-none p-2"
    name={props.name} 
    placeholder={props.placeholder} />
  );
}