"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Callout, TextField, Text } from "@radix-ui/themes"
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from 'zod';
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
    const router = useRouter()
    const [error, setError] = useState("")
    const [isSubmitting, setSubmitting] = useState(false)
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });

    const Submit = async (data: IssueForm) => {
        try {
            setSubmitting(true)
            await axios.post('/api/issues', data);
            router.push("/issues");
            setSubmitting(false)
        } catch (error: any) {
            setSubmitting(false)
            if (error.response) {
                if (error.response.data && Array.isArray(error.response.data)) {
                    const errorMessages = error.response.data.map((errorItem: { message: any; }) => errorItem.message).join(', ');
                    setError(errorMessages);
                    console.log(errorMessages);
                } else {
                    setError("Title name already exist in database!!!");
                    console.log("No error message in the response data");
                }
            }

        }
    }


    return (
        <div className="max-w-xl space-y-3 px-3">
            {error && (
                <Callout.Root color="red">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form
                onSubmit={handleSubmit(Submit)}
                className="space-y-3 ">
                <TextField.Root>
                    <TextField.Input placeholder="New issue tittle" {...register("title")} />
                </TextField.Root>
                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder="Your description…" {...field} />}
                />

                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>

                <Button disabled={isSubmitting}>Submit new Issue {isSubmitting && <Spinner />}</Button>
            </form>
        </div>
    )
}

export default NewIssuePage