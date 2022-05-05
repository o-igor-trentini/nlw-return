import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepositories } from '../feedbacks-repository';

export class PrismaFeedbackRepository implements FeedbacksRepositories {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                fe_type: type,
                fe_comment: comment,
                fe_screenshot: screenshot,
            },
        });
    }
}
