import { Color, ContentCard, ContentTextArea, InputContentCard, Lixeira, StyleDireita, StyleEsquerda, StyleEdit, EspaçoTitle, EspaçoText, StyleCancel, StyleSalvar } from "./Card"
import DIREITA from '../assets/direita.svg'
import ESQUERDA from '../assets/esquerda.svg'
import  lixo  from '../assets/lixo.svg'
import PEN from '../assets/pen.svg'
import CANCEL from '../assets/cancel.svg'
import salvar from '../assets/salvar.svg'
import {  CardProps } from "./App"
import {  ChangeEvent, useState } from 'react'
import { NewTaskProps } from './tasks'


type Props = {
    task: CardProps
    moveToRight?: (task: CardProps) => void
    deleteCard: (task: CardProps) => void
    updateTask: (task: CardProps) => void
    moveToLeft?: (task: CardProps) => void
}

 export const CardItem = ({task, deleteCard, moveToRight, updateTask, moveToLeft}: Props) => {
    const [showEditableTask, setShowEditableTask] = useState(false)
    const [card, setCard] = useState<NewTaskProps>({
    title: task.title,
    text: task.text
  })


  const handleSave = (): void => {
    updateTask({
      id: task.id,
      status: task.status,
      title: card.title,
      text: card.text
    })
    setShowEditableTask(false)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target

    setCard(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  const handleCancel = () => {
    setShowEditableTask(false)
    setCard({
      title: task.title,
      text: task.text
    })
  }

  return (
    <ContentCard key={task.id}>
      {showEditableTask ? (
      <>
      <InputContentCard {...{maxLength: 17}} placeholder="Título" name="title" value={card.title} onChange={handleChange}/>
      <ContentTextArea {...{maxLength: 260}} placeholder="Conteúdo" name="text" value={card.text} onChange={handleChange} as="textarea"/>
      <StyleCancel onClick={() => handleCancel()}><img src={CANCEL}/>Cancelar</StyleCancel>
      <StyleSalvar onClick={() => handleSave()}>Salvar<img src={salvar}/></StyleSalvar>
      </>
      ) : (
      <>
       <StyleEdit><img src={PEN} onClick={() => setShowEditableTask(true)}/></StyleEdit>
       <EspaçoTitle><h2><u>{task.title}</u></h2></EspaçoTitle>
        <EspaçoText><p>{task.text}</p></EspaçoText>
        <Color>
        {moveToLeft && <StyleEsquerda><img src={ESQUERDA} onClick={() => moveToLeft(task)}/></StyleEsquerda>}
        <br/>
        <Lixeira><img src={lixo} onClick={() => deleteCard(task)} /></Lixeira>
        <br/>
        {moveToRight && <StyleDireita><img src={DIREITA}  onClick={() => moveToRight(task)}/></StyleDireita>}
        </Color>
      </>
      )}
    </ContentCard>
  )
}