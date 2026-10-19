const botoes = document.querSelector("button");
  botoes.forEach(função(botao){
    deixe curtiu = falso;}
   {
    botao.addEvertListener("clique",botaoClicado);
  função botaoClicado() {
   console.log("fui clicado");
  let texto = botao.querySelector("span");
    se(curtiu ===falso) {
  texto.textConteúdo++;
  }
   });
    const btnTemaEscuro=document.querySelector(".btn-tema-escuro");
    bntTemaEscuro.addEventlistener("click,mudaTema);
função mudaTema() {
 const corpoPagina = document.body;
 if(corpoPagina.classList.contains("tema-escuro")){
  corpoPagina.classlist.remove("tema-escuro");
 } outro{
  corpoPagina.classlist.add("tema-escuro");
 }

}

