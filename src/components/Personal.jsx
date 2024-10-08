import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { User } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Personal({personalDetails, setPersonalDetails}) {
    return (
        <Card>
            <CardHeader> 
                <CardTitle>
                    <div className="flex w-full items-center justify-center gap-4">
                    <User />
                    Personal
                    </div> 
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4 text-left">
                    {Object.keys(personalDetails).map(key => {
                        return  (
                        <div key={key} className="flex flex-col space-y-1.5">
                            <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                            <Input id={key} value={personalDetails[key]} onChange={(e) => {setPersonalDetails({...personalDetails, [key]: e.target.value})} }/>
                        </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}