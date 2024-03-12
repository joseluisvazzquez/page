import funa from "./img_page/funa.png"
import taka from "./img_page/taka.png"
import homura from "./img_page/homura.png"
import shin from "./img_page/shin.png"
import { Card, Col, Row } from "react-bootstrap";

function Cuisine(){
    return(
      <Row xs={1} sm={2} className="g-4 mx-4">
        <Col>
          <Card className="h-100 mb-3" >
            <Card.Img variant="top" src={shin}/>
            <Card.Body>
              <Card.Title>Shin Okubo - Koreatown</Card.Title>
              <Card.Text>
                Shin Okubo, popularly known as Tokyo's Koreatown, is home to a large number
                of Korean residents. Consequently, many Korean shops and restaurants are found
                along the main road and side streets around Shin-Okubo Station, one stop north of Shinjuku Station.
              </Card.Text>
              <a href="https://tokyocheapo.com/food-and-drink/international-food/shin-okubo-tokyo-koreatown/" className="btn btn-outline-danger" role="button">More info...</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
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
              <a href="https://www.tripadvisor.com/Restaurant_Review-g14133707-d1678345-Reviews-Funabashiya_Honten-Shinjuku_3_Chome_Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html" className="btn btn-outline-danger" role="button">More info...</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={taka} />
            <Card.Body>
              <Card.Title>Takahashi</Card.Title>
              <Card.Text>
                    If you find yourself craving some delicious ramen in Shinjuku,
                    Takahashi’s fantastically smoky ramen bowl will save your stomach and your soul. When you have midnight cravings,
                    convenience store food sometimes just doesn’t cut it. Sometimes you need an actual meal. Everyone should have a place they
                    can go to when it’s very late out and you’re starving for real food.
              </Card.Text>
              <a href="https://pocket-concierge.jp/en/restaurants/245332?seat_date_eq=2024-03-16s" className="btn btn-outline-danger" role="button">More info...</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={homura}/>
            <Card.Body>
              <Card.Title>Honmura-an</Card.Title>
              <Card.Text>
                    For a slow lunch of soba in serene surroundings,
                    try Honmura-an in Roppongi. It’s an oasis of calm amid the chaos of Roppongi. Honmura-an is one of those places that’s 
                    oddly conducive to heartfelt, meandering conversations over lunch.
              </Card.Text>
              <a href="https://www.japan-experience.com/es/todo-sobre-japon/tokio/cafeterias-restaurantes/honmura-an" className="btn btn-outline-danger my-5" role="button">More info...</a>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    );
}; export default Cuisine;