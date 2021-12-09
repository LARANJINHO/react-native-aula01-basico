import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda: {
        backgroundColor: '#000000',
        width: '80%',
        height: '40%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#D0CFC7',
        backgroundColor: '#D0CFC7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
});
export default estiloInicial;