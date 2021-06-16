const attributes = {
    showSubHeading: {
        type: 'boolean',
        default: true
    },
    subHeading: {
        type: 'string',
        default: 'ABOUT FLOWOX'
    },
    subHeadingFontSize: {
        type: 'number',
        default: 14
    },
    heading: {
        type: 'string',
        default: 'Is FlowOx for me?'
    },
    headingTopSpacing: {
        type: 'number',
        default: 0
    },
    headingBottomSpacing: {
        type: 'number',
        default: 10
    },
    headingTag: {
        type: 'string',
        default: 'h2'
    },
    showSeparator: {
        type: 'boolean',
        default: true
    },
    // colors 
    subHeadingColor: {
        type: 'string',
        default: '#ff0000'
    },
    headingColor: {
        type: 'string',
        default: '#000000'
    },
    separatorColor: {
        type: 'string',
        default: '#ff0000'
    },
    // Alignment
    alignment: {
        type: 'string',
        default: 'left'
    },
    // separator
    separatorWidth: {
        type: 'number',
        default: 5
    },
    separatorHeight: {
        type: 'number',
        default: 2
    }
}
export default attributes; 