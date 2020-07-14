$(document).ready(function () {
  // show sign up / registration form
  $(document).on("click", "#sign_up", function () {
    var html = `
            <h2>Sign Up</h2>
            <form id='sign_up_form'>
                <div class="form-group">
                    <label for="name">Login</label>
                    <input type="text" class="form-control" name="name" id="name" required />
                </div>
 
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" required />
                </div>
 
                <button type='submit' class='btn btn-primary'>Sign Up</button>
            </form>
            `;

    clearResponse();
    $("#content").html(html);
  });

  // trigger when registration form is submitted
  $(document).on("submit", "#sign_up_form", function () {
    // get form data
    var sign_up_form = $(this);
    var form_data = JSON.stringify(sign_up_form.serializeObject());

    console.log(form_data);
    // submit form data to api
    $.ajax({
      url: "api/create_user.php",
      type: "POST",
      contentType: "application/json",
      data: form_data,
      success: function (result) {
          console.log(result);
        // if response is a success, tell the user it was a successful sign up & empty the input boxes
        $("#response").html(
          "<div class='alert alert-success'>Successful sign up. Please login.</div>"
        );
        sign_up_form.find("input").val("");
      },
      error: function (xhr, resp, text) {
        // on error, tell the user sign up failed
        $("#response").html(
          "<div class='alert alert-danger'>Unable to sign up. Please contact admin.</div>"
        );
      },
    });
    return false;
  });

  // show login form trigger will be here

  // remove any prompt messages
  function clearResponse() {
    $("#response").html("");
  }

  // showLoginPage() will be here

  // function to make form values to json format
  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };
});
