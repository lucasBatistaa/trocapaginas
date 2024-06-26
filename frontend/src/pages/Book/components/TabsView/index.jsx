import ExchangeBook from "../../../../components/ExchangeBook";
import Publication from "../../../../components/Publication";

function TabReviews({ publications }) {
    return (
        <>
            {
                publications.map((publication) => (
                    <Publication
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
                    console.log(exchange),
                    <ExchangeBook 
                        key={index}
                        idUser={exchange.id_user}
                        imageUser={exchange.photo}
                        username={exchange.name}
                        titleBook= {exchange.titlebook}
                    />
                ))
            }
        </>
    )
}

export { TabReviews, TabExchanges }