"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes"

const NewIssuePage = () => {
    return (
        <div className="max-w-xl space-y-3 px-3">
            <TextField.Root>
                <TextField.Input placeholder="New issue tittle" />
            </TextField.Root>
            <SimpleMDE placeholder="Your description…" />
            <Button>Submit new Issue</Button>
        </div>
    )
}

export default NewIssuePage