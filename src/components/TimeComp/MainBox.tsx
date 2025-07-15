 
  const timeCards = [
    {
      icon: 'bi bi-brightness-high',
      title: 'Vento',
      number: 17,
      speed: 'Km/h',
    },
    {
        icon: 'bi bi-brightness-high',
        title: 'Umidade',
        number: 31,
        speed: '%',
    },
    {
        icon: 'bi bi-brightness-high',
        title: 'Chuva',
        number: 10,
        speed: '%',
    }
  ];

export function MainBox() {
    return(
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="main-box app-card">
                <h3>18 <sup><sup>o</sup>C</sup></h3>
                <div className="d-flex align-items-center justify-center">
                    <span>22 <sup>o</sup></span>
                    <span>16 <sup>o</sup></span>
                </div>

                <div className="row">
                    {timeCards.map((timeCard, index) => (
                    <div key={index} className="col-lg-4">
                        <div className="app-card">
                            <i className={timeCard.icon}></i>
                            {timeCard.title}
                            {timeCard.number}
                            {timeCard.speed}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}