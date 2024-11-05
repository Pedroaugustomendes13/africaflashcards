function criaCartao(categoria, pergunta, resposta) {
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = '
        < div class="cartao__conteudo" >
                    <h3>$(categoria)</h3>
                    <div class="cartao__pergunta">
                        <p>$(pergunta)</p>
                    </div>
                    <div class="cartao__resposta">
                        <p>$(resposta)</p>
                    </div>
                </div > '

    let container = document.getElementById('container')
    container.appendChild (cartao)
}