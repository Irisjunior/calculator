

function insert(num) {
 var numero = document.getElementById('res').innerHTML;
              document.getElementById('res').innerHTML= numero + num;
  
}

function apagar() {
  document.getElementById('res').innerHTML = ' '
}

function back() {
  var res = document.getElementById('res').innerHTML;
  document.getElementById('res').innerHTML= res.substring(0,res.length - 1)
}



function calcular() {
  var res = document.getElementById('res').innerHTML;
  if (res) {
    document.getElementById('res').innerHTML = eval(res);
  } else {
    
  }
}

function light() {
getElementById('container').style.backgroundColor='LightGray';
  
}

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#light-mode')

$checkbox.addEventListener('change',function () {
  $html.classList.toggle('light-mode')
})