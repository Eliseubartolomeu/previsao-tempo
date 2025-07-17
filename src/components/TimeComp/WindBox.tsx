const timeElements = [
    {
        number: 12.9,
        element: 'PM2.5',
    },
    {
        number: 12.9,
        element: 'PM10',
    },
    {
        number: 2.1,
        element: 'SO2',
    },
    {
        number: 1.4,
        element: 'NO2',
    },
    {
        number: 21.2,
        element: 'O2',
    },
    {
        number: 0.7,
        element: 'CO',
    },
  ];

export function WindBox() {
    return(
        <div className="col-md-6">
            <div className="card text-center">
              <p className="mb-1">Qualidade do ar</p>
              <h4 className="text-success">Boa</h4>
              <h1>21</h1>
              <small>PM2.5: 12.9 | PM10: 12.9 | SO₂: 2.1<br/>NO₂: 1.4 | O₃: 21.2 | CO: 0.7</small>
            </div>
        </div>
    )
}