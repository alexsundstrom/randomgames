import React from 'react'
import { Container, InputBase, Input, Button } from '@material-ui/core';

const StartScreen = () => {
    return (
        <Container style={{textAlign: "center"}}>
            <Input placeholder="Enter Name..." />
            <Button variant="contained">Enter</Button>
        </Container>
    )
}

export default StartScreen
