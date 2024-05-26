import Publication from "../../../components/Publication";
import BookTemplate from '../../../components/BookTemplate';

function TabPublications ({publications}) {
    return (
        <>
            {
                publications.map((publication, index) => (
                    <Publication
                        key={index}
                        publication={publication}
                    />
                ))
            }
        </>
    )
}

function TabInterests({ interests}) {
    return (
        <>
            {
                interests.map((book, index) => (   
                    <BookTemplate 
                        key={index}
                        image={book.image}
                        titleBook={book.titleBook}
                        authorBook={book.authorBook}
                    />
                    
                ))
            }
        </>
    )
}

export {TabPublications, TabInterests}