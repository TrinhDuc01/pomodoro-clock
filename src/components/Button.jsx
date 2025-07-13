const Button = ({ time, name, handleClock }) => {
    return <button
        onClick={handleClock}
        className={`py-1 px-3 hover:bg-[#00000026]
            ${time.name === name ? 'bg-[#00000026]' : ''}
            rounded`}>
        {name}
    </button>
}
export default Button