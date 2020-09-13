import { Container } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    const footerStyle ={
        backgroundColor: '#4267B2',
        textAlign: 'center',
        color: 'white'
    }
    return (
        <div style={footerStyle}>
            <Container maxWidth='sm'>
                <p><small>© all rights reserved by Post Viewer || develop by <span style={{color:'#F44336'}}>Nihal Towfiq</span></small></p>
            </Container>            
        </div>
    );
};

export default Footer;