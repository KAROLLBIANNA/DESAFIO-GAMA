

function cadastro() {
	var nome = window.document.getElementById("txtNome");
	var cpf = window.document.getElementById("txtCPF");
	var endereco = window.document.getElementById("txtEndereco");
	var numero = window.document.getElementById("txtNumero");
	var celular = window.document.getElementById("txtCelular");
	
	if (nome.value.length == 0)
	{
		alert("Por favor, informe o campo nome!");
		nome.focus();
		return false; 
	} else if (cpf.value.length == 0) {
		alert("Por favor, informe o campo CPF!");
		cpf.focus();
		return false;
	} else if (endereco.value.length == 0) { 
		alert("Por favor, informe o campo Endereco!");
		endereco.focus();
		return false;
	} else if (numero.value.length == 0) {
		alert("Por favor, informe o campo Numero !");
		numero.focus();
		return false;
	} else if (celular.value.length == 0) { 
		alert("Por favor, informe o campo Celular");
		celular.focus();
		return false;
	} else {	
	 
		alert("Obrigado(a) por efetuar nosso cadastro!");
		return true;
	}
}

function funcaoLimpar() {
	window.document.getElementById("txtNome").value = "";
	window.document.getElementById("txtCPF").value = "";
	window.document.getElementById("txtRG").value = "";
	window.document.getElementById("rdGenero").selectIndex = -1;
	window.document.getElementById("txtEndereco").value = "";
	window.document.getElementById("txtNumero").value = "";
	window.document.getElementById("txtBairro").value = "";
	window.document.getElementById("txtCidade").value = "";
	window.document.getElementById("txtCEP").value = "";
	window.document.getElementById("txtTelefone").value = "";
	window.document.getElementById("txtCelular").value = "";
	window.document.getElementById("chkAcessibilidade").checked = false;
	window.document.getElementById("selectDeficiencia").selectIndex = -1;
	window.document.getElementById("txtRotina_inclusiva").value = "";
}

 function mascara(t, mask){
	 var i = t.value.length;
	 var saida = mask.substring(1,0);
	 var texto = mask.substring(i)
	 if (texto.substring(0,1) != saida){
		t.value += texto.substring(0,1);
	 }
 }