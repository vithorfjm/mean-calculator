document.querySelector('button').addEventListener('click', () => {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    const num3 = Number(document.querySelector('#num3').value);
    const num4 = Number(document.querySelector('#num4').value);
    const result = document.querySelector('#resultado');
    const somaTotal = num1 + num2 + num3 + num4;
    const media = somaTotal / 4;
    result.innerHTML = media;
    })
