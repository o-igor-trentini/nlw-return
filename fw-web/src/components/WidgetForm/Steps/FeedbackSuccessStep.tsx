import { FC } from 'react';
import { CloseButton } from '../../CloseButton';

import successImg from '../../../images/success.svg';

interface FeedbackSuccessStepProps {
    onFeedbackRestart: () => void;
}
export const FeedbackSuccessStep: FC<FeedbackSuccessStepProps> = (props) => {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImg} alt="Imagem de sucesso" />

                <span className="text-xl mt-2">Agredemos pelo feedback!</span>

                <button
                    onClick={() => props.onFeedbackRestart()}
                    className="py-2 px-6 mt-6 bg-zinc-600 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    );
};
