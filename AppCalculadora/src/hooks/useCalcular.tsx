import { useRef, useState } from "react"

enum operadores {
   sumar, restar, multiplicar, dividir
}


const useCalcular = () => {

   const [Resultado, setResultado] = useState("0")
   const [Acumulador, setAcumulador] = useState("0")

   const operaciones = useRef<operadores>()

   const Calcular = (simbolo: string): void => {

      if (Resultado.endsWith('.')) {
         setAcumulador(Resultado.slice(0, -1))
      } else {
         setAcumulador(Resultado)
      }
      operacion(simbolo)
      if (simbolo !== '=') {
         setResultado('0')
      } else {
         setAcumulador('0')
      }
   }

   const Acumular = (valor: string) => {
      if (Resultado.includes('.') && valor === '.') return

      if (Resultado.startsWith('0') || Resultado.startsWith('-0')) {
         if (valor === '.') {
            setResultado(Resultado + valor)
         } else if (valor === '0' && Resultado.includes('.')) {
            setResultado(Resultado + valor)
         } else if (valor !== '0' && !Resultado.includes('.')) {
            setResultado(valor)
         } else if (valor === '0' && !Resultado.includes('.')) {
            setResultado(Resultado)
         } else {
            setResultado(Resultado + valor)
         }
      } else {
         setResultado(Resultado + valor)
      }
   }

   const Limpiar = () => {
      setResultado('0')
      setAcumulador('0')
   }

   const EliminarAnterior = () => {
      if (Resultado.length > 0) {
         if (Resultado.length === 1) {
            setResultado('0')
            return
         }
         if (Resultado.length === 2 && Resultado.startsWith('-')) {
            setResultado('0')
            return
         }
         setResultado(Resultado.slice(0, -1))
      }
   }

   const InvertirNegativoPositivo = () => {
      if (Resultado.includes('-')) {
         setResultado(Resultado.replace('-', ''))
      } else {
         setResultado('-' + Resultado)
      }

   }


   const operacion = (simbolo: string) => {

      switch (simbolo) {
         case '+':
            operaciones.current = operadores.sumar
            break;
         case '-':
            operaciones.current = operadores.multiplicar
            break;
         case '*':
            operaciones.current = operadores.restar
            break;
         case '/':
            operaciones.current = operadores.dividir
            break;
         case '=':
            GenerarResultado()
            break;
         default:
            break;
      }
   }
   const GenerarResultado = () => {

      const num1 = Number(Resultado)
      const num2 = Number(Acumulador)

      switch (operaciones.current) {
         case operadores.sumar:
            setResultado(`${num1 + num2}`)
            break;
         case operadores.restar:
            setResultado(`${num1 - num2}`)
            break;
         case operadores.multiplicar:
            setResultado(`${num1 * num2}`)
            break;
         case operadores.dividir:
            setResultado(`${num1 / num2}`)
            break;

         default:
            break;
      }
   }

   return {
      Resultado,
      Acumulador,
      Acumular,
      Calcular,
      Limpiar,
      EliminarAnterior,
      InvertirNegativoPositivo
   }
}

export default useCalcular