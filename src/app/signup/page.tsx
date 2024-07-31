'use client'
import InputConta from "../../components/InputConta";
import Input from "../../components/Input";
import Conta from '../../../public/signup/conta.svg'
import ButtonGoogle from "../../components/ButtonGoogle";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SignUp(){
    const router = useRouter()
    const login = () => {
        router.push('/login')
    }
    return (
        <div className="w-full h-screen bg-gradient-to-r from-black to-escuro flex px-5 text-xs text-white">
            <div className='md:w-1/2 w-full md:px-10 flex flex-col items-center justify-center space-y-4'>
                <div className='flex flex-col items-center md:mb-5'>
                    <h1 className="text-dourado text-2xl">Criando Conta</h1>
                    <p className="text-cinza text-xs ">Por favor, insira teus dados</p>
                </div>
                <div className='w-full space-y-4'>
                    <InputConta/>
                    <Input
                    label={"Email"}
                    placeholder={"Insira o seu email"}
                    />
                    <Input
                    label={"Palavra Passe"}
                    placeholder={"Insira a sua palavra passe"}
                    />
                    <Input
                    label={"Confirmar palavra Passe"}
                    placeholder={"Confirme a sua palavra passe"}
                    />
                </div>
                <button onClick={login} className="w-full text-black bg-dourado rounded font-bold h-12">
                    Criar Conta
                </button>
                <p>Voce ja possui uma conta? <Link href="/login" className='text-dourado underline'>Entrar</Link></p>
                <p>Ou</p>
                <ButtonGoogle
                texto={"Criar uma conta com Google"}
                />
                </div>
            <div className='w-1/2 p-10 h-full md:flex items-center justify-center hidden'>
                <Image src={Conta} alt="imagem de conta"/>
            </div>
        </div>
    )
}