import { Meeting } from "@/app/utils/definitions";
import { formatMeetingTime } from "@/app/utils/functions";
export default function ShiftCalendar({meetings}:{meetings:Meeting[]}) {
    meetings = meetings.sort((a,b)=>a.day.getTime() - b.day.getTime());
    return (
        <section className="bg-green-100 rounded shadow-sm border-1 border-green-500 overflow-hidden">
            <div className="px-5 flex flex-col gap-5">
                <h1 className="text-4xl mt-5 text-center md:text-start">
                    Upcoming meetings
                </h1>
                <div className="bg-green-50 p-4 flex flex-col gap-4 h-[500px] overflow-y-scroll">
                    {meetings.map((meeting)=>{
                        return <MeetingFrame key={meeting.employee} meeting={meeting}/>
                    })}
                </div>
            </div>
        </section>
    );
}

function MeetingFrame({meeting}:{meeting:Meeting}){
    return (
        <div className="bg-white p-3 py-4 rounded shadow-sm border-1 border-green-100 flex flex-row gap-8">
            <h2>{meeting.day.toLocaleDateString()} <span className="ml-3">{formatMeetingTime(meeting.hour,meeting.minute)}</span> </h2>
            <h2 className="text-md">{meeting.employee}</h2>
        </div>
    );
}
