const { Client, Account } = Appwrite; // Import Account class

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6627ef9158cb1afed2f7");
const account = new Account(client);
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const promise = account.createEmailPasswordSession(email, password);

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("Logged succesfully");
        window.location.href = "index.html";
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed. Please try again.");
  }
});
