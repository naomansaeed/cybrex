<?php
function cybrex_enqueue_scripts() {
    wp_enqueue_script(
        'cybrex-color-mode',
        get_template_directory_uri() . '/assets/js/color-mode.js',
        [],
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'cybrex_enqueue_scripts');

// In functions.php
function cybrex_enqueue_fonts() {
    wp_enqueue_style(
        'cybrex-orbitron',
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap',
        [],
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'cybrex_enqueue_fonts');