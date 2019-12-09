import React from 'react';
import { fetchShibe } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ShibeImage({dispatch, image}) {
   

    return (
        <div onClick={e => {
            console.log('clicked')
            e.preventDefault();
            dispatch(fetchShibe());
            console.log('image', image)
        }}>
        <p>Get a picture of a shiba inu</p>
        <img src={image}/>
        
        </div>
    );
}
ShibeImage.propTypes = {
    dispatch: PropTypes.func,
    image: PropTypes.string
}
const mapStateToProps = state => {
    console.log('state', state)
    return {
      image: state
    };
  };
  

export default connect(mapStateToProps)(ShibeImage);