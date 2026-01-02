import bullshit from '../../../assets/bullshit.mp4'

const General = () => {

    return (
        <div className='flex flex-col gap-5 text-lg'>
            <div>
                Admin dashboard for managing employees: add workers, remove, assign bonuses, and filter them
            </div>
            <div>
                If you want to look this project, you must clone repo "theme6".
                Also to start the project, you must have node.js
            </div>
            <video src={bullshit} controls></video>
        </div>
    )
}


export default General