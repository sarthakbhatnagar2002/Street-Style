const { Client, Account, ID } = Appwrite;

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6627ef9158cb1afed2f7");

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  try {
    const response = (account = new Account(client));
    account.create(ID.unique(), email, password).then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    console.log("Registration successful User added to database:", response);
    window.location.href = "Login.html";
    // Optionally, redirect to a login or another page
  } catch (error) {
    console.error("Registration failed:", error);
    console.log("Registration failed. Please try again.");
  }
});
