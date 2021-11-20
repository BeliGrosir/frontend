import TextField from '../../components/TextField'

export default function Home() {
    return (
        <TextField
            label={"Username"}
            placeholder={"Type your username"}
            required={true}
        />
    )
}