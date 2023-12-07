// import TDItemType from "../types/TDItem"

type ToDoListProps={
    // tdItems:TDItemType[];
    tdItems:string[];
}

export default function ToDoList({tdItems}:ToDoListProps):JSX.Element{
    return (
        <>
        {tdItems.map(item=>(<p>{item}</p>))}
        </>
    )
}