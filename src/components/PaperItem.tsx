import { PaperInfo } from "@/utils/interface"
import { FC } from "react"

interface PaperItemProps {
    paper: PaperInfo
}

const PaperItem:FC<PaperItemProps> = ({paper}) => {

    const PaperAttribute = ({heading, value}:{heading:string, value:string | number}) => {
        return (
            <div className="grid grid-flow-row grid-cols-2">
                <span className="font-semibold">{heading}:</span>
                <span>{value}</span>
            </div>
        )
    }
    return (
        <div className="border border-black p-4 rounded-2xl w-fit">
            <PaperAttribute heading="Subject" value={paper.Subject_name} />
            <PaperAttribute heading="Subject Code" value={paper.Subject_code} />
            <PaperAttribute heading="Semester" value={paper.Semester} />
            <PaperAttribute heading="Exam Type" value={paper.Exam_type} />
            <PaperAttribute heading="Exam Occasion" value={paper.Exam_occasion} />
            <PaperAttribute heading="Exam Year" value={paper.Exam_year} />
            <PaperAttribute heading="Branch" value={paper.Branch} />
        </div>
    )
}

export default PaperItem