$(document).ready(async () => {
   let loginForm = $("#login-form");
   let emailAddressInput = $("#email-address");
   let passwordInput = $("#password");
   let hashedPasswordInput = $("#hashed-password");
   loginForm.on("submit", (e) => {
      e.preventDefault();
      var _this = $(this);
      $.ajax({
         url: `/salt/${emailAddressInput.val()}`,
         method: "GET",
         success: (salt) => {
            console.log(`DEBUGLOG: salt: ${salt}`)
            bcrypt.hash(passwordInput.val(), salt).then(
               (hashedPassword) => {
                  console.log(`salt: ${salt}, password = ${hashedPassword}`)
                  hashedPasswordInput.val(hashedPassword);
                  loginForm.unbind('submit').submit();
               }
            )
         },
         error: (response, statusText) =>{
            var errorText = `An error occured ${response.status}`
            alert(errorText)
         }
      })
   });
   loginForm.ajaxForm({
      success: (responseText, statusText) =>{
         alert(responseText,  statusText);
         location.reload();
      },
      error: (response, statusText) =>{
         var errorText = `An error occured ${response.status}`
         alert(errorText)
      }
   });
})