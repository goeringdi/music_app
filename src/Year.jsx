const authors =['2015', '2016', '2018', '2022'];


function ShowYear() {
    const authorsPopup = authors.map((author) =>
    <li className="suggest__item" key={author.toString()}>{author}</li>
    );
    return(
        <div className="suggest suggest__year">
            <ul className="suggest__block">{authorsPopup}</ul>
        </div>
)}


export default ShowYear;