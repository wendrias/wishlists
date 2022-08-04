$(document).ready(() => {

    $('#login-form').submit((e) => {
        e.preventDefault(); //prevents the default action of the element
        $.ajax({
            url: '/login',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify($('#login-form').serializeArray()), //takes form data, turns it into array and then into json
            success: (response) => {
                console.log("success!!");
                console.log(response);
            }
        })
    })

    $('#register-form').submit((e) => {
        e.preventDefault(); //prevents the default action of the element
        $.ajax({
            url: '/register',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify($('#register-form').serializeArray()), //takes form data, turns it into array and then into json
            complete: (response) => { //redirect to login page
                if (response.status == 200) {
                    $(location).attr('href', '/login.html')
                } else {
                    $(location).attr('href', '/register.html:error') // change this?
                }
            },
            success: () => {
                console.log("success!");
            }
        })
    })
})