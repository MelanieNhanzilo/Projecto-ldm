interface CardsProps{
    title : string
    description : string
}

export default function Cards({title,description} : CardsProps) {
    return(
        <div className="bg-cinza h-44   sm:w-52 md:w-44 p-4 md:p-6 rounded-lg font-roboto hover:-translate-y-4 ease-in duration-100 border border-escuro">
            <h2 className="text-white text-base md:text-xl uppercase font-bold">{title}</h2>
            <p className="text-dourado text-xs font-semibold">{description}</p>
        </div>
    )
}