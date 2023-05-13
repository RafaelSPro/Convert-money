const button = document.getElementById('converter-button')
const select = document.getElementById('currency-select')

const dolar = 4.93;
const euro = 5.38;
const bitcoin = 131.870;

const converterValue = () => {
    const valueReal = document.getElementById('value-real').value 
    const realcoin = document.getElementById('real-value-text')
    const valueconvert = document.getElementById('result-convert')
    const result = valueReal / dolar

    realcoin.innerHTML = new Intl.NumberFormat('pt-BR', 
    {style: 'currency', currency: 'BRL' }
        ).format(valueReal);

    if(select.value === 'U$ Dólar Americano' ){
        valueconvert.innerHTML = new Intl.NumberFormat('en-US', 
    {style: 'currency', currency: 'USD' }
        ).format(result);
    }

    if(select.value === '€ Euro'){
        valueconvert.innerHTML = new Intl.NumberFormat('de-DE', 
    {style: 'currency', currency: 'EUR' }
        ).format(valueReal / euro);
    }
    
    if(select.value === 'Bitcoin') {
        const bitcoinCalculation = (valueReal / bitcoin).toFixed(2)

        valueconvert.innerHTML = bitcoinCalculation
    }
}

const convertOption = () => {
    const converterText = document.getElementById('convert-name');
    const image = document.getElementById('currency-img');
    
    if(select.value === 'U$ Dólar Americano'){
        converterText.innerHTML = 'Dólar Americano';
        image.src = './imagens/estados-unidos (1) 1.png';
    }

    if(select.value === '€ Euro'){
        converterText.innerHTML = 'Euro';
        image.src = './imagens/Design sem nome 1.png';
    }

    if(select.value === 'Bitcoin') {
        converterText.innerHTML = 'Bitcoin'
        image.src = './imagens/bitcoin.png'
    }

    converterValue()
}


button.addEventListener('click', converterValue);
select.addEventListener('change', convertOption)