$(function() {
    // Configuração do carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    // Configuração das máscaras
    $('#telefone').mask('(00) 00000-0000', {
        onKeyPress: function(val, e, field, options) {
            var masks = ['(00) 0000-00009', '(00) 00000-0000'];
            var mask = (val.length > 14) ? masks[1] : masks[0];
            field.mask(mask, options);
            
            var shadowDiv = field.siblings('.input-shadow');
            shadowDiv.text(field.val());
        },
        placeholder: "(DDD) 12345-6789"
    });

    $('#cpf').mask('000.000.000-00', {
        onKeyPress: function(val, e, field, options) {
            var shadowDiv = field.siblings('.input-shadow');
            shadowDiv.text(field.val());
        },
        placeholder: "123.456.789-00"
    });

    $('#cep').mask('00000-000', {
        onKeyPress: function(val, e, field, options) {
            var shadowDiv = field.siblings('.input-shadow');
            shadowDiv.text(field.val());
        },
        placeholder: "01234-567"
    });

    // Configuração da validação
    $.validator.setDefaults({
        errorClass: 'error',
        validClass: 'valid',
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: {
                required: "Por favor, insira um e-mail válido",
                email: "O formato do e-mail está incorreto"
            },
            telefone: "Por favor, insira o número do telefone",
            cpf: "Por favor, insira um CPF válido",
            endereco: "Por favor, insira o endereço completo",
            cep: "Por favor, insira o CEP válido"
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});