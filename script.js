document.addEventListener("DOMContentLoaded", function () {
  let id = document.getElementById("id");
  let quote = document.getElementById("quote");


  async function fetchData() {
    response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    let advice = result.slip.advice;
    let advice_id = result.slip.id;
    id.innerHTML = advice_id;
    quote.innerHTML = advice;
  }

  document.getElementById("dice").addEventListener("click", function () {
    fetchData();
  });
});
