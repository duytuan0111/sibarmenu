$(document).ready(function() {
    const body = $('.body');
    const sidebar = $('.sidebar');
    const toggle = $('.toggle');
    const searchBtn = $('.search-box');
    const modeSwitch = $('.toggle-switch');
    const modeText = $('.mode-text');

    $(modeSwitch).on('click', function(e) {
        $('.body').toggleClass('dark');
    });

    $(toggle).on('click', function(e) {
        $('.sidebar').toggleClass('close');
    });
});