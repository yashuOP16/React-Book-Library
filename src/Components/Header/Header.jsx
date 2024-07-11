import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './header.css'
import { useNavigate } from 'react-router'

function Header() {
    const navigate = useNavigate()
    const handleToAdd = () => {
        navigate('/')
    }
    return (
        <>
            <div classNameName="header">
                <Container >
                    <Row >
                        {/* <div classNameName="col-2">
                            <div>
                                <img src={logo} alt={logo} classNameName='img-fluid' />
                            </div>
                        </div>
                        <div classNameName="col-7">
                            <div classNameName='d-flex justify-content-center'>
                                <div classNameName="d-flex">
                                    <div classNameName="wrap">
                                        <div className="search">
                                            <input type="text" classNameName="searchTerm" placeholder="What are you looking for?" />
                                            <button type="submit" classNameName="searchButton">
                                                <FaSearch />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <NavSection />
                            </div>
                        </div>
                        <div classNameName="col-3">
                            <div classNameName='d-flex justify-content-end'>
                                <button classNameName="btn btn-primary px-4" >Add New Book</button>
                            </div>
                        </div> */}



                        <div className="button-container">
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" stroke-width="0" fill="currentColor" stroke="currentColor" className="icon">
                                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                                </svg>
                            </button>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="icon">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                            <button className="button">
                                <span>Books</span>
                            </button>

                            <button className="button">
                                <Button onClick={handleToAdd}>Add</Button>
                            </button>
                        </div>




                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header

