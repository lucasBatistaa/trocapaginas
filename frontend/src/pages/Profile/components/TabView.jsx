import Publication from "../../../components/Publication";
import BookTemplate from '../../../components/BookTemplate';

function TabPublications ({publications}) {
    return (
        <>
            {
                publications.map((publication, index) => (
                    <Publication
                        key={index}
                        id={publication.id}
                        photo={publication.photo}
                        username={publication.username}
                        textPost={publication.textPost}
                        bookImage={publication.bookImage}
                        isLike={publication.isLike}
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