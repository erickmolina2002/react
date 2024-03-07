import {} from 'react';

function Dados(prorps) {
    return (
        <>
        <p>Meu nome é:{prorps.nome}</p>
        <p>Minha idade é:{prorps.idade}</p>
        <p>Minha cidade é:{prorps.cidade}</p>
        </>
    );
}

export default Dados;