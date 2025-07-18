interface SunTimeBoxProps {
  sunrise: number;
  sunset: number;
}

export function SunTimeBox({ sunrise, sunset }: SunTimeBoxProps) {
  function formatHour(timestamp: number) {
    return new Date(timestamp * 1000).toLocaleTimeString("pt-PT", {
      hour: "2-digit",
      minute: "2-digit",
      // timeZone: "UTC",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone

    });
  }

  return (
    <div className="col-md-6">
      <div className="app-card text-center">
        <p className="mb-1">Horário do sol</p>

        <div className="sun-chart">
          <div className="sun-point"></div>
        </div>

        <h4>{formatHour((sunrise + sunset) / 2)}</h4>

        <div className="d-flex justify-content-between small">
          <span>{formatHour(sunrise)}</span>
          <span>{formatHour(sunset)}</span>
        </div>
      </div>
    </div>
  );
}
