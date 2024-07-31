import { ReactNode } from 'react';
import Cards from './Cards';

interface ModalProps {
    onClose: () => void;
   
}

export default function Modal({ onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex flex-row items-center justify-center w-30" onClick={onClose}>
            <div className="bg-dourado w-1/2 h-1/2 flex flex-row gap-14 py-10 px-4" onClick={(e) => e.stopPropagation()}>
            <Cards title={"Plana"} description={"Esta e a plana"}/>
            <Cards title={"Inclinada"} description={"Esta é a inclinada"}/>
            <Cards title={"Mista"} description={"Esta é a Mista"}/>
            <Cards title={"Outros"} description={"Escolhe"}/>
            </div>
        </div>
    );
}
