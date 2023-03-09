
import { Dispatch, SetStateAction, useState} from 'react'
import {Card, ContentCard, Title, InputContentCard, ContentTextArea, StyleAdd} from'./Card'
import ADD from '../assets/add.svg'
import { CardItem } from './cardItem'

export  type CardProps = {
  id:string;
  title: string;
  text: string;
  status: "to-do" | "doing" | "done";
}


type NewCardProps = {
  setTasks: Dispatch<SetStateAction<CardProps[]>>
}


const NewCard = ({setTasks}: NewCardProps) => {
  const [card, setCard] = useState<CardProps>
  ({title:"", text:"", status:"to-do", id:"newId"})

const addTask = () => {
  setTasks(prevValue => [...prevValue, {
    ...card, id: crypto.randomUUID()
  }])
}

//function renderCards() {
 // return card.map((card, index) => {
 //   return <ContentCard  key={index} title={card.title} content={card.content} />;
 // });
//}


  return(
  <ContentCard>
    <InputContentCard {...{maxLength: 17}} placeholder="Título" onChange={(event)=> setCard((prevValue)=>({
      ...prevValue,
      title: event.target.value
    })) } ></InputContentCard>
    <ContentTextArea {...{maxLength: 260}} placeholder="Conteúdo" onChange={(event)=> setCard((prevValue)=>({
      ...prevValue,
      text: event.target.value
    })) } ></ContentTextArea>
    <StyleAdd><img onClick={addTask} src={ADD}/></StyleAdd>
  </ContentCard>
  
  )
}


const App = () => {
  const [tasks, setTasks ] = useState<CardProps[]>([])
  
  
  const moveToRight = (card:CardProps) => {
    if (card.status=== "to-do") {
      setTasks(prevValue => {
      return  prevValue.map((task) => {
          if (task.id === card.id) {
            return {
              ...task, 
              status: "doing"
            }
          }
          return task
        })
      })
    }
  }

  const moveToRight2 = (card:CardProps) => {
    if (card.status === "doing") {
      setTasks(prevValue => {
      return  prevValue.map((task) => {
          if (task.id === card.id) {
            return {
              ...task, 
              status: "done"
            }
          }
          return task
        })
      })
    }
  }

  const moveToLeft = (card:CardProps) => {
    if (card.status === "done") {
      setTasks(prevValue => {
      return  prevValue.map((task) => {
          if (task.id === card.id) {
            return {
              ...task, 
              status: "doing"
            }
          }
          return task
        })
      })
    }
  }

  const moveToLeft2 = (card:CardProps) => {
    if (card.status === "doing") {
      setTasks(prevValue => {
      return  prevValue.map((task) => {
          if (task.id === card.id) {
            return {
              ...task, 
              status: "to-do"
            }
          }
          return task
        })
      })
    }
  }

const  deleteCard = (card:CardProps) => {
  const limpaCard = tasks.filter(task => task.id !== card.id)
  setTasks([...limpaCard])
}

//const editCard = (card:CardProps, newTitle:string, newText:string) => {
 // updateTask({...card, title:newTitle, text:newText}) 
//}

const updateTask = (taskUpdated: CardProps) => {
  setTasks(prevValue => prevValue.map(task => (task.id === taskUpdated.id ? taskUpdated : task)))
}

  return(
<>
  <Card>
    <Title><u>Novo</u></Title>
    <NewCard setTasks = {setTasks} ></NewCard>
  </Card>
  <Card>
    <Title><u>To Do</u></Title>
    {tasks.filter(task => task.status === "to-do" ).map(task => (
    <CardItem key={task.id} deleteCard={deleteCard} moveToRight={moveToRight} task={task} updateTask={updateTask} ></CardItem>
    ))}
  </Card>
  <Card>
    <Title><u>Doing</u></Title>
    {tasks.filter(task => task.status === "doing" ).map(task => (
    <CardItem key={task.id} deleteCard={deleteCard} moveToRight={moveToRight2} moveToLeft={moveToLeft2} task={task} updateTask={updateTask} ></CardItem>
    ))}
  </Card>
  <Card>
    <Title><u>Done</u></Title>
    {tasks.filter(task => task.status === "done" ).map(task => (
    <CardItem key={task.id} deleteCard={deleteCard} moveToLeft={moveToLeft} task={task} updateTask={updateTask} ></CardItem>
    ))}   
  </Card>
</>
)}
   
export default App
