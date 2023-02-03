const authors =['pop', 'jazz', 'rap', 'dance'];


function ShowGenre() {
    const authorsPopup = authors.map((author) =>
        <li className="suggest__item" key={author.toString()}>{author}</li>
    );
    return(
        <div className="suggest suggest__genre">
            <ul className="suggest__block">{authorsPopup}</ul>
        </div>
)};


export default ShowGenre;