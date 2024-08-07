import React from 'react';
import { ProgressBar, Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

const BarChart = ({ data, title, period }) => {
  return (
    <Container className="p-4" style={{ backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
      <Row className="mb-3">
        <Col className="text-white">
          <h5>{title}</h5>
        </Col>
        <Col className="text-end">
          <DropdownButton id="dropdown-basic-button" title={period} variant="secondary">
            <Dropdown.Item>Daily</Dropdown.Item>
            <Dropdown.Item>Weekly</Dropdown.Item>
            <Dropdown.Item>Monthly</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="overflow-auto" style={{ height: '177px', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', overflowX: 'auto' }}>
          {data.map((item, index) => (
            <Col key={index} style={{ flex: '0 0 auto', padding: '0 5px' }}>
              <div style={{ height: '100px', width: '20px', borderRadius: '5px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
                <ProgressBar 
                  now={item.value} 
                  max={15000} 
                  style={{ height: `${(item.value / 15000) * 100}%`, backgroundColor: '#0DCAF0', width: '100%' }}
                  variant="info"
                />
              </div>
              <small className="text-white mt-2">{item.label}</small>
            </Col>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default BarChart;
