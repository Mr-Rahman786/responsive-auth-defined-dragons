import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from 'react-bootstrap/Image'
import { FaBookmark,FaEye,FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { title, rating, total_view, _id, author, published_date, img, name, details, image_url } = news;
    // console.log(news)
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <div>
                            <img src={author?.img} style={{ height: '60px', borderRadius: '50px', marginRight:'10px' }} alt="" />
                        </div>
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                        
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + '.....'}<Link to={`/news/${_id}`}>Read More</Link></>
                                :
                                <>{ details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div >
                            <FaStar className='text-warning me-2'></FaStar>
                            <span>{ rating?.number}</span>
                        </div>
                        <div>
                            <FaEye className='me-2'></FaEye>
                            <span>{total_view}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;