const { Fragment } = wp.element;
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
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

// Alignments 
const aligns = [
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Center',
        value: 'center'
    },
    {
        label: 'Right',
        value: 'right'
    }
]

/**
 * 
 * Editor Component
 */
const Edit = ({ className, attributes, setAttributes }) => {
    const { showSubHeading, subHeading, heading, headingTag, showSeparator, subHeadingColor, headingColor, separatorColor, alignment, separatorWidth, separatorHeight, headingTopSpacing, headingBottomSpacing, subHeadingFontSize  } = attributes;

    return(
        <Fragment>
            <InspectorControls>
                <PanelBody 
                    title={__("Alignement")}
                    initialOpen= { true }
                >
                    <SelectControl
                        label="Select Alignment"
                        options={ aligns }
                        onChange={ ( alignment ) => { setAttributes( { alignment } ) } }
                        value={ alignment }
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
                        <RangeControl
                            label="Font Size"
                            value={ subHeadingFontSize }
                            onChange={ ( subHeadingFontSize ) => setAttributes( { subHeadingFontSize } ) }
                            min={ 1 }
                            max={ 50 }
                            help="Unit in px"
                        />
                    }
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
                <PanelColorSettings
                    initialOpen={ false }
                    title={ __( 'Colors Settings' ) }
                    colorSettings={ [
                        {
                            value: subHeadingColor,
                            onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
                            label: __( 'Sub Heading Color' ),
                        },
                        {
                            value: headingColor,
                            onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                            label: __( 'Heading Color' ),
                        },
                        {
                            value: separatorColor,
                            onChange: ( colorValue ) => setAttributes( { separatorColor: colorValue } ),
                            label: __( 'Separator Color' ),
                        },
                    ] }
                />
            </InspectorControls>
            <div 
                className={`${className}`}
                style={{
                    textAlign: alignment
                }}
            >
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
                    className="uagb-heading-text"
                    value={ heading }
                    onChange={ ( heading ) => setAttributes( { heading } ) }
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
        </Fragment>    
    )
}

export default Edit;