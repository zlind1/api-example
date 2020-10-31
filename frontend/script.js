function load() {
  fetch('http://localhost:5000')
  .then(res => res.text().then(
    data => document.querySelector('#text').innerHTML = data
  ))
}
