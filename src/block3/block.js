
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
registerBlockType( 'flox/banner-section', {
	title: __( 'Banner Section' ),
	icon: 'format-image',
	category: 'flow-ox-blocks',
	keywords: [
		__( 'Banner Area' ),
		__( 'Hero Banner' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { containerColor, containerBg, containerPadding, containerPaddingLR, heading, headingTag, description, primaryBtnShow, primaryBtnLabel, primaryBtnLink, pTab, id, url, alt, priBtnColor, showSeparator, separatorColor,  separatorWidth, separatorHeight, showSubHeading, subHeading, subHeadingColor, headingTopSpacing, headingBottomSpacing, subHeadingFontSize } = attributes;
		return (
			<div 
                className={`${className}`}
                style={{
                    padding: `${containerPadding}px ${containerPaddingLR}px ${containerPadding}px ${containerPaddingLR}px`,
                    color: containerColor,
                    background: containerBg
                }}
            >
                <div className="content-area">
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
                        value={ heading }
                        className="heading-tag"
                        style={{
                            color: containerColor,
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
                                }}
                            ></div>
                        </div>
                    }
                    <RichText.Content
                        tagName="p"
                        value={ description }
                    />
                    <div className="buttons-group">
                        {
                            primaryBtnShow &&
                            <a 
                                href={ primaryBtnLink } 
                                target={`_${pTab}`} rel="nofollow noopener"
                                style={{
                                    color: priBtnColor,
                                }}
                            >
                                { primaryBtnLabel }
                            </a>
                        }
                    </div>
                </div>
                <div className="banner-area">
                {
                    url &&
                    <img src={url} alt={alt} className={`card-image wp-image-${id}`} />
                }
                </div>
            </div>
		);
	},
} );
