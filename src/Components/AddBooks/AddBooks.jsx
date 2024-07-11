import React, { useState } from 'react'
import '../AddBooks/addbooks.css'
import { Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { AddBookAsync } from '../../Services/Actions/BooksActions';
import { useNavigate } from 'react-router';

function AddBooks() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputBooks, setInputBooks] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputBooks({ ...inputBooks, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(AddBookAsync(inputBooks))
        navigate('/viewData')

    }


    return (
        <>
            <div className='librery pt-5'>
                <Container fluid className='d-flex justify-content-center'>
                    <div className="form-container">
                        <p className="title">Login</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>
                                    <span>Books Title</span>
                                    <input className="input" type="text" name='title' onChange={handleChange} value={inputBooks.title} placeholder="Enter book title" required="" />
                                </label>
                            </div>

                            <div className="input-group">
                                <label>
                                    <span>Author</span>
                                    <input className="input" type="text" name='author' onChange={handleChange} value={inputBooks.author} placeholder="Name of Authors" required="" />
                                </label>
                            </div>

                            <div className="input-group">
                                <label>
                                    <span>genre</span>
                                    <input className="input" type="text" name='genre' onChange={handleChange} value={inputBooks.genre} placeholder="Enter genre " required="" />
                                </label>
                            </div>

                            <div className="input-group">

                                <label>
                                    <span>publication Year</span>
                                    <input className="input" type="tel" name='year' onChange={handleChange} value={inputBooks.year} placeholder='Enter publish year' required="" />
                                </label>
                                <div className="forgot">

                                </div>
                            </div>

                            <Button type='submit' className="submit">Add Books</Button>
                        </form>
                    </div>
                </Container >
            </div >
        </>
    )
}

export default AddBooks