import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../theme/appTheme'

interface Props {
    contenido: string,
    color?: string,
    ancho?: boolean,
    evento: Function
}

const BotonCal = ({ contenido, color = '#2D2D2D', ancho = false, evento }: Props) => {
    return (
        <TouchableOpacity
        onPress={() => evento(contenido)}>
            <View style={{
                ...Styles.boton,
                backgroundColor: color,
                width: (ancho ? 180 : 80)
            }}>
                <Text style={{
                    ...Styles.botonTexto,
                    color: (color === '#9B9B9B' ? 'black' : 'white')
                }}>{contenido}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BotonCal