export default function InputConta(){
    return(
        <div className="w-full flex justify-between gap-6">
            <div className='w-1/2 flex flex-col gap-1'>
                <label className='text-xs font-bold'>Nome</label>
                <input type="text" className='bg-cinza h-12 rounded w-full px-5 placeholder-white' placeholder='Insira o seu nome'/>
            </div>
            <div className='w-1/2 flex flex-col gap-1'>
                <label className='text-xs font-bold'>Apelido</label>
                <input type="text" className='bg-cinza h-12 rounded w-full px-5 placeholder-white' placeholder='Insira o seu Apelido'/>
            </div>
        </div>
    );
}