interface WindBoxProps {
    airData: any;
  }
  
  export function WindBox({ airData }: WindBoxProps) {
    if (!airData) return null;
  
    const air = airData.list[0];
    const qualityIndex = air.main.aqi;
    const components = air.components;
  
    const qualidade = ["Muito boa", "Boa", "Moderada", "Ruim", "Muito ruim"];
  
    return (
      <div className="col-md-6">
        <div className="app-card text-center">
          <p className="mb-1">Qualidade do ar</p>
          <h4 className="text-success">{qualidade[qualityIndex - 1]}</h4>
          <h1>{components.o3}</h1>
          <small>
            PM2.5: {components.pm2_5} | PM10: {components.pm10} | SO₂: {components.so2}<br />
            NO₂: {components.no2} | O₃: {components.o3} | CO: {components.co}
          </small>
        </div>
      </div>
    );
  }
  