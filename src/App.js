import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import Header from './components/Header';
/**
 * Os principais conceitos de
 * Componete
 * Propriedade
 * Estado & Imutabilidade
 */
function App() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);
    async function handleAddProjeto() {
        //setProject([...project, `novo projeto${Date.now()}`]);
        const response = await api.post('projects', {
            title: `novo projeto${Date.now()}`,
            owner: "Jhonatan Alves"
        });
        const project = response.data;
        setProjects([...projects], project);
    }
    return (
        <>
            <Header title='Lista Projetos'>
                <ul> {projects.map(project => < li key={project.id}>{project.title}</li>)}</ul>
            </Header > <button type="button" onClick={handleAddProjeto}> Adicionar Projeto </button>
        </>
    );
}

export default App;
