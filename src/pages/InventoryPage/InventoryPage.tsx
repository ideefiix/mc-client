import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {getPlayerItems} from "./api-inventory.ts";
import {useAuth} from "../../common/AuthProvider.jsx";
import "./inventoryPage.css"

const InventoryPage = () => {
    const auth = useAuth()
    const apiCallMade = useRef<boolean>(false)
    const [items, setItems] = useState<Item | null>(null)
    
    useEffect(() => {
        if(!apiCallMade.current){
            apiCallMade.current = true;
            getPlayerItems(auth.userId)
                .then(res => {
                    setItems(res.data)
                })
        }
    }, [])
    return (
        <Container className="mt-5">
            {items ?
                        <ItemCards playerItems={items} />
                :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }  
        </Container>
        
    )
}

const ItemCards = ({playerItems}) => {
    return (
        <Row className="gap-1 row-gap-1">
            {playerItems.map(item => {
                return(
                    <Col md="auto" >
                        <Card className="itemCard">
                            <Card.Img className="itemCard__img" src={`data:image/webp;base64,${item.item.image.image}`}  />
                            <Card.Text className="text-center">{item.quantity}</Card.Text>
                        </Card>
                    </Col>
                    )
            })}
        </Row>
    )
}

export default InventoryPage
