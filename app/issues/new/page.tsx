'use client';

import {Button, Callout, TextField} from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from 'react-hook-form';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import {useState} from "react";

interface IssueForm {
    title: string;
    description: string;
}

export default function Page() {
    const router = useRouter();
    const {
        register, control
        , handleSubmit
    } = useForm<IssueForm>();
    const [error, setError] = useState('');

    return (
        <div className="max-w-lg">
            {error &&
                <Callout.Root color="red" className="mb-5">
                    <Callout.Icon>
                    </Callout.Icon>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>}

            <form className="space-y-3" onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post("/api/issues", data);
                    router.push('/issues');
                } catch (error) {
                    setError('An unexpected error occured.');
                }
            })}>
                <TextField.Root placeholder="Title" {...register('title')}/>
                <Controller
                    name="description"
                    control={control}
                    render={({field}) => <SimpleMDE {...field} placeholder="Description"/>}
                />
                <Button>Submit New Issue</Button>
            </form>
        </div>

    );
}