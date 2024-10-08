import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Button } from "./ui/button";


export default function ResumeView({ personalDetails, workDetails, educationDetails }) {

    const resumeRef = useRef()

    const handleDownload = () => {
        const element = resumeRef.current;
        html2pdf()
            .from(element) // Convert the element to PDF
            .save('Resume.pdf'); // Save the PDF with the specified filename
    };

    return (
        <div className='flex flex-col gap-6'>
            <Card ref={resumeRef} className="w-[816px] h-[1056px] mx-auto shadow-lg">
                <CardHeader className="bg-sky-800">
                    <CardTitle className="text-2xl font-bold text-secondary">{personalDetails.name}</CardTitle>
                    <CardDescription className="flex w-full items-center justify-center gap-4 font-semibold text-secondary">
                        <Mail /> {personalDetails.email}
                        <Phone /> {personalDetails.phone}
                        <MapPin /> {personalDetails.address}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col w-full items-center justify-center gap-4">
                    {/* Work Experience Section */}
                    <section className="w-full mt-4">
                        <h2 className="bg-slate-600 text-secondary text-lg font-semibold p-1">
                            Work Experience
                        </h2>
                        <div className="flex flex-col w-full p-4 text-left">
                            {workDetails.length > 0 ? (
                                workDetails.map((item) => {
                                    return (
                                        <div key={item.id} className="mb-4 border-b pb-2">
                                            <h3 className="font-bold">{item.position} at {item.company}</h3>
                                            <p>{item.timeline}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                <p>No Work Experience listed.</p>
                            )}
                        </div>
                    </section>
                    <section className="w-full mt-4">
                        <h2 className="bg-slate-600 text-secondary text-lg font-semibold p-1">
                            Education
                        </h2>
                        <div className="flex flex-col w-full p-4 text-left">
                            {educationDetails.length > 0 ? (
                                educationDetails.map(item => {
                                    return (
                                        <div key={item.id} className="mb-4 border-b pb-2">
                                            <h3 className="font-bold">{item.institute}</h3>
                                            <h4 className="font-semibold">{item.degree}</h4>
                                            <p>{item.timeline}</p>
                                            <p>{item.score}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                <p>No Education listed.</p>
                            )
                            }
                        </div>
                    </section>
                </CardContent>
            </Card>
            <Button onClick={handleDownload}>Download as PDF</Button>
        </div>
    )
}