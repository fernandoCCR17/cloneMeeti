(function(){
    const formulario = document.querySelector("#formulario");
    const categoria = document.querySelector("#categoria");
    const evento = document.querySelector("#evento");
    const lugar = document.querySelector("#lugar");

    formulario.addEventListener('submit', verificaForm);

    function verificaForm(e){
        e.preventDefault();
        const mensajeRepetido = formulario.parentElement.querySelector('.mensaje');
        mensajeRepetido ? mensajeRepetido.remove() : '';
        if(categoria.value === '' || evento.value === '' || lugar.value === ''){
            mostrarAlerta('Todos los campos son obigatorios.', formulario.parentElement)
        }
    }

    function mostrarAlerta(mensaje, selector){
        const parrafoMensaje = document.createElement('P');
        parrafoMensaje.textContent = mensaje;
        parrafoMensaje.style.textAlign = 'center';
        parrafoMensaje.style.fontWeight = 'Bold';
        parrafoMensaje.style.color = 'Red';
        parrafoMensaje.classList.add('mensaje');
        selector.appendChild(parrafoMensaje);
        setTimeout(() => {
            parrafoMensaje.remove();
        }, 3000);
    }
})();