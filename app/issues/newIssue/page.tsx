"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes"
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from "next/navigation";

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter()
    const { register, control, handleSubmit } = useForm<IssueForm>();

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                await axios.post('/api/issues', data)
                router.push("/issues",)
            })}
            className="max-w-xl space-y-3 px-3">
            <TextField.Root>
                <TextField.Input placeholder="New issue tittle" {...register("title")} />
            </TextField.Root>
            <Controller
                name="description"
                control={control}
                render={({ field }) => <SimpleMDE placeholder="Your description…" {...field} />}
            />

            <Button>Submit new Issue</Button>
        </form>
    )
}

export default NewIssuePage