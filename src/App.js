import React, { useState, useRef, useEffect } from 'react';
import Image from './img/image.png';
import axios from 'axios';

import TituloTarefas from './Components/TituloTarefas/index'
import Tarefa from './Components/Tarefa/index'

import { 
  MainContainer, 
  Container, 
  LeftContainer,
  HeadLine,  
  Titulo,
  SubHeadLine,
  LogoImage,
  RightContainer,
  Subtitulo,
  //Tarefa,
  Input
  } 
  from './styles.js'

function App() {
  const[tasks, setTasks] = useState([]);

  const taskText = useRef("");
  
  useEffect(()=> {
    async function fetchData(){
      const {data: taskList} = await axios.get('https://plataforma.universodev.com.br/api/todolist/')
      setTasks(taskList)
    }
    fetchData()
  }, [tasks])

  async function insertNewTask(event){
    if(event.key === "Enter"){
      const { data: newTaskInfo } = await axios.put('https://plataforma.universodev.com.br/api/todolist/', { text: taskText.current.value })
      setTasks([...tasks, {id: newTaskInfo.id, text: newTaskInfo.text }])
      taskText.current.value = ""
    }
  }
   /*
  async function removeTask(id){
    const data = await axios.delete(`https://plataforma.universodev.com.br/api/todolist/${id}`)
    setTasks(tasks.filter((task) => task.id !== id))
  }*/

  return (
    <MainContainer>
      <Container>
        <LeftContainer>
          <HeadLine>
            <LogoImage src={Image} alt="task"/>
            <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
          </HeadLine>
          <SubHeadLine>Adicione ao lado as tarefas que deseja fazer hoje e não pare até ela estar vazia!</SubHeadLine>
        </LeftContainer>
        <RightContainer>
          <TituloTarefas />
          <Subtitulo>Tarefas do dia...</Subtitulo>

          {tasks.map((task)=> (
            <Tarefa id={task.id} text={task.text} updateTasks={setTasks}/>
          ))}

          <Input type="text" 
                 placeholder="Digite sua próxima tarefa aqui..."
                 onKeyDown={insertNewTask} 
                 ref={taskText}
                 />
        </RightContainer>
      </Container>
    </MainContainer>
  );
}

export default App;
