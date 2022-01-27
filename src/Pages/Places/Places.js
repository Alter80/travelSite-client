import React from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SinglePlace from './SinglePlace';
import './Places.css';
import { BsEmojiNeutralFill } from 'react-icons/bs';

const Places = () => {
    const { places } = useData();
    console.log(places);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // page limit view
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);



    const pages = [];
    for (let i = 1; i <= Math.ceil(places.length / itemsPerPage); i++) {
        pages.push(i);
    }

    //page change
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = places.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {

            return (
                <li key={number} id={number} onClick={handleClick} className={currentPage == number ? "active" : null}>
                    {number}
                </li>
            )
        }
        else {
            return null;
        }

    })

    // handle Previous and next
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }


    return (
        <div>
            <Row xs={1} md={1} className=" mx-auto my-5 g-4">
                {
                    currentItem.length == 0 ? <Spinner className='mx-auto' animation="border" /> : currentItem.map(place => <SinglePlace key={place._id}
                        place={place}></SinglePlace>)

                }
            </Row>
            <ul className='pageNumbers'>
                <li><button
                    onClick={handlePrevBtn}
                    disabled={currentPage == pages[0] ? true : false}>
                    Previous
                </button></li>

                {renderPageNumbers}

                <li><button
                    onClick={handleNextBtn}
                    disabled={currentPage == pages[pages.length - 1] ? true : false}>
                    Next
                </button></li>
            </ul>

        </div>
    );
};

export default Places;