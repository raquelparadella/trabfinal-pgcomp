function clearForm() {
    document.getElementById('errorMsgDocente').innerHTML = ''
    document.getElementById('errorMsgAssunto').innerHTML = ''
    document.getElementById('errorMsgCampo').innerHTML = ''
    document.getElementById('successMsg').innerHTML = ''
}

function enviarForm () {
    clearForm();

    var docente = document.getElementById('docente').value
    var assunto = document.getElementById('assunto').value.trim()
    var campo = document.getElementById('campo').value.trim()

    if (!docente) {
        document.getElementById('errorMsgDocente').innerHTML = 'Docente inválido'
    }
    if (!assunto) {
        document.getElementById('errorMsgAssunto').innerHTML = 'Assunto inválido'
    }
    if (!campo) {
        document.getElementById('errorMsgCampo').innerHTML = 'Mensagem inválida'
    }

    if (docente && assunto && campo) {
        document.getElementById('successMsg').innerHTML = 'Mensagem enviada'
    }
}