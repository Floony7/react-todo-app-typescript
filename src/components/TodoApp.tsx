import React, {useState} from 'react'
import styled from 'styled-components'
import { JSXElement } from '@babel/types'

interface ITodo {
    text: string;
    id: number;
    completed: boolean;
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10vh 80vh 10vh;
    grid-template-areas: 
    "header header header"
    ". main ."
    "footer footer footer";
`

const Container = styled.div`
    margin: 0 auto;
    width: 50%;
`

export default function TodoApp() {

const [todos, setTodos] = useState<ITodo[] | null>([])

    return (
        <Grid>
        <div className="header">
            <Container>
                Header
            </Container>
        </div>
        <div className="main">Main</div>
        <div className="footer">
        <Container>
                Footer
        </Container>
        </div>
        </Grid>
    )
}

// id, task, completed