import img1 from '../../public/landing/portifolio/img1.svg'
import img2 from '../../public/landing/portifolio/img2.svg'
import img3 from '../../public/landing/portifolio/img3.svg'
import img4 from '../../public/landing/portifolio/img4.svg'
import Image from 'next/image'

export default function Portifolio() {
    return(
        <div className='grid grid-cols-2 gap-4'>
            
            <Image src={img1} alt='imagem 1'/>
            <Image src={img2} alt='imagem 2'/>
            <Image src={img3} alt='imagem 3'/>
            <Image src={img4} alt='imagem 4'/>
        </div>
    )
}