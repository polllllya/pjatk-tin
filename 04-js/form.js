const form = document.getElementById("myForm"); //Pobiera referencję
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");

const errorDisplay = document.getElementById("errors");

const nameErrorContainer = document.getElementById("nameErrorContainer");
const emailErrorContainer = document.getElementById("emailErrorContainer");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
  // Dodaje nasłuchiwanie na zdarzenie submit formularza, reagujące na funkcję zwrotną podczas wysyłania formularza.
  // Pozwala to na wykonanie określonych działań w momencie, gdy formularz zostanie wysłany

  errorDisplay.innerHTML = ""; // Czyści zawartość kontenera błędów ogólnych, aby usunąć ewentualne wcześniejsze komunikaty o błędach.

  nameField.value = nameField.value.trim(); // Usuwa białe znaki z początku i końca wartości wprowadzonej do pola imienia.
  if (nameField.value.length < 2 || nameField.value.length > 60) {
    nameError.innerHTML = "* the name must be between 2 and 60 characters long"; // Ustawia komunikat błędu dla pola imienia.
    nameErrorContainer.style.display = "inline-block"; //Ustawia styl kontenera błędu imienia na "inline-block", co oznacza, że będzie widoczny.
    nameField.classList.add("error"); //  Dodaje klasę "error" do pola imienia, co może wpłynąć na jego wygląd (np. zmiana koloru ramki).
    errorDisplay.innerHTML +=
      "* the name must be between 2 and 60 characters long<br>"; // Dodaje komunikat błędu do ogólnego kontenera błędów.
    event.preventDefault(); // Zapobiega domyślnej akcji wysyłania formularza, aby uniknąć przeładowania strony.
    // Jeśli nie użyjesz event.preventDefault() dla zdarzenia submit formularza, przeglądarka będzie wykonywać domyślną akcję (czyli próbować przesłać formularz do serwera).
  } else {
    nameErrorContainer.style.display = "none"; // Ukrywa kontener błędu imienia.
    nameField.classList.remove("error"); // Usuwa klasę "error" z pola imienia.
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailField.value.match(emailPattern)) {
    //Sprawdza, czy wartość wprowadzona do pola e-maila nie pasuje do wzorca.
    emailError.innerHTML = "* incorrect email address";
    emailErrorContainer.style.display = "inline-block";
    emailField.classList.add("error");
    errorDisplay.innerHTML += "* incorrect email address<br>";
    event.preventDefault();
  } else {
    emailErrorContainer.style.display = "none";
    emailField.classList.remove("error");
  }
});
