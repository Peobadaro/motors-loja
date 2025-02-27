$(document).ready(function() {
    console.log('jQuery está carregado:', typeof jQuery);

    // Verifica se Slick foi carregado antes de usar
    if ($.fn.slick) {
        console.log('Slick carregado com sucesso!');
        $('#carousel-imagens').slick({
            autoplay: true,
            arrows: false,
            dots: true
        });
    } else {
        console.error('Erro: Slick não foi carregado corretamente.');
    }

    // Verifica se a função mask está carregada antes de usar
    if ($.fn.mask) {
        console.log("jQuery Mask está carregado corretamente.");

        // Configuração das máscaras
        $('#telefone').mask('(00) 00000-0000', {
            onKeyPress: function(val, e, field, options) {
                var masks = ['(00) 0000-00009', '(00) 00000-0000'];
                var mask = (val.length > 14) ? masks[1] : masks[0];
                field.mask(mask, options);
            }
        });

        $('#cpf').mask('000.000.000-00');
        $('#cep').mask('00000-000');

    } else {
        console.error("Erro: jQuery Mask não foi carregado.");
    }

    // Verifica se o plugin jQuery Validate está carregado antes de usar
    if ($.fn.validate) {
        console.log("jQuery Validate está carregado corretamente.");

        // Configuração da validação
        $.validator.setDefaults({
            errorClass: 'error',
            validClass: 'valid',
            errorPlacement: function(error, element) {
                error.insertAfter(element);
            }
        });

        $('#form').validate({
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

    } else {
        console.error("Erro: jQuery Validate não foi carregado.");
    }
});
