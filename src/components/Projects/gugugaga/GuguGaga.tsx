import { useState } from 'react'
import { Button } from '@/components/ui/button';
import General from "./General"
import TestCases from "./TestCases"
import { useWindowSize } from "@uidotdev/usehooks";
import { useSelectText } from '@/lib/useSelectText';
import { selectGugugagaEN, selectGugugagaUA } from '@/store/reducers/gugugaga'
import type { gugugagaType } from '@/store/reducers/gugugaga';

const GuguGaga = () => {
    const text = useSelectText<gugugagaType>(selectGugugagaEN, selectGugugagaUA)

    const size = useWindowSize()
    const [view, setView] = useState(false)

    return (
        <div className="w-screen min-h-screen p-20 animate-fadeInLeft">
            { size.width && size.width > 1024 && 
            <div className='grid grid-cols-2 gap-20'>
                <TestCases tabs={text.tabs} /> 
                <General about={text.about} howToStart={text.toStartProject} />
            </div>
            }
            
            {/* mobile */}
            {!view && size.width && size.width < 1024 &&
            <div>
                <General about={text.about} howToStart={text.toStartProject} />
                <Button onClick={() => setView(p => !p)} className='mt-5'>{text.seeMore}</Button>
            </div>}

            {view && size.width && size.width < 1024 &&
            <div>
                <Button onClick={() => setView(p => !p)} className='mb-5'>{text.back}</Button>
                <TestCases tabs={text.tabs} /> 
            </div>}
        </div>
    )
}

export default GuguGaga