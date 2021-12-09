import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    borda: {
        backgroundColor: '#000000',
        width: '80%',
        height: '15%',
        borderRadius: 10,
        marginBottom: 30,
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    botaoContainer: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 10,
        borderColor: '#000000',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
});

export default estiloItem;