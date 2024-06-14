'use client';

import { TextField, TextArea, Button} from '@radix-ui/themes';

export default function Page(){
    return(
        <div className="max-w-lg space-y-3">
            <TextField.Root placeholder="Title">
                <TextField.Slot>
                    {/*<MagnifyingGlassIcon height="16" width="16" />*/}
                </TextField.Slot>
            </TextField.Root>

            <TextArea placeholder="Description" />
            <Button>Submit New Issue</Button>
        </div>
    );
}