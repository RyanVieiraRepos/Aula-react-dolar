import './MetrosCm.css'
import { CgRuler } from "react-icons/cg";

function MetrosCm() {

    const calcular = (function () {
        const m = document.getElementById('m').value //selecionado o id, e o valor inserido pelo usuário(através do .value)
        const total = m * 1000;             //criado uma var para o resultado da conta

        if (m === '') {
            alert('Insira um valor!')
        } else { alert('O valor convertido para centímetros é ' + total + 'cm') }





    }
    )

    return <>
        <form className='w-25 m-auto pt-5 pb-5 text-center'>

            <strong>
                Metros para centímetros
            </strong>

            <div className='form-group mb-3 text-center'>

                <label htmlFor='m'>Centímetros</label>

                <input type='number' className='form-control' id='m' />
            </div>

            <button type='button' onClick={calcular} className='btn btn-primary w-100'>{<CgRuler />}Calcular</button>

        </form>

    </>
}
export default MetrosCm
