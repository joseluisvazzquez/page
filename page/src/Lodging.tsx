import apa from "./img_page/apa.png";
import shinju from "./img_page/shinju.png";
import h from "./img_page/9h.png";
import glo from "./img_page/glo.png";
import { Button, Card, Collapse, Container, Fade } from "react-bootstrap";
import { useState } from "react";


 

function Lodging(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <div className="container-lg px-4 my-4 rounded shadow" style={{backgroundImage: `url(${apa})`, paddingBottom:"200px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <p className="display-6 text-light d-flex justify-content-center">APA Hotel & Resort Ryogoku Eki Tower</p>
               
            </div>
            <Container fluid="lg" >
                <div className="d-flex justify-content-center ">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="p-3 rounded-pill bg-danger border-danger my-4 mx-2"
                    />
                    
                    <div>
                        <Collapse in={open} >
                            <div id="example-collapse-text">
                                <Card body className="my-4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                        ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Container>
            <div className="container-lg px-4 my-4 rounded shadow" style={{backgroundImage: `url(${shinju})`, paddingBottom:"200px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <p className="display-6 text-light d-flex justify-content-center">Shinjuku Kuyakusho-mae Capsule Hotel</p>
                
            
            </div>
            <Container fluid="lg" >
                <div className="d-flex justify-content-center ">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="p-3 rounded-pill bg-danger border-danger my-4 mx-2"
                    />
                    
                    <div>
                        <Collapse in={open} >
                            <div id="example-collapse-text">
                                <Card body className="my-4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                        ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Container>
            <div className="container-lg px-4 my-4 rounded shadow" style={{backgroundImage:`url(${h})`, paddingBottom:"200px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <p className="display-6 text-light d-flex justify-content-center">9h nine hours Akasaka sleep lab</p>

            </div>
            <Container fluid="lg" >
                <div className="d-flex justify-content-center ">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="p-3 rounded-pill bg-danger border-danger my-4 mx-2"
                    />
                    
                    <div>
                        <Collapse in={open} >
                            <div id="example-collapse-text">
                                <Card body className="my-4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                        ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Container>
            <div className="container-lg px-4 my-4 rounded shadow" style={{backgroundImage:`url(${glo})`, paddingBottom:"200px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <p className="display-6 text-light d-flex justify-content-center">The Global hotel Tokyo</p>
            
            </div>
            <Container fluid="lg" >
                <div className="d-flex justify-content-center ">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="p-3 rounded-pill bg-danger border-danger my-4 mx-2"
                    />
                    
                    <div>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <Card body className="my-4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                        ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Container>
    </>
    );
}; export default Lodging;