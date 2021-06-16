<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Registration Function 
*/
function flox_blocks_register( $block, $options=array() ){
    return register_block_type(
        'flox/' . $block,
        array_merge(
			array(
				'style'         => 'flox_blocks-style-css',
				'editor_script' => 'flox_blocks-block-js',
				'editor_style'  => 'flox_blocks-block-editor-css',
			),
            $options
        )
    );
}
/**
 * Blocks Initialization 
*/
function flox_blocks_init() {
	wp_register_style(
		'flox_blocks-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);
	// Register block editor script for backend.
	wp_register_script(
		'flox_blocks-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);
	// Register block editor styles for backend.
	wp_register_style(
		'flox_blocks-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);

	// Register Blocks 
	flox_blocks_register( 'advanced-heading' );
	flox_blocks_register( 'hero-section' );
	flox_blocks_register( 'banner-section' );
	flox_blocks_register( 'faq-item' );
	flox_blocks_register( 'faq-block' );
	flox_blocks_register( 'image-offset-block' );

}
add_action( 'init', 'flox_blocks_init' );

/*
 * New Category
 * */
function floxb_blocks_new_cat( $categories ){
	return array_merge(
		$categories,
		array(
			array(
				'title' => 'Flow OX Blocks',
				'slug'  => 'flow-ox-blocks'
			)
		)
	);
}
add_filter( 'block_categories', 'floxb_blocks_new_cat' );
/**
 * External Assets 
*/
function flox_enqueue_blocks_assets_enqueue(){
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_script( 'plguin-js', plugins_url( '../inc/js/plugin.js', __FILE__ ), array('jquery'), time(), true );
}
add_action( 'enqueue_block_assets', 'flox_enqueue_blocks_assets_enqueue' );
