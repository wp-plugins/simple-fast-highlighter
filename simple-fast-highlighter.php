<?php

/*
Plugin Name: Simple Fast Highlighter
Description: Fast syntax highlighter written in Javascript.
Version: 0.9.3
Author: Michiel van Eerd
Author URI: http://www.michielvaneerd.nl
License: GPL2
*/

function simplefasthighlighter_scripts() {
  wp_enqueue_style('simplefasthighlightercss',
    plugins_url('simple-fast-highlighter.css', __FILE__));
  wp_enqueue_script('simplefasthighlighterjs',
    plugins_url('simple-fast-highlighter.js', __FILE__),
    array(), false, true);
  wp_enqueue_script('simplefasthighlighterjslang',
    plugins_url('simple-fast-highlighter_lang.js', __FILE__),
    array(), false, true);
  wp_enqueue_script('simplefasthighlighterjsinit',
    plugins_url('simple-fast-highlighter_init.js', __FILE__),
    array(), false, true);
}
add_action('wp_enqueue_scripts', 'simplefasthighlighter_scripts');

function simplefasthighlighter_mce_buttons_2($buttons) {
	array_unshift($buttons, 'styleselect');
	return $buttons;
}
add_filter('mce_buttons_2', 'simplefasthighlighter_mce_buttons_2');

function simplefasthighlighter_mce_before_init_insert_formats($init_array) {
    $style_formats = array(
      array(
        'title' => "Code",
        'inline' => "code"
      ),
      array(
        'title' => 'C',
        'selector' => 'code',
        'classes' => 'c'
      ),
      array(
        'title' => 'C#',
        'selector' => 'code',
        'classes' => 'csharp'
      ),
      array(
        'title' => 'CSS',
        'selector' => 'code',
        'classes' => 'css'
      ),
      array(
        'title' => 'Java',
        'selector' => 'code',
        'classes' => 'java'
      ),
      array(
        'title' => 'Javascript',
        'selector' => 'code',
        'classes' => 'js'
      ),
      array(
        'title' => 'PHP',
        'selector' => 'code',
        'classes' => 'php'
      ),
      array(
        'title' => 'Python',
        'selector' => 'code',
        'classes' => 'python'
      ),
      array(
        'title' => 'SQL',
        'selector' => 'code',
        'classes' => 'sql'
      ),
      array(
        'title' => 'VB.NET',
        'selector' => 'code',
        'classes' => 'vb'
      )
    );
    $init_array['style_formats'] = json_encode($style_formats);
    return $init_array;
}
add_filter( 'tiny_mce_before_init',
  'simplefasthighlighter_mce_before_init_insert_formats' );

?>