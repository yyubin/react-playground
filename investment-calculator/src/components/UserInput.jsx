export default function UserInput({ subject }) {
    return (
        <>
            <label for={subject}>{subject}</label>
            <input id={subject} />
        </>
    )
}