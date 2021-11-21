import React from "react";
import AnswerModal from "./AnswerModal";
import { MathHelper } from "../utils";
import bowl from "../assets/bowl.png"
import rooster from "../assets/rooster.png"
import './Quiz.css'
import sessionData from "../utils/sessionData.js"
import Drop from "./drag.jsx";
import DifficultDrag from "./DifficultDrag";
import "animate.css"
import Hints from "./Hints";
class Quiz extends React.Component {
  _isMounted = false;
  _secondsIntervalRef;
  state = {
    problem: "",
    firstNumber: 0,
    secondNumber: 0,
    symbol: "",
    answer: 0,
    modal: "",
    modalShowing: false,
    streaks: 0,
    images: [bowl, rooster],
    randomImage: "",
    data: [],
    totalProblems: 1,
  };

  earnLife = () => {
    this.props.onEarnLife();
    this.showModal("success", "STREAK!! You won a life ♥");
    this.setState({
      streaks: 0
    });
  };

  correctAnswer = () => {
    if (this.state.streaks > 2) {
      this.earnLife();
    } else {
      this.showModal("success");
    }

    this._isMounted && this.props.onCorretAnswer();
    this.setState(state => {
      return {
        streaks: state.streaks + 1
      };
    });

    this.nextProblem();
  };
  componentDidUpdate() {
    if (this.state.totalProblems > sessionData.limit) {
      this.props.onEndGame()
    }
  }
  componentDidMount() {
    this._isMounted = true;
    this.getProblem();
    this.populateHover();

    // this.answerInput.focus();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lifes < 1) {
      this.props.onEndGame(this.state.points);
      return false;
    }
    return nextProps.lifes > -1;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  wrongAnswer = () => {
    this._isMounted && this.props.onWrongAnswer();
    this.setState({
      streaks: 0
    });
    this.showModal("error", MathHelper.solve(this.state.problem).toString());
    this.nextProblem();
  };

  nextProblem = () => {
    setTimeout(() => {
      this.getProblem();
      this._isMounted &&
        this.setState({
          modalShowing: false,
          answer: 0,
          totalProblems: this.state.totalProblems + 1
        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };

  evaluateProblem = () => {
    const answer = MathHelper.solve(this.state.problem);
    const attemptedAnswer = this.state.answer
    const problem = this.state.firstNumber + "!" + this.state.secondNumber
    sessionData.setData(problem, attemptedAnswer, answer)
    // sessionData.sendData()
    if (MathHelper.compare(this.state.problem, this.state.answer)) {
      return this.correctAnswer();
    }
    return this.wrongAnswer();
  };

  keyingUp = ev => {
    if (ev.key === "Enter") {
      this.evaluateProblem();
    }
    const val = ev.target.value;

    this.setState({
      answer: Number(val.match(/((-?)\d+)/g)) // accept just numbers and the minus symbol
    });

  };

  showModal = (type, text) => {
    this.setState({
      modal: <AnswerModal type={type} text={text} />,
      modalShowing: true
    });
  };

  getProblem = () => {
    // const newProblemSet = MathHelper.generateAdditionProblem(this.props.points);
    const newProblemSet = MathHelper.generateSubtractionProblem(this.props.points);
    const randomImage = this.getImage()
    this._isMounted &&
      this.setState({
        problem: newProblemSet.problem,
        firstNumber: newProblemSet.firstNumber,
        secondNumber: newProblemSet.secondNumber,
        symbol: newProblemSet.symbol,
        randomImage: randomImage,
      });
  };
  populateHover = () => {
    let arrayHover = []
    for (let i = 0; i < this.state.firstNumber; i++) {
      arrayHover.push(false)
    }
    this.setState({ hover: arrayHover })
  }

  getImage = () => {
    return this.state.images[MathHelper.getRandomInt(0, this.state.images.length - 1)]
  }

  render() {
    // const images = [...Array(parseInt(this.state.firstNumber))].map((e, i) => {
    //   return <img key={i} src={bowl} style={{ width: "100px", height: "80px" }} />
    // });

    return (
      <section className="show-up" style={{ width: "100%", height: "100vh" }}>
        {/* <Hints currentProblem={this.state.problem}/> */}
        <div >
          {this.state.modalShowing ? (
            this.state.modal
          ) : (
            <div>
              {sessionData.dif != "b" ?
                <div>
                  {/* <section>
                    <blockquote class="electric bubble">Autobots,<span>Attack!</span></blockquote>
                  </section> */}
                  <h1 style={{ fontSize: "3.5em" }}> {this.state.problem} </h1>
                  <DifficultDrag handleAnswer={this.evaluateProblem} answer={this.state.answer} incCount={(number) => { this.setState({ answer: this.state.answer + number }) }} decCount={(number) => { this.setState({ answer: this.state.answer - number }) }} count={this.state.answer} img={this.state.randomImage} />
                </div> :
                <div>
                  {/* <table align="center">
                    <tbody>
                      <tr >
                        {[...Array(parseInt(this.state.firstNumber))].map((e, i) => {
                          return <td ><img key={i} src={this.state.randomImage} className="questionImage " draggable="false" /> </td>
                        })}
                        <td className="center"><h1 style={{ fontSize: "3.5em" }}> {this.state.symbol} </h1></td>
                        {[...Array(parseInt(this.state.secondNumber))].map((e, i) => {
                          return <td ><img key={i} src={this.state.randomImage} className="questionImage " draggable="false" /></td>
                        })}
                      </tr>
                    </tbody>
                  </table> */}
                  {/* { this.state.firstNumber - this.state.secondNumber < 7 ? <div className="objectRow" style={{ width: "100%" }}>
                    <div className="objectLeft">
                      {[...Array(parseInt(this.state.firstNumber))].map((e, i) => {
                        return <img key={i} src={this.state.randomImage} className="questionImage " draggable="false" />
                      })}
                    </div>
                    <span className="operator" style={{ fontSize: "3.5em", textShadow: "1px 1px 1px #ff0000", float: "left", display: "inline" }}> {this.state.symbol} </span>
                    <div className="objectRight">
                      {[...Array(parseInt(this.state.secondNumber))].map((e, i) => {
                        return <img key={i} src={this.state.randomImage} className="questionImage " draggable="false" />
                      })}
                    </div>
                  </div> :  <h1 style={{ fontSize: "3.5em" }}> {this.state.problem} </h1>
                  } */}
                  <h1 style={{ fontSize: "3.5em" }}> {this.state.problem} </h1>
                  <Drop handleAnswer={this.evaluateProblem} answer={this.state.answer} incCount={(number) => { this.setState({ answer: this.state.answer + number }) }} decCount={(number) => { this.setState({ answer: this.state.answer - number }) }} count={this.state.answer} img={this.state.randomImage} />
                </div>
              }
              {/* <input
                ref={input => {
                  this.answerInput = input;
                }}
                className="App-input"
                type="number"
                placeholder="Enter"
                onKeyUp={this.keyingUp}
              /> */}
              {/* <input
                ref={input => {
                  this.answerInput = input;
                }}
                className=""
                type="number"
                placeholder="Enter"
                value={this.state.answer}
                onKeyUp={this.keyingUp}
              /> */}
              {/* <button className="btn fourth answerButton" onClick={this.evaluateProblem}> {this.state.answer} </button> */}
            </div>
          )}
        </div>
      </section>

    );
  }
}

export default Quiz;
