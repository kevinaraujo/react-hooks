import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
    const [ cep, setCep ] = useState('')
    const [ endereco, setEndereco ] = useState('')
    const [ numero, setNumero ] = useState('')
    const [ estado, setEstado ] = useState('')
    const [ cidade, setCidade ] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            aoEnviar({ cep, endereco, numero, estado, cidade })
        }}>
             <TextField
                id="cep"
                label="CEP"
                type="text"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
            />
            <TextField
               id="endereco"
               label="Endereço"
               type="text"
               variant="outlined"
               margin="normal"
               fullWidth
               value={endereco}
               onChange={(e) => setEndereco(e.target.value)}
           />
           <TextField
              id="numero"
              label="Número"
              type="number"
              variant="outlined"
              margin="normal"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
          />
          <TextField
             id="estado"
             label="Estado"
             type="text"
             variant="outlined"
             margin="normal"
             value={estado}
             onChange={(e) => setEstado(e.target.value)}
         />
         <TextField
            id="cidade"
            label="Cidade"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
        />

        <Button
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
        >
          Cadastrar
        </Button>
        </form>
    )
}

export default DadosEntrega