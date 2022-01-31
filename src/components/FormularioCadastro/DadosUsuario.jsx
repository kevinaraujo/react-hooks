import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar }) {
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            aoEnviar({ email, senha })
        }}>
            <TextField
                id="email"
                label="E-mail"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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