import { generateS3Client } from "@/features/App/cloudfare.config"
import { PaperInfo } from "@/utils/interface"
import { GetObjectCommand } from "@aws-sdk/client-s3"
import { FC } from "react"

interface PaperItemProps {
    paper: PaperInfo
}

const PaperItem: FC<PaperItemProps> = ({ paper }) => {

    const downloadFile = async (e: any) => {
        const client = generateS3Client()
        const command = new GetObjectCommand({
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
            Key: paper.File_path,
        });
        try {
            const response = await client.send(command);
            const arr = await response.Body?.transformToByteArray();
            const blob = new Blob([new Uint8Array(arr as any)], { type: "application/pdf" });

            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = paper.File_path as string;

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (err) {
            console.error(err);
        }
    }

    const PaperAttribute = ({ heading, value }: { heading: string, value: string | number }) => {
        return (
            <div className="grid grid-flow-row grid-cols-2">
                <span className="font-semibold">{heading}:</span>
                <span>{value}</span>
            </div>
        )
    }
    return (
        <div className="border border-black p-4 rounded-2xl w-[35rem] mobile:w-full">
            <div className="text-sm">
                <PaperAttribute heading="Subject" value={paper.Subject_name} />
                <PaperAttribute heading="Subject Code" value={paper.Subject_code} />
                <PaperAttribute heading="Semester" value={paper.Semester} />
                <PaperAttribute heading="Exam Type" value={paper.Exam_type} />
                <PaperAttribute heading="Exam Occasion" value={paper.Exam_occasion} />
                <PaperAttribute heading="Exam Year" value={paper.Exam_year} />
                <PaperAttribute heading="Branch" value={paper.Branch} />
            </div>
            <div className="w-full text-end">
                <span className="cursor-pointer hover:text-blue-700 underline font-semibold"
                    onClick={downloadFile}>view</span>
            </div>
        </div>
    )
}

export default PaperItem