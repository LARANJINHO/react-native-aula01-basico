import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}> Os melhores </Text>
                        <Text style={estiloItem.texto}> Seus principais trabalhos foram Dragon Ball, Dr Slump e Go! Go! Ackman, aqui estão algumas dessas capas:	 </Text>

                
            </View>
            <img src="https://images-ext-1.discordapp.net/external/0iF6s4jhm4i9_1dnMey8nRaVzd_P-hGX8BVkY56dksw/https/media.discordapp.net/attachments/853468779585208350/913969193144184852/unknown.png" witdh="300px" height="370px"/>

            <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5> Todos os direitos reservados Rafel Simões Souza do 2º DSA</h5> 

        </View>
    )
}
export default Item;