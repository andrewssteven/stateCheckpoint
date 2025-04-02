import React from 'react'

class App extends React.Component {
  state = {
    person: {
      fullname: "Lionel Messi",
      bio: "World-class playmaker, dribbler, goal-scorer, and football legend forever.",
      imgsrc: "https://pngfre.com/wp-content/uploads/lionel-messi-9-1024x870.png",
      profession: "Footballer",
    },
    show: false,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleshow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    return <div className='m-10 space-y-4'>

      <h1 className='text-xl'>Person Profile</h1>
    {this.state.show && (

      < div className='bg-[#001F3F] text-white p-3 rounded-md shadow-2xl w-90 space-y-0.5'>
        <img src={this.state.person.imgsrc} alt="profile picture" className='h-78 w-full object-contain'/>
        <p>Name: {this.state.person.fullname} </p>
        <p>Bio: {this.state.person.bio} </p>
        <p>Occupation: {this.state.person.profession} </p>
      </div>

    )}

      <button onClick={this.toggleshow} className='px-6 py-2 bg-blue-800 text-gray-50 font-semibold rounded-md' >
        {this.state.show ? "Hide Profile" : "Show profile"}
      </button>

      <p className="text-gray-700 font-semibold">
          Time Since Component Mounted: {this.state.elapsedTime} seconds
      </p>

    </div>
  }
 }
 export default App;