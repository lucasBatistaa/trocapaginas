import ExchangeBook from "../../../../components/ExchangeBook";
import Publication from "../../../../components/Publication";

function TabReviews({ publications }) {
    return (
        <>
            {
                publications.map((publication, index) => (
                    <Publication
                        // key={index}
                        // // id={publication.id}
                        // photo={publication.photo}
                        // username={publication.content}
                        // textPost={publication.textPost}
                        // bookImage={publication.image_post}
                        // isLike={false}
                        publication={publication}
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