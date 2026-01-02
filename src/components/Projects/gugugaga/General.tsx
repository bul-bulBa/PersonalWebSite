import bullshit from '../../../assets/bullshit.mp4'

const General = () => {

    return (
        <div className='flex flex-col gap-5 text-lg'>
            <div>
                Social network with a post feed and 1-to-1 messaging
            </div>
            <div>
                If you want to look this project, you must clone repo "gugu-gaga" and switch to dev branch.
                Also to start the project, you must have redis and node.js
            </div>
            <video src={bullshit} controls></video>
        </div>
    )
}

export default General