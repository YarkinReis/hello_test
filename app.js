document.addEventListener("DOMContentLoaded", function () {
    let myForm = document.querySelector("form");
  
    myForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let topText = document.getElementById("topText").value;
      let bottomText = document.getElementById("bottomText").value;
      let imageInput = document.getElementById("imageInput").value;
  
      const oldDiv = document.querySelector("#addedImages");
  
      let newMemeDiv = document.createElement("div");
      newMemeDiv.classList.add("memeDiv");
  
      let newTop = document.createElement("div");
      newTop.textContent = topText;
      newTop.classList.add("newTop");
      newMemeDiv.append(newTop);
  
      let image = document.createElement("img");
      image.src = imageInput;
      image.classList.add("imageClass");
      newMemeDiv.append(image);
  
      let newBottom = document.createElement("div");
      newBottom.textContent = bottomText;
      newBottom.classList.add("newBottom");
      newMemeDiv.append(newBottom);
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "DELETE!";
      newMemeDiv.append(removeButton);
      oldDiv.append(newMemeDiv);
  
      removeButton.addEventListener("click", function (e) {
        let deleteImage = e.target;
        console.log(deleteImage.innerText);
        if (deleteImage.innerText === "DELETE!") {
          newMemeDiv.remove();
          image.remove();
          newBottom.remove();
          newTop.remove();
          removeButton.remove();
        }
      });
  
      if (topText === "" && bottomText === "") {
        e.preventDefault();
        alert("Both fields must be filled!");
        removeButton.remove();
      }
  
      console.log(topText);
      document.querySelector(".topTextClass").value = "";
      document.querySelector(".bottomTextClass").value = "";
  
      document.getElementById("imageInput").value = "";
    });

  });
