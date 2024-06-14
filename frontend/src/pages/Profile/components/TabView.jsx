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
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', padding: 2, gap: 3.7}}>
            {
                interests.map((book, index) => ( 
                    <BookTemplate 
                        key={index}
                        image={book.imagebook}
                        title={book.titlebook}
                        author={book.writerbook}
                        description={book.review}
                    />
                    
                ))
            }
        </View>
    )
}

export {TabPublications, TabInterests}