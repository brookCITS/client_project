import React, { useState } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

// Define types for booking information
interface Booking {
    id: number;
    name: string;
    date: string;
    status: string;
    checkedIn: boolean;
}

// Generate some fake booking data
const generateFakeBookings = (): Booking[] => [
    { id: 1, name: 'Alice Smith', date: '2024-10-10', status: 'Reserved', checkedIn: false },
    { id: 2, name: 'John Doe', date: '2024-10-11', status: 'Checked In', checkedIn: true },
    { id: 3, name: 'Jane Johnson', date: '2024-10-12', status: 'Reserved', checkedIn: false },
    { id: 4, name: 'Michael Brown', date: '2024-10-13', status: 'Canceled', checkedIn: false },
    // Add more bookings as needed
];

const Bookings: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>(generateFakeBookings());
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Handle check-in action
    const handleCheckIn = (id: number) => {
        setBookings((prev) =>
            prev.map((booking) =>
                booking.id === id ? { ...booking, status: 'Checked In', checkedIn: true } : booking
            )
        );
    };

    // Filter bookings based on search and filter status
    const filteredBookings = bookings.filter((booking) => {
        const matchesStatus = filterStatus === 'All' || booking.status === filterStatus;
        const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="p-4">
            <h3>Bookings</h3>

            {/* Filter Bar */}
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Control
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Reserved">Reserved</option>
                        <option value="Checked In">Checked In</option>
                        <option value="Canceled">Canceled</option>
                    </Form.Select>
                </Col>
            </Row>

            {/* Bookings Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.name}</td>
                            <td>{booking.date}</td>
                            <td>{booking.status}</td>
                            <td>
                                {booking.checkedIn ? (
                                    <Button variant="success" size="sm" disabled>
                                        Checked In
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => handleCheckIn(booking.id)}
                                    >
                                        Check In
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Bookings;
