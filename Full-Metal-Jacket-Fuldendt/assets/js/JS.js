// GALLERY
// VARIABLERNE:
let imgCont = document.querySelectorAll(".gallery_content");
let imgCon = document.querySelector("#imgLarge");

// KIGGER EFTER "CONTAINERE" MED CLASS: ".gallery_content" (VARIABLEN: "imgCont").
imgCont.forEach((cont) => {
  //KIGGER PÅ ALLE BILLEDER I CONTAINERE MED CLASS: "gallery_content":
  let contImg = cont.querySelectorAll("img");

  contImg.forEach((e) => {
    // "LYTTER" EFTER "CLICK-EVENTET"
    e.addEventListener("click", () => {
      // SKIFTER "SOURCE" PÅ #imgLarge TIL DEN STI DER ER PÅ CLICKEVENTET:
      imgCon.src = e.src;
    });
  });
});

// FORM VALIDATION

const validate = (form) => {
    console.log("dette er fra vores form ", form);
  
    let errors = [];
  
    console.log(form.fname.value);
  
    if (form.fname.value === "") {
      errors.push("First name is required\n");
    }
  
    console.log(form.lname.value);
    if (form.lname.value === "") {
      errors.push("Last name is required\n");
    }
  
    if (form.password.value.length < 5) {
      errors.push("Password must be at least 5 characters\n");
    }
  
    if (form.password.value !== form.confirmPassword.value) {
      errors.push("Password & confirm password doesn't match\n");
    }
    if (form.password.value.length < 5) {
      errors.push("Password must be at least 5 characters\n");
    }
    if (errors.length > 0) {
      console.log("Number of errors are ", errors.length);
      let msg = "The following errors were detected: \n\n";
      for (let i = 0; i < errors.length; i++) {
        msg += errors[i];
      }
      alert(msg);
      return false;
    }
  
    return true;
  };