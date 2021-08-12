const sounds = [
    {
      key:'Q',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      key:'W',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      key:'E',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      key:'A',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      key:'S',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      key:'D',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      key:'Z',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      key:'X',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      key:'C',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
  ]

const Box = (props) => (
    <div className="box active">
        {props.text}
    </div>
);


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keys: ['Q','W','E','A','S','D','Z','X','C']
        }
    }

    render() {
        return (
            <div id="drum-machine" className="container d-flex align-items-center justify-content-center">
                <div id="display" className="display">
                    {this.state.keys.map((key, index) => (<Box text={key} key={index}/>))}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));