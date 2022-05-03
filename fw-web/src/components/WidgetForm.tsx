import { FC } from 'react';
import { CloseButton } from './CloseButton';

const feedbackTypes = {
    BUG: {},
    IDEA: {},
    OTHER: {},
};

export const WidgetForm: FC = () => {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe o seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full"></div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por{' '}
                <a href="https://github.com/o-igor-trentini" className="underline underline-offset-2">
                    Igor Trentini
                </a>
            </footer>
        </div>
    );
};
