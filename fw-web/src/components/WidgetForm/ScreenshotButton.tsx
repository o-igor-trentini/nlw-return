import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { FC, useState } from 'react';
import { Laoding } from '../Loading';

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton: FC<ScreenshotButtonProps> = (props) => {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

    const handleTakeScreenshot = async () => {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Img = canvas.toDataURL('image/png');

        props.onScreenshotTook(base64Img);

        setIsTakingScreenshot(false);
    };

    if (props.screenshot)
        return (
            <button
                type="button"
                onClick={() => props.onScreenshotTook(null)}
                style={{ backgroundImage: `url(${props.screenshot})` }}
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            >
                <Trash weight="fill" />
            </button>
        );

    return (
        <button
            type="button"
            disabled={isTakingScreenshot}
            onClick={() => handleTakeScreenshot()}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {isTakingScreenshot ? <Laoding /> : <Camera className="w-6 h-6 text-zinc-100 " />}
        </button>
    );
};
