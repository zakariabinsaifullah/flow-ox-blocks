
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
registerBlockType( 'flox/hero-section', {
	title: __( 'Hero Section' ),
	icon: 'align-full-width',
	category: 'flow-ox-blocks',
	keywords: [
		__( 'Hero Area' ),
		__( 'Hero Banner' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { containerColor, containerBg, containerPadding, containerPaddingLR, heading, headingTag, description, primaryBtnShow, primaryBtnLabel, primaryBtnLink, pTab, secondaryBtnShow, secondaryBtnLabel, secondaryBtnLink, sTab, id, url, alt, priBtnStyle, priBtnColor, priBtnBg, priBtnBorder, secBtnStyle, secBtnColor, secBtnBg, secBtnBorder } = attributes;
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
                    <RichText.Content
                        tagName={ headingTag }
                        value={ heading }
                        className="hero-heading"
                        style={{
                            color: containerColor
                        }}
                    />
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
                                    background: priBtnStyle == 'solid' ? priBtnBg : 'transparent',
                                    border: `2px solid ${priBtnBorder}`,
                                }}
                            >
                                { primaryBtnLabel }
                            </a>
                        }
                        {
                            secondaryBtnShow &&
                            <a 
                                href={ secondaryBtnLink } 
                                target={`_${sTab}`} rel="nofollow noopener"
                                style={{
                                    color: secBtnColor,
                                    background: secBtnStyle == 'solid' ? secBtnBg : 'transparent',
                                    border: `2px solid ${secBtnBorder}`,
                                }}
                            >
                                { secondaryBtnLabel }
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
