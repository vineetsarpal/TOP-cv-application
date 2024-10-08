import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GraduationCap } from 'lucide-react';

export default function Education({ educationDetails, setEducationDetails }) {

    const handleChange = (id, field, e) => {
        const updatedEducationDetails = educationDetails.map(item => {
            return item.id === id ? { ...item, [field]: e.target.value } : item
        })
        setEducationDetails(updatedEducationDetails)
    }

    const handleDelete = (id) => {
        const updatedEducationDetails = educationDetails.filter((item) => item.id !== id)
        setEducationDetails(updatedEducationDetails)
    }

    const handleAdd = () => {
        const newEducationDetail = {
            id: crypto.randomUUID(),
            institute: 'New Institute',
            degree: '',
            timeline: '',
            score: ''
        }
        setEducationDetails([...educationDetails, newEducationDetail])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex w-full items-center justify-center gap-4">
                        <GraduationCap />
                        Education
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {educationDetails.map(item => {
                    return (
                        <div key={item.id} className="flex w-full items-center gap-4 text-left">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={item.id}>
                                    <AccordionTrigger>{item.institute}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="institute">Institute</Label>
                                            <Input
                                                id="institute"
                                                value={item.institute}
                                                onChange={(e) => handleChange(item.id, 'institute', e)}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="degree">Degree</Label>
                                            <Input
                                                id="degree"
                                                value={item.degree}
                                                onChange={(e) => handleChange(item.id, 'degree', e)}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="timeline">Timeline</Label>
                                            <Input
                                                id="timeline"
                                                value={item.timeline}
                                                onChange={(e) => handleChange(item.id, 'timeline', e)}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="score">Score</Label>
                                            <Input
                                                id="score"
                                                value={item.score}
                                                onChange={(e) => handleChange(item.id, 'score', e)}
                                            />
                                        </div>
                                        <Button variant="destructive" onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    )
                })}
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-center justify-center gap-4">
                    <Button onClick={() => handleAdd()}>Add Education</Button>
                </div>
            </CardFooter>
        </Card>
    )
}