import './500.css'
function Error() {
  
  function goBack() {
    window.history.back();
  }

  return (
    <>
        <h1>500</h1>
        <h2>Internal Server Error</h2>
        <br />
        <div style={{textAlign: "center"}}>
          <button className="btn btn-warning" onClick={goBack}>Go Back</button>
        </div>
    </>
  )
}

export default Error
