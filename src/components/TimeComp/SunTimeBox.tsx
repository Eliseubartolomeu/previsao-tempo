export function SunTimeBox() {
    return(
        <div className="col-md-6">
            <div className="card text-center">
              <p className="mb-1">Horário do sol</p>
              <div className="sun-chart">
                <div className="sun-point"></div>
              </div>
              <h4>16:01</h4>
              <div className="d-flex justify-content-between small">
                <span>06:12</span>
                <span>18:52</span>
              </div>
            </div>
        </div>
    )
}