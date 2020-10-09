class QuestionOverlay extends Component {

    constructor() {

        super();

        this.showComments = this.showComments.bind(this);

        this.state = {

            showComponent: false,
        };

    }


    showComments = (e) => {

        this.setState({

            showComponent: true,

        });

    }

    render() {

        return (

            <div className="add_checkbox">

                <span>Enable Comments</span>
                <input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showComments} value="enable_comment" />

            </div>



                { this.state.showComponent ? <div className="comments_preview_sample"></div> : null }

        )
    }
}