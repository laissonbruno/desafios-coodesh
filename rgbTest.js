// Descrição
// A função RGB está incompleta. Complete-a para que a passagem de valores decimais RGB resulte no retorno de uma representação hexadecimal. Os valores decimais válidos para RGB são 0 - 255. Quaisquer valores que estejam fora desse intervalo devem ser arredondados para o valor válido mais próximo.

// Nota:
// Sua resposta deve ter sempre 6 caracteres, a abreviação com 3 não funcionará aqui.

// Código de Exemplo:
// rgb(255, 255, 255) // retorna FFFFFF
// rgb(255, 255, 300) // retorna FFFFFF
// rgb(0,0,0) // retorna 000000
// rgb(148, 0, 211) // retorna 9400D3



function rgb(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    const hexColor = `${hexR}${hexG}${hexB}`;

    return hexColor.toUpperCase();
}