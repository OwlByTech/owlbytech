export type CheckboxProps = {
    name: string;
    value: string;
};
export default function Checkbox(props: CheckboxProps) {
    return (
        <div className="flex gap-3">
                <input name={props.name} type="checkbox"/>
                <span>{props.value}</span>
        </div>
    );
}