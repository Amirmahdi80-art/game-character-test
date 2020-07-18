const form = document.getElementById('form');
form.addEventListener('submit', ev => {
  ev.preventDefault();
  document.getElementById('loading').style.display = "block";
  document.getElementById('result').style.display = "none";
  setTimeout(function(){
    document.getElementById('loading').style.display = "none";
    document.getElementById('result').style.display = "block";
    submitAnswers();
  }, 2500);


});

function submitAnswers() {
  let q1 = document.getElementById('q1').value;
  let q2 = document.getElementById('q2').value;
  let q3 = document.getElementById('q3').value;
  let q4 = document.getElementById('q4').value;
  let q5 = document.getElementById('q5').value;
  let q6 = document.getElementById('q6').value;
  let q7 = document.getElementById('q7').value;
  let q8 = document.getElementById('q8').value;
  let q9 = document.getElementById('q9').value;
  let q10 = document.getElementById('q10').value;


  // if(q1 === "" || q2 === "" || q3 === "" || q4 === "" || q5 === "" || q6 === "" || q7 === "" || q8 === "" || q9 === "" || q10 === "") {
  //   alert("Please select your choices");
  //   return false;
  // }

  if(q1 === "Vengeance" && q2 === "No" && q3 === "Fast" && q4 === "Quiet" && q5 === "Shooting" && q6 === "Serious" && q7 === "Extrovert" && q8 === "Bad" && q9 === "risky" && q10 === "Noplan") {
    loadAnswer('kratos');
  }

}

function loadAnswer(answer) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${answer}.json`, true);
  xhr.onload = function() {
    answer = JSON.parse(xhr.responseText);
    const output = `
    <div class="row">
  <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
        <img src="${answer.image}">
        <span class="card-title">${answer.name}</span>
      </div>
      <div class="card-content">
        <p>You are ${answer.name}</p>
      </div>
    </div>
  </div>
</div>
    `;
    document.getElementById('result').innerHTML = output;
  }
  xhr.send();
}
