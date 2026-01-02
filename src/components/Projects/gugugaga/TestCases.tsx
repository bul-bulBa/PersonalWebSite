import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion'
import gugugaga from '../../../assets/gugu-gagaScreen.png'

const TestCases = () => {

    return (
        <div>
            <Accordion
            type='single'
            defaultValue='authorize'>
                <AccordionItem value='authorize'>
                    <AccordionTrigger>Authrorization</AccordionTrigger>
                    <AccordionContent>
                        <div>default authorization</div>
                        <div>
                            <img src={gugugaga} alt="" />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default TestCases