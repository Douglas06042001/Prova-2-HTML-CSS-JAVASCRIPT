function realizarProcesso(){
    var receitaDespesa = document.getElementById('receitaDespesa').value;
    var dtvencimento = document.getElementById('dtvencimento').value;
    var valor = document.getElementById('valor').value;
    var descricao = document.getElementById('descricao').value;

    if(receitaDespesa != '' && dtvencimento != '' && valor != '' && descricao != ''){
        var tabela = document.getElementById('tabela').innerHTML += '\
        <tbody class="contas">\
            <th>'+descricao+'</th>\
            <th>'+valor+'</th>\
            <th>'+dtvencimento+'</th>\
            <th>'+receitaDespesa+'</th>\
        </tbody>\
        '; 

        var saldo = document.getElementById('saldo').value;
        if(receitaDespesa == 'Receita'){
            var novoSaldo = parseInt(saldo) + parseInt(valor);
            console.log(novoSaldo);
        }
        else if(receitaDespesa == 'Despesa'){
            var novoSaldo = saldo - valor;
            console.log(novoSaldo);
        }
        var valorSaldo = document.getElementById('valorSaldo').innerHTML = '\
            <label for="saldo">Saldo:</label>\
            <input type="text" readonly value="'+novoSaldo+'" id="saldo">\
        ';

        var formulario = document.getElementById('formulario').innerHTML = '\
        <div>\
        <label for="descricao">Descrição:</label>\
        <input type="text" value="" id="descricao">\
        </div>\
        <div>\
            <label for="valor">Valor:</label>\
            <input type="text" value="" id="valor">\
        </div>\
        <div>\
            <label for="dtvencimento">Data De Vencimento:</label>\
            <input type="date" value="" id="dtvencimento">\
        </div>\
        <div>\
            <label for="receitaDespesa">Tipo:</label>\
            <select id="receitaDespesa">\
                <option value="">Selecione</option>\
                <option value="Receita">Receita</option>\
                <option value="Despesa">Despesa</option>\
            </select>\
        </div>\
        <div>\
            <div onclick="realizarProcesso()" class="botaoCadastrar">Enviar</div>\
        </div>\
        ';
        
    }
    else{
        alert('preenche saporra');
    }
  }