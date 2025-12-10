$(document).ready(function () {
    let toggler = $('#headerNavbarToggler');
    let navbar = $('#headerNavbar');

    toggler.on('click', function () {
        let isShowed = navbar.hasClass('show');

        if (isShowed) {
            toggler.removeClass('active');
            navbar.removeClass('show');
        }
        else {
            toggler.addClass('active');
            navbar.addClass('show');
        }
    })
});
