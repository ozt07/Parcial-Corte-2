function calculate(op) {
    var primero = parseFloat(document.getElementById('primero').value) || 0;
    var segundo = parseFloat(document.getElementById('segundo').value) || 0;
    var result;
  
    switch (op) {
      case 'sum':
        result = primero + segundo;
        break;
      case 'rest':
        result = primero - segundo;
        break;
      case 'mult':
        result = primero * segundo;
        break;
      case 'div':
        if (segundo !== 0) {
          result = primero / segundo;
        } else {
          result = 'Error: No se puede dividir por cero';
        }
        break;
    }
  
    document.getElementById('result').value = result;
  }