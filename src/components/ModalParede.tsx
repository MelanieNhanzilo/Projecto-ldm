import Cards from "./Cards";


export default function ModalMaterial() {
    return(
        <div className="fixed inset-0 bg-black/60 flex flex-row items-center justify-center w-30">
            <div className="bg-dourado w-3/4 h-1/2 flex flex-row gap-14 py-10 px-4">
            <Cards title={"Laje"} description={"Esta e a plana"}/>
            <Cards title={"Chapa de zinco"} description={"Esta é a inclinada"}/>
            <Cards title={"Translucidas"} description={"Esta é a Mista"}/>
            <Cards title={"Telha"} description={"Escolhe"}/> 
            <Cards title={"Outro"} description={"Escolhe"}/>
           
           
            
          
            </div>
        </div>
    )
}


