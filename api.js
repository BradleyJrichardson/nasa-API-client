const fetchData = () => {
  nasaImage = document.querySelector("img");
  nasaImage.parentNode.removeChild(nasaImage);
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=weZmTi0jazYX7Ovr30EGH0qJbBwqiXMeUcshXJay"
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => {
      console.log(json);
      let image = document.createElement("img");
      let copyright = document.createElement("p");
      let date = document.createElement("p");
      let explanation = document.createElement("p");
      let title = document.createElement("p");
      image.src = json.url;
      copyright.innerText = json.copyright;
      date.innerText = json.date;
      explanation.innerText = json.explanation;
      title.innerText = json.title;

      //
      container.appendChild(image);
      container.appendChild(about);
      about.appendChild(copyright);
      about.appendChild(date);
      about.appendChild(explanation);
      about.appendChild(title);
      //
    });
};
