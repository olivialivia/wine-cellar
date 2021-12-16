class Wine {
    constructor(type, name, style, country, vintage) {
        this.type = type;
        this.name = name;
        this.style = style;
        this.country = country;
        this.vintage = vintage;
    }
}

function App(props) {
    const wineData = props.wines.map((wine) => (
        <WineList
            id={wine.id}
            winename={wine.winename}
            winestyle={wine.winestyle}
            winecountry={wine.winecountry}
            winevintage={wine.winevintage}
            key={wine.id}
        />
    ));

    // const [tasks, setTasks] = React.useState(props.tasks);
    return (
        <div className="app main-container">
            <h1>Wine Cellar</h1>
            <div className="new-wine">
                <form>
                    <h3 className="header">
                        <label>Add new wine</label>
                    </h3>
                    <label htmlFor="wine-type">Type: </label>
                    <label htmlFor="wine-type-red">
                        red
                        <input type="radio" id="wine-type-red" name="wine-type" />
                    </label>
                    <label htmlFor="wine-type-white">
                        white
                        <input type="radio" id="wine-type-white" name="wine-type" />
                    </label>
                    <label htmlFor="wine-type-orange">
                        orange
                        <input type="radio" id="wine-type-orange" name="wine-type" />
                    </label>
                    <label htmlFor="wine-type-rose">
                        rosé
                        <input type="radio" id="wine-type-rose" name="wine-type" />
                    </label>
                    <br />
                    <label htmlFor="wine-name">
                        Name:
                        <input type="text" id="wine-name" />
                    </label>
                    <br />
                    <label htmlFor="wine-style">
                        Style/grape:
                        <input type="text" id="wine-style" />
                    </label>
                    <br />
                    <label htmlFor="wine-country">
                        Country:
                        <input type="text" id="wine-country" />
                    </label>
                    <br />
                    <label htmlFor="wine-vintage">
                        Vintage:
                        <input type="number" id="wine-vintage" />
                    </label>
                    <br />
                    <button type="submit">Add wine</button>
                </form>
            </div>

            <div>
                <h3 className="header">Filters</h3>
                <button type="button" className="filter-show-all">
                    Show all
                </button>
                <button type="button" className="filter-type">
                    Type
                </button>
                <button type="button" className="filter-country">
                    Country
                </button>
                <button type="button" className="filter-vintage">
                    Vintage
                </button>
                <button type="button" className="filter-style">
                    Style/grape
                </button>
            </div>

            <div>
                <h3 className="list-header header">3 wines currently shelved</h3>
                <ul role="list" className="wine-list container" aria-labelledby="list-header">
                    {wineData}
                </ul>
            </div>
        </div>
    );
}

function WineList(props) {
    return (
        <li className="list-item">
            <div className="list-div">
                <label id={props.id} className="item-label" htmlFor={props.id}>
                    "{props.winename}" {props.winestyle}, {props.winecountry} {props.winevintage}
                </label>
            </div>
            <div className="btn-ed-del">
                <button type="button" className="btn edit">
                    Edit
                </button>
                <button type="button" className="btn del">
                    Delete
                </button>
            </div>
        </li>
    );
}

function AddWine() {}

function DeleteWine() {}

function Form() {}

function FilterButtons(props) {}

const WINEDATA = [
    {
        winetype: "red",
        winename: "19 Crimes",
        winestyle: "Cab Sav",
        winecountry: "Italy",
        winevintage: 2019,
        id: "0",
    },
    {
        winetype: "red",
        winename: "Ostuni",
        winestyle: "Shiraz",
        winecountry: "America",
        winevintage: 2018,
        id: "1",
    },
    {
        winetype: "white",
        winename: "Villa Maria",
        winestyle: "Blanco",
        winecountry: "Italy",
        winevintage: 2020,
        id: "2",
    },
];

ReactDOM.render(<App wines={WINEDATA} />, document.getElementById("root"));

/*

//let wine1 = new Wine("red", "Italy", 2019, "19 Crimes", "Cab Sav");
//let wine2 = new Wine("white", "Italy", 2020, "Villa Maria", "Sav B");
//let wine3 = new Wine("red", "America", 2018, "Ostiento", "Shiraz");


    updateName(e) {
        this.setState({
            wineName: e.target.value,
        });
    }



// <App>
//   <WineInput>
//      <input type=..>
//   <WineList>
//      <Wine type>
//         <WineComponent>
//         <WineComponent>
//      <Wine type>
//         <WineComponent>
//         <WineComponent>
//   <WineSearch>
//



----------------------------------------------------------------
----------------------------------------------------------------
----------------------------------------------------------------

<div className="app main-container">
            <h1>Wine Cellar</h1>
            <div className="new-wine">
                <form>
                    <h3 className="header">
                        <label>Add wine to cellar</label>
                    </h3>
                    <label htmlFor="wine-type">Type: </label>
                    <label htmlFor="wine-type-red">
                        red
                        <input type="radio" id="wine-type-red" name="wine-type" />
                    </label>
                    <label htmlFor="wine-type-white">
                        white
                        <input type="radio" id="wine-type-white" name="wine-type" />
                    </label>
                    <label htmlFor="wine-type-orange">
                        orange
                        <input type="radio" id="wine-type-orange" name="wine-type" />
                    </label>
                    <label htmlFor="wine-type-rose">
                        rosé
                        <input type="radio" id="wine-type-rose" name="wine-type" />
                    </label>
                    <br />
                    <label htmlFor="wine-name">
                        Name:
                        <input type="text" id="wine-name" />
                    </label>
                    <br />
                    <label htmlFor="wine-style">
                        Style/grape:
                        <input type="text" id="wine-style" />
                    </label>
                    <br />
                    <label htmlFor="wine-country">
                        Country:
                        <input type="text" id="wine-country" />
                    </label>
                    <br />
                    <label htmlFor="wine-vintage">
                        Vintage:
                        <input type="number" id="wine-vintage" />
                    </label>
                    <br />
                    <button type="submit">Add wine</button>
                </form>
            </div>

            <div>
                <h3 className="header">Filters</h3>
                <button type="button" className="filter-show-all">
                    Show all
                </button>
                <button type="button" className="filter-type">
                    Type
                </button>
                <button type="button" className="filter-country">
                    Country
                </button>
                <button type="button" className="filter-vintage">
                    Vintage
                </button>
                <button type="button" className="filter-style">
                    Style/grape
                </button>
            </div>

            <div>
                <h3 className="list-header header">2 wines currently shelved</h3>
                <ul role="list" className="wine-list container" aria-labelledby="list-header">
                    <li className="list-item">
                        <div className="list-div">
                            <input id="0" />
                            <label className="item-label" htmlFor="0">
                                Wine 1
                            </label>
                        </div>
                        <div className="btn-ed-del">
                            <button type="button" className="btn edit">
                                Edit
                            </button>
                            <button type="button" className="btn del">
                                Delete
                            </button>
                        </div>
                    </li>
                    <li className="list-item">
                        <div className="list-div">
                            <input id="1" />
                            <label className="item-label" htmlFor="1">
                                Wine 2
                            </label>
                        </div>
                        <div className="btn-ed-del">
                            <button type="button" className="btn edit">
                                Edit
                            </button>
                            <button type="button" className="btn del">
                                Delete
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

*/
