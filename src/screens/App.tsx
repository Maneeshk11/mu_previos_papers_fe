import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { GetPapersInfo, GetSubjects } from "@/utils/api"
import PaperItem from "@/components/PaperItem"
import { PaperInfo } from "@/utils/interface"


const App = () => {

    const [subjects, setSubjects] = useState<string[]>([])
    const [subjectCodes, setSubjectCodes] = useState<string[]>([])

    const [selectedSubject, setSelectedSubject] = useState<string>("")
    const [selectedSubjectCode, setSelectedSubjectCode] = useState<string>("")

    const [papersList, setPapersList] = useState<PaperInfo[]>([])

    useEffect(() => {
        (async () => {
            const data = await GetSubjects()
            setSubjects(data.subjects)
            setSubjectCodes(data.subjectCodes)
        })()
    }, [])

    const handleSubjectChange = (event: any) => {
        const selectedValue = event.target.value;
        setSelectedSubject(selectedValue);
    };

    const handleSubjectCodeChange = (event: any) => {
        const selectedValue = event.target.value;
        setSelectedSubjectCode(selectedValue);
    };

    const onClickSearch = async () => {
        const list_paper = await GetPapersInfo(selectedSubject, selectedSubjectCode)
        setPapersList(list_paper)
    }

    const onClickClear = () => {
        setSelectedSubject("")
        setSelectedSubjectCode("")
        setPapersList([])
    }

    return (
        <div className="w-screen">
            <Navbar />
            <div className="p-8 flex flex-col gap-y-8">
                <div className="flex flex-row gap-x-2 items-center">
                    <label htmlFor="" className="w-20">Semester</label>
                    <select name="semester" id="semester" className="p-2 rounded-md">
                        <option value="1">I</option>
                        <option value="2">II</option>
                        <option value="3">III</option>
                        <option value="4">IV</option>
                        <option value="5">V</option>
                        <option value="6">VI</option>
                        <option value="7">VII</option>
                        <option value="8">VIII</option>
                    </select>
                </div>
                <div className="flex flex-row gap-x-8 items-center">
                    <>
                        <label htmlFor="" className="w-14">Subject</label>
                        <select name="subject" id="subject" className="p-2 rounded-md w-60"
                            onChange={handleSubjectChange} value={selectedSubject}>
                            <option value="selectAny">Select Any</option>
                            {
                                subjects.map((subject: string, index) => {
                                    return <option value={subject} key={index}>{subject}</option>
                                })
                            }
                        </select>
                    </>
                    <span className="text-gray-500">-- Or --</span>
                    <>
                        <label htmlFor="" className="w-24">Subject Code</label>
                        <select name="subject_code" id="subject_code" className="p-2 rounded-md w-60"
                            onChange={handleSubjectCodeChange} value={selectedSubjectCode}>
                            <option value="selectAny">Select Any</option>
                            {
                                subjectCodes.map((subject: string, index) => {
                                    return <option value={subject} key={index}>{subject}</option>
                                })
                            }
                        </select>
                    </>
                </div>
                <div className="flex flex-row items-center gap-x-4">
                    <button className="w-20 bg-gray-200 px-3 py-2 rounded-xl hover:bg-gray-300"
                        onClick={onClickSearch}>Search</button>
                    <button className="w-20 bg-gray-200 px-3 py-2 rounded-xl hover:bg-gray-300"
                        onClick={onClickClear}>Clear</button>
                </div>

                {
                    papersList && papersList.length > 0 && (
                        <div className="w-full flex flex-row gap-x-6 flex-wrap">
                            {
                                papersList.map((paper: PaperInfo, index: number) => {
                                    return <PaperItem paper={paper} key={index} />
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App