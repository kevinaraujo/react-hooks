import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({ aoEnviar }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            aoEnviar()
        }}>
            <TextField
                id="email"
                label="E-mail"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosUsuario