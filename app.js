// VARIABLES
const botonSubmit = document.querySelector('.boton-trial');
const inputMail = document.querySelector('#inputMail');
const formulario = document.querySelector('.formulario');
const textoAlerta = document.querySelector('.formtext-error');
const inputPassword = document.getElementById('inputPassword');


function validarEmail(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

// botonSubmit.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('enviando formulario');
//     console.log(input)

// });

formulario.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(inputMail.value);
    let emailValidado = validarEmail(inputMail.value);

    if (!emailValidado) {
        textoAlerta.style.cssText = "display:block; color:red";
        textoAlerta.textContent = "provides a valid mail, please :(";
        // e.preventDefault();

    } else {
        formulario.reset();
        textoAlerta.textContent = "todo en orden";
        inputPassword.value = "";

        document.location.reload();
    }
    // console.log(emailValidado);
})