"use client";
import { Select } from "@radix-ui/themes";
const EditIssue = () => {
    return (
        <div className="w-[25%] flex  flex-col space-y-4">
            <Select.Root >
                <Select.Trigger placeholder="Assign..." />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Suggestions</Select.Label>
                        <Select.Item value="1">Kenya</Select.Item>
                        <Select.Item value="2">Brazil</Select.Item>
                        <Select.Item value="2">Congo</Select.Item>

                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <div className="flex flex-col space-y-2 w-[100%]">

                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
        </div>
    )
}

export default EditIssue