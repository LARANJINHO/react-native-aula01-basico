import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}> Akira Toriyama: O queridinho do Shounen </Text>
                        <Text style={estiloColecao.texto}> Akira Toriyama nasceu em Kiyosu, Aichi, no Japão, em 5 de Abril de 1955. Akira iniciou sua carreira em 1978 com Wonder Island, publicada na Weekly Shonen Jump . Sua fama se fez através da história intitulada Dr. Slump. Série com 18 volumes publicada semanalmente na Shonen Jump no Japão, entre 1980 e 1986.
Dragon Ball publicado inicialmente na Weekly Shonen Jump a partir de 1986, mas todos o conhecem pelas animações. Em suma, seu sucesso fora tão grande que Akira trabalhou de 1986 a 1995. Todavia Akira tem um trabalho que se estende. Projetos de personagens para a série de jogos do vídeo-game Dragon Quest.
Contudo ele também criou pequenas histórias como Cowa!, Kajika e Sandland, além de alguns one-shoots. E seu trabalho mais recente até então, como designer de personagem para o RPG Blue Dragon para o Xbox 360, com o Hironobu Sakaguchi como diretor. Akira Toryama inegavelmente é considerado o grande mestre do gênero shonen . </Text>

                
            </View>

            <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5> Todos os direitos reservados Rafael Simões Souza do 2º DSA</h5> 

        </View>
    )
} 
export default Colecao;