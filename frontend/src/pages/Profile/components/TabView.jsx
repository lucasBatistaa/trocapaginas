import Publication from "../../../components/Publication";
import BookTemplate from '../../../components/BookTemplate';
import { View } from "react-native";

function TabPublications ({publications}) {
    return (
        <> 
            {
                publications.map((publication, index) => (
                    <View key={index} style={{marginBottom: 10}}>
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