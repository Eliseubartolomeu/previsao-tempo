const daysItems = [
    {
        day: 'Amanhã',
        img: 'bi bi-brightness-high',
        maxTemp: '21oC',
        minTemp: '16oC'
    },
    {
        day: 'Sexta feira',
        img: 'bi bi-brightness-high',
        maxTemp: '28oC',
        minTemp: '20oC'
    },
    {
        day: 'Sabádo',
        img: 'bi bi-brightness-high',
        maxTemp: '25oC',
        minTemp: '21oC'
    },
    {
        day: 'Domingo',
        img: 'bi bi-brightness-high',
        maxTemp: '20oC',
        minTemp: '14oC'
    },
    {
        day: 'Segunda-feira',
        img: 'bi bi-brightness-high',
        maxTemp: '24oC',
        minTemp: '18oC'
    },
]

export function DaysWeather() {
    return(
        <div className="row align-items-center content dayswether">
            <div className="col-lg-12">
                <div className="app-card">
                    <div className="rossw align-items-center dayswether-list">
                        {daysItems.map((daysItem, index) => (
                            <div
                            key={daysItem.day}
                            className="a"
                            data-aos="zoom-in"
                            data-aos-delay={400 + index * 50}
                            title={daysItem.day}
                            >
                            <div className="dayswether-box">                        
                                {daysItem.maxTemp}
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}