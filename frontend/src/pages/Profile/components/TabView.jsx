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
                    console.log('book: ', book.titlebook),  
                    <BookTemplate 
                        key={index}
                        image={book.imagebook}
                        title={book.titlebook}
                        author={book.writerbook}
                        description={book.review}
                    />
                    
                ))
            }
        </>
    )
}

export {TabPublications, TabInterests}