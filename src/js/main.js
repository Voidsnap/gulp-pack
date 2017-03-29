$("#grid").load("../previews/grid.html");
$("#typography").load("../previews/typography.html");

// Mobilde / Taplet nav
$(".menu").click( () => {
    $(".menu").toggleClass('open');
    $(".taplet--hide").toggleClass('nav__link--show');
    $(".mobile--hide").toggleClass('nav__link--show');
});
$(".nav a").click( () => {
    $(".menu").removeClass('open');
    $(".taplet--hide").removeClass('nav__link--show');
    $(".mobile--hide").removeClass('nav__link--show');
});
