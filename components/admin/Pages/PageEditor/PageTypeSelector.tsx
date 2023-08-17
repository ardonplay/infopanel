"use client";
import React, { Dispatch, useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Type } from "@prisma/client";
import { page } from "@/Interfaces/PageInterfaces";
import { PageEditorActions } from ".";

export default function PageTypeSelector({data, dispatch} : {data: page, dispatch: Dispatch<PageEditorActions>}) {

    const [types] = useState(Object.values(Type).map((type, id) => ({id: id + 1, name: type})));
    return (
        <Menu placement="bottom">
            <MenuHandler >
                <Button className="bg-gray-800 mr-3 w-36">{data.type}</Button>
            </MenuHandler>
            <MenuList className=" bg-gray-200 w-36 space-y-4 p-2">
                {
                    types.map((page_type) => page_type.name === data.type ? undefined : <MenuItem className="text-left px-5 py-3 bg-lime-600" key={page_type.id}
                    onClick={() => dispatch({type: "CHANGE_TYPE", value: page_type.name as Type})}>{page_type.name}</MenuItem>)
                }
            </MenuList>
        </Menu>

    );
};
