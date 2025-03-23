$(document).ready(function () {
    $("#booking-form").submit(function (event) {
        event.preventDefault(); 

        const guestName = $("#guest-name").val();
        const roomType = $("#room-type").val();
        const checkIn = $("#check-in").val();
        const checkOut = $("#check-out").val();
        const guests = $("#guests").val();
        const requests = $("#requests").val();

        alert(
            `Booking Details:\n\n` +
            `Guest Name: ${guestName}\n` +
            `Room Type: ${roomType}\n` +
            `Check-In Date: ${checkIn}\n` +
            `Check-Out Date: ${checkOut}\n` +
            `Number of Guests: ${guests}\n` +
            `Special Requests: ${requests || "None"}`
        );

        $("#booking-form")[0].reset();
    });
});