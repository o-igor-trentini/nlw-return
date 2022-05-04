import { FC, useState } from 'react';

import bugImg from '../../images/bug.svg';
import ideaImg from '../../images/idea.svg';
import thoughtImg from '../../images/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImg,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImg,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImg,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm: FC = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

    const handleRestartFeedback = () => {
        setFeedbackType(null);
        setFeedbackSent(false);
    };

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestart={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito por{' '}
                <a
                    href="https://www.linkedin.com/in/igor-trentini-4b1038218/"
                    target="_blank"
                    className="underline underline-offset-2"
                >
                    Igor Trentini
                </a>
            </footer>
        </div>
    );
};
