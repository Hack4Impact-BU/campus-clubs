export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <aside className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><a>Dashboard</a></li>
                    <li><a>Customers</a></li>
                </ul>
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li><a>Team Settings</a></li>
                    <li>
                        <a className="is-active">Manage Your Team</a>
                        <ul>
                            <li><a>Members</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        )
    }
}