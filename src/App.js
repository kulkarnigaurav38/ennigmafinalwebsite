import "./App.css";
import { useState } from "react";
import { newpage } from "newpage.js";
function App() {
  function myfunc() {
    setcounter(counter + 1);
    console.log(counter);
  }
  function yesPartOne() {
    var parttwo = document.getElementById("part2");
    var partone = document.getElementById("part1");
    var fourinput = document.getElementById("input_1.1");
    if (counter > 1 && fourinput.checked) {
      parttwo.setAttribute("style", "display: block");
      partone.setAttribute("style", "display: none");
    } else if (counter) {
      return <p>You are not depressed.</p>;
    }
  }
  function submit() {
    <newpage counter={counter} />;
  }
  function noPartOne() {
    setcounter(counter + 1);
  }
  const [counter, setcounter] = useState(1);
  return (
    <div className="App">
      <ul>
        <li id="cid_1" className="form-input-wide" data-type="control_head">
          <div className="form-header-group header-large">
            <div className="header-text httal htvam">
              <h1 id="header_1" className="form-header" data-component="header">
                Take the quiz to see if you are depressed
              </h1>
              <div id="subHeader_1" className="form-subHeader">
                Please take a moment to fill out this survey
              </div>
            </div>
          </div>
        </li>
        <div>
          <div id="part1">
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience persistent or low mood;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio part1otheryes"
                      id="input_4_0"
                      name="one"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_4_1"
                      name="one"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience loss of interests or pleasure;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio part1otheryes"
                      id="input_5_0"
                      name="two"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_5_1"
                      name="two"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience fatigue of low energy;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column2"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio part1otheryes"
                      id="input_6_0"
                      name="three"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_6_1"
                      name="three"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>

            <li
              className="form-line"
              data-type="control_radio"
              id="part1ending"
            >
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Have you experienced any of the above symptoms for at least 2
                weeks?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_1.1"
                      name="four"
                      value="Yes"
                      onClick={yesPartOne}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_1.2"
                      name="four"
                      value="No"
                      onClick={noPartOne}
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
          </div>
          <div id="part2" style={{ display: "none" }}>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience disturbed sleep?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_8_0"
                      name="five"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_8_1"
                      name="five"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience poor concentration or indecisiveness?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_9_0"
                      name="six"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_9_1"
                      name="six"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience low self-confidence?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_10_0"
                      name="seven"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_10_1"
                      name="seven"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience poor or increased appetite?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_11_0"
                      name="eight"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_11_1"
                      name="eight"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience suicidal thoughts or acts?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_12_0"
                      name="nine"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_12_1"
                      name="nine"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience agitation or slowing of movements?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_13_0"
                      name="ten"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_13_1"
                      name="ten"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Do you experience guilt of self-blame?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_14_0"
                      name="eleven"
                      value="Yes"
                      onClick={myfunc}
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_14_1"
                      name="eleven"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
            <li className="form-line" data-type="control_radio" id="id_4">
              <label
                className="form-label form-label-top form-label-auto"
                id="label_4"
              >
                Have you experienced any of the above symptoms for at least 1
                month or more?;yes/no
              </label>
              <div id="cid_4" className="form-input-wide" data-layout="full">
                <div
                  className="form-single-column"
                  role="group"
                  aria-labelledby="label_4"
                  data-component="radio"
                >
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_15_0"
                      name="twelve"
                      value="Yes"
                    />
                    <label id="label_input_4_0"> Yes </label>
                  </span>
                  <span className="form-radio-item">
                    <span className="dragger-item"> </span>
                    <input
                      type="radio"
                      aria-describedby="label_4"
                      className="form-radio"
                      id="input_15_1"
                      name="twelve"
                      value="No"
                    />
                    <label id="label_input_4_1"> No </label>
                  </span>
                </div>
              </div>
            </li>
          </div>
        </div>

        <li className="form-line" data-type="control_button" id="id_2">
          <div id="cid_2" className="form-input-wide" data-layout="full">
            <div
              data-align="auto"
              className="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField"
            >
              <button
                id="input_2"
                type="submit"
                className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                data-component="button"
                data-content=""
                onClick={submit}
              >
                Submit Survey
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
