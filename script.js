function Tabuada(tabuada, start, end, objeto){

  if(start <= end){
    const resultado = tabuada * start;
    const novo = `${tabuada}x${start}=${resultado}`;

    objeto.push(novo); 

    const novoStart = start + 1;

    Tabuada(tabuada, novoStart, end, objeto);
  }
  
  return objeto;
}


function MostrarTabuada(lista, tabuada){
  tabuada.forEach((item) => {
    const novo = document.createElement('li');   
    novo.appendChild(document.createTextNode(item));
    
    lista.appendChild(novo);
  });
}
 


document.getElementById('button').addEventListener('click', () => {
  const numero = document.getElementById('input').value;  
  
  const start = 0;
  const end = 10;

  if(!numero){
    alert('Digite um número para gerar a tabuada!');
  }else{
    const objeto = [];
    const tabuada = Tabuada(numero, start, end, objeto);

    const lista = document.getElementById('tabuada');
    lista.innerHTML = "";
    MostrarTabuada(lista, tabuada);
  }
});
