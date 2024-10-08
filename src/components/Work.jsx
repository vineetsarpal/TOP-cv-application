import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Briefcase } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "./ui/textarea";

export default function Work({ workDetails, setWorkDetails }) {

    const handleChange = (id, field, e) => {
        const updatedWorkDetails = workDetails.map(item => {
            return item.id === id ? { ...item, [field]: e.target.value } : item
        })
        setWorkDetails(updatedWorkDetails)
    }

    const handleDelete = (id) => {
        const updatedWorkDetails = workDetails.filter((item) => item.id !== id)
        setWorkDetails(updatedWorkDetails)
    }

    const handleAdd = () => {
        const newWorkDetail = {
            id: crypto.randomUUID(),
            company: 'New Company',
            position: '',
            timeline: '',
            description: ''
        }
        setWorkDetails([...workDetails, newWorkDetail])
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex w-full items-center justify-center gap-4">
                        <Briefcase />
                        Work Experience
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {workDetails.map(item => {
                    return (
                        <div key={item.id} className="flex w-full items-center gap-4 text-left">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={item.id}>
                                    <AccordionTrigger>{item.company}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                value={item.company}
                                                onChange={(e) => handleChange(item.id, 'company', e)}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="position">Position</Label>
                                            <Input
                                                id="position"
                                                value={item.position}
                                                onChange={(e) => handleChange(item.id, 'position', e)}
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
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                value={item.description}
                                                onChange={(e) => handleChange(item.id, 'description', e)}
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
                    <Button onClick={() => handleAdd()}>Add Experience</Button>
                </div>
            </CardFooter>
        </Card>
    )
}