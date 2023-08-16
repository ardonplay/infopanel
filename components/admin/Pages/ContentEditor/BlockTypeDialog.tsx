"use client"
import { Dispatch,  useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select, Option
} from "@material-tailwind/react";
import { block_type } from "@/Interfaces/PageInterfaces";
export default function BlockTypeDialog({confirmAction}:{confirmAction: Dispatch<string>}) {
    const [open, setOpen] = useState(false);

    const [selectedType, setSelectedType] = useState("")

    const handleOpen = () => setOpen(!open);


    return (
        <>
            <button type="button" onClick={handleOpen} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                <p>add block</p>
            </button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Choose block type</DialogHeader>
                <DialogBody divider>
                    <div className="w-72">
                        <Select label="Select type" onChange={(value) => setSelectedType(value ? value : "")}>
                            {
                                Object.values(block_type).filter((block) => block !== block_type.UNDEFINDED).map((block, key) => (<Option key={key + 1} value={block}>{block}</Option>))
                            }
                        </Select>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={() => {
                        handleOpen()
                        confirmAction(selectedType)
                    }}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>

        </>
    );
}