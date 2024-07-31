import Logo from '../../public/login/Google.svg'
import Image from 'next/image'

interface ButtonGoogleProps{
    texto: string
}

export default function ButtonGoogle({texto}: ButtonGoogleProps){
    return (
        <button className="w-full text-black bg-white rounded font-bold h-12 flex items-center justify-center gap-2">
            <Image src={Logo} alt='logo image' height={20} width={20}/>
            {texto}
        </button>
    )
}