document.getElementById('form-fuzzy').addEventListener('submit', evaluateBtn);

function evaluateBtn(e) {
  e.preventDefault();

  let chestPain = Number(document.getElementById('form-fuzzy')[0].value);
  let trestBps = Number(document.getElementById('form-fuzzy')[1].value);
  let chol = Number(document.getElementById('form-fuzzy')[2].value);
  let yearsInput = Number(document.getElementById('form-fuzzy')[3].value);
  let fbs = Number(document.getElementById('form-fuzzy')[4].value);
  let thalRest = Number(document.getElementById('form-fuzzy')[5].value);
  let tPeakBps = Number(document.getElementById('form-fuzzy')[6].value);
  var heartDisease = "";



  if ((chestPain === 1 ) && (trestBps >= 110 && trestBps <= 145) && (chol >= 168 && chol <= 240) && (yearsInput >= 0 && yearsInput <= 30) && (fbs >= 0 && fbs <= 120) && (thalRest >= 50 && thalRest <= 70) && (tPeakBps >= 90 && tPeakBps <= 140)){
    heartDisease ="mild";
    document.getElementById('output').innerHTML = heartDisease;
  }
  else if ((chestPain === 2 ) && (trestBps >= 110 && trestBps <= 145) && (chol >= 168 && chol <= 240) && (yearsInput >= 0 && yearsInput <= 30) && (fbs >= 0 && fbs <= 120) && (thalRest >= 50 && thalRest <= 70) && (tPeakBps >= 90 && tPeakBps <= 140)){
     heartDisease ="mild";
    document.getElementById('output').innerHTML = heartDisease;
  }
  else if ((chestPain === 3 ) && (trestBps >= 110 && trestBps <= 145) && (chol >= 168 && chol <= 240) && (yearsInput >= 0 && yearsInput <= 30) && (fbs >= 0 && fbs <= 120) && (thalRest >= 50 && thalRest <= 70) && (tPeakBps >= 90 && tPeakBps <= 140)){
     heartDisease ="mild";
    document.getElementById('output').innerHTML = heartDisease;
  }
  else if ((chestPain === 4 ) && (trestBps >= 110 && trestBps <= 145) && (chol >= 168 && chol <= 240) && (yearsInput >= 0 && yearsInput <= 30) && (fbs >= 0 && fbs <= 120) && (thalRest >= 50 && thalRest <= 70) && (tPeakBps >= 90 && tPeakBps <= 140)){
     heartDisease ="mild";
    document.getElementById('output').innerHTML = heartDisease;
  }
  else if ((chestPain ===1  ) && (trestBps > 145) && (chol > 240) && (yearsInput >= 0 && yearsInput <= 30) && (fbs >= 0 && fbs <= 120) && (thalRest >= 50 && thalRest <= 70) && (tPeakBps >= 90 && tPeakBps <= 140)){
     heartDisease ="massive";
    document.getElementById('output').innerHTML = heartDisease;
  }
  else if ((chestPain === 3  ) && (trestBps > 145) && (chol >= 168 && chol <= 240) && (yearsInput >= 0 && yearsInput <= 30) && (fbs >= 0 && fbs <= 120) && (thalRest >= 50 && thalRest <= 70) && (tPeakBps >= 90 && tPeakBps <= 140)){
    heartDisease ="massive";
    document.getElementById('output').innerHTML = heartDisease;
  }
  else if ((chestPain === 4  ) && (trestBps > 145) && (chol >= 168 && chol <= 240) && (yearsInput > 30) && (fbs > 120) && (thalRest >70) && (tPeakBps >140)){
    heartDisease ="massive";
    document.getElementById('output').innerHTML = heartDisease;
  }



}