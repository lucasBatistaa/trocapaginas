import ExchangeBook from "../../../../components/ExchangeBook";
import Publication from "../../../../components/Publication";

function TabReviews({ publications }) {
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

function TabExchanges({ bookExchanges }) {
    return (
        <>
            {
                bookExchanges.map((exchange, index) => (
                    <ExchangeBook 
                        key={index}
                        idUser={exchange.idUser}
                        imageUser={exchange.imageUser}
                        username={exchange.username}
                    />
                ))
            }
        </>
    )
}

export { TabReviews, TabExchanges }