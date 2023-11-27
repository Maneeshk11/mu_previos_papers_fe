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
            <div className="w-full p-8 flex flex-col gap-y-8 mobile:p-5">
                <div className="flex flex-row gap-x-8 items-center tablet:flex-col tablet:gap-y-2 tablet:items-start">
                    <div className="flex flex-row items-center ">
                        <span className="w-32 mobile:w-24 mobile:text-sm">Subject</span>
                        <select name="subject" id="subject" className="p-2 rounded-md w-60 mobile:w-52 disabled:bg-gray-300 mobile:text-sm"
                            onChange={handleSubjectChange} value={selectedSubject} disabled={selectedSubjectCode !== ""}>
                            {
                                selectedSubjectCode === "" && <option value="selectAny">Select Any</option>
                            }
                            {
                                selectedSubjectCode === "" &&
                                subjects.map((subject: string, index) => {
                                    return <option value={subject} key={index}>{subject}</option>
                                })
                            }
                        </select>
                    </div>
                    <span className="text-gray-500">-- Or --</span>
                    <div className="flex flex-row items-center ">
                        <span className="w-32 mobile:w-24 mobile:text-sm">Subject Code</span>
                        <select name="subject_code" id="subject_code" className="p-2 rounded-md w-60 mobile:w-52 disabled:bg-gray-300 mobile:text-sm"
                            onChange={handleSubjectCodeChange} value={selectedSubjectCode} disabled={selectedSubject !== ""}>
                            {
                                selectedSubject === "" && <option value="selectAny">Select Any</option>
                            }
                            {
                                selectedSubject === "" &&
                                subjectCodes.map((subject: string, index) => {
                                    return <option value={subject} key={index}>{subject}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-4">
                    <button className="w-20 bg-gray-200 px-3 py-2 rounded-xl hover:bg-gray-300"
                        onClick={onClickSearch}>Search</button>
                    <button className="w-20 bg-gray-200 px-3 py-2 rounded-xl hover:bg-gray-300"
                        onClick={onClickClear}>Clear</button>
                </div>

                {
                    papersList && papersList.length > 0 && (
                        <div className="w-full flex flex-row flex-wrap gap-6">
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