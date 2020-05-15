$(document).ready(function () {

    $.validator.addMethod("ccExpiration", function(value, element) {
      return this.optional(element) || /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/.test(value);
    }, "Please write the expiration in mm/yy form")

    $.validator.addMethod("ccNumber", function(value, element) {
      return this.optional(element) || /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value)
    }, "Please enter your credit card number without spaces or dashes")




    $("#checkout-form").validate({
            rules: {
                firstName: "required",
                lastName: "required",
                email: {
                    required: true,
                    email: true
                },
                address: "required",
                city: "required",
                country: "required",
                state: "required",
                zip: "required",
                ccName: "required",
                ccNumber: {
                    required: true,
                    number: true,
                    ccNumber: true
                },
                ccExpiration: {
                    required: true,
                    ccExpiration: true,
                    maxlength: 5,
                    minlength: 4
                },
                ccCVV: {
                    required: true,
                    number: true,
                    maxlength: 3,
                    minlength: 3
                }
            },
            // Specify validation error messages
            messages: {
                firstName: "Please enter your firstname",
                lastName: "Please enter your lastname",
                email: "Please enter a valid email address",
                address: "Please enter your address",
                city: "Please enter your city",
                country: "Please enter your country",
                state: "Please enter your state",
                zip: "Please enter your zip code",
                ccName: "Please enter the name on the card",
                ccCVV: "Please enter a valid 3 digit number"
            }
        })

    $("#checkout-form").on("submit", function(e) {
        if ($("#checkout-form").valid()) {
            e.preventDefault()
            $(".to-checkout").hide()
            $(".checkout-buttons").show()
            $(".pre-checkout-text").hide()
            $(".post-checkout-text").show()
            $("#checkout-form input, #checkout-form select").attr("disabled", "true")
            $("html, body").animate({ scrollTop: 0 }, "fast");
        }
    })

    $("#change-info-button").on("click", function(e) {
        e.preventDefault()
        $(".to-checkout").show()
        $(".checkout-buttons").hide()
        $(".pre-checkout-text").show()
        $(".post-checkout-text").hide()
        $("#checkout-form input, #checkout-form select").removeAttr("disabled")
    })

    $("#place-order-button").on("click", function(e) {
        e.preventDefault()
    })
})