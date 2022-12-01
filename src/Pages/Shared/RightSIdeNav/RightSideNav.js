import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { providerLogIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
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