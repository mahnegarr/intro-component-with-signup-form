const inputs = document.querySelectorAll("input");
const images = document.querySelectorAll("img");
const errors = document.querySelectorAll(".error");
const imagesArray = [...images];
const errorsArray = [...errors];

inputs.forEach((i) => {
  i.addEventListener("input", (e) => {
    if (e.target.value == "") {
      imagesArray.forEach((img) => {
        img.style.display = "block";
      });
      errorsArray.forEach((err) => {
        err.style.display = "block";
      });
    } else {
      imagesArray.forEach((img) => {
        img.style.display = "none";
      });
      errorsArray.forEach((err) => {
        err.style.display = "none";
      });
    }
    if (i.type == "email") {
      if (validateEmail(i.value)) {
        imagesArray.forEach((img) => {
          img.style.display = "none";
        });
        errorsArray.forEach((err) => {
          err.style.display = "none";
        });
      }
      else{
        imagesArray.forEach((img) => {
            img.style.display = "block";
          });
          errorsArray.forEach((err) => {
            err.style.display = "block";
          });
      }
    }
  });
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
