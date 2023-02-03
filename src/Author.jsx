const authors =['Basta', 'Tom Boxer', 'Ali Bakgor', 'Nero'];


function ShowAuthor() {
    const authorsPopup = authors.map((author) =>
    <li  className="suggest__item" key={author.toString()}>{author}</li>
    );
    return(
        <div className="suggest suggest__author">
            <ul className="suggest__block">{authorsPopup}</ul>
        </div>
        )}


export default ShowAuthor;