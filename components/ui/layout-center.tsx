interface CenterItemProps {
    children: React.ReactNode;
}
export default function CenterItem(props:CenterItemProps) {
    return (
        <div className="flex justify-center items-center h-screen">
            {props.children}
        </div>
    )
}