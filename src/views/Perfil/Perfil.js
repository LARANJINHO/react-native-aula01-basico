import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil ({ navigation }) {
    const voltar = () => {
        navigation.goBack();
    }


return (
    <View style={estiloPerfil.container}>
        <View style={estiloPerfil.borda}>
            <Text style={estiloPerfil.texto}> Akira Toriyama, um dos maiores mangakás</Text>
           
            <center>
            <Text style={estiloPerfil.texto}> Eu fiz o trabalho tentando mostrar um pouco sobre um dos meus escritores favoritos, coloquei então esta aba mais a sua bibliografia e alguns de seus mangás, trabalho feito completamente por Rafael Simões Souza do 2º DSA</Text>
            </center>
                
            </View>


            <img src="https://images-ext-2.discordapp.net/external/hSYnT-bQpe80lJ7UgL-BJqXUtPTPlBLKQXgyI-eH_r8/https/media.discordapp.net/attachments/853468779585208350/913967639695605790/78541508_2526251554097111_4187093037672824832_n.png" width="700px" height="400px"/>


<h5> Todos os direitos reservados Rafael Simões Souza 2º DSA</h5> 
    </View>
    
)
}
export default Perfil;