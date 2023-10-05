import './Searchbox.css'
const Searchbox = ({SearchChange})=>{
    return(
        
        <div className="containerS fixed">
            {/* <div>
            <button class="mode" type="button" name="mode"></button>
            </div> */}
            <div>
                <input className="searchbox" id="id" type="text" name="fruit" placeholder="What's your favourite fruit!!" onChange={SearchChange}></input>
            </div>
        </div>
    )
}
export default Searchbox;