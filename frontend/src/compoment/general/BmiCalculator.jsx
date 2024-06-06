import { useState } from "react";
import { useTranslation } from "react-i18next";

const BmiCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const { t, i18n } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi);
  };

  const getAdvice = (bmi) => {
    if (bmi < 18.5) {
      return "You are underweight. It's important to eat a balanced diet and consult with a healthcare provider to determine the cause and address it appropriately.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "You have a healthy weight. Keep up with your balanced diet and regular physical activity to maintain your weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "You are overweight. Consider adopting a healthier diet and increasing your physical activity. Consulting with a healthcare provider can also help you create a plan.";
    } else {
      return "You are obese. It's important to take action to reduce your weight through a healthy diet and regular exercise. Seeking advice from a healthcare provider is highly recommended.";
    }
  };

  return (
    <div>
      <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 pt-70">
                  <h2>{t('BMI CALCULATOR')}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bmi-calculator-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title chart-title">
                <h2>{t('CHART.name')}</h2>
              </div>
              <div class="chart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bmi</th>
                      <th>{t('CHART.weigh status')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="point">{t('CHART.Below 18.5')}</td>
                      <td>{t('CHART.Underweight')}</td>
                    </tr>
                    <tr>
                      <td class="point">18.5 - 24.9</td>
                      <td>{t('CHART.Healthy')}</td>
                    </tr>
                    <tr>
                      <td class="point">25.0 - 29.9</td>
                      <td>{t('CHART.Overweight')}</td>
                    </tr>
                    <tr>
                      <td class="point">{t('CHART.30.0 - and Above')}</td>
                      <td>{t('CHART.Obesity')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="section-title chart-calculate-title">
                <h2>{t('calculate.name')}</h2>
              </div>
              <div class="chart-calculate-form">
                <p>
                {t('calculate.description')}
                </p>
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="text" placeholder="Height / cm" onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div class="col-sm-6">
                      <input type="text" placeholder="Weight / kg" onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    {/* <div class="col-sm-6">
                      <input type="text" placeholder="Age" />
                    </div>
                    <div class="col-sm-6">
                      <input type="text" placeholder="Sex" />
                    </div> */}
                    <div class="col-lg-12">
                      <button type="submit">{t('button')}</button>
                    </div>
                  </div>
                </form>
                {bmi > 0 && (
                  <div>
                    <p>{t('calculate.total')} {bmi.toFixed(2)}</p>
                    <p>{getAdvice(bmi)}</p>
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
