
export class EmailSideBar extends React.Component {

    state = {
        mailStatus: 'inbox',
        isOpenCompose: false
    }

    onHandleChange = ({ target }) => {
        const value = target.name
        this.setState({ mailStatus: value }, () => {
            this.props.onSetFilter(null, this.state.mailStatus)
        })
    }

    render() {
        const { count } = this.props
        return <section className="email-side-bar">

            <div title="Send a new mail" className="add" onClick={this.props.onOpenCompose}>
                <img src="./assets/icons/plus.png" alt="" />
                <h4>Compose</h4>
            </div>

            <div title="Inbox">
                <img src="./assets/icons/inbox.png" alt="" name="inbox" className="folder" onClick={this.onHandleChange}/>
                <h4>Inbox</h4>
                {(count) && <h5 className="count">{count}</h5>}
            </div>

            <div title="Starred">
                <img src="./assets/icons/unstar.png" alt="" name="star" className="folder" onClick={this.onHandleChange} />
                <h4>Starred</h4>
            </div>

            <div title="Sent">
                <img src="./assets/icons/sent.png" alt="" name="sent" className="folder" onClick={this.onHandleChange} />
                <h4>Sent</h4>
            </div>

            <div title="Trash">
                <img src="./assets/icons/delete2.png" alt="" name="trash" className="folder" onClick={this.onHandleChange} />
                <h4>Trash</h4>
            </div>

        </section>
    }
}
