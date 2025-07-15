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
        <div className="col-lg-6">
            <div className="app-card">
                <div><i className="bi bi-tree"></i><span>Qualidade do ar</span></div>
                <div className="text-center">
                    <span>Boa</span>
                    <h4>21</h4>
                </div>

                <div className="row">
                    {timeElements.map((timeElement, index) => (
                        <div key={index} className="col-lg-2">
                            {timeElement.number}
                            {timeElement.element}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}