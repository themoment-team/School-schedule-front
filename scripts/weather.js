const weather = document.querySelector("#dlwjddn");
const city = document.querySelector("#dltmdwp");
function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEYS = "0df8a89ad66525b478248553b1d2fb8c";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const selectedId = `#${data.weather[0].main}`;
      const weatherIcon = document.querySelector(selectedId);
      weatherIcon.classList.remove("hidden__icon");
    });
}
function onGeoError() {
  alert("날씨권한을 허용해주세요");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
