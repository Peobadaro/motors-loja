$(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $.validator.setDefaults({
        errorClass: 'error',
        validClass: 'valid',
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });

    $('form').validate({
        rules: {
            nome: { required: true, minlength: 3 },
            email: { required: true, email: true },
            telefone: { required: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true }
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: {
                required: "Por favor, insira um e-mail válido",
                email: "O formato do e-mail está incorreto"
            },
            telefone: "Por favor, insira o número do telefone",
            endereco: "Por favor, insira o endereço completo",
            cep: "Por favor, insira o CEP válido",
            cpf: "Por favor, insira um CPF válido"
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