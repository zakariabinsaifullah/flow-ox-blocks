
//  Import CSS.
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'flox/faq-item', {
	title: __( 'FAQ Item' ),
	description: __( 'Acts as a child block of FAQ Block' ),
	icon: 'menu-alt3',
	category: 'flow-ox-blocks',
	keywords: [
		__( 'FAQ Block' ),
	],
	attributes,
	edit,
	save: ({ attributes }) => {
		const { className, heading, headingTag, headingColor, showIcon, iconClass, borderTopWidth, borderBottomWidth, borderTopColor, borderBottomColor } = attributes; 
		return (
			<div 
                className={ `${className} single-accordion-container` }
                style={{
                    borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                    borderBottom: `${borderBottomWidth}px solid ${borderBottomColor}`,
                }}
            >
                <div className="accordion-head" style={{ color: headingColor}}>
                    <div className="accordion-heading">
                        <RichText.Content
                            tagName={ headingTag }
                            value={ heading }
                            style={{ color: headingColor }}
                        /> 
                    </div>
                    {
                        showIcon &&
                        <div className="collapse-icon">
                            <span className={`dashicons dashicons-${iconClass}`}></span>
                        </div>
                    }
                </div>
                <div className={`accordion-body`}>
                    <InnerBlocks.Content />
                </div>
            </div>
		);
	},
} );
