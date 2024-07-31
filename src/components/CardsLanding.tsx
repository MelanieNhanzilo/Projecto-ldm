import Card from './Card'


export default function CardsLanding() {

    return(
        <>
        <div className='grid grid-cols-2 justify-items-start'>
        <Card
        title={"Tipologia"}
        description={"Layout interno do edifício em termos de número de quartos ou funções."}
        />
        <Card
        title={"Sistema de aquecimento"}
        description={"Sistema de aquecimento utilizado no edifício."}
        />
      </div>
      <div className='grid grid-cols-2 justify-items-end'>
        <Card
        title={"ESTILO DE ARQUITETURA"}
        description={"Estilo arquitetônico desejado para o projeto."}
        />
        <Card
        title={"FUNDAÇÕES"}
        description={"Tipo de fundações utilizadas para a sustentação do edifício."}
        />
      </div>
      <div className='grid grid-cols-2 justify-items-start'>
        <Card
        title={"INSTALAÇÕES ELECTRICAS"}
        description={"Especificações sobre as instalações elétricas do edifício."}
        />
        <Card
        title={"TIPO DE PAVIMENTO"}
        description={"Material utilizado para revestir o piso do edifício."}
        />
      </div>
        </>
    )
}