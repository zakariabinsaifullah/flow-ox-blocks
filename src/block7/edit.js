const { Fragment } = wp.element;
import { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, Toolbar } from '@wordpress/components';
const { __ } = wp.i18n;

/**
 * 
 * Editor Component
 */
const Edit = ({ className, attributes, setAttributes }) => {
    const { id, url, alt, hzlOffset } = attributes;

    return(
        <Fragment>
            <InspectorControls>
                {
                    url &&
                    <PanelBody
                        title="Image Offset Settings"
                        initialOpen={ true }
                    >
                        <RangeControl
                            label="Set Image Horizontal Offset"
                            value={ hzlOffset }
                            onChange={ ( hzlOffset ) => setAttributes( { hzlOffset } ) }
                            min={ -1000 }
                            max={ 1000 }
                        />
                    </PanelBody>
                }
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
            <div className={`${className}`}>
                <div className="content-area">
                    <InnerBlocks 
                        allowedBlocks= { true }
                    />
                </div>
                <div className="banner-area">
                {
                    url ? (
                        <img src={url} alt={alt} className="card-image" style={{ transform: `translateX(${hzlOffset}px)`}} />
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