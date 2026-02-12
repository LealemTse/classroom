import React, {useState} from 'react'
import {ListView} from "@/components/refine-ui/views/list-view.tsx";
import {Breadcrumb} from "@/components/refine-ui/layout/breadcrumb.tsx";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

const SubjectsList = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('all')
    return (
        <ListView>
            <Breadcrumb/>

            <h1 className="page-title">Subject</h1>
            <div className="intro-row">
                <p>Quick access to essential metrics and management tools</p>
                <div className="action-row">
                    <div className="search-field">
                        <Search className="search-icon"/>
                        <Input
                        type="text"
                        placeholder="Search By Name"
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e)=> setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Select
                            value={selectedDepartment}
                            onValueChange={setSelectedDepartment}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Fileter by Depatment"/>
                            </SelectTrigger>
                        </Select>

                    </div>
                </div>
            </div>
        </ListView>
    )
}
export default SubjectsList
