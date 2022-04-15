import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
class App extends React.Component {
  state = {
    fullName: "Deepika Padukone",
    bio: "Deepika Padukone is an Indian actress who works in Hindi films. One of the highest-paid actresses in India, her accolades include three Filmfare Awards.",
    imgSrc: "",
    profession: "Actress",
    show: true,
    time: 0,
  };

  toggleShow = () => {
    this.setState((prevProfile) => ({ show: !prevProfile.show }));
    this.state.show
      ? this.componentDidMount()
      : this.setState({ time: 0 }) && this.componentWillUnmount();
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    return (
      <div className="screen">
        <Navbar />
        {this.state.show == true && (
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="/deepika_photo.jpg"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{this.state.fullName}</h5>
                  <h6 class="card-title">{this.state.profession}</h6>
                  <p class="card-text">{this.state.bio}</p>
                  <p class="card-text">
                    <small class="text-muted">
                      Profile last mounted: {this.state.time} seconds ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="btn-div">
          <button type="button" class="btn btn-dark" onClick={this.toggleShow}>
            {this.state.show == true ? "Hide" : "Show"}
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
