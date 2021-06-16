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
    const { containerColor, containerBg, containerPadding, containerPaddingLR, heading, headingTag, description, primaryBtnShow, primaryBtnLabel, primaryBtnLink, pNewTab, pTab,id, url, alt, priBtnColor, showSeparator, separatorColor,  separatorWidth, separatorHeight, showSubHeading, subHeading, subHeadingColor, headingTopSpacing, headingBottomSpacing, subHeadingFontSize } = attributes;
    // Button Condition
    if( pNewTab ) {
        setAttributes({ pTab: 'blank' })
    }else {
        setAttributes({ pTab: 'self' })
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
                    <RangeControl
                        label="Top Spacing"
                        value={ headingTopSpacing }
                        onChange={ ( headingTopSpacing ) => setAttributes( { headingTopSpacing } ) }
                        min={ 0 }
                        max={ 100 }
                        help="Unit in px"
                    />
                    <RangeControl
                        label="Bottom Spacing"
                        value={ headingBottomSpacing }
                        onChange={ ( headingBottomSpacing ) => setAttributes( { headingBottomSpacing } ) }
                        min={ 0 }
                        max={ 100 }
                        help="Unit in px"
                    />
                </PanelBody>
                <PanelBody 
                    title={__("Sub Heading")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Subheading"
                        checked={ showSubHeading }
                        onChange={ () => setAttributes({ showSubHeading: ! showSubHeading }) }
                    />
                    {
                        showSubHeading &&
                        <Fragment>
                            <RangeControl
                                label="Sub Heading Font Size"
                                value={ subHeadingFontSize }
                                onChange={ ( subHeadingFontSize ) => setAttributes( { subHeadingFontSize } ) }
                                min={ 0 }
                                max={ 50 }
                            />
                            <PanelColorSettings
                                initialOpen={ false }
                                title={ __( 'Sub Heading Color' ) }
                                colorSettings={ [
                                    {
                                        value: subHeadingColor,
                                        onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
                                        label: __( 'Color' ),
                                    }
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody 
                    title={__("Separator")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Separator"
                        checked={ showSeparator }
                        onChange={ () => setAttributes({ showSeparator: ! showSeparator }) }
                    />
                    {
                        showSeparator &&
                        <Fragment>
                            <RangeControl
                                label="Separator Width"
                                value={ separatorWidth }
                                onChange={ ( separatorWidth ) => setAttributes( { separatorWidth } ) }
                                min={ 1 }
                                max={ 100 }
                                help="Unit in %"
                            />
                            <RangeControl
                                label="Separator Height"
                                value={ separatorHeight }
                                onChange={ ( separatorHeight ) => setAttributes( { separatorHeight } ) }
                                min={ 1 }
                                max={ 500 }
                                help="Unit in px"
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody 
                    title={__("Link Button Options")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Link Button"
                        checked={ primaryBtnShow }
                        onChange={ () => setAttributes({ primaryBtnShow: ! primaryBtnShow }) }
                    />
                    {
                        primaryBtnShow &&
                        <Fragment>
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
                    {
                        showSubHeading &&
                        <RichText
                            tagName="p"
                            className="uagb-desc-text"
                            value={ subHeading }
                            onChange={ ( subHeading ) => setAttributes( { subHeading } ) }
                            style={{
                                color: subHeadingColor,
                                fontSize: subHeadingFontSize
                            }}
                        />
                    }
                    <RichText
                        tagName={ headingTag }
                        value={ heading }
                        className="heading-tag"
                        onChange={ ( heading ) => setAttributes( { heading } ) }
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
                                    color: priBtnColor
                                }}
                            >
                                { primaryBtnLabel }
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