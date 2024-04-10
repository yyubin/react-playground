export default function UserInput({ subject }) {
    return (
        <div>
            <label for={subject}>{subject}</label>
            <input id={subject} type="number" />
        </div>
    )
}