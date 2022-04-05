let key = 0;

function App(props) {
    const [wines, updateWines] = React.useState(props.wines || []);
    const [editId, updateId] = React.useState("");
    const [filter, setFilter] = React.useState("All");

    const filteredWines = wines.filter((wine) => {
        if (filter === "All") {
            return true;
        } else if (filter === "Red") {
            return wine.winetype === "red";
        } else if (filter === "White") {
            return wine.winetype === "white";
        } else if (filter === "Orange") {
            return wine.winetype === "orange";
        } else if (filter === "Rose") {
            return wine.winetype === "rose";
        }
    });

    const wineData = filteredWines.map((wine) => (
        <WineListItem
            id={wine.id}
            isEditing={editId === wine.id}
            winetype={wine.winetype}
            winename={wine.winename}
            winestyle={wine.winestyle}
            winecountry={wine.winecountry}
            winevintage={wine.winevintage}
            key={wine.id}
            deleteWine={deleteWine}
            editWine={editWine}
        />
    ));

    function addWine(winetype, winename, winestyle, winecountry, winevintage) {
        key += 1;
        const newWine = {
            winetype: winetype,
            winename: winename,
            winestyle: winestyle,
            winecountry: winecountry,
            winevintage: winevintage,
            id: key,
        };
        const newWines = [...wines, newWine];
        updateWines(newWines);
        window.localStorage.setItem("name", JSON.stringify(newWines));
    }

    function deleteWine(id) {
        const remainingWines = wines.filter((wine) => id !== wine.id);
        updateWines(remainingWines);
        window.localStorage.setItem("name", JSON.stringify(remainingWines));
    }

    function editWine(wineid) {
        updateId(wineid);
    }

    function onFilterClick(filtername) {
        setFilter(filtername);
    }

    const headerNoun = wineData.length !== 1 ? "wines" : "wine";
    const headerText = `${wineData.length} ${headerNoun} currently shelved`;

    return (
        <div className="app main-container">
            <h1>Wine Cellar</h1>
            <div className="add-wine-form">
                <Form addWine={addWine} />
            </div>

            <div>
                <FilterButton onFilterClick={onFilterClick} />
            </div>

            <div>
                <h3 className="list-header header">{headerText}</h3>
                <ul role="list" className="wine-list container" aria-labelledby="list-header">
                    {wineData}
                </ul>
            </div>
        </div>
    );
}

function WineListItem(props) {
    let colorclass;
    switch (props.winetype) {
        case "white":
            colorclass = "white-marker";
            break;
        case "orange":
            colorclass = "orange-marker";
            break;
        case "rose":
            colorclass = "rose-marker";
            break;
        default:
            colorclass = "red-marker";
            break;
    }
    return (
        <li className="list-item">
            {}
            <div className="list-div">
                <label id={props.id} className="item-label" htmlFor={props.id}>
                    <span className={colorclass}>🌢</span> "{props.winename}" {props.winestyle},{" "}
                    {props.winecountry} {props.winevintage}
                </label>
            </div>
            {props.isEditing ? <h3>I'm being edited</h3> : ""}
            <div className="btn-del">
                <button type="button" className="btn edit" onClick={() => props.editWine(props.id)}>
                    Edit
                </button>
                <button
                    type="button"
                    className="btn del"
                    onClick={() => props.deleteWine(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

function Form(props) {
    const [winename, setName] = React.useState("");
    const [winestyle, setStyle] = React.useState("");
    const [winecountry, setCountry] = React.useState("");
    const [winevintage, setVintage] = React.useState("");
    const [winetype, setType] = React.useState(""); 

    const setValue = {
        "wine-type": setType,
        "wine-name": setName,
        "wine-style": setStyle,
        "wine-country": setCountry,
        "wine-vintage": setVintage,
    };

    function handleChange(e) {
        const fn = setValue[e.target.id];
        fn(e.target.value);
    }

    function handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        props.addWine(winetype, winename, winestyle, winecountry, winevintage);
        setName("");
        setStyle("");
        setCountry("");
        setVintage("");
    }

    function onValueChange(e) {
        setType(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="header">
                <label>Add new wine</label>
            </h3>
            <div>
                <label htmlFor="wine-type">Type: </label>
                <label htmlFor="wine-type-red">
                    red
                    <input
                        type="radio"
                        value="red"
                        checked={winetype === "red"}
                        {...setType}
                        onChange={onValueChange}
                        id="wine-type-red"
                        name="wine-type"
                    />
                </label>
                <label htmlFor="wine-type-white">
                    white
                    <input
                        type="radio"
                        value="white"
                        checked={winetype === "white"}
                        {...setType}
                        onChange={onValueChange}
                        id="wine-type-white"
                        name="wine-type"
                    />
                </label>
                <label htmlFor="wine-type-orange">
                    orange
                    <input
                        type="radio"
                        value="orange"
                        checked={winetype === "orange"}
                        {...setType}
                        onChange={onValueChange}
                        id="wine-type-orange"
                        name="wine-type"
                    />
                </label>
                <label htmlFor="wine-type-rose">
                    rosé
                    <input
                        type="radio"
                        value="rose"
                        checked={winetype === "rose"}
                        {...setType}
                        onChange={onValueChange}
                        id="wine-type-rose"
                        name="wine-type"
                    />
                </label>
            </div>

            <label htmlFor="wine-name">
                Name:
                <input
                    type="text"
                    required
                    minLength="3"
                    id="wine-name"
                    value={winename}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="wine-style">
                Style/grape:
                <input
                    type="text"
                    required
                    minLength="3"
                    id="wine-style"
                    value={winestyle}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="wine-country">
                Country:
                <input
                    type="text"
                    required
                    minLength="3"
                    id="wine-country"
                    value={winecountry}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label htmlFor="wine-vintage">
                Vintage:
                <input
                    type="number"
                    min="1900"
                    id="wine-vintage"
                    value={winevintage}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit" className="btn submit-btn">
                Add wine
            </button>
        </form>
    );
}

function FilterButton(props) {
    return (
        <div>
            <h3 className="header">Filters</h3>
            <select onChange={(event) => props.onFilterClick(event.target.value)}>
                <option value="All" className="btn filter-all">
                    All
                </option>
                <option
                    value="Red"
                    className="btn filter-all"
                    onClick={() => props.onFilterClick("Red")}
                >
                    Red
                </option>
                <option
                    value="White"
                    className="btn filter-all"
                    onClick={() => props.onFilterClick("White")}
                >
                    White
                </option>
                <option
                    value="Orange"
                    className="btn filter-all"
                    onClick={() => props.onFilterClick("Orange")}
                >
                    Orange
                </option>
                <option
                    value="Rose"
                    className="btn filter-all"
                    onClick={() => props.onFilterClick("Rose")}
                >
                    Rosé
                </option>
            </select>
            <button type="button" className="btn filter-country">
                Countries
            </button>
            <button type="button" className="btn filter-vintage">
                Vintages
            </button>
        </div>
    );
}

const loadWines = JSON.parse(window.localStorage.getItem("name"));
key = loadWines ? loadWines.length : 0;

ReactDOM.render(<App wines={loadWines} />, document.getElementById("root"));
