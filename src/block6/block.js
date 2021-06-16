
//  Import CSS.
import { InnerBlocks } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Block Registration
*/
registerBlockType( 'flox/image-offset-block', {
	title: __( 'Image Offset Block' ),
	icon: 'format-image',
	category: 'flow-ox-blocks',
	keywords: [
		__( 'Image Offset' ),
		__( 'Image Banner' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { id, url, alt, hzlOffset } = attributes;
		return (
			<div className={`${className}`}>
                <div className="content-area">
                    <InnerBlocks.Content />
                </div>
                <div className="banner-area">
                {
                    url &&
                    <img src={url} alt={alt} className={`card-image wp-image-${id}`} style={{ transform: `translateX(${hzlOffset}px)`}} />
                }
                </div>
            </div>
		);
	},
} );
