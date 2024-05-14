
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";

//Importando arrays
import {MOVIESWATCHING} from '../../utils/moviesWatching'
import {MOVIESCRIME} from '../../utils/moviesCrimes'
import {MOVIESWATCH} from '../../utils/moviesWatch'

//Importando componentes
import { MoviesCard } from "../../components/MoviesCard";

export const Home = () =>{
    return(
        <View style={styles.container}>

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image style={styles.primeLogoImg}  source={require('../../assets/prime_video.png')}/>
                <Image style={styles.amazonLogoImg} source={require('../../assets/amazon_logo.png')}/>
            </View>

            {/* Menu */}
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Shows de TV</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Infantis</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.contentMovies} showsVerticalScrollIndicator={false}>
                
                {/* Botão de imagem */}
                <TouchableOpacity style={styles.movieImageThumb}>
                    <Image source={require('../../assets/movies/the_wheel_of_time.png')}/>
                </TouchableOpacity>

                {/* Continue Whatching */}
                <Text style={styles.movieText}>Continuar assistindo</Text>
                <FlatList 
                    data={MOVIESWATCHING} 
                    keyExtractor={(item) => item.id} 
                    renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                    horizontal = {true}
                    contentContainerStyle = {styles.contentList}
                    showsHorizontalScrollIndicator = {false}
                />

                {/* Crime Movies */}
                <Text style={styles.movieText}>Lançamentos</Text>
                <FlatList 
                    data={MOVIESCRIME} 
                    keyExtractor={(item) => item.id} 
                    renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                    horizontal = {true}
                    contentContainerStyle = {styles.contentList}
                    showsHorizontalScrollIndicator = {false}
                />

                {/* Whatch in your language */}
                <Text style={styles.movieText}>Assista em sua lingua</Text>
                <FlatList 
                    data={MOVIESWATCH} 
                    keyExtractor={(item) => item.id} 
                    renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                    horizontal = {true}
                    contentContainerStyle = {styles.contentList}
                    showsHorizontalScrollIndicator = {false}
                />
            </ScrollView>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232F3E',
        alignItems: 'flex-start',
    },

    header:{
        width: '100%',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    primeLogoImg: {},

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly', //deixa um espaçamento igual entre os itens
        marginTop: 30,
        marginBottom: 15,
    },

    categoryText:{
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },

    movieImage:{

    },

    movieText:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        padding: 15,
    },

    movieImageThumb:{
        width: '100%',
        alignItems: 'center',
    },

    contentList:{
        paddingLeft: 18,
        paddingRight: 30,
    },

    contentMovies:{

    },
    
});
