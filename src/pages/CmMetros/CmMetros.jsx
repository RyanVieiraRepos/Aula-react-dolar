import './CmMetros.css'
import { CgRuler } from "react-icons/cg";

function CmMetros() {


    const calcular = (function () {
        const cm = document.getElementById("cm").value //selecionado o id, e o valor inserido pelo usuário(através do .value)
        const total = cm / 100        //criado uma var para o resultado da conta
        if (cm === '') {
            alert('Insira um valor!')
        } else { alert('O valor convertido para metros é ' + total + 'm') }
    }
    )

    //100cm 0.1m
    return <>


        <form className='w-25 m-auto pt-5 pb-5 text-center'>
            <strong>
                Centímetros para metros
            </strong>
            <div className='form-group mb-3 text-center'>

                <label htmlFor='cm'>Centímetros</label>
                <input type='number' className='form-control' id='cm' />
            </div>

            <button type='button' onClick={calcular} className='btn btn-primary w-100'>{<CgRuler />}Calcular</button>
        </form>
    </>
}
export default CmMetros

