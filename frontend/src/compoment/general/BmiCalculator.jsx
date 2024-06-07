import { useState } from "react";
import { useTranslation } from "react-i18next";

const BmiCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi);
  };

  const getAdvice = (bmi) => {
    if (bmi < 18.5) {
      return "temp1";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "temp2";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "temp3";
    } else {
      return "temp4";
    }
  };

  return (
    <div>
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70">
                  <h2>{t("BMI CALCULATOR")}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bmi-calculator-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title chart-title">
                <h2>{t("CHART.name")}</h2>
              </div>
              <div className="chart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bmi</th>
                      <th>{t("CHART.weigh status")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="point">{t("CHART.Below 18.5")}</td>
                      <td>{t("CHART.Underweight")}</td>
                    </tr>
                    <tr>
                      <td className="point">18.5 - 24.9</td>
                      <td>{t("CHART.Healthy")}</td>
                    </tr>
                    <tr>
                      <td className="point">25.0 - 29.9</td>
                      <td>{t("CHART.Overweight")}</td>
                    </tr>
                    <tr>
                      <td className="point">{t("CHART.30.0 - and Above")}</td>
                      <td>{t("CHART.Obesity")}</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <th>{t("CHART.weigh status")}</th>
                      <th>{t("CHART.risk")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="point">{t("CHART.Underweight")}</td>
                      <td>
                        <p>{t("CHART.UnderweightRisk.one")}</p>
                        <p>{t("CHART.UnderweightRisk.two")}</p>
                        <p>{t("CHART.UnderweightRisk.three")}</p>
                        <p>{t("CHART.UnderweightRisk.four")}</p>
                        <p>{t("CHART.UnderweightRisk.five")}</p>
                        <p>{t("CHART.UnderweightRisk.six")}</p>
                      </td>
                    </tr>

                    <tr>
                      <td className="point">{t("CHART.Overweight")}</td>
                      <td>
                        <p>{t("CHART.OverweightRisk.one")}</p>
                        <p>{t("CHART.OverweightRisk.two")}</p>
                        <p>{t("CHART.OverweightRisk.three")}</p>
                        <p>{t("CHART.OverweightRisk.four")}</p>
                        <p>{t("CHART.OverweightRisk.five")}</p>
                        <p>{t("CHART.OverweightRisk.six")}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-5  ">
              <div className="section-title chart-calculate-title">
                <h2>{t("calculate.name")}</h2>
              </div>
              <div className="chart-calculate-form">
                <p>{t("calculate.description")}</p>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Height / cm"
                        onChange={(e) => setHeight(Number(e.target.value))}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Weight / kg"
                        onChange={(e) => setWeight(Number(e.target.value))}
                      />
                    </div>
                    <div className="col-lg-12">
                      <button type="submit">{t("button")}</button>
                    </div>
                  </div>
                </form>
                {bmi > 0 && (
                  <div>
                    <p>
                      {t("calculate.total")} {bmi.toFixed(2)}
                    </p>
                    <p>
                      {(() => {
                        const advice = getAdvice(bmi);
                        if (advice === "temp1") {
                          return t("calculate.result.one");
                        } else if (advice === "temp2") {
                          return t("calculate.result.two");
                        } else if (advice === "temp3") {
                          return t("calculate.result.three");
                        } else {
                          return t("calculate.result.four");
                        }
                      })()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Bmi Calculator Section End --> */}
    </div>
  );
};

export default BmiCalculator;
