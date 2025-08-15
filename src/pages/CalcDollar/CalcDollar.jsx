import './CalcDollar.css'
import { AiFillDollarCircle } from "react-icons/ai";

function CalcDollar() {

    const calcular = (function () {
        const reais = document.getElementById("reais").value //selecionado o id, e o valor inserido pelo usuário(através do .value)
        const dolar = document.getElementById("cotacao").value
        const total = reais / dolar         //criado uma var para o resultado da conta
        if (reais === '') {
            alert('Insira o valor do real!')
        } else if (dolar === '') {
            alert('Insira o valor do dólar!')

        }
        else { alert('O valor convertido para centímetros é ' + total + 'cm') }
    }
    )


    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5 text-center'>

                <strong>
                    Reais para dólar
                </strong>

                <div className='form-group mb-3 text-center'>

                    <label htmlFor='reais'>Valor em Reais</label>
                    <input type='number' className='form-control' id='reais' />
                </div>


                <div className='form-froup mb-3 text-center'>

                    <label htmlFor='cotacao'>Cotação do Dólar</label>
                    <input type='number' className='form-control' id='cotacao' />
                </div>
                <button type='button' onClick={calcular} className='btn btn-primary w-100'><AiFillDollarCircle className='mx-1' size={20} color="white" />Calcular</button>

            </form>
        </>
    )
}


export default CalcDollar   