import flatten from 'lodash/flatten';
let isturn = true;
const rendcasilla = ({
  num,
  index,
  size = 35,
}) => {
  const luz = document.createElement('div');
  luz.style.width = `${size}px`;
  luz.style.height = `${size}px`;
  luz.style.borderRadius = `${size / 2}px`;
  luz.style.float = 'left';
  luz.style.border = 'solid grey';
  if (num == 1){
    luz.style.backgroundColor = 'black';
  }else if (num == 2){
    luz.style.backgroundColor = 'white';
  }else{
  }

  luz.onclick = ()=>{
    if(isturn){
      appState.matrix[index] = 1;
      render(root, appState);
    }else{
      appState.matrix[index] = 2;
      render(root, appState);
    }
    
    //console.log(appState.matrix);
  }
  return luz;
}

const render = (mount, appState) => {
  const contar = (n) =>{
    let t = 0;
    for(let i = 0; i <= appState.matrix.length; i++){
      if (appState.matrix[i] == n){
        t += 1;
      }
      console.log(appState.matrix[i] == n); 
    }
    return t/2;
  }

  root.innerHTML = "";
  const titulo = document.createElement('div');
  titulo.innerText = 'Othelo!';
  titulo.style.fontSize = '50px';
  titulo.style.marginLeft = '130px';

  const semaforo = document.createElement('div');
  semaforo.style.backgroundColor = 'lightgrey';
  semaforo.style.borderRadius = '35px';
  semaforo.style.width = '340px';
  semaforo.style.height = '330px';
  semaforo.style.margin = '25px';
  semaforo.style.padding = '20px';
  appState.matrix.map((num, index) => rendcasilla({
    num,
    index,
  })).forEach(luz => semaforo.appendChild(luz))

  const changeturn = document.createElement('button');
  changeturn.style.width = '250px';
  changeturn.style.fontSize ='20px';
  changeturn.innerText = 'Siguiente turno';
  changeturn.style.marginLeft = '80px';
  changeturn.onclick = () =>{
    if(isturn){
      isturn = false;
    }else{
      isturn = true;
    }
  }
  let blanco = contar(2);
  let negro = contar(1);
  console.log("Blanco> ", blanco);
  console.log("Negro> ", negro);
  const puntos = document.createElement('div') ;
  puntos.innerText = `Blancas: ${blanco + contar(2)}/Negras: ${negro + contar(1)}`;
  puntos.style.marginLeft = '140px';
  mount.appendChild(titulo);
  mount.appendChild(semaforo);
  mount.appendChild(changeturn);
  mount.appendChild(puntos)

}

const appState = {
  matrix: [
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0, 
    0,0,0,1,2,0,0,0, 
    0,0,0,2,1,0,0,0, 
    0,0,0,0,0,0,0,0, 
    0,0,0,0,0,0,0,0, 
    0,0,0,0,0,0,0,0
  ]
}


const root = document.getElementById('root');
render(root, appState);