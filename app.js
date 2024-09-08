function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertendo para minúsculo
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
  
    for (let dado of dados) {
      if (dado.nome.toLowerCase().includes(campoPesquisa)) {
        resultados += `
      <div class="item-resultado">
              <h2>${dado.nome}</h2>
              <p>Significado do Nome: </p>
              <span> ${dado.significado}</span>
              <p>Onde viveu: </p>
              <span> ${dado.local}</span>
              <p>Quem era: </p>
              <span> ${dado.descricao}</span>
              <p>Título: </p>
              <span id="tx"> ${dado.titulo}</span>
              <p>Profissão: </p>
              <span> ${dado.papel}</span>
              <p>Informação Familiar: </p>
              <span> ${dado.familia}</span>
              <p>O que aconteceu em sua história: </p>
              <span> ${dado.eventos}</span>
              <p>Lições de vida: </p>
              <span> ${dado.Licoes}</span>
              <p>Conexões:</p>
              <span>  ${dado.conexoes}</span>
              <p>Informações adicionais:</p>
              <span>  ${dado.Observacoes}</span>
      </div>
  `;
      }
    }
    
    if (!resultados) {
        resultados = "<p>Nada Foi encontrado</p>"
    }
  
    section.innerHTML = resultados;
  }