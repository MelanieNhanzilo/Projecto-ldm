'use client'

import LandingImage from '../../public/landing/landing.svg'
import CardsLanding from '../components/CardsLanding'
import Portifolio from '../components/Portifolio'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Landing() {
  const router = useRouter()
  const entrar = () => {
    router.push('/login')
  }
  const novaconta = () => {
    router.push('/signup')
  }
  return (
    <div className="w-full h-full bg-gradient-to-r from-black to-escuro text-white px-20 flex flex-col space-y-10">
      <div className='h-screen flex flex-col justify-center'>
        <div className="flex justify-between items-center">
          <h1 className="text-dourado font-bold text-xl hidden md:flex">LDM</h1>
          <div className="flex gap-6 ">
            <button onClick={entrar} className="h-8 w-24 bg-cinza rounded font-bold text-sm" >Entrar</button>
            <button onClick={novaconta} className="h-8 w-24 bg-white text-black rounded font-bold text-sm" >Criar Conta</button>
          </div>
        </div>
        <div className='flex md:py-10'>
          <div className='w-1/2 flex flex-col justify-evenly'>
            <div className='w-5/6'>
              <h1 className='font-bold md:text-6xl text-3xl'>Transformando com o simples e minimalista</h1>
              <p className='text-xl text-cinza'>Transparência em cada etapa: Gerencie seus preços com clareza e confiança</p>
            </div>
            <button onClick={entrar} className='text-black bg-dourado h-12 w-1/2 rounded font-bold'>Entrar</button>
          </div>
          <div className='w-1/2 md:flex items-end justify-end hidden'>
            <Image src={LandingImage} alt='imagem de landing page'/>           
          </div>
        </div>
    </div>
    <div className="bg-[url('../../public/landing/landing2.svg')] h-screen bg-center space-y-10">
      <h1 className='text-3xl font-bold'>Saiba o preço com base nos seus criterios</h1>
      <CardsLanding/>
    </div>
    <div className='flex flex-col space-y-10'>
      <h1 className='text-3xl font-bold'>Portifolio</h1>
      <Portifolio/>
    </div>
    <div className='space-y-10'>
      <h1 className='text-3xl font-bold'>Quem somos nós?</h1>
      <p className='text-xl'>A LDM ARQUITECTOS LDA, também conhecida como Line Design Minimalist Arquitectos LDA, é uma empresa moçambicana fundada por jovens empreendedores em 2018. Especializada em arquitetura, paisagismo e design de interiores, destaca-se pela excelência em design arquitetônico e compromisso com a sustentabilidade. Reconhecida por criar espaços inovadores que combinam funcionalidade, estética e princípios ambientais.</p>
      <p className='text-xl'>Na arquitetura minimalista, cada linha é uma declaração, cada espaço é uma afirmação e cada elemento é uma escolha deliberada, convergindo para uma expressão poderosa de simplicidade e elegância atemporal</p>
    </div>
  </div>
  )
}