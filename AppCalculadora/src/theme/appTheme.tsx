import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },
    CalculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
    ,
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});