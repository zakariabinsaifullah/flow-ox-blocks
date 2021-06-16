
//  Import CSS.
import { RichText } from '@wordpress/block-editor';
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
registerBlockType( 'flox/advanced-heading', {
	title: __( 'Advanced Heading' ),
	icon: 'heading',
	category: 'flow-ox-blocks',
	keywords: [
		__( 'Heading' ),
		__( 'Advanced Heading' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { showSubHeading, subHeading, heading, headingTag, showSeparator, subHeadingColor, headingColor, separatorColor, alignment, separatorWidth, separatorHeight, headingTopSpacing, headingBottomSpacing, subHeadingFontSize  } = attributes;
		return (
			<div 
                className={`${className}`}
                style={{
                    textAlign: alignment
                }}
            >
                {
                    showSubHeading &&
                    <RichText.Content
                        tagName="p"
                        className="uagb-desc-text"
                        value={ subHeading }
                        style={{
                            color: subHeadingColor,
                            fontSize: subHeadingFontSize
                        }}
                    />
                }
                <RichText.Content
                    tagName={ headingTag }
                    className="uagb-heading-text"
                    value={ heading }
                    style={{
                        color: headingColor,
                        marginTop: headingTopSpacing,
                        marginBottom: headingBottomSpacing,
                        marginLeft: 'atuo',
                        marginRight: 'atuo',
                    }}
                />
                {
                    showSeparator &&
                    <div className="separator">
                        <div 
                            style={{ 
                                background: separatorColor, 
                                width: `${separatorWidth}%`, 
                                height: separatorHeight,
                                margin: alignment == 'center' ? '0 auto' : null,
                                float: alignment == 'right' ? 'right' : null,
                            }}
                        ></div>
                    </div>
                }
            </div>
		);
	},
} );
