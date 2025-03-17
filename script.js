

// header javascript   

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  });
  


  // choose file section javscript of Upload.html file  


  window.addEventListener("load",() => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");
  
  
    input.addEventListener("change", (e) => {
      let fileName = e.target.files[0].name;
      let filetype = e.target.value.split(".").pop();
      fileshow(fileName, filetype);
    });
  
    const fileshow=(fileName, filetype)=>{
      const showfileboxElem = document.createElement("div");
  
      showfileboxElem.classList.add("showfilebox");
  
      const leftElem = document.createElement("div");
  
      leftElem.classList.add("left");
  
      const fileTypeElem = document.createElement("span");
  
      fileTypeElem.classList.add("filetype");
  
      fileTypeElem.innerHTML = filetype;
  
      leftElem.append(fileTypeElem);
  
      const filetitleElem = document.createElement("h3");
  
      filetitleElem.innerHTML = fileName;
  
      leftElem.append(filetitleElem);
  
      showfileboxElem.append(leftElem);
  
      const rightElem = document.createElement("div");
  
      rightElem.classList.add("right");
      showfileboxElem.append(rightElem);
      const crossElem = document.createElement("span");
  
      crossElem.innerHTML = "&#215;";
      rightElem.append(crossElem);
  
      filewrapper.append(showfileboxElem);
  
      crossElem.addEventListener("click", () => {
        filewrapper.removeChild(showfileboxElem);
      });
    };
  });
  
  