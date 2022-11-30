import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>Login With Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/>Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/>WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;