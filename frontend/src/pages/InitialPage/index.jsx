import { StatusBar, View, FlatList} from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"

import axios from 'axios'
import { useUserStore } from '../../store/badgeStore'

import TopMenu from '../../components/Menus/TopMenu'
import Publication from '../../components/Publication'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'

export default function InitialPage(props) {
    const [ publications, setPublications ] = useState([])
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({});
        
    // VALIDAR USO
    
    // const [ userData, setUserData ] = useState({});

    //const user = useUserStore(state => state.data);
    const saveUser = useUserStore(state => state.save);

    const navigation = useNavigation();
    const getUser = async() => {
        try {
            const response = await axios.get('https://trocapaginas-server-production.up.railway.app/login/success')
            
            if(response.data.email !== null) {
                //setUserData(response.data);
                saveUser(response.data);

            }else {
                navigation.navigate(props.route.params.page, {error: 'Tentativa de acesso falhou, tente novamente!'});
            }

        } catch (error) {
            console.log(error);
        }
    }

     //impedir o usuário de voltar à tela de login 
    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert('Sair', 'Você realmente deseja sair do aplicativo?', [
    //         {
    //           text: 'Não',
    //           onPress: () => null,
    //           style: 'cancel',
    //         },
    //         {text: 'Sim', onPress: () => {
    //             setUserData({});
    //             navigation.navigate('Slogan');
    //             BackHandler.exitApp();
    //             }
    //         },
    //       ]);
    //       return true;
    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //       'hardwareBackPress',
    //       backAction,
    //     );
    
    //     return () => backHandler.remove();
    // }, []);


    useEffect(()=> {
        // user.logout()

        if(props.route.params?.page) {
            getUser();
        }

        getPublications()
    }, []);

    const getPublications = async () => {
        const response = await axios.get('https://trocapaginas-server-production.up.railway.app/publications')
        const posts = response.data

        setPublications(posts)
    }

    return (
        <View style={styles.container}> 
            <StatusBar barStyle={'light-content'} />

            <TopMenu/>

            <FlatList
                contentContainerStyle = {styles.viewPublications}
                data={publications}
                renderItem={({ item }) => <Publication publication = {item}/>}
                refreshing={loading}
                onRefresh={getPublications}
            />
            <BottomMenu/>
        </View>  
    )
}