import {NoteTodosPreview} from './note-todos-preview.jsx'

export function NoteTodos({ note }) {
    const { info } = note

    return <section className="note-todos">
        <div>{note.info.title}</div>
        {info.todos.map((todo, idx) => <NoteTodosPreview key={idx} todo={todo} />)}

    </section>
}