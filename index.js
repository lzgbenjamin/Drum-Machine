const sounds = [
    {
      key:'Q',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
      name: "Piano 1"
    },
    {
      key:'W',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
      name: "Piano 2"
    },
    {
      key:'E',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
      name: "Piano 3"
    },
    {
      key:'A',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
      name: "Foley"
    },
    {
      key:'S',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
      name: "Open HH"
    },
    {
      key:'D',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
      name: "Closed HH"
    },
    {
      key:'Z',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      name: "Kick"
    },
    {
      key:'X',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
      name: "Rimshot"
    },
    {
      key:'C',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      name: "Snare"
    },
  ]

const App = (props) => (
    <div id="drum-machine" className="container d-flex align-items-center justify-content-center">
                <div id="display" className="display">
                <h1 className="bruh">Press a key!</h1>
                    {sounds.map((sound, index) => (
                    <DrumPad text={sound.key} key={index} audio={sound.mp3} name={sound.name}/>
                    ))}
                </div>
            </div>
);

document.addEventListener('keydown', (e) => {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    


    if(audio) {
        audio.currentTime = 0;
        const parent = audio.parentNode;
        parent.classList.add('active');
        audio.play();

        const display = parent.parentNode;
        display.querySelector('h1').innerText = `${audio} is playing`;
    }    
});

class DrumPad extends React.Component {
    constructor(props) {
        super(props)

        this.audio = React.createRef();
    }

    componentDidMount() {
        this.audio.current.addEventListener('ended', (e) => {
            const parent = e.target.parentNode;
            parent.classList.remove('active');
        });
    }

    playSound = () => {
        this.audio.current.play();

        const id= this.audio.current.id;
        const parent = this.audio.current.parentNode;

        parent.classList.add('active');

        const display = parent.parentNode;
        display.querySelector('h1').innerText = `${id} is playing`;
    }

    render() {
        const {text, audio} = this.props;

        return (
            <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}> 
                {text}
                <audio ref={this.audio} src={audio} className="clip" id={text} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));