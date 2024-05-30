import Publication from "../../../components/Publication";
import BookTemplate from '../../../components/BookTemplate';
import { View } from "react-native";

function TabPublications ({publications}) {
    publications.map((pub) => {
        console.log(pub.content)
    })
    return (
        <> 
            {
                publications.map((publication, index) => (
                    <View key={index} style={{marginBottom: 20}}>
                        <Publication
                            publication={publication}
                        />
                    </View>

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