import React from 'react'
import { Container, Row, Col, Card, Table, } from 'react-bootstrap';
import  '../components/dashboard.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GoGoal } from "react-icons/go"
import { PiHamburgerBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import BarChart from "./Barchart";
import Circles from "../assets/circle.png"
import Circle from "../assets/circle2.png"
import { FaHome } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { RiHardDrive2Fill } from "react-icons/ri";
import { IoBagCheck } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import Navbar from './Navbar'; 


const Dashboard = () => {
    const recentOrders = [
        { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },


        // Add more orders as needed
    ];

    const customerFeedback = [
        { name: 'Jenny Wilson', feedback: 'FitPeo is known for Work-Life balance which is rated at the top and given a rating of 4.8. However, Work Satisfaction is rated the lowest at 4.3 and can be improved. ...' },
        { name: 'Dianne Russell', feedback: 'FitPeo is known for Work-Life balance which is rated at the top and given a rating of 4.8. However, Work Satisfaction is rated the lowest at 4.3 and can be improved. ...' },
        // Add more feedback as needed
    ];

    const data = [
        { label: '5', value: 1000 },
        { label: '9', value: 5000 },
        { label: '11', value: 2000 },
        { label: '13', value: 7000 },
        { label: '15', value: 1500 },
        { label: '17', value: 10000 },
        { label: '19', value: 12000 },
        { label: '21', value: 15000 },
        { label: '23', value: 8000 },
        { label: '25', value: 10000 },
        { label: '27', value: 5000 },
        { label: '21', value: 15000 },
        { label: '23', value: 8000 },
        { label: '25', value: 10000 },
        { label: '27', value: 5000 },
        { label: '5', value: 1000 },
        { label: '15', value: 1500 },
        { label: '17', value: 10000 },
        { label: '19', value: 12000 },
        { label: '21', value: 15000 },
        { label: '23', value: 8000 },
        { label: '25', value: 10000 },
        { label: '21', value: 15000 },


    ];


    return (
        <div>
            <Navbar />
            <Container fluid className="app-container">
            
                <Row className="">
                <Col md={1} sm={2} className="d-none d-md-block  ">
                    <div className='d-flex flex-column gap-5'>
                        <div className='d-flex flex-column pt-5 gap-5'>
                            <span><FaHome className='w-50 h-50 text-secondary logo' /></span>
                            <span><MdOutlineEventNote className='w-50 h-50 text-secondary logo ' /></span>
                            <span><RiHardDrive2Fill className='w-50 h-50 text-secondary logo' /></span>
                            <span><IoBagCheck className='w-50 h-50 text-secondary logo' /></span>
                        </div>
                        <div>
                            <span><GrLogout className='w-50 h-50 text-secondary logo' /></span>
                        </div>
                    </div>
                </Col>
                <Col md={11} sm={10}>
                    <h1 className="my-4 text-white">Dashboard</h1>

                    <Row className='d-flex flex-wrap'>
                        <Col lg={2} md={6}>
                            <Card className="mb-4 custom-bg   text-white">
                                <Card.Body className='d-flex flex-column gap-2 p-3 w-100'>
                                    <span><FaShoppingCart className='text-danger' /></span>
                                    <span className='fw-bold'>Total  Products</span>
                                    <div className='d-flex justify-content-between gap-2'>
                                        <h4>75</h4>
                                        <span className='text-danger fw-bold m-auto'>3%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} md={6}>
                            <Card className="mb-4 custom-bg   text-white">
                                <Card.Body className='d-flex flex-column gap-2 p-3'>
                                    <span><FaShoppingBag className='text-success' /></span>
                                    <span className='fw-bold'>Total Delivered</span>
                                    <div className='d-flex justify-content-between gap-2'>
                                        <h4>70</h4>
                                        <span className='text-success fw-bold m-auto'>3%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} md={6}>
                            <Card className="mb-4 custom-bg   text-white">
                                <Card.Body className='d-flex flex-column gap-2 p-3'>
                                    <span><FaShoppingBag className='text-danger' /></span>
                                    <span className='fw-bold'>Total Cancelled</span>
                                    <div className='d-flex justify-content-between gap-2'>
                                        <h4>05</h4>
                                        <span className='text-danger fw-bold m-auto'>3%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} md={6}>
                            <Card className="mb-4 custom-bg   text-white">
                                <Card.Body className='d-flex flex-column gap-2 p-3 '>
                                    <span><BsCalendarEventFill className='text-success' /></span>
                                    <span className='fw-bold'>Total Pendings</span>
                                    <div className='d-flex justify-content-between gap-2'>
                                        <h4>$12k</h4>
                                        <span className='text-success fw-bold m-auto'>3%</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={12}>

                            <Card className="mb-4 custom-bg   text-white">
                                <Card.Body className='d-flex flex-column gap-2 p-2'>
                                    <div className='d-flex'>

                                        <div className='d-flex flex-column gap-2 p-2'>
                                            <span className='fw-bold'>Total Pendings</span>
                                            <h4>$12k</h4>
                                        </div>
                                        <div className="container position-relative   ">
                                            <div className="ui-widgets mx-auto rounded-circle">
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    <Row>
                        <Col md={12} lg={8}>
                            <Card className=" mb-4 custom-bg   text-white p-1">
                                <Card.Body>
                                    <Container>
                                        <BarChart data={data} title="Activity" period="Weekly" />
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className="mb-4 mb-4 custom-bg   text-white curser p-5">
                                <Card.Body className='d-flex justify-content-between'>
                                    <span> <GoGoal className='text-danger' /></span>
                                    <span>Goals</span>
                                    <span className='dish'> <IoIosArrowForward /></span>
                                </Card.Body>
                                <Card.Body className='d-flex justify-content-between'>
                                    <span> <PiHamburgerBold className='text-primary' /></span>
                                    <span>Popular Dishes</span>
                                    <span> <IoIosArrowForward /></span>
                                </Card.Body>
                                <Card.Body className='d-flex justify-content-between'>
                                    <span><BiDish className='text-success' /></span>
                                    <span className=''>Menus</span>
                                    <span> <IoIosArrowForward /></span>
                                </Card.Body>
                                <Card.Body className='d-flex justify-content-between'>
                                    <span><BiDish className='text-success' /></span>
                                    <span className=''>Menus</span>
                                    <span> <IoIosArrowForward /></span>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>



                    <Row>
                        <Col md={12} lg={8}>
                            <Card className="mb-4 custom-bg text-white ">
                                <Card.Body className='overflow-auto p-3'>
                                    <Card.Title>Recent Orders</Card.Title>
                                    <Table className="custom-bg text-white">
                                        <thead>
                                            <tr>
                                                <th>Customer</th>
                                                <th>Order No.</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentOrders.map((order, index) => (
                                                <tr key={index}>
                                                    <td className="flex items-center space-x-2">
                                                        <img src={Circles} alt="Example" />
                                                        <span>{order.customer}</span>
                                                    </td>
                                                    <td>{order.orderNo}</td>
                                                    <td>{order.amount}</td>
                                                    <td>{order.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className="mb-4 custom-bg text-white w-100 h-75 ">
                                <Card.Body className="d-flex flex-column gap-3 overflow-auto p-4">
                                    <Card.Title>Customer Feedback</Card.Title>
                                    {customerFeedback.map((feedback, index) => (
                                        <div key={index} className="mb-4 custom-bg text-white">
                                            <h5> <img src={Circle} alt="Example" />{feedback.name}</h5>
                                            <p>{feedback.feedback}</p>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div >
    )
}

export default Dashboard