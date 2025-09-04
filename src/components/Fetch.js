import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";


export function Fetch(){

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user} = useAuth();
    
    useEffect(()=>{
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if(!response.ok){
                    throw new Error(`HTTP code. Status ${response.status}`)
                    // thousand of code thiyo bhanem, skip bhayo 
                }
                return response.json();
            })
            .then((data)=>{
                setData(data);
                setLoading(false);
            })
            .catch(error =>{
                setError(error.message)
                setLoading(false);
            })
    },[])

    const DisplayProducts = () =>{
        return(
            <Container>
                <h2>Our Products</h2>
                <Row>
                    {data.map( d =>(
                        <Col key={d.id} xs={12} sm={6} md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={d.image} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text className="flex-grow-1">${d.price} </Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                    <Link to={`/product/${d.id}`}>View Detail</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) )}

                </Row>
            </Container>
        )
    }

    if (loading)
        return <duv className="text-center mt-4" >
                    <Spinner animation="border" />
                </duv>
    if (error){

        return <p> {user} Error: {error}</p>
    }

    return (
        <>
            <div>
                <DisplayProducts />
            </div>
        </>
    )
}