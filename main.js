$(document).ready(function(){
    $('#CPF').val('');
    $('#CPF').mask('000.000.000-00', {
        placeholder: 'Ex: 000.000.000-00'
    })

    $('#CEP').val('');
    $('#CEP').mask('00.000-000', {
        placeholder: 'Ex: 00.000-000'
    })

    $('#telefone').val('');
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Ex: (00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            CPF: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome!',
            CPF: 'Por favor insira o seu CPF valido!',
            email: 'Informe o seu e-mail corretamente!',
            telefone: 'Informe o telefone corretamente!',
            CEP: 'Insira um CEP valido!',
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso');
            $('form input').val('');
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            };
        }
    })

})