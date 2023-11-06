"use client"

import { Button, TextArea, TextField } from "@radix-ui/themes"

const NewIssuePage = () => {
    return (
        <div className="max-w-xl space-y-3 px-3">
            <TextField.Root>
                <TextField.Input placeholder="New issue tittle" />
            </TextField.Root>
            <TextArea placeholder="Your description…" />
            <Button>Submit new Issue</Button>
        </div>
    )
}

export default NewIssuePage