$(document).ready(async () => {
   let loginForm = $("#login-form");
   let emailAddressInput = $("#email-address");
   let passwordInput = $("#password");
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
                  var $submissionForm = $("<form>", {target: "_self", action: "/login", method: "POST", enctype: "application/x-www-form-urlencoded"});
                  $submissionForm.append($("<input>", {value: emailAddressInput.val(), name: "email-address"}));
                  $submissionForm.append($("<input>", {value: hashedPassword, name: "hashed-password"}));
                  $submissionForm.hide();
                  $submissionForm.ajaxForm({
                     success: (responseURL) =>{
                        location.replace(responseURL);
                     },
                     error: (response, statusText) =>{
                        var errorText = `An error occured ${response.status}`
                        alert(errorText)
                     }
                  });
                  document.body.append($submissionForm[0]);
                  $submissionForm.submit();
                  $submissionForm.remove();
               }
            )
         },
         error: (response, statusText) =>{
            var errorText = `An error occured ${response.status}`
            alert(errorText)
         }
      })
   });
})