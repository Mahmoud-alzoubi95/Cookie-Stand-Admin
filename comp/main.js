
function Main() {
    return (

        <form>
            <label>location</label>
            <input name="location" type="text" placeholder= "Barcalona"/> <br/>
            <label>Min Cst PerHour </label>
            <input name="Min-CST" type="text" placeholder= "10"/>
            <label>Max CST PerHour </label>
            <input name="max-CST" type="text" placeholder= "3" />
            <label>AVG cookies </label>
            <input name="avg-CST" type="text"  placeholder= "1.7" /> 
            <button name="Create" type = "submit">Create</button>
        </form>

);
}

export default Main;