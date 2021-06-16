const { Fragment } = wp.element;
import { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, Toolbar } from '@wordpress/components';
const { __ } = wp.i18n;

// heading Tags 
const headings = [
    {
        label: 'h1',
        value: 'h1'
    },
    {
        label: 'h2',
        value: 'h2'
    },
    {
        label: 'h3',
        value: 'h3'
    },
    {
        label: 'h4',
        value: 'h4'
    },
    {
        label: 'h5',
        value: 'h5'
    },
    {
        label: 'h6',
        value: 'h6'
    },
]

const btnTypes = [
    {
        label: 'Solid',
        value: 'solid'
    },
    {
        label: 'Outline',
        value: 'outline'
    }
]

/**
 * 
 * Editor Component
 */
const Edit = ({ className, attributes, setAttributes }) => {
    const { containerColor, containerBg, containerPadding, containerPaddingLR, heading, headingTag, description, primaryBtnShow, primaryBtnLabel, primaryBtnLink, pNewTab, pTab, secondaryBtnShow, secondaryBtnLabel, secondaryBtnLink, sNewTab, sTab, id, url, alt, priBtnStyle, priBtnColor, priBtnBg, priBtnBorder, secBtnStyle, secBtnColor, secBtnBg, secBtnBorder } = attributes;
    // Primary Button Condition
    if( pNewTab ) {
        setAttributes({ pTab: 'blank' })
    }else {
        setAttributes({ pTab: 'self' })
    }
    // Secondary Button Condition 
    if( sNewTab ) {
        setAttributes({ sTab: 'blank' })
    }else {
        setAttributes({ sTab: 'self' })
    }
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody 
                    title={__("Container Settings")}
                    initialOpen= { true }
                >
                    <RangeControl
                        label="Container Top-Bottom Padding"
                        value={ containerPadding }
                        onChange={ ( containerPadding ) => setAttributes( { containerPadding } ) }
                        min={ 0 }
                        max={ 1000 }
                    />
                    <RangeControl
                        label="Container Left-Right Padding"
                        value={ containerPaddingLR }
                        onChange={ ( containerPaddingLR ) => setAttributes( { containerPaddingLR } ) }
                        min={ 0 }
                        max={ 1000 }
                    />
                    <PanelColorSettings
                        initialOpen={ false }
                        title={ __( 'Container Colors' ) }
                        colorSettings={ [
                            {
                                value: containerColor,
                                onChange: ( colorValue ) => setAttributes( { containerColor: colorValue } ),
                                label: __( 'Color' ),
                            },
                            {
                                value: containerBg,
                                onChange: ( colorValue ) => setAttributes( { containerBg: colorValue } ),
                                label: __( 'Background' ),
                            }
                        ] }
                    />
                </PanelBody>
                <PanelBody 
                    title={__("Heading")}
                    initialOpen= { false }
                >
                    <SelectControl
                        label="Select Heading Tag"
                        options={ headings }
                        onChange={ ( headingTag ) => { setAttributes( { headingTag } ) } }
                        value={ headingTag }
                    />
                </PanelBody>
                <PanelBody 
                    title={__("Primary Button Options")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Primary Button"
                        checked={ primaryBtnShow }
                        onChange={ () => setAttributes({ primaryBtnShow: ! primaryBtnShow }) }
                    />
                    {
                        primaryBtnShow &&
                        <Fragment>
                            <SelectControl
                                label="Select Style"
                                options={ btnTypes }
                                onChange={ ( priBtnStyle ) => { setAttributes( { priBtnStyle } ) } }
                                value={ priBtnStyle }
                            />
                            <TextControl
                                label="Button Label"
                                onChange={ ( primaryBtnLabel ) => setAttributes( { primaryBtnLabel } ) }
                                value={ primaryBtnLabel }
                            />
                            <TextControl
                                label="Button Link"
                                onChange={ ( primaryBtnLink ) => setAttributes( { primaryBtnLink } ) }
                                value={ primaryBtnLink }
                            />
                            <ToggleControl
                                label="Open in New Tab"
                                checked={ pNewTab }
                                onChange={ () => setAttributes({ pNewTab: ! pNewTab }) }
                            />
                            <PanelColorSettings
                                initialOpen={ false }
                                title={ __( 'Colors Settings' ) }
                                colorSettings={ [
                                    {
                                        value: priBtnColor,
                                        onChange: ( colorValue ) => setAttributes( { priBtnColor: colorValue } ),
                                        label: __( 'Color' ),
                                    },
                                    {
                                        value: priBtnBg,
                                        onChange: ( colorValue ) => setAttributes( { priBtnBg: colorValue } ),
                                        label: __( 'Background Color' ),
                                    },
                                    {
                                        value: priBtnBorder,
                                        onChange: ( colorValue ) => setAttributes( { priBtnBorder: colorValue } ),
                                        label: __( 'Border Color' ),
                                    }
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody 
                    title={__("Secondary Button Options")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Secondary Button"
                        checked={ secondaryBtnShow }
                        onChange={ () => setAttributes({ secondaryBtnShow: ! secondaryBtnShow }) }
                    />
                    {
                        secondaryBtnShow &&
                        <Fragment>
                            <SelectControl
                                label="Select Style"
                                options={ btnTypes }
                                onChange={ ( secBtnStyle ) => { setAttributes( { secBtnStyle } ) } }
                                value={ secBtnStyle }
                            />
                            <TextControl
                                label="Button Label"
                                onChange={ ( secondaryBtnLabel ) => setAttributes( { secondaryBtnLabel } ) }
                                value={ secondaryBtnLabel }
                            />
                            <TextControl
                                label="Button Link"
                                onChange={ ( secondaryBtnLink ) => setAttributes( { secondaryBtnLink } ) }
                                value={ secondaryBtnLink }
                            />
                            <ToggleControl
                                label="Open in New Tab"
                                checked={ sNewTab }
                                onChange={ () => setAttributes({ sNewTab: ! sNewTab }) }
                            />
                            <PanelColorSettings
                                initialOpen={ false }
                                title={ __( 'Colors Settings' ) }
                                colorSettings={ [
                                    {
                                        value: secBtnColor,
                                        onChange: ( colorValue ) => setAttributes( { secBtnColor: colorValue } ),
                                        label: __( 'Color' ),
                                    },
                                    {
                                        value: secBtnBg,
                                        onChange: ( colorValue ) => setAttributes( { secBtnBg: colorValue } ),
                                        label: __( 'Background Color' ),
                                    },
                                    {
                                        value: secBtnBorder,
                                        onChange: ( colorValue ) => setAttributes( { secBtnBorder: colorValue } ),
                                        label: __( 'Border Color' ),
                                    }
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
            </InspectorControls>
            <BlockControls>
            {
                url &&
                <Toolbar>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ media => setAttributes({ 
                                url:media.url, 
                                id: media.id,
                                alt: media.alt
                            })}
                            allowedTypes={["image"]}
                            value={id}
                            render={({ open }) => {
                                return (
                                    <Button
                                        className="components-icon-button components-toolbar__control"
                                        label={__(
                                            "Edit Image"
                                        )}
                                        onClick={open}
                                        icon="edit"
                                    />
                                );
                            }}
                        />
                    </MediaUploadCheck>
                    <Button
                        className="components-icon-button components-toolbar__control"
                        label={__(
                            "Delete Image"
                        )}
                        onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                        icon="trash"
                    />
                </Toolbar>
            }
        </BlockControls>
            <div 
                className={`${className}`}
                style={{
                    padding: `${containerPadding}px ${containerPaddingLR}px ${containerPadding}px ${containerPaddingLR}px`,
                    color: containerColor,
                    background: containerBg
                }}
            >
                <div className="content-area">
                    <RichText
                        tagName={ headingTag }
                        value={ heading }
                        className="hero-heading"
                        onChange={ ( heading ) => setAttributes( { heading } ) }
                        style={{
                            color: containerColor
                        }}
                    />
                    <RichText
                        multiline= { true }
                        tagName="p"
                        value={ description }
                        onChange={ ( description ) => setAttributes( { description } ) }
                        placeholder="Write a short description"
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
                    url ? (
                        <img src={url} alt={alt} className="card-image" />
                    ) : (
                        <MediaPlaceholder
                            icon="format-image"
                            onSelect={ media => setAttributes({ 
                                url:media.url, 
                                id: media.id,
                                alt: media.alt
                            })}
                            onFilesPreUpload={ media => setAttributes({ 
                                url:media.url, 
                                id: media.id,
                                alt: media.alt
                            })}
                            onSelectURL={ url => setAttributes({ url })}
                            allowedTypes={["image"]}
                            labels = { { title: 'Add Image' } }
                        />
                    )
                }
                </div>
            </div>
        </Fragment>    
    )
}

export default Edit;