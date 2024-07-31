"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import ModalEstilo from "../../components/ModalEstilo";
import ModalEstrutura from "../../components/ModalEstrutura";
import ModalMaterial from "../../components/ModalMaterial";
import ModalParede from "../../components/ModalParede";

export default function Elementos() {
    const router = useRouter();

    const clique = () => {
        router.push('/');
    }
    console.log(clique);

    const [isModal, setIsModal] = useState(false);
    const [isModalMaterial, setIsModalMaterial] = useState(false);
    const [isModalEstilo, setIsModalEstilo] = useState(false);

    const openModal = () => setIsModal(true);
    const openModalMaterial = () => setIsModalMaterial(true);
    const openModalEstilo = () => setIsModalEstilo(true);

    const closeModal = () => setIsModal(false);
    const closeModalMaterial = () => setIsModalMaterial(false);
    const closeModalEstilo = () => setIsModalEstilo(false);

    return (
        <div className="flex flex-col bg-gradient-to-r from-black to-escuro py-5 space-y-10 w-full items-center">
            <h1 className="uppercase text-white text-xl md:text-2xl">Elementos</h1>
            <div className="grid grid-cols-5 gap-y-8 w-full">
                <Card
                    title={"TIPO DE COBERTURA"}
                    description={"Tipo de cobertura do projeto arquitetônico."}
                    onclick={openModal}
                />
                <Card
                    title={"MATERIAL DE COBERTURA"}
                    description={"Material utilizado para a cobertura do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"PAREDES"}
                    description={"Material utilizado para as paredes do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"ESTRUTURA"}
                    description={"Material utilizado para a estrutura do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"FUNDAÇÕES"}
                    description={"Tipo de fundações utilizadas para a sustentação do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"LOCALIZAÇÃO EM RELAÇÃO AO CENTRO DA CIDADE"}
                    description={"Localização do projeto em relação ao centro da cidade ou em áreas rurais."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"ESTILO DE ARQUITETURA"}
                    description={"Estilo arquitetônico desejado para o projeto."}
                    onclick={openModalEstilo}
                />
                <Card
                    title={"ÁREA DE LOTE"}
                    description={"Área total do terreno destinado ao projeto."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"TIPOLOGIA"}
                    description={"Layout interno do edifício em termos de número de quartos ou funções."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"MATERIAL DE COBERTURA"}
                    description={"Material utilizado para revestir o piso do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"TIPO DE COBERTURA"}
                    description={"Especificações adicionais sobre os acabamentos utilizados."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"SISTEMA DE AQUECIMENTO"}
                    description={"Sistema de aquecimento utilizado no edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"SISTEMA DE REFRIGERAÇÃO"}
                    description={"Sistema de refrigeração utilizado no edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"INSTALAÇÕES ELÉTRICAS"}
                    description={"Especificações sobre as instalações elétricas do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"INSTALAÇÕES HIDRÁULICAS"}
                    description={"Especificações sobre as instalações hidráulicas do edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"INSTALAÇÕES DE SEGURANÇA"}
                    description={"Sistema de segurança instalado no edifício."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"PAISAGISMO"}
                    description={"Elementos paisagísticos incluídos no projeto."}
                    onclick={openModalMaterial}
                />
                <Card
                    title={"OUTROS CRITÉRIOS"}
                    description={"Critérios adicionais a serem considerados na estimativa de custo"}
                    onclick={openModalMaterial}
                />
            </div>

            {isModal && (
                <Modal onClose={closeModal}>
                
                </Modal>
            )}

              {isModalMaterial && (
                <ModalMaterial onClose={closeModalMaterial}>
                
                </ModalMaterial>
            )}
           
        
        </div>
    );
}
