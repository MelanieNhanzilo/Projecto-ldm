interface ButtonProps{
    texto: string
}

export default function Buttons({texto}:ButtonProps){
    
    return (
        <button className="w-full text-black bg-dourado rounded font-bold h-12">
            {texto}
        </button>
    )
}