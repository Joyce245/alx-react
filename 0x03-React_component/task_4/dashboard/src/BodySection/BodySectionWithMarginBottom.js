import React from 'react';
import BodySection from './BodySection';
import propTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='bodySectionWithMargin'>
                <BodySection {...this.props}/>
            </div>
            )
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([
        propTypes.string,
        propTypes.element
    ])
}

export default BodySectionWithMarginBottom;