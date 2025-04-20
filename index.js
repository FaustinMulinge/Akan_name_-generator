document.getElementById("fm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const birthdate = document.getElementById("birthdate").value;
    const genderElements = document.getElementsByName("gender");
    let gender = "";
    for (const gen of genderElements) {
      if (gen.checked) {
        gender = gen.value;
        break;
      }
    }
  
    if (!birthdate) {
      alert("Please enter a birthdate.");
      return;
    }
  
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    if (day < 1 || day > 31) {
      alert("The day must be between 1 and 31.");
      return;
    }
  
    if (month < 1 || month > 12) {
      alert("The month must be between 1 and 12.");
      return;
    }
  
    if (!gender) {
      alert("Please select a gender.");
      return;
    }
  
    const CC = Math.floor(year / 100);     
    const YY = year % 100;                 
    const MM = month;
    const DD = day;
  
    const d = Math.floor(((4 * CC - 2 * CC - 1) + (45 * YY) + (Math.floor(1026 * (MM + 1) / 100)) + DD) % 7);
  
    const dayOfWeek = (d + 7) % 7;
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    const displaySection = document.getElementById("akan-name-display");
    const nameElement = document.getElementById("akan-name");
  
    nameElement.textContent = `Your Akan name is ${akanName}.`;
    displaySection.style.display = "block";
  });