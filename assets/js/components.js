export const LoginForm = () => 
    <form className="navbar-form navbar-right">
        <div className="form-group">
            <input type="text" placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
            <input type="password" placeholder="Password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success" href="#/dashboard" role="button"> Go! </button>
    </form>

export const Nav = ({includeLogin}) => 
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar">About</span>
                <span className="icon-bar">Contact</span>
                <span className="icon-bar">Coming Soon</span>
                </button>
                <a className="navbar-brand" href="#">Stably.us</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                {includeLogin ? <LoginForm /> : null}
            </div>
        </div>
    </nav>

export const Jumbotron = () => 
    <div className="jumbotron">
        <div className="container">        
            <h1>Welcome to Stably!</h1>
            <p>The app that keeps you on track.</p>
            <p>Our focus is YOUR focus. This program keeps track of how much time you've spent working, and motivates you with milestones and rewards.
            If you work in tech or use your computer for business, it will manage your billable hours, breaks, and much more. Create your profile below!</p>
            <p><a className="btn btn-primary btn-lg" href="#/login" role="button">Login or Register Here! &raquo;</a></p>
        </div>
    </div>
    
export const JumboLogin = () => 
    <div className="jumbologin">
        <div className="container">        
            <h1>Welcome Back!</h1>
            <p>Let's get to work- but first, Credentials! Let's see 'em.</p>            
        </div>
        <div className="logingroup">
            <div className="form-group">
                <input type="text" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" className="form-control" />
                <div className="lgnbtn"><p><a className="btn btn-success btn-lg" href="#/dashboard" role="button">Login &raquo;</a></p></div>
            </div>
        </div>
        <div className="container">
        <hr/>     
            <p>Not a registered user? Start Here.</p>            
        </div>
        <div className="registergroup">
            <div className="form-group">
                <input type="text" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" className="form-control" />
                <div className="regbtn"><p><a className="btn btn-success btn-lg" href="#/register" role="button">Register &raquo;</a></p></div>
            </div>
        </div>
    </div>

export class Timer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            interval: null,
            elapsedSeconds: 0,
            breakSeconds: 0,
            timestamp: "00:00:00",
            breaktimestamp: "00:00:00"
        }
    }

    toggleTimer(){
        const {interval, elapsedSeconds} = this.state

        if(!interval){
            var i = setInterval(() => {
                let {elapsedSeconds} = this.state
                elapsedSeconds++;
                var hours = Math.floor(elapsedSeconds/60/60)
                var mins = Math.floor(elapsedSeconds/60)
                var secs = Math.floor(elapsedSeconds%60)
                if(hours < 10) hours = "0" + hours
                if(mins < 10) mins = "0" + mins
                if(secs < 10) secs = "0" + secs
                this.setState({elapsedSeconds, timestamp: hours + ":" + mins + ":" + secs})
            }, 1000);

            this.setState({
                interval: i
            })

        } else {
            clearInterval(interval)
            this.setState({interval: null})
        }
    }

    toggleBreak(){
        const {interval, breakSeconds} = this.state

        if(!interval){
            var j = setInterval(() => {
                let {breakSeconds} = this.state
                breakSeconds++;
                var hours = Math.floor(breakSeconds/60/60)
                var mins = Math.floor(breakSeconds/60)
                var secs = Math.floor(breakSeconds%60)
                if(hours < 10) hours = "0" + hours
                if(mins < 10) mins = "0" + mins
                if(secs < 10) secs = "0" + secs
                this.setState({breakSeconds, breaktimestamp: hours + ":" + mins + ":" + secs})
            }, 1000);

            this.setState({
                interval: j
            })

        } else {
            clearInterval(interval)
            this.setState({interval: null})
        }
    }

    render(){
        return <div className="timer">
            <div className="container">
                <h2>Timer Settings</h2>
                <p>Choose your timer method. You will then be able to customize your session.</p>
                <p><a className= "btn btn-warning btn-lg" href ="#" role="button">Pomodoro Timer</a></p>
                <p><a className= "btn btn-success btn-lg" href ="#" role="button">Traditional Timer</a></p>

                <button id="startTimer" onClick={e => this.toggleTimer()}>
                    { this.state.interval ? "Stop Timer" : "Start Timer" }
                </button>
                <div id="output">{this.state.timestamp}</div>

                <button id="breakTimer" onClick={e => this.toggleBreak()}>
                    {this.state.interval ? "Start Break" : "End Break"}
                </button>
                <div id="breakOutput">{this.state.breaktimestamp}</div>
            </div>
        </div>
    }
}

export const HomeContents = () =>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h2>What does Stably do?</h2>
                <p>Stably has the potential to enhance your awareness, dexterity, and productivity while using the computer.
                Perfect for typists, programmers, data analysts, number crunchers, teachers, bloggers - you name it!</p>
                <p><b> Wherever you go, whatever you do with your machine, Stably can go the distance with you.</b></p>
                <p><a className="btn btn-info" href="#" role="button">Find Out How &raquo;</a></p>
            </div>
            
            <div className="col-md-4">
                <h2>Schedule your energy, let us take care of your time!</h2>
                <p>Stably has two modes of time-tracking: Pomodoro and Standard
                <br/>
                1. For short bursts or time-sensitive duties, use the Pomodoro Timer (Read the benefits of the "Tomato" technique here) allowing you to dictate your workflow.
                <br/>
                2. The Standard Tasktimer simply counts your minutes as long as you want it to, and suggests breaks as you go.
                <br/>
                <u>Both modes allow you to track billable and non-billable hours at the flip of a switch.</u></p>
                <p><b>With every completed session, Stably learns how and when you work best. The app will suggest a schedule for you to be the most productive based on your habits!</b></p>
                <p><a className="btn btn-info" href="#/instructions" role="button"> Get Started &raquo;</a></p>
            </div>

            <div className="col-md-4">
                <h2>Conquer your Wanderlust</h2>
                <p><b>Coming Soon:</b> Stably will have the ability to suggest events and locales near you. We are working on bringing fresh and new activities which connect you with the local culture. Stay tuned!</p>
                <p><a className="btn btn-success" href="#" role="button">View details &raquo;</a></p>
            </div>
        </div>

    <hr/>
        <footer>
        <div className="footer">
            <p>&copy; 2016 Stably. All Rights Reserved</p>
        </div>
        </footer>   
 </div>