import '../styles/category.css'

const Categories = () => {
    let categories = [
        {links:"All"},
        {links:"Sports"},
        {links:"Comedy"},
        {links:"Fashion"},
        {links:"Vlogs"},
        {links:"Movies"},
        {links:"Travel"},
        {links:"Food"},
        {links:"Sandalwood"},
    ]
    return ( 
        
        <div className="categories">
            <ul>
                {categories.map((data)=>{
                    return(
                        <li><a href="">{data.links}</a></li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Categories;