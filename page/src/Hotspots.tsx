import shibuya from "./shibuya.jpg";
import nezu from "./nezu.png";
import meiji from "./meiji.jpg";
function Hotspots(){
    return(
        <>
            <div className="container-lg px-4 my-4 rounded" style={{backgroundImage: `url(${shibuya})`, paddingBottom:"200px"}}>
                <p className="display-6 text-light">Shibuya Crossing</p>
                <div className="container-sm bg-dark rounded py-3">
                    <p className="h5 text-light">
                        Shibuya is of course mostly known for its crosswalk, Shibuya Crossing –
                        the busiest scramble crossing in the world with about 3,000 people crossing it at a single
                        time during the peak of rush hour! Shibuya is a place where you can easily spend a couple of 
                        hours and won’t get bored.
                    </p>   

                </div>
            </div>
            <div className="container-lg px-4 my-4 rounded" style={{backgroundImage: `url(${meiji})`, paddingBottom:"200px"}}>
                <p className="display-6 text-light">Enjoy Nature and Art at the Meiji Shrine</p>
                <div className="container-sm bg-dark rounded py-3">
                    <p className="h5 text-light">
                        Surrounded by a 175-acre evergreen forest that is home to some 120,000 trees representing species
                        found across Japan — as well as the interesting "wishing tree," on which visitors can write and hang
                        their deepest wishes — the shrine's highlights include its Inner Precinct (Naien) with its 
                        museum containing royal treasures, and the Outer Precinct (Gaien).
                    </p>
                </div>
            </div>
            <div className="container-lg px-4 my-4 rounded" style={{backgroundImage:`url(${nezu})`, paddingBottom:"200px"}}>
                <p className="display-6 text-light">Nezu Shrine</p>
                <div className="container-sm bg-dark rounded py-3">
                    <p className="h5 text-light">
                        Not too far from Yanaka area, Nezu Shrine is a shinto shrine located in Bunkyo ward,
                        which is also walking distance from Ueno area. The shrine is best known for its Azalea
                        festival in spring time, but a great spot to visit all year round.
                    </p>

                </div>
            </div>
        </>

    );
}; export default Hotspots;