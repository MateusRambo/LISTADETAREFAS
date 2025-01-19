function adicionarTarefa() {
    const tarefaInput = document.getElementById('nova-tarefa');
    const tarefa = tarefaInput.value.trim();

    if (tarefa) {
        const lista = document.getElementById('lista-tarefas');
        const item = document.createElement('li');
        item.textContent = tarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => lista.removeChild(item);

        item.appendChild(botaoRemover);
        lista.appendChild(item);

        tarefaInput.value = '';
    }
}
