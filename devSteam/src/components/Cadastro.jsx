import React from 'react'

const Cadastro = () => {
    return (
    <div className=" d-flex container  flex-column gap-3">
      <h4>Cadastro</h4>
      <button className=''>Editar</button>
    <div className="p-4 rounded-3 itensPerfil" style={{ minWidth: '500px' }}>
      <div>
        <p>Nome:</p>
        <p>E-mail:</p>
        <p>CPF:</p>
        <p>Data de aniversário:</p>
        <p>Telefone:</p>
        <p>Senha:</p>
      </div>
    </div>
    </div>
  )
}

export default Cadastro
