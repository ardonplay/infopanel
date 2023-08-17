"use client"
import Header from "./Header"
import ContentEditor from "./ContentEditor"
import { block, page } from "@/Interfaces/PageInterfaces"
import { useState, useReducer } from "react"
import { Type } from "@prisma/client"

export interface PageEditorActions {
    type: string,
    value?: string | Type | block[]
}
export default function PageEditor({ page }: { page: page }) {
    const reducer = (state: page, action: PageEditorActions): page => {
        switch (action.type) {
            case "CHANGE_TITLE": {
                return {...state, title: action.value as string}
            }
            case "CHANGE_TYPE": {
                return {...state, type: action.value as Type}
            }
            case "CHANGE_CONTENT": {
                return {...state, content: action.value as block[]}
            }
            case "UPLOAD": {
                const formData = new FormData();

                formData.append("page", JSON.stringify(state));
            
                fetch("/api/page", {
                  method: "POST",
                  body: formData,
                }).then((response) => {console.log(response.ok)});
            
                return state;
            }
            default:
                return state;
        }
    };

    const [data, dispatch] = useReducer(reducer, page);

    return (

        <div className="w-full">
            <Header data={data} dispatch={dispatch} />
            <div className="text-gray-900 text-xl m-5">
                <p>Title</p>
                <input type="text"
                    className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={data.title}
                    onChange={(e) => dispatch({type: "CHANGE_TITLE", value: e.target.value})}
                />
            </div>
            <div className="text-gray-900 text-xl m-5">
                <p>Content</p>
                <ContentEditor data={data} dispatch={dispatch} />
            </div>
        </div>)
}
