import Cards from "./Cards";
interface ModalEstiloProps {
    onClose: () => void;
   
}


export default function ModalEstilo({onClose}:ModalEstiloProps) {
    return(
        <div className="fixed inset-0 bg-black/60 flex flex-row items-center justify-center w-30" onClick={onClose}>
        <div className="bg-dourado w-1/2 h-1/2 flex flex-row gap-14 py-10 px-4" onClick={(e) => e.stopPropagation()}>
     
        <Cards title={"Minimalista"} description={"Escolha o minimalista"}/>
        <Cards title={"Moderno"} description={"Este e o Moderno"}/>
        <Cards title={"Contemporaneo"} description={"Este e contemporaneo"}/>
        <Cards title={"Estilos Mistos "} description={"Misto"}/> 
        <Cards title={"Outro"} description={"Escolhe"}/>
        
     
        </div>
    </div>
      
    )
}


