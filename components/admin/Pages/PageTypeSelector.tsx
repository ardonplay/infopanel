"use client";
import React, { useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Type } from "@prisma/client";

export default function PageTypeSelector() {
    const [types] = useState(Object.values(Type).map((type, id) => ({id: id + 1, name: type})));
    const [pageType, setPageType] = useState(types[0].name);
    return (
        <Menu placement="bottom">
            <MenuHandler >
                <Button className="bg-gray-800 mr-3 w-36">{pageType}</Button>
            </MenuHandler>
            <MenuList className=" bg-gray-200 w-36 space-y-4 p-2">
                {
                    types.map((page_type) => page_type.name === pageType ? undefined : <MenuItem className="text-left px-5 py-3 bg-lime-600" key={page_type.id} onClick={() => (setPageType(page_type.name))}>{page_type.name}</MenuItem>)
                }
            </MenuList>
        </Menu>

    );
};
