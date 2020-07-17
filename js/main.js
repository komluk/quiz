$(document).ready(function () {
  $(document).on("click", "#sign_up", function () {
    var html = `
            <h2>Registration</h2>
            <form id='sign_up_form'>
                <div class="form-group">
                    <label for="name">Login</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder='Enter name' required/>
                </div>
 
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" placeholder='Password' required />
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

    // submit form data to api
    $.ajax({
      url: "api/controllers/user/create.php",
      type: "POST",
      contentType: "application/json",
      data: form_data,
      success: function (result) {
        $("#response").html(
          "<div class='alert alert-success'>Successful sign up. Please login.</div>"
        );
        sign_up_form.find("input").val("");
      },
      error: function (xhr, resp, text) {
        $("#response").html(
          "<div class='alert alert-danger'>Unable to sign up. Please contact admin.</div>"
        );
      },
    });
    return false;
  });

  // remove any prompt messages
  function clearResponse() {
    $("#response").html("");
  }

  // showLoginPage() will be here
  $(document).on("click", "#login", function () {
    showLoginPage();
  });

  $(document).on("submit", "#login_form", function () {
    // get form data
    var login_form = $(this);
    var form_data = JSON.stringify(login_form.serializeObject());

    $.ajax({
      url: "api/controllers/user/login.php",
      type: "POST",
      contentType: "application/json",
      data: form_data,
      success: function (result) {
        setCookie("jwt", result.jwt, 1);
        showHomePage();
        $("#response").html(
          "<div class='alert alert-success'>Successful login.</div>"
        );
      },
      error: function (xhr, resp, text) {
        $("#response").html(
          "<div class='alert alert-danger'>Login failed. Email or password is incorrect.</div>"
        );
        login_form.find("input").val("");
      },
    });
    return false;
  });

  // show home page
  $(document).on("click", "#quiz", function () {
    showHomePage();
    clearResponse();
  });

  // show home page
  function showHomePage() {
    var jwt = getCookie("jwt");

    // $.post("api/controllers/token/validate.php", JSON.stringify({ jwt: jwt }))
    //   .done(function (result) {
    //     console.log(result);

    //     var html = `
    //         <div class="card">
    //             <div class="card-header">Welcome to Quiz!</div>
    //             <div class="card-body">
    //                 <h5 class="card-title">You are logged in.</h5>
    //                 <p class="card-text">You won't be able to access the quiz if you are not logged in.</p>
    //             </div>
    //         </div>
    //         `;

    //     $("#content").html(html);
    //     showLoggedInMenu();
    //     showQuestions(result.data);
    //   })
    //   .fail(function (result) {
    //     showLoginPage();
    //     $("#response").html(
    //       "<div class='alert alert-danger'>Please login to access the quiz page.</div>"
    //     );
    //   });
  }

  function showQuestions(user) {
    $.getJSON("api/controllers/question/read.php", function (data) {
      console.log({ user, data });
      // var read_questions_html = `
      //     <table class='table table-bordered table-hover'>
      //     <!-- creating our table heading -->
      //     <tr>
      //         <th class='w-25-pct'>Name</th>
      //         <th class='w-10-pct'>Price</th>
      //         <th class='w-15-pct'>Category</th>
      //         <th class='w-25-pct text-align-center'>Action</th>
      //     </tr>`;

      // $.each(data.records, function (key, val) {
      //   read_questions_html += ``;
      // });

      // read_questions_html += `</table>`;
    });
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // if the user is logged in
  function showLoggedInMenu() {
    // hide login and sign up from navbar & show logout button
    $("#login, #sign_up").hide();
    $("#logout").show();
  }

  function showLoginPage() {
    setCookie("jwt", "", 1);

    var html = `
    <h2>Login</h2>
      <form id='login_form'>
          <div class='form-group'>
              <label for='name'>Login</label>
              <input type='text' class='form-control' id='name' name='name' placeholder='Enter name'>
          </div>

          <div class='form-group'>
              <label for='password'>Password</label>
              <input type='password' class='form-control' id='password' name='password' placeholder='Password'>
          </div>

          <button type='submit' class='btn btn-primary'>Login</button>
      </form>
    `;
    $("#content").html(html);

    clearResponse();
    showLoggedOutMenu();
  }

  function setCookie(name, value, exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function showLoggedOutMenu() {
    $("#login, #sign_up").show();
    $("#logout").hide();
  }

  // logout the user
  $(document).on("click", "#logout", function () {
    showLoginPage();
    $("#response").html(
      "<div class='alert alert-info'>You are logged out.</div>"
    );
  });

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
