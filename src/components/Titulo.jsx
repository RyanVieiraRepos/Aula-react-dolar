// a pasta assets exige que eu importe uma imagem e crie um componente à ela, já as que estão na public não. permitem que eu declare <img src=""></img>


function Titulo() {
  return (

    <div className="text-center">
      <h1 className="display-2">Calculadoras</h1>
      <img src="/bank.png" width='50' className="img-fluid" alt="Bank logo" />
    </div>

  )
}

export default Titulo