function getAdvice() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const advices = data.advices;
      const randomIndex = Math.floor(Math.random() * advices.length);
      const randomAdvice = advices[randomIndex].text;
      document.getElementById("advice").innerHTML = randomAdvice;
    })
    .catch(error => console.log(error));
}

