$('.nav-right-toggle-alvin').on('click', function () {
    $('.nav-alvin').toggleClass('expand');
});
$('.nav-toggler-alvin').on('click', function () {
    $('.nav-alvin .nav-pills .nav-link').toggleClass('hidden'); $('.nav-alvin .nav-pills').toggleClass('hidden'); $('.nav-right-toggle-alvin').toggleClass('hidden');
})