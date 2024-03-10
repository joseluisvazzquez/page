import funa from "./funa.png"
import taka from "./taka.png"
import homura from "./homura.png"
import shin from "./shin.png"
import { Card, Col, Row } from "react-bootstrap";

function Cuisine(){
    return(
        <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={shin} />
            <Card.Body>
              <Card.Title>Shin Okubo - Koreatown</Card.Title>
              <Card.Text>
                Shin Okubo, popularly known as Tokyo's Koreatown, is home to a large number
                of Korean residents. Consequently, many Korean shops and restaurants are found
                along the main road and side streets around Shin-Okubo Station, one stop north of Shinjuku Station.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={funa} />
            <Card.Body>
              <Card.Title>Funabashiya Honten</Card.Title>
              <Card.Text>
                    A short walk from Shinjuku 
                    Station takes you to Funabashiya, which is the place 
                    to go for elegant, tasty tempura set meals. Fast food brings to mind poor-quality ingredients,
                    mysterious additives, and ground-up mystery meat. (Is it really meat?) But in every sense of the phrase,
                    tempura is fast food, and at good places, none of the above applies. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={taka} />
            <Card.Body>
              <Card.Title>Takahashi</Card.Title>
              <Card.Text>
                    If you find yourself craving some delicious ramen in Shinjuku,
                    Takahashi’s fantastically smoky ramen bowl will save your stomach and your soul. When you have midnight cravings,
                    convenience store food sometimes just doesn’t cut it. Sometimes you need an actual meal. Everyone should have a place they
                    can go to when it’s very late out and you’re starving for real food.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={homura} style={{ backgroundSize:'cover' }}/>
            <Card.Body>
              <Card.Title>Honmura-an</Card.Title>
              <Card.Text>
                    For a slow lunch of soba in serene surroundings,
                    try Honmura-an in Roppongi. It’s an oasis of calm amid the chaos of Roppongi. Honmura-an is one of those places that’s 
                    oddly conducive to heartfelt, meandering conversations over lunch.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    );
}; export default Cuisine;