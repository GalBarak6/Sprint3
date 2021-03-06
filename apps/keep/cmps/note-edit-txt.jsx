import { ColorInput } from './dynamic-inputs/color-input.jsx'

export class NoteEditTxt extends React.Component {

    state = {
        note: {
            type: 'note-txt',
            info: {
                title: '',
                txt: '',
            },

            isPinned: false,
            style: {
                backgroundColor: ''
            }
        },
        isSetColorOn: false
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        const note = this.props.selectedNote
        if (!note) return
        this.setState({ note })
    }

    handleChange = ({ target }) => {
        const field = target.name
        console.log(field)
        const value = target.value
        this.setState((prevState) => (
            {
                note: {
                    ...prevState.note,
                    info: { ...prevState.note.info, [field]: value }
                }
            }
        ))
    }

    handleStyleChange = (field, value) => {
        this.setState((prevState) => (
            {
                note: {
                    ...prevState.note,
                    style: { ...prevState.note.style, [field]: value }
                }
            }
        ))
    }

    onSave = (ev) => {
        ev.preventDefault()
        this.props.onSaveNote(this.state.note)
    }

    onSetColorOn = () => {
         this.setState({isSetColorOn: true})
    }


    render() {
        const { style } = this.state.note
        console.log('style', style)
        const { title, txt } = this.state.note.info
        var className
        if (this.props.selectedNote) className = 'modal-container'

        return <section style={style} className="note-edit-container" >
            <section className={"note-edit-txt " + className}>
                <form onSubmit={this.onSave}>
                    <div className="flex space-between">
                        <input style={style} className="no-border input-size" type=" text" name="title" placeholder="Title"
                            value={title} onChange={this.handleChange} />
                        {/* <img src="./assets/icons/pin.png" /> */}
                    </div>
                    <div>
                        <textarea style={style} className=" no-rezise no-border textarea-size" name="txt" placeholder="Take a note..."
                            value={txt} onChange={this.handleChange} />
                    </div>
                    <div className="flex space-between">
                        <img src="./assets/icons/colors.png" onClick={this.onSetColorOn} />
                        <button>Close</button>
                    </div>
                </form>
            </section>
            { this.state.isSetColorOn && <ColorInput handleStyleChange={this.handleStyleChange} />}
            
        </section>
    }
}