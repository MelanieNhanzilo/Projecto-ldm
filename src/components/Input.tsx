interface InputProps{
    label : string
    placeholder : string
}


export default function Input({label,placeholder}:InputProps){
    return(
        <div className="flex flex-col gap-1">
            <label className="font-bold">{label}</label>
            <input type="text" placeholder={placeholder} className="w-full h-12 rounded bg-cinza  px-5"/>
        </div>
    )
}