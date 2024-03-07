import {} from 'react';

function Home() {
    const soma = (a, b) => a + b;
    return (
        <>
        <h1>React App</h1>
        <p>2 + 3 = {soma(2, 3)}</p>
        </>
    );
}
export default Home;