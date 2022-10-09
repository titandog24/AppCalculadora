import React from 'react'
import { Text, View } from 'react-native'
import BotonCal from '../components/BotonCal'
import { ArregloDeBotones } from '../data/botones';
import { Styles } from '../theme/appTheme'
import useCalcular from '../hooks/useCalcular';




const CalculadoraScreen = () => {

    const {
        Resultado,
        Acumulador,
        Acumular,
        Calcular,
        Limpiar,
        EliminarAnterior,
        InvertirNegativoPositivo
    } = useCalcular()



    return (
        <View style={Styles.CalculadoraContainer}>
            <Text style={Styles.resultadoPequeno}>
                {(Acumulador !== '0') ? Acumulador : ''}
            </Text>
            <Text style={Styles.resultado}>
                {Resultado}
            </Text>
            <View style={Styles.fila}>
                <BotonCal contenido='C' color='#9B9B9B' evento={Limpiar}/>
                <BotonCal contenido='+/-' color='#9B9B9B' evento={InvertirNegativoPositivo}/>
                <BotonCal contenido='del' color='#9B9B9B' evento={EliminarAnterior}/>
                <BotonCal contenido='/' color='#FF9427' evento={Calcular}/>
            </View>
            <>
                {
                    ArregloDeBotones().map((fila, index) => {
                        return <View style={Styles.fila} key={index}>
                            {
                                fila.map((boton, index) => {
                                    return <BotonCal 
                                    contenido={boton} 
                                    color={(
                                    boton !== 'X' &&
                                    boton !== '-' &&
                                    boton !== '+' &&
                                    boton !== '=') ? '#2D2D2D' : '#FF9427'}
                                    ancho={(boton==='0' ? true : false)}
                                    key={index}
                                    evento={
                                        (
                                            boton !== 'X' &&
                                            boton !== '-' &&
                                            boton !== '+' &&
                                            boton !== '=') ? Acumular : Calcular
                                    } />
                                })
                            }
                        </View>
                    })
                }
            </>
        </View>
    )
}

export default CalculadoraScreen