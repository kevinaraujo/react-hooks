import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesContext from "../../context/validacoesCadastro";

function DadosUsuario({ aoEnviar }) {
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [erros, setErros] = useState({ senha: { valido: true, texto:"" }})

    const validacoes = useContext(ValidacoesContext)
    
    const validarCampos = (e) => {
        const { name, value } = e.target
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            } 
            return true
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (possoEnviar()) {
                aoEnviar({ email, senha })
            }
        }}>
            <TextField
                id="email"
                label="E-mail"
                name="email"
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
                name="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onBlur={validarCampos}
                erros={!erros.senha.valido}
                helperText={erros.senha.texto}
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary"
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario