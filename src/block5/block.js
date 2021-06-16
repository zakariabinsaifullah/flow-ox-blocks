
//  Import CSS.
import { InnerBlocks, RichText } from '@wordpress/block-editor';
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
registerBlockType( 'flox/faq-block', {
	title: __( 'FAQ Block' ),
	icon: 'editor-ul',
	category: 'flow-ox-blocks',
	keywords: [
		__( 'FAQ Block' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { containerBg, contentPadding, contentWidth, showSubHeading, subHeading, heading, headingTag, showSeparator, subHeadingColor, headingColor, separatorColor, alignment, separatorWidth, separatorHeight, faqDesc, headingTopSpacing, headingBottomSpacing, subHeadingFontSize  } = attributes;
		return (
            <div className={`${className}`} style={{ background: containerBg, padding: `${contentPadding}px` }}>
                <div className="faq-wrapper" style={{ maxWidth: `${contentWidth}%` }}>
                    <div 
                        className="faq-head"
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
                        <div className="faq-desc">
                            <RichText.Content 
                                tagName="p"
                                value={ faqDesc }
                            />
                        </div>
                    </div>
                    <div className="faq-items">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
		);
	},
} );
