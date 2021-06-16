<?php
/**
 * Plugin Name: Flow OX Blocks
 * Description: <strong>Flow OX Blocks </strong> is a collection of custom Gutenberg Block developed with Gutenberg Native Components specially for Flow OX Site. Easy to implement with a number of customization options.
 * Author: Zakaria Binsaifullah
 * Author URI: https://webackstop.com/
 * Version: 2.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
