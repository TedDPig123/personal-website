import BulletList from './BulletList'

interface ExperienceProp {
    position:string;
    text:string[];
    date:string;
    place:string;
}

// Date above the timeline bar, text below. The two halves are always equal height, so the
// stem between them sits on the bar (which Gallery draws at 50%) whatever the text length.
// Desktop pt is 20px more than pb to offset the gallery's pb-5; on phones the gallery's
// padding is symmetric, so the phone padding is too.
export default function GalleryComponents2({position, text, date, place}:ExperienceProp){
    return(
        <>
            <div className='gallery-desktop-2 shrink-0'>
                <div className='h-full w-[400px] mx-10 pt-17 pb-12 grid grid-rows-[1fr_1fr]'>
                    <div className='flex flex-col items-center justify-end'>
                        <div className='font-telegrafbold text-[16px]'>{date}</div>
                        <div className='font-telegraf text-[12px] text-center w-50 mb-2'>{place}</div>
                        <div className='w-[3px] h-8 bg-white'></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <div className='w-[3px] h-8 bg-white'></div>
                        </div>
                        <div className='gallery-text font-helveticaregular border-[3px] text-[12px] p-2 w-[100%]'><BulletList items={text} /></div>
                        <div className='font-telegrafbold text-[16px]'>{position}</div>
                    </div>
                </div>
            </div>

            <div className='gallery-phone-2 shrink-0 hidden'>
                <div className='h-full w-[340px] mx-1 py-8 grid grid-rows-[1fr_1fr]'>
                    <div className='flex flex-col items-center justify-end'>
                        <div className='font-telegrafbold text-[16px]'>{date}</div>
                        <div className='font-telegraf text-[12px] text-center w-50 mb-2'>{place}</div>
                        <div className='w-[3px] h-8 bg-white'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[3px] h-8 bg-white'></div>
                        <div className='gallery-text font-helveticaregular border-[3px] text-[12px] p-2 w-[100%] gallery-text-box mb-2'><BulletList items={text} /></div>
                        <div className='font-telegrafbold text-[16px] text-center'>{position}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
