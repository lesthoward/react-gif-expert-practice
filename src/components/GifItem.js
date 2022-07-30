const GifItem = ({ gif }) => {
    const { title, image } = gif;

    if(!title.trim().length) return null

    return (  
        <div className="card">
            <img src={image} alt={title}/>
            <p>{ title.replace(/gif/i, ' ') }</p>
        </div>
    );
}
 
export default GifItem;