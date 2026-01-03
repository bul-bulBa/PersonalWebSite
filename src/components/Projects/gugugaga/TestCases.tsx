import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../ui/accordion'

import Authorization from '@/assets/Authorization.mp4'
import Messages from '@/assets/Messages.mp4'
import Posts from '@/assets/Posts.mp4'
import EditProfile from '@/assets/EditProfile.mp4'
import FilterUsers from '@/assets/FilterUsers.mp4'
import Other from '@/assets/Other.mp4'

type propsType = {
    tabs: {
        authorization: string,
        messages: string,
        posts: string,
        edit: string,
        filter: string,
        settings: string
    }
}

const TestCases = ({tabs}: propsType) => {

    return (
        <div className=''>
            <Accordion
                type='single'
                defaultValue='authorize'>
                <AccordionItem value='authorize'>
                    <AccordionTrigger>{tabs.authorization}</AccordionTrigger>
                    <AccordionContent>
                        <video src={Authorization} controls className='video'></video>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='messages'>
                    <AccordionTrigger>{tabs.messages}</AccordionTrigger>
                    <AccordionContent>
                        <video src={Messages} controls className='video'></video>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='posts'>
                    <AccordionTrigger>{tabs.posts}</AccordionTrigger>
                    <AccordionContent>
                        <video src={Posts} controls className='video'></video>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='edit'>
                    <AccordionTrigger>{tabs.edit}</AccordionTrigger>
                    <AccordionContent>
                        <video src={EditProfile} controls className='video'></video>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='filter'>
                    <AccordionTrigger>{tabs.filter}</AccordionTrigger>
                    <AccordionContent>
                        <video src={FilterUsers} controls className='video'></video>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value='other'>
                    <AccordionTrigger>{tabs.settings}</AccordionTrigger>
                    <AccordionContent>
                        <video src={Other} controls className='video'></video>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default TestCases