$(document).ready(() => {
    $('#form').submit((e) => {
        e.preventDefault(); //prevents the default action of the element
        $.ajax({
            url: '/login',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify($('#form').serializeArray()), //takes form data, turns it into array and then into json
            success: (response) => {
                console.log("success!!");
                console.log(response);
            }
        })
    })
})